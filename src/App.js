import { useState } from "react";
import React from "react";
import './App.css'


function App() {

  const  [calculate ,setCalculate] = useState("");
  const [result ,setResult] = useState("");

  const operation = ["/","*","+","-","."]

  const updateCalculation = value=>{
    if(
      operation.includes(value) && calculate === '' || operation.includes(value) && operation.includes(calculate.slice(-1))){
      return;
    }
    setCalculate(calculate + value);

    if(!operation.includes(value)){
      setResult(eval(calculate + value).toString());
    }
  }

  const createDigit = () =>{
    const digit = [];

    for(let i = 1 ; i<10 ; i++){
      digit.push(
        <button onClick={()=> updateCalculation(i.toString())} key={i} style={{backgroundColor:"blue"}}>{i}</button>
      )
    }

    return digit;
  }

  const calculation = () =>{
    setCalculate(eval(calculate).toString());
  }

  const Delete = () =>{
    if(calculate == ''){
      return;
    }
    const value = calculate.slice(0 , -1);

    setCalculate(value)
  }

 


  return (
    <div className="App">
      
      <div className="Calculator">
      <h1>Calculator</h1>
          <div className="display">
           <input value={calculate || "0"} className="input"></input> 
            </div>
            <div className="Buttons">
              
              <button onClick={()=> updateCalculation('/')}>/
              </button>
              <button onClick={()=>updateCalculation('*')}>*
              </button>
              <button onClick={()=> updateCalculation('+')}>+
              </button>
              <button onClick={()=> updateCalculation('-')}>-
              </button>

              <button onClick={Delete} >DEL</button>
            </div>

            <div className="digit">
              {createDigit()}
             
              <button onClick={()=> updateCalculation('.')}>.</button> 
              <button onClick={()=> updateCalculation('0')}>0</button> 
              <button onClick={calculation }>=</button> 

            </div>
      </div>

    </div>
  );
}

export default App;

