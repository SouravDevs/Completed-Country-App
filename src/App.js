import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

 
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
    <Header theme={[isDark, setIsDark]} />
    <Outlet context={[isDark, setIsDark]} />
    </ThemeContext.Provider>
  );
}

export default App;
