import './App.css'
import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}

function CalcButton({ label, buttonClassName='CalcButton', onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState(0);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op , setOp] = useState(null);

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    
    if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
    console.log(num1 + "|" + op + "|" + num2 + "|" + disp);
  }

  const opClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (num1 === null) {
      setNum1(disp.toString());
    }

    setOp(value);
    setDisp(value);
  }

  const eqClickHandler = (e) => {
    e.preventDefault();

    if (num1 === null || num2 === null || op === null) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result = 0;

    if (op === '+') {
      result = n1 + n2;
    } else if (op === '-') {
      result = n1 - n2;
    } else if (op === '*') {
      result = n1 * n2;
    } else if (op === '÷') {
      result = n2 === 0 ? 'Error' : n1 / n2;
    }

    setDisp(result);
    setNum1(result === 'Error' ? null : result.toString());
    setNum2(null);
    setOp(null);
  }

  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp(0);
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp('Aaron Paul Dizon');
  }

  return (
    <div className='App'>
      <div className='CalcHeader'>
        Calculator of Aaron Paul Dizon - DA3A
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={numClickHandler} /> 
          <CalcButton label={'8'} onClick={numClickHandler} />
          <CalcButton label={'9'} onClick={numClickHandler} />
          <CalcButton label={'÷'} onClick={opClickHandler} />
          <CalcButton label={'4'} onClick={numClickHandler} />
          <CalcButton label={'5'} onClick={numClickHandler} />
          <CalcButton label={'6'} onClick={numClickHandler} />
          <CalcButton label={'*'} onClick={opClickHandler} />
          <CalcButton label={'1'} onClick={numClickHandler} />
          <CalcButton label={'2'} onClick={numClickHandler} />
          <CalcButton label={'3'} onClick={numClickHandler} />
          <CalcButton label={'-'} onClick={opClickHandler} />
          <CalcButton label={'C'} buttonClassName={'ClearButton'} onClick={clrClickHandler} />
          <CalcButton label={'0'} onClick={numClickHandler} />
          <CalcButton label={'='} onClick={eqClickHandler} />
          <CalcButton label={'+'} onClick={opClickHandler} />
        </div>
        <CalcButton label={'Dizon'} buttonClassName={'DizonButton'} onClick={nameClickHandler} />
      </div>
    </div>
  )
}

export default App