import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
	const [ isDark, setIsDark ] = useLocalStorage('true');
	console.log(isDark);
	useEffect(
		() => {
			// was comparing isDark to the string true istead of the boolean true
			if (isDark === true) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ isDark ]
	);
	return [ isDark, setIsDark ];
};

export default useDarkMode;
