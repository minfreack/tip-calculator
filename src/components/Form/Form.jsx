import React, { useEffect } from 'react';
import dollar from '././../../images/icon-dollar.svg';
import person from '././../../images/icon-person.svg';
import PropTypes from 'prop-types';
import './form.scss';

export const Form = ({amount, setAmount, setTotal, bill, setBill, persons, setPersons, percentage, setPercentage}) => {

    const handleBill = (e) => {
        setBill(parseFloat(e.target.value));
    };

    const handlePersons = (e) => {
        if(e.target.value == ''){
            document.querySelector('#validation-label').classList.replace('validation-label', 'error-label');
            document.querySelector('#persons').classList.add('error-input');
        }else{
            document.querySelector('#validation-label').classList.replace('error-label', 'validation-label');
            document.querySelector('#persons').classList.remove('error-input');
            setPersons(parseFloat(e.target.value));
        }
    };

    const handlePercentage = (e) => {
        const value = (e.target.value).toString();
        const checks = document.querySelectorAll('input[type="checkbox"]');
        checks.forEach( check => {
            if(check != e.target){
                check.checked = false;
            }
        });
        setPercentage(parseFloat(value));
    };

    useEffect(() => {
        setTotal((bill/persons) + amount);
        setAmount((bill * (percentage*0.01))/persons);
    }, [handlePersons, handleBill, handlePercentage]);
    
    return (

        <form action="" className="form">
            <div className="bill">
                <label htmlFor="">Cuenta</label>
                <div className="form-input">
                    <input type="number" min="0" name="" id="bill" placeholder="0" onChange={handleBill}/>
                    <img src={dollar} className="input-icon" alt="" />
                </div>
            </div>
            <div className="percentage">
                <label htmlFor="">% de Propina</label>
                <div className="buttons">
                    <input type="checkbox" name='5' id="5" value="5" onClick={handlePercentage}/>
                    <label htmlFor="5" id="5">5%</label>
                    <input type="checkbox" name='10' id="10" value="10" onClick={handlePercentage}/>
                    <label htmlFor="10" id="10">10%</label>
                    <input type="checkbox" name='15' id="15" value="15" onClick={handlePercentage}/>
                    <label htmlFor="15" id="15">15%</label>
                    <input type="checkbox" name='25' id="25" value="25" onClick={handlePercentage}/>
                    <label htmlFor="25" id="25">25%</label>
                    <input type="checkbox" name='50' id="50" value="50" onClick={handlePercentage}/>
                    <label htmlFor="50" id="50">50%</label>
                    <input type="number" name="" id="" placeholder="Otro" onChange={handlePercentage}/>
                </div>
            </div>
            <div className="people">
                <label htmlFor="">No. de personas</label>
                <span id="validation-label" className="validation-label">No puede ser 0</span>
                <div className="form-input">
                    <input type="number" className="" min="1" name="" id="persons" placeholder="0" onChange={handlePersons} />
                    <img src={person} className="input-icon" alt="" />
                </div>
            </div>
        </form>
    );
};

Form.propTypes = {
    amount: PropTypes.number,
    setAmount: PropTypes.func,
    setTotal: PropTypes.func,
    bill: PropTypes.number,
    setBill: PropTypes.func,
    persons: PropTypes.number,
    setPersons: PropTypes.func,
    percentage: PropTypes.number,
    setPercentage: PropTypes.func
};
