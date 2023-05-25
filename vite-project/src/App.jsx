import "./App.css";
import InputPanel from "./components/InputPanel";
import SubmitInput from "./components/SubmitInput";
import ShowPanel from "./components/ShowPanel";
import { useReducer } from "react";
import { INIT_STATE, formReducer } from "./formReducer";
import { FormContext } from "./FormContext";
import { intervalToDuration } from "date-fns";
function App() {
  const [state, dispatch] = useReducer(formReducer, INIT_STATE);
  const calAge = (birthYear, birthMonth, birthDay) => {
    const { years, months, days } = intervalToDuration({
      start: new Date(),
      end: new Date(birthYear, birthMonth - 1, birthDay),
    });
    console.log("y", years);
    return { years, months, days };
  };
  console.log("state", state);
  return (
    <div className="App">
      <div className="container">
        <FormContext.Provider value={{ state, dispatch, calAge }}>
          <InputPanel />
          <SubmitInput />
          <ShowPanel />
        </FormContext.Provider>
      </div>
      <div className="footer">
        Coded by:
        <span>&nbsp;Mod-x</span>
      </div>
    </div>
  );
}

export default App;
