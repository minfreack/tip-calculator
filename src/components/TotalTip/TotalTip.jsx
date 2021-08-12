import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './totaltip.scss';

export const TotalTip = ({amount, total, setBill, setPersons, setPercentage}) => {

    const handleReset = () => {
        setBill(0);
        setPersons(0);
        setPercentage(0);
        document.querySelector('#bill').value=0;
        document.querySelector('#persons').value=0;
        const checks = document.querySelectorAll('input[type="checkbox"]');
        checks.forEach( (check) => check.checked = false);
    };

    useEffect(() => {
        if(isNaN(amount) || !isFinite(amount)){
            document.querySelector('button').setAttribute('disabled', '');
        }else{
            document.querySelector('button').removeAttribute('disabled');
        }
    }, [amount]);

    return (
        <div className="card-total">
            <div className="tip-amount">
                <div className="tip">
                    <h3>Propina</h3>
                    <span>/ x persona</span>
                </div>
                <h2>$ {amount && isFinite(total) ? amount.toFixed(2) : 0}</h2>
            </div>
            <div className="tip-amount">
                <div className="tip">
                    <h3>Total</h3>
                    <span>/ x persona</span>
                </div>
                <h2>$ {!isNaN(total) && isFinite(total) ? total.toFixed(2) : 0}</h2>
            </div>
            <button type="sumbit" className="reset" onClick={handleReset}>RESET</button>
        </div>
    );
};

TotalTip.propTypes = {
    amount: PropTypes.number,
    total: PropTypes.number,
    setBill: PropTypes.func,
    setPersons: PropTypes.func,
    setPercentage: PropTypes.func,
};
