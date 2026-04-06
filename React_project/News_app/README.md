# 📰 News Hub 

**News Hub** is a fast, responsive, and beautifully designed modern web application built using **React** and **Vite**. It fetches the latest top headlines from across the globe in real-time, providing users with up-to-date categories such as Business, Entertainment, Health, Science, Sports, and Technology.

## ✨ Features
- **Real-Time News**: Stays up-to-date by securely leveraging the external `NewsAPI`.
- **Modern Glassmorphism UI**: High-end frosted glass appearance for navigation along with a beautiful gradients background.
- **Categorized Reading**: Easily switch between specific topics like Technology, Sports, and Healthcare.
- **Fully Responsive**: Adapts seamlessly to mobile phones, tablets, and desktop computers.
- **Top-Tier Tooling**: 
  - **Material UI** sets a gorgeous layout paradigm and provides accessible base components.
  - **Tailwind CSS** ensures rapid and deeply customized layouts.
  - **Vite** keeps hot module reloading almost instant.

## 🚀 Getting Started

Follow these steps to set up and run the app locally on your machine.

### Prerequisites
You need to have **Node.js** (version 18+ recommended) installed out of the box. You'll also need a free API key from [NewsAPI.org](https://newsapi.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd News_app
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add your API Key like this:
     ```env
     VITE_NEWS_API_KEY=YOUR_OWN_API_KEY_HERE
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

*The application should now be running on `http://localhost:5173/` (or a similar provided port!).*

## 🛠️ Built With
- **[React](https://reactjs.org/)** (v19)
- **[Vite](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (v3)
- **[Material UI](https://mui.com/)**
- **[News API](https://newsapi.org/)**

## 💡 Best Practices and SEO
- Included robust Open Graph data inside `index.html` structure so the project displays rich previews when shared on networks like Twitter, Discord, and Facebook.
- Employs Semantic HTML layout strategies and high-contrast color tones suitable for accessibility norms.
