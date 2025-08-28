#!/usr/bin/env python3

import os
import re
import yaml
import sys


# ============================
# Get Theme Path from User
# ============================
def get_custom_theme_path():
    """Get the theme path from CLI arg or default."""
    default_path = "./themes/custom/"
    if len(sys.argv) > 1:
        custom_path = sys.argv[1].strip()
    else:
        custom_path = default_path

    if not custom_path.endswith("/"):
        custom_path += "/"

    if not os.path.exists(custom_path):
        print(f"❗ Error: Path '{custom_path}' does not exist.")
        exit(1)

    return custom_path
    """Get the theme path from user input."""
    default_path = "./themes/custom/"
    custom_path = input(f"Enter the path to your custom theme folder (default: {default_path}): ").strip()
    if not custom_path:
        custom_path = default_path

    # Ensure the path ends with a trailing slash
    if not custom_path.endswith("/"):
        custom_path += "/"

    if not os.path.exists(custom_path):
        print(f"❗ Error: Path '{custom_path}' does not exist.")
        exit(1)

    return custom_path


# ============================
# Check 1: Libraries.yml (Async/Defer)
# ============================
def scan_libraries_yml(custom_theme_path):
    """Check if async or defer is missing in libraries.yml inside themes/custom/."""
    warnings = []

    for root, _, files in os.walk(custom_theme_path):
        for file in files:
            if file.endswith("libraries.yml"):
                file_path = os.path.join(root, file)

                with open(file_path, "r", encoding="utf-8") as f:
                    try:
                        data = yaml.safe_load(f)
                        if data:
                            for library, details in data.items():
                                if "js" in details:
                                    for js_file, attributes in details["js"].items():
                                        if isinstance(attributes, dict):
                                            js_attrs = attributes.get("attributes", {})
                                            if "async" not in js_attrs and "defer" not in js_attrs:
                                                warnings.append(
                                                    f"⚠️ [YML] {file_path}\n   - JavaScript file `{js_file}` is missing `async` or `defer` attributes."
                                                )
                                        else:
                                            warnings.append(
                                                f"⚠️ [YML] {file_path}\n   - JavaScript file `{js_file}` is missing `async` or `defer` attributes."
                                            )
                    except yaml.YAMLError as e:
                        warnings.append(
                            f"❗ Error parsing YAML file {file_path}: {e}"
                        )

    return warnings


