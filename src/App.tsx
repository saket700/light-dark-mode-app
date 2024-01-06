import "./App.css";
import '../app/index.css';
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";



const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
};

export default App;
