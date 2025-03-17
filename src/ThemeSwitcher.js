import React, {useContext} from 'react'
import { ThemeContext } from "./ThemeContext";

function ThemeSwitcher() {
  const {theme, toggleTheme} = useContext(ThemeContext);

	return (
		<>
      <p>asdasd</p>
			<div className={`color ${theme}`}></div>
			<button onClick={toggleTheme}>click change theme</button>
		</>
	)
}

export default ThemeSwitcher;
