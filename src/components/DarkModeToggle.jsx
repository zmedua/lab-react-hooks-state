import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode}) => {
  // TODO: Implement dark mode toggle logic
{/* TODO: Update this text from Dark to Light dynamically */}
  return (
    <button onClick = {toggleDarkMode}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode" }
    </button>
  )
}

export default DarkModeToggle
