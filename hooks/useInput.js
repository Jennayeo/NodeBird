import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    const [value, setValue] = useState(initialValue); //초기값
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}