import { createContext, useState, useContext } from 'react';


export const BitContext = createContext(true);

export const useBit = () => {
    return useContext(BitContext);
};

