import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions
        .map(el => el.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
};
