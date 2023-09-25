// ? React imports
import { useState } from "react";

export function useForm(initialValues) {
  //    State variables
  const [values, setValues] = useState(initialValues);

  // return an array of values as key, value pairs
  // first argument is the value
  // second argument is a function to modify the values
  //   Function will take an event that will call the useState Setter
  // Inside the setValues the previous values are spread out and will be overidden with a new value.
  //  To do this one requires a key and a value. If the value is a checkbox it will grab it, if not
  //    it will still grab it.

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      });
    },
  ];
}
