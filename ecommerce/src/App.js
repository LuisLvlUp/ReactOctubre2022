import { Main } from './components/Main/Main';
import { BrowserRouter } from "react-router-dom";
import { initTheme, ThemeContext } from './context/themeContext';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(initTheme)

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Main />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
