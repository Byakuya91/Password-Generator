// ! REACT IMPORTS
import React from "react";

// ! LIBRARY IMPORTS
import { FaClipboard } from "react-icons/fa";

// ? GOAL: CREATE A PASSWORD GENERATOR THAT DOES THE FOLLOWING:
// ? 1) generate a password with minimum six characters for length for varying passwords
// ? 2) Include modifications for capital letters, symbols, and numbers for varying passwords
// ? 3) Copy and paste the  generated password for increased ease
// ? 4) Notifications to tell me if the password is copied, and have at least ONE option checked.

// TODO: create the section and form for the password generator
// TODO: create custom form for password generation
// TODO: create functionality to randomly generate the password

function App() {
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
            />
            <div className="clipboard">
              <FaClipboard></FaClipboard>
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="length">Length</label>
              <input type="number" id="length" min={6} max={15} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
