import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const Transaction = ({ item }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const plusSign = item.amount.toString().includes('-') || '+'

    return (
        <>
            <li className={item.amount.toString().includes('-') ? "minus" : "plus"}>
                {item.text} <span>{plusSign}{item.amount}$</span>
                <button onClick={() => deleteTransaction(item._id)} className="delete-btn">x</button>
            </li>
        </>
    );
};
