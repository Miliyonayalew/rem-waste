# REM Waste - Skip Hire Selection Page

A modern React-based web page for skip hire selection with a focus on user experience and accessibility. Built with React, TypeScript, and Vite, with a modern, fully redesigned interface tailored for waste management services.

## 🎯 Project Overview

This page provides an intuitive interface for customers to select and hire waste skips based on their postcode and requirements. The page features offers a responsive design with dual view modes and comprehensive skip information.

## ✨ Key Features

- **Skip Selection**: Fetch and display various skip size options from the `API`.
- **Dual View Modes**: Visual comparison and detailed specification tabs
- **Progress Tracking**: Clear step-by-step progress indicator
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/rem-waste.git
   cd rem-waste
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
rem-waste/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── api/               # API service layer
│   │   └── skipService.ts # Skip data fetching logic
│   ├── assets/            # Application assets
│   ├── components/        # React components
        ├── common
│   │   │   ├── LoadingErrorStates.tsx  # Loading & error UI
│   │   │   ├── PageHeader.tsx          # Page header component
│   │   ├── skip-selection/
│   │   │   ├── ProgressTracker.tsx     # Progress indicator
│   │   │   ├── SelectedSkipSummary.tsx # Selection summary
│   │   │   ├── SkipCard.tsx            # Individual skip card
│   │   │   ├── SkipSelectionGrid.tsx   # Grid layout component
│   │   │   └── SkipSelectionTabs.tsx   # Tab interface
│   │   └── ui/            # Reusable UI components
│   │       ├── button.tsx # Button component
│   │       └── tabs.tsx   # Tab component
│   ├── constants/         # Application constants
│   ├── lib/              # Utility libraries
│   │   └── utils.ts      # Helper functions
│   ├── pages/            # Page components
│   │   └── SkipSelectionPage.tsx # Main page component
│   ├── query/            # React Query hooks
│   │   └── useSkipOptions.ts # Skip data fetching hook
│   └── utils/            # Additional utilities
├── components.json        # Shadcn/ui configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Design System & Approach

### Design Philosophy

The page underwent a complete visual transformation focusing on modern UX principles and accessibility standards. The redesign approach centered around creating a warm, professional experience that guides users through the skip selection process intuitively.

### Key Design Improvements

#### **Visual Design**
- **Modern Color Palette**: Warm color scheme with orange/amber accents replacing the original blue theme
- **Enhanced Typography**: Improved hierarchy with better readability and visual flow
- **Abstract Skip Visualizations**: Custom illustrations showing proportional size comparisons instead of literal images
- **Card-Based Layout**: Ensuring clarity and visual separation between options.

#### **User Experience**
- **Dual View Modes**: 
  - **Visual Tab**: Vertical list with proportional skip illustrations for easy size comparison
  - **Detailed Tab**: Comprehensive specifications with "suitable for" recommendations
- **Progress Indicators**: Clear step-by-step progress
- **Selection Feedback**: Enhanced visual states for selected items with smooth animations

#### **Responsive Design**
- **Mobile-First Approach**: Optimized for mobile devices with touch-friendly interactions
- **Adaptive Grid System**: Responsive layout that stacks on mobile and expands on desktop
- **Flexible Typography**: Scalable text that maintains readability across all screen sizes
- **Touch Optimization**: Larger touch targets and swipe-friendly interfaces

#### **Accessibility Features**
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Color Contrast**: WCAG AA compliant color combinations
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements

#### **Enhanced Functionality**
- **Smart Data Loading**: Efficient API calls with loading states and error handling
- **Real-time Updates**: Dynamic pricing based on postcode and availability
- **Context-Aware Information**: Detailed skip specifications with practical usage examples
- **Professional Branding**: Consistent company branding throughout the interface
  
### Technical Architecture

#### **Frontend Stack**
- **React 19**: Latest React features with concurrent rendering
- **TypeScript**: Full type safety and enhanced developer experience
- **Vite**: Fast development server and optimized builds
- **Tailwind CSS**: Utility-first styling with custom design tokens

#### **State Management**
- **TanStack Query**: Efficient server state management with caching
- **React Hooks**: Local state management for UI interactions

#### **Component Architecture**
- **Atomic Design**: Reusable components following atomic design principles
- **Compound Components**: Components that manage shared state and logic among related sub-components.
- **Custom Hooks**: Business logic separated into reusable hooks

## 🔧 Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **State Management**: TanStack React Query
- **HTTP Client**: Axios
- **UI Components**: Shadcn UI(Radix UI primitives)
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript support

## 🚀 Future Enhancements

- **Multi-language Support**: Internationalization for broader accessibility
- **Advanced Filters**: Filter by price, size, or availability
- **User Accounts**: Save preferences and booking history
- **Real-time Availability**: Live updates on skip availability

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

*Built with ❤️ by Miliyon Ayalew*
