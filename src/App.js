import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { darkTheme, lightTheme } from "./components/Themes";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Work from "./components/Work";

function App() {
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/work" component={Work} />
          <Route path="/skills" component={Skills} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
