import { useState, useEffect } from 'react';

const useAllStudent = () => {
    const [str, setstr] = useState(1);
    useEffect(() => {
        setstr(str + 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return str
};

export default useAllStudent;  