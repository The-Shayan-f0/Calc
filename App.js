import React, { useState } from "react";
import "./styles.css";

export function App(props) {
  const [value, setValue] = useState("");
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={value.replace(/\//g, "÷").replace(/\*/g, "×")}
              readOnly
            ></input>
          </div>
          <div>
            <input type="button" value="AC" onClick={(e) => setValue(value.slice(0, -1))} className="etc-buttons"/>
            <input
              type="button"
              value="-/+"
              className="etc-buttons"
            />
            <input
              type="button"
              value="%"
              onClick={(e) => setValue(value + e.target.value)}
              className="etc-buttons"
            />
            <input
              type="button"
              value="÷"
              onClick={(e) => setValue(value + "/")}
              className='orange-button'
            />
          </div>
          <div>
            <input
              type="button" value="7" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button" value="8" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input
              type="button" value="9" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input
              type="button" value="*" onClick={(e) => setValue(value + e.target.value)} className='orange-button'
            />
          </div>
          <div>
            <input type="button" value="4"  onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button" value="5" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input  type="button"  value="6"  onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input  type="button"  value="-"  onClick={(e) => setValue(value + e.target.value)}  className='orange-button'
            />
          </div>
          <div>
            <input type="button" value="1" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button" value="2" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button" value="3" onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button" value="+" onClick={(e) => setValue(value + e.target.value)}  className='orange-button'
            />
          </div>
          <div>
            <input  type="button" value="0" onClick={(e) =>  setValue(value + e.target.value)} className='zero numbers'
            />
            <input type="button"  value="." onClick={(e) => setValue(value + e.target.value)} className='numbers'
            />
            <input type="button"  value="=" className="equals" onClick={(e) => setValue(String(eval(value)))} className='orange-button'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

// Log to console
console.log("Hello console");
