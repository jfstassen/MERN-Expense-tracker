import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const income = transactions
        .map(el => el.amount)
        .filter(item => item > 0)
        .reduce((total, item) => total += item, 0)
        .toFixed(2);
    const expense = transactions
        .map(el => el.amount)
        .filter(item => item < 0)
        .reduce((total, item) => total += item, 0)
        .toFixed(2)
        .toString()
        .replace("-", "");
    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">
                        +${income}
                    </p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">
                        -${expense}
                    </p>
                </div>
            </div>
        </>
    );
};
