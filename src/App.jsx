import { useEffect, useState } from "react";
import "./App.css";
import Card from "./component/Card";
import ThemeBtn from "./component/ThemeBtn";
import { ThemeProvider } from "./component/context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const dark = () => {
    setTheme("dark");
  };

  const light = () => {
    setTheme("light");
  };

  useEffect(() => {
    const body = document.querySelector("html");
    body.classList.remove("dark", "light");
    body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, dark, light }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>{" "}
    </ThemeProvider>
  );
}

export default App;
