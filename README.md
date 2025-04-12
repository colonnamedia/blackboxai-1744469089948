
Built by https://www.blackbox.ai

---

```markdown
# Lead Generation App

## Project Overview
The **Lead Generation App** is a modern web application designed to help businesses capture high-quality leads effortlessly. The application features a user-friendly interface and is built using **HTML**, **CSS** (with Tailwind CSS for styling), and a **Node.js** backend powered by the Express framework. Users can fill out a lead generation form, and their information is stored in a JSON file.

## Installation

To install and run this application locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lead-generation-app.git
   cd lead-generation-app
   ```

2. **Install dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Start the server**:
   You can start the server using:
   ```bash
   npm start
   ```
   Alternatively, you can use Nodemon for development mode:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open your web browser and go to `http://localhost:8000`.

## Usage

- Navigate to the homepage to view the lead generation form.
- Fill in the required fields such as **Full Name**, **Email Address**, and **Company Name**.
- Upon submission, you will be redirected to a thank you page confirming your lead was captured.

## Features

- User-friendly interface for capturing leads.
- Responsive design, optimized for both desktop and mobile users.
- Immediate feedback upon form submission via a thank you page.
- Form data is saved in a JSON file for easy access and retrieval.

## Dependencies

This project relies on the following npm packages:

- **express**: ^4.18.2
- **nodemon** (dev): ^2.0.22

You can find more details in the `package.json` file located in the root of the project.

## Project Structure

The project is structured as follows:

```
lead-generation-app/
├── about.html           # About page with information about the application
├── index.html           # Homepage with lead generation form
├── leads.json           # JSON file for storing lead data
├── server.js            # Node.js server for handling requests
├── thankyou.html        # Thank you page displayed after form submission
└── package.json         # Package manifest with dependencies and scripts
```

### Additional Files

- **package-lock.json**: Locks the versions of installed packages.
- **node_modules/**: Contains all the project dependencies.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to contribute or request features to improve this application.
```