# ============================
# Check 2: Non-Optimized Images (CSS & Twig)
# ============================
def check_image_formats(custom_theme_path):
    """Check if background images in CSS or <img> in Twig use non-WebP formats, ignoring .svg, fonts, and fragments."""
    warnings = []
    img_pattern = re.compile(r'url\(["\']?([^"\'\)]+)["\']?\)')
    twig_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']')

    # Pattern to detect Twig variables like {{ site_logo }}
    twig_variable_pattern = re.compile(r'{{\s*([^}]+)\s*}}')

    # Allowed image extensions to check if variable contains an image path
    allowed_img_extensions = (".png", ".jpg", ".jpeg", ".gif")

    for root, _, files in os.walk(custom_theme_path):
        # Skip node_modules, libraries, and fonts folders
        if any(skip_folder in root for skip_folder in ["node_modules", "libraries", "fonts"]):
            continue

        for file in files:
            # Check CSS files for background images
            if file.endswith(".css"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = img_pattern.findall(content)
                    for img_url in matches:
                        # Skip Google Fonts, font files, .svg files, and fragments
                        if (
                            img_url.startswith("https://fonts.googleapis.com")
                            or any(
                                img_url.endswith(ext) or f"{ext}?" in img_url or f"{ext}#" in img_url
                                for ext in [".svg", ".eot", ".woff", ".woff2", ".ttf", ".otf"]
                            )
                            or "fonts/" in img_url  # Skip any font files in the fonts directory
                            or "%23" in img_url  # Ignore URL-encoded SVG fragments (# encoded as %23)
                        ):
                            continue
                        if not img_url.endswith(".webp"):
                            warnings.append(
                                f"⚠️ [CSS] {file_path}\n   - Non-optimized image found: `{img_url}`. Consider using WebP for better performance."
                            )

            # Check Twig templates for <img> tags
            elif file.endswith(".twig"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = twig_pattern.findall(content)
                    for img_url in matches:
                        # Ignore font files, .svg files, and fragments
                        if (
                            any(
                                img_url.endswith(ext) or f"{ext}?" in img_url or f"{ext}#" in img_url
                                for ext in [".svg", ".eot", ".woff", ".woff2", ".ttf", ".otf"]
                            )
                            or "fonts/" in img_url
                            or "%23" in img_url
                        ):
                            continue
                        # Skip Twig variables unless they have an allowed image extension
                        if twig_variable_pattern.match(img_url) and not img_url.endswith(allowed_img_extensions):
                            continue
                        if not img_url.endswith(".webp"):
                            warnings.append(
                                f"⚠️ [Twig] {file_path}\n   - Non-optimized image found: `{img_url}`. Consider using WebP for better performance."
                            )

    return warnings


# ============================
# Check 3: Inline CSS/JS in Twig
# ============================
def check_inline_styles_scripts(custom_theme_path):
    """Check for excessive inline CSS/JS in Twig templates."""
    warnings = []
    inline_css_pattern = re.compile(r'<style[^>]*>.*?</style>', re.DOTALL)
    inline_js_pattern = re.compile(r'<script[^>]*>.*?</script>', re.DOTALL)

    for root, _, files in os.walk(custom_theme_path):
        for file in files:
            if file.endswith(".twig"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    if inline_css_pattern.search(content):
                        warnings.append(
                            f"⚠️ [Twig] {file_path}\n   - Inline <style> detected. Avoid using inline styles for maintainability."
                        )
                    if inline_js_pattern.search(content):
                        warnings.append(
                            f"⚠️ [Twig] {file_path}\n   - Inline <script> detected. Consider moving JavaScript to external files."
                        )

    return warnings

# ============================
# Check 4: Large Images in CSS/Twig
# ============================
def check_large_images(custom_theme_path):
    """Check if any images referenced in CSS or Twig are larger than 500 KB."""
    warnings = []
    img_pattern = re.compile(r'url\(["\']?([^"\'\)]+)["\']?\)')
    twig_pattern = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']')

    ignore_formats = [".svg", ".eot", ".woff", ".woff2", ".ttf", ".otf"]

    for root, _, files in os.walk(custom_theme_path):
        for file in files:
            if file.endswith(".css") or file.endswith(".twig"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = img_pattern.findall(content) + twig_pattern.findall(content)

                    for img_url in matches:
                        if any(
                            img_url.endswith(ext) or f"{ext}?" in img_url or f"{ext}#" in img_url
                            for ext in ignore_formats
                        ):
                            continue

                        img_path = os.path.join(root, img_url)
                        if os.path.exists(img_path):
                            size_kb = os.path.getsize(img_path) / 1024
                            if size_kb > 500:
                                warnings.append(
                                    f"⚠️ [Image] {file_path}\n   - `{img_url}` is larger than 500 KB ({size_kb:.2f} KB). Optimize it for better performance."
                                )

    return warnings


# ============================
# Check 5: Missing Async/Defer in <script>
# ============================
def check_inline_script_attributes(custom_theme_path):
    """Check for missing async or defer attributes in inline <script> tags."""
    warnings = []
    script_pattern = re.compile(r'<script[^>]*(?<!async|defer)[^>]*>')

    for root, _, files in os.walk(custom_theme_path):
        for file in files:
            if file.endswith(".twig"):
                file_path = os.path.join(root, file)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    matches = script_pattern.findall(content)
                    if matches:
                        warnings.append(
                            f"⚠️ [Twig] {file_path}\n   - Some <script> tags are missing `async` or `defer` attributes. Add them for better page load performance."
                        )

    return warnings


# ============================
# Run All Checks and Group Warnings
# ============================
def main():
    """Run all checks before committing or in pipeline and group warnings by category."""
    custom_theme_path = get_custom_theme_path()

    # Dictionary to group warnings by check with unique icons
    grouped_warnings = {
        "Libraries.yml (Async/Defer)": {
            "warnings": scan_libraries_yml(custom_theme_path),
            "icon": "📚",
        },
        "Non-Optimized Images (CSS & Twig)": {
            "warnings": check_image_formats(custom_theme_path),
            "icon": "🖼️ ",
        },
        "Inline CSS/JS in Twig": {
            "warnings": check_inline_styles_scripts(custom_theme_path),
            "icon": "🎨",
        },
        "Large Images in CSS/Twig": {
            "warnings": check_large_images(custom_theme_path),
            "icon": "📦",
        },
        "Missing Async/Defer in <script>": {
            "warnings": check_inline_script_attributes(custom_theme_path),
            "icon": "⚡",
        },
    }

    has_warnings = False
    summary_counts = {}

    # Print grouped warnings with details
    for check_name, check_info in grouped_warnings.items():
        warnings = check_info["warnings"]
        icon = check_info["icon"]
        count = len(warnings)
        summary_counts[check_name] = (icon, count)

        if warnings:
            has_warnings = True
            print(f"\n{icon} {check_name} Warnings ({count}):\n")
            for warning in warnings:
                print(f"{warning}\n")

    # Print summary as table
    print("\n========================")
    print("📊 Scan Summary")
    print("========================")

    # Table header
    print(f"{'Category':40}| {'Count'}")
    print("-" * 50)

    total = 0
    for check_name, (icon, count) in summary_counts.items():
        total += count
        print(f"{icon} {check_name:36} | {count}")

    print("-" * 50)
    print(f"{'Total':40} | {total}")

    if not has_warnings:
        print("\n✅ All checks passed. Proceeding with commit or build.")
    else:
        print(f"\n⚠️ Total warnings: {total}")


if __name__ == "__main__":
    main()

