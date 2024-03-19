// import React from 'react';
// import './App.css';
// import { useTheme } from './component/ThemeContext';
// function App() {
//   const{theme,toggleTheme} =useTheme();

//   return (
//    <div className={`App ${theme}`}>
//       <header className={`App-header ${theme}`}>
//         <p>The current theme is <strong> {theme}</strong>.</p>
//         <button onClick={toggleTheme}> Change Theme</button>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import Profile from './component/Profile';
import { ProfileProvider } from './component/ProfileContext';

const App = () => {
  return (
    <ProfileProvider>
      <div>
        <h1>Welcome to Your Profile</h1>
        <Profile />
      </div>
    </ProfileProvider>
  );
};

export default App;