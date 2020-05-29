import React, { useState } from "react";
import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import ThemeSwitcher from "react-theme-switcher";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "#121212" : "#fafafa"};
  color: ${(props) => (props.theme.mode === "dark" ? "#fafafa" : "#121212")};
}
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "light" });
  const [icon, setIcon] = useState(FaSun);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App">
          <h2>This is the theme toggler app</h2>
          <ThemeSwitcher 
            switcherColor="#FAD02E"
            darkColor="#121212"
            lightColor="#ffffff"
            lightTextColor="#121212"
            darkTextColor="#ffffff"
          />
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eligendi eaque perferendis minima cumque itaque
            explicabo impedit maxime sit praesentium, amet, accusantium dolorem.
            Minima quia aspernatur molestiae, illum officia porro?
          </h3>
          <button
            onClick={(e) =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          >
            Toggle Theme{" "}
          </button>
          <br />
          <div></div>
          <FaSun
            size="35px"
            onClick={(e) =>
              setTheme(
                theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
              )
            }
          />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
