[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19808650&assignment_repo_type=AssignmentRepo)

# 🎨 Week 3: React.js, JSX, and Tailwind CSS Assignment

## 📋 Project Overview

A modern, responsive React application built with Vite, featuring component architecture, state management with React hooks, API integration, and a beautiful UI styled with Tailwind CSS. The application includes a task manager, API data display, and theme switching functionality.

## ✨ Features

### 🧩 Component Architecture
- **Button Component**: Reusable button with multiple variants (primary, secondary, danger, success, warning)
- **Card Component**: Flexible content container with optional title
- **Navbar Component**: Responsive navigation with active state indicators
- **Footer Component**: Comprehensive footer with links and contact information
- **Layout Component**: Wrapper component that includes Navbar and Footer

### 🔄 State Management & Hooks
- **TaskManager**: Full CRUD operations for tasks with localStorage persistence
- **useLocalStorage Hook**: Custom hook for persisting data in browser storage
- **useContext Hook**: Theme management (light/dark mode)
- **useState & useEffect**: Component state management and side effects

### 🌐 API Integration
- **JSONPlaceholder Integration**: Fetches and displays posts from external API
- **Loading States**: Beautiful loading spinners and progress indicators
- **Error Handling**: Graceful error handling with retry functionality
- **Search Functionality**: Real-time search through API data
- **Pagination**: Efficient data pagination for large datasets

### 🎨 Styling & UX
- **Tailwind CSS**: Utility-first styling with custom components
- **Dark/Light Mode**: Theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Smooth Transitions**: CSS transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd week-3-react-assignment
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card layout component
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Layout.jsx      # Layout wrapper
│   ├── TaskManager.jsx # Task management component
│   └── ApiData.jsx     # API integration component
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Theme management context
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Tasks.jsx       # Tasks page
│   └── ApiDataPage.jsx # API data page
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Components

### TaskManager
- Add, complete, and delete tasks
- Filter tasks (All, Active, Completed)
- Persistent storage using localStorage
- Real-time task statistics

### ApiData
- Fetches data from JSONPlaceholder API
- Search functionality with real-time filtering
- Pagination for efficient data display
- Loading and error states

### Theme Management
- Light/dark mode toggle
- Persistent theme preference
- System theme detection
- Smooth theme transitions

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PropTypes** - Runtime type checking
- **JSONPlaceholder** - Mock API for testing

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎨 Theme Support

- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes with dark backgrounds
- **System Preference**: Automatically detects user's system theme
- **Persistent**: Remembers user's theme choice

## 🔧 Customization

### Adding New Components
1. Create your component in `src/components/`
2. Follow the existing component patterns
3. Add PropTypes for type checking
4. Use Tailwind classes for styling

### Modifying Styles
- Edit `src/index.css` for global styles
- Use Tailwind utility classes in components
- Customize `tailwind.config.js` for theme modifications

## 📸 Screenshots

*Screenshots will be added here after deployment*

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `pnpm build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `gh-pages` dependency
2. Configure build script
3. Deploy using GitHub Actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of the Week 3 React.js assignment for PLP.

## 👨‍💻 Author

Built with ❤️ for the React.js assignment.

---

**Note**: This application demonstrates modern React development practices including hooks, context, component composition, and responsive design principles. 