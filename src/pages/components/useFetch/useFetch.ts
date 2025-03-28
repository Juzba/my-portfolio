import { useState, useEffect } from 'react';

const useFetch = <T>(url: string) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>();

    const fetchData = () => {
        
        fetch(url)
            .then((i) => i.json())
            .then((item) => {
                setData(item);
                setLoading(false);
            })
            .catch((e) => console.error('Chyba načítaní api v UseFetch: ' + e.message));
    };

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, refetch: fetchData };
};

export default useFetch;
