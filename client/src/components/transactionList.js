import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalState";
import { Transaction } from "./transaction";

export const TransactionList = () => {
    // const context = useContext(GlobalContext);
    const { transactions, getTransactions } = useContext(GlobalContext);
    // console.log(context);

    useEffect(()=> {
        getTransactions();
        // eslint-disable-nextline react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map((item, index) => (
                    <Transaction key={index} item={item} />
                ))}
            </ul>
        </>
    );
};
