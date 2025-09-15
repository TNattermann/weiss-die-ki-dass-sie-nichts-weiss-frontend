import { createContext, useState, useContext } from 'react';


export const BitContext = createContext([]);

export const useBit = () => {
    return useContext(BitContext);
};

export const BitProvider = ({ children } : any) => {
    const [wissensbits, setWissensbits] = useState([{
        title : "",
        description : ""
    }]);

    return (
        <BitContext.Provider value={{ wissensbits, setWissensbits }}>
            {children}
        </BitContext.Provider>
    );
};

