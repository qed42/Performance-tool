FROM python:3.11-slim

# Install dependencies
RUN pip install pyyaml

# Copy your script
COPY performance-tool.py /performance-tool.py

# Run the script (the theme path will come from args)
ENTRYPOINT ["python", "/performance-tool.py"]
