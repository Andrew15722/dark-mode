import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
	const [ storedValue, setStoredValue ] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});
	const setValue = (value) => {
		//saves state
		setStoredValue(value);
		//save to local storage
		window.localStorage.setItem(key, JSON.stringify(value));
	};
	return [ storedValue, setValue ];
};

export default useLocalStorage;
