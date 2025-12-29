# L1 Project

A React-based web application built with Vite, featuring a dashboard interface with user management and billing functionality.

## Features

- 🏠 **Home Page** - Landing page for the application
- 📊 **Dashboard** - Main dashboard interface
- 👥 **Users Dashboard** - User management interface
- 💰 **Billing Dashboard** - Invoice and billing management with pagination

## Tech Stack

- **React** ^19.1.1 - UI library
- **Vite** ^7.1.7 - Build tool and dev server
- **React Router DOM** ^7.9.6 - Client-side routing
- **Tailwind CSS** ^4.1.17 - Utility-first CSS framework
- **React Toastify** ^11.0.5 - Toast notifications
- **Lucide React** ^0.553.0 - Icon library
- **ESLint** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16.x or higher recommended)
- **npm** (comes with Node.js) or **yarn**

You can verify your installation by running:

```bash
node --version
npm --version
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd l1-project
```

### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

Or if you prefer using yarn:

```bash
yarn install
```

### 3. Start Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### 4. Build for Production

To create a production build:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

The optimized production files will be generated in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement (HMR)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
l1-project/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable React components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API services (if any)
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Pages

- **/** - Home page
- **/dashboard** - Main dashboard
- **/dashboard/users** - Users dashboard
- **/dashboard/billing** - Billing dashboard with invoice management

## Local Storage

The application uses browser local storage for data persistence. The billing dashboard uses a custom hook `useLocalStorageArray` to manage invoice data.

## Development

### Code Linting

The project uses ESLint for code quality. Run the linter:

```bash
npm run lint
```

### Styling

This project uses Tailwind CSS for styling. Tailwind utility classes are used throughout the components. Custom styles can be added in `src/index.css`.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a port:

```bash
npm run dev -- --port 3000
```

### Dependency Issues

If you encounter issues with dependencies:

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again

### Build Errors

If you encounter build errors:

1. Clear the Vite cache: `rm -rf node_modules/.vite`
2. Rebuild: `npm run build`

## License

This project is private.

## Contributing

This is a private project. For contributions, please contact the project maintainer.
