# Performance-tool

## Overview
The `performance-tool.py` script is designed to analyze and improve the performance of custom themes in web projects. It performs various checks to identify potential issues in theme files, such as missing attributes, non-optimized images, and inline styles/scripts.

## Features
The tool performs the following checks:
1. **Libraries.yml (Async/Defer)**: Ensures JavaScript files in `libraries.yml` have `async` or `defer` attributes.
2. **Non-Optimized Images (CSS & Twig)**: Detects non-WebP image formats in CSS and Twig files.
3. **Inline CSS/JS in Twig**: Flags excessive inline `<style>` and `<script>` tags in Twig templates.
4. **Missing Alt Attributes**: Identifies `<img>` tags in Twig files that are missing `alt` attributes for accessibility.
5. **Large Images in CSS/Twig**: Checks for images larger than 500 KB in CSS and Twig files.
6. **Missing Async/Defer in `<script>`**: Ensures inline `<script>` tags in Twig files have `async` or `defer` attributes.

## Requirements
- Python 3.x
- Dependencies listed in `requirements.txt`:
  - `PyYAML`

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

## Usage
1. Run the script with the following command:
   ```sh
   python3 performance-tool.py <path-to-theme-directory>
   ```
2. Replace `<path-to-theme-directory>` with the path to the theme folder you want to analyze.
3. Review the output for identified issues and recommendations.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch:
   ```sh
   git commit -am "Add new feature"
   git push origin feature-name
   ```
4. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
