# Areykal Ho's Portfolio Website

## Overview

This repository contains the source code for Areykal Ho's personal portfolio website. It's a modern, responsive web application built with React, showcasing skills, projects, and providing a means of contact.

## Features

- Responsive design that works on desktop and mobile
- Dark mode using a grey and blue color scheme
- Sections for About Me, Projects, and Contact
- Dynamic project showcase with modal details
- Contact form with React Email integration
- Scroll-to-top functionality
- Social media links

## Technologies Used

- React
- React Router for navigation
- Tailwind CSS for styling
- React Email for contact form submissions
- FontAwesome for icons
- Intersection Observer API for scroll detection

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   REACT_APP_EMAIL_USER=your-email@example.com
   REACT_APP_EMAIL_PASS=your-email-password
   ```
   Replace the values with your actual email credentials.

## Usage

To run the development server:

```
npm start
```

The website will be available at `http://localhost:3000`.

To build the project for production:

```
npm run build
```

## Deployment

This project can be deployed to various platforms. Here are a few options:

1. **Vercel**: Connect your GitHub repository to Vercel for automatic deployments.

2. **Netlify**: Connect your GitHub repository to Netlify for automatic deployments.

3. **GitHub Pages**: Update the `package.json` with your repository URL and run:
   ```
   npm run deploy
   ```

Remember to set up environment variables on your deployment platform for the email functionality to work correctly.

## Customization

- Update the content in the respective components (`AboutMe.jsx`, `Projects.jsx`, etc.) to reflect your personal information and projects.
- Modify the color scheme in `tailwind.config.js` if you want to change the overall look.
- Replace the logo image in the `public` directory with your own logo.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request, or open an issue for discussion.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Areykal Ho - contact@areykalho.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
