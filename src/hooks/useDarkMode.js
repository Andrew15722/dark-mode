import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = (key) => {
	const [ isDark, setIsDark ] = useLocalStorage('true');
	useEffect(
		() => {
			if (!isDark === 'true') {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ isDark ]
	);
	return [ isDark, setIsDark ];
};
