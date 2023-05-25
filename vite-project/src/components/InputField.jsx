import React, { useContext } from "react";
import { FormContext } from "../FormContext";

const InputField = ({ name }) => {
  const mapNameToPlaceholder = {
    day: "DD",
    month: "MM",
    year: "YYYY",
  };
  const { state, dispatch } = useContext(FormContext);
  return (
    <div className="InputField">
      <label htmlFor="day" className={state.error[name] ? "error" : ""}>
        {name}
        <br />
        <input
          className={state.error[name] ? "error" : ""}
          id={name}
          type="number"
          placeholder={mapNameToPlaceholder[name]}
          min="1"
          onInput={(e) =>
            dispatch({
              type: mapNameToPlaceholder[name],
              payload: Number(e.target.value),
            })
          }
        />
      </label>

      {state.error[name] && <p className="error">{state.error[name]}</p>}
    </div>
  );
};

export default InputField;
