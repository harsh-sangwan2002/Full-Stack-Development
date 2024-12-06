# LinkedIn Connection Automation Script

This script automates the process of scrolling through the LinkedIn "My Network" page, clicking the "Connect" buttons for users, and sending connection requests until a specified number of connections are made. It uses [Puppeteer](https://pptr.dev/), a Node library, to control a headless Chrome browser.

## Features

- Scrolls through the LinkedIn "My Network" page.
- Clicks "Connect" buttons to send connection requests.
- Continues scrolling and clicking until 200 connections are made (customizable).
- Mimics human-like interactions to avoid detection (e.g., optional delays between button clicks).

## Requirements

Before running the script, ensure that you have the following prerequisites:

- **Node.js** (version 14 or higher) installed.
- **Puppeteer** library (automatically installed via npm).

## Installation

1. **Clone the repository** (if applicable):
```bash
git clone https://github.com/your-username/linkedIn-connection-automation.git
cd linkedIn-connection-automation
```

2. Install dependencies: Run the following command to install the necessary Node.js packages:
```bash
npm install
```

3.Set up LinkedIn credentials (if required):
Add your LinkedIn login credentials to the script. You can automate logging in by using page.type to fill in the email and password fields, or manually log in.

## Troubleshooting
- **LinkedIn Rate Limiting**: LinkedIn may limit the number of connection requests you can send in a day. Be mindful of LinkedIn’s terms of service and use this script responsibly.

- **Captcha or Login Issues**: If LinkedIn detects unusual activity, it may prompt for a captcha or ask for additional authentication. Ensure you log in manually if this happens or integrate login automation with Puppeteer.

- **Error Handling**: The script contains error handling for when a button is clicked unsuccessfully, but some buttons may fail due to page changes, visibility issues, etc.