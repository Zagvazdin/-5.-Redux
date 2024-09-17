// ThemeSwitcher.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './store';
import './ThemeSwitcher.css'; // Импортируем CSS для анимации

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const [isExploding, setIsExploding] = useState(false);

  const handleToggle = () => {
    setIsExploding(true);
    dispatch(toggleTheme());

    // Сбрасываем анимацию через 0.5 секунды
    setTimeout(() => {
      setIsExploding(false);
    }, 500);
  };

  return (
    <div style={{ 
      background: isDarkTheme ? '#333' : '#FFF', 
      color: isDarkTheme ? '#FFF' : '#000', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <button 
        onClick={handleToggle} 
        className={isExploding ? 'exploding' : ''}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          background: isDarkTheme ? '#555' : '#007BFF',
          color: '#FFF',
          transition: 'background 0.3s, transform 0.5s',
        }}
      >
        Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;
