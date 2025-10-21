import ReactDOM from "react-dom/client";
import "./app.css";

const tech = "React and Vite";
const theme = {
    primary: 'rebeccaPurple',
    secondary: 'paleVioletRed'
}

function App() {
    return (
        <h1 style={{ backgroundColor: theme.primary, color: theme.secondary }}>Hello {tech}</h1>
    )
}

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(<App />);