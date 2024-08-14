
# ReachInbox Assignment

This assignment involves building a functional web app based on the provided designs and APIs. The app will include features like user authentication, data fetching, keyboard shortcuts, a custom text editor, and both light and dark modes.


## Features

### 1. 🔐 **Login Page**
- **Design**: Use the provided design to implement the login page.
- **Redirection**: Upon successful login, redirect the user to the "Onebox" screen.

### 2. 📜 **Onebox Screen**
- **API Integrations**:
  - **GET** `/onebox/list`: Fetch the list of threads.
  - **GET** `/onebox/:thread_id`: Fetch details for a specific thread.
  - **DELETE** `/onebox/:thread_id`: Delete a specific thread.

### 3. ⌨️ **Keyboard Shortcuts**
- **Press "D"**: Delete a thread.
- **Press "R"**: Open the reply box.

### 4. 📝 **Custom Text Editor**
- **Custom Buttons**:
  - **"SAVE"**: Save the current content.
  - **"Variables"**: Insert variables into the content.

### 5. 💬 **Reply Functionality**
- **Endpoint**: Use the `POST /reply/:thread_id` endpoint to send a reply.
- **Payload**: Include the sender, recipient, subject, and body in HTML format.

### 6. 🌗 **Light and Dark Mode**
- **Mode Switching**: Implement both light and dark modes for the entire web app.
## Installation

Clone the Repository:

```bash
git clone https://github.com/omidhokate2002/assignment-associate-frontend-engineer
```

Install my-project with npm

```bash
npm install
```

Run the Development Server:

```bash
npm run dev
```

The app will be accessible at http://localhost:5173
## API Reference

- **API Documentation**: [API Details](https://documenter.getpostman.com/view/30630244/2sA2rCTMKr#433eb613-e405-4239-9e2d-f20485b31b27)
- **Design File**: [Figma Design](https://www.figma.com/file/uECxqvFhEx9dn4ZuO7wqmu/Reachinbox-Assignment?type=design&node-id=0-1&mode=design)



