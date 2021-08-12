import React, { useState } from 'react';
import { Form } from '../Form/Form';
import { TotalTip } from '../TotalTip/TotalTip';
import './main.scss';
export const Main = () => {

    const [amount, setAmount] = useState();
    const [total, setTotal] = useState();
    const [bill, setBill] = useState(0);
    const [persons, setPersons] = useState(0);
    const [percentage, setPercentage] = useState(0);

    return (
        <div className="main">
            <Form  
                amount={amount} 
                setAmount={setAmount} 
                setTotal={setTotal} 
                bill={bill} 
                setBill={setBill} 
                persons={persons} 
                setPersons={setPersons}
                percentage={percentage}
                setPercentage={setPercentage} />
            <TotalTip amount={amount} total={total}  setBill={setBill} setPersons={setPersons} setPercentage={setPercentage}  />
        </div>
    );
};
