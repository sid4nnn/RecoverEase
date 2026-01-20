# RecoverEase

RecoverEase is a mobile-first web application designed to support patients during their post-discharge recovery. It provides a simple, reassuring interface for daily check-ins, wound care tracking, and medication management.

## Features
- **Daily Check-in Wizard**: Track mood, pain, sleep, and temperature.
- **Wound Care**: Step-by-step guidance for checking surgical wounds.
- **Medications Panel**: Track daily prescriptions and history.
- **Family Updates**: Share progress with loved ones.
- **Mobile-First Design**: Optimized for touch interaction and accessibility.

## Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

## getting Started

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd RecoverEase
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run locally (Development)**
    Start the development server with hot reload:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.
    *Tip: Open DevTools and toggle Device Toolbar (Cmd+Shift+M) to view in mobile dimensions (e.g., iPhone size).*

## Deployment

RecoverEase is a static Single Page Application (SPA) built with Vite. It can be deployed to any static hosting service.

### Build for Production
Create the production bundle:
```bash
npm run build
```
This will generate a `dist` folder containing the compiled assets.

### Deploying to Vercel (Recommended)
1.  Push your code to GitHub.
2.  Import the project in [Vercel](https://vercel.com).
3.  Vercel will automatically detect Vite.
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
4.  Click **Deploy**.

### Deploying to Netlify
1.  Push your code to GitHub.
2.  Import the project in [Netlify](https://netlify.com).
3.  Settings:
    -   **Build Command**: `npm run build`
    -   **Publish Directory**: `dist`
4.  Click **Deploy Site**.

### Manual Deployment
You can serve the contents of the `dist` folder using any static file server (e.g., Nginx, Apache, or `serve` package).
```bash
npx serve -s dist
```
