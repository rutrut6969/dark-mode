import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
// import { body } from './functions/selector';
export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('Dark Mode Status:', false);
  useEffect(() => {
    value
      ? window.document.body.classList.add('dark-mode')
      : window.document.body.classList.remove('dark-mode');
  }, [value]);
  //   console.log(body);

  const setDarkMode = (e) => {
    !value ? setValue(true) : setValue(false);
  };

  return [value, setDarkMode];
};
