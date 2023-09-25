// ! REACT IMPORTS
import React, { useState } from "react";

// ! LIBRARY IMPORTS
import { FaClipboard } from "react-icons/fa";
import { useForm } from "./useForm";

// ! OTHER IMPORTS
import { getRandomChar, getSpecialSymbol, utils } from "./utils";

// ? GOAL: CREATE A PASSWORD GENERATOR THAT DOES THE FOLLOWING:
// ? 1) generate a password with minimum six characters for length for varying passwords
// ? 2) Include modifications for capital letters, symbols, and numbers for varying passwords
// ? 3) Copy and paste the  generated password for increased ease
// ? 4) Notifications to tell me if the password is copied, and have at least ONE option checked.

// TODO: create the section and form to control the inputs generator(ONGOING)
// TODO: create functionality to randomly generate the password

function App() {
  // State variables

  //   Holding the values
  const [values, setValues] = useForm({
    // Initial default values
    length: 6,
    capital: true,
    small: true,
    number: true,
    symbol: true,
  });

  //   result variables
  const [result, setResult] = useState("");

  //   fields to modify
  const fieldsArray = [
    {
      field: values.capital,
      getChar: getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: getSpecialSymbol(),
    },
  ];

  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input
              type="text"
              id="result"
              placeholder="Min of 6 chars."
              readOnly
              value={result}
            />
            <div className="clipboard">
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input
                type="number"
                id="length"
                min={6}
                max={20}
                name="length"
                value={values.length}
                onChange={setValues}
              />
            </div>
            <div className=" field">
              <label htmlFor="capital">Capital</label>
              <input
                type="checkbox"
                id="capital"
                name="capital"
                checked={values.capital}
                onChange={setValues}
              />
            </div>
            <div className=" field">
              <label htmlFor="small">Lowercase</label>
              <input
                type="checkbox"
                id="small"
                name="small"
                checked={values.small}
                onChange={setValues}
              />
            </div>
            <div className=" field">
              <label htmlFor="number">Number</label>
              <input
                type="checkbox"
                id="number"
                name="number"
                checked={values.number}
                onChange={setValues}
              />
            </div>
            <div className=" field">
              <label htmlFor="symbol">Special Characters</label>
              <input
                type="checkbox"
                id="symbol"
                name="symbol"
                checked={values.symbol}
                onChange={setValues}
              />
            </div>
          </div>
          <button type="submit">Generate Password</button>
        </form>
      </div>
    </section>
  );
}

export default App;
