import { useState } from "react";
import Button from "./components/Button";

function Calculator() {

  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(display + value);
  }

  function calculate() {
    setDisplay(eval(display));
  }

  function clear() {
    setDisplay("");
  }

  return (
    <div className="calculator">

      <h2>
        {display ? display : "0"}
      </h2>

      <Button value="1" click={handleClick}/>
      <Button value="2" click={handleClick}/>
      <Button value="3" click={handleClick}/>
      <Button value="4" click={handleClick}/>
      <Button value="5" click={handleClick}/>
      <Button value="6" click={handleClick}/>
      <Button value="7" click={handleClick}/>
      <Button value="8" click={handleClick}/>
      <Button value="9" click={handleClick}/>
      <Button value="0" click={handleClick}/>

      <Button value="+" click={handleClick}/>
      <Button value="-" click={handleClick}/>
      <Button value="*" click={handleClick}/>
      <Button value="/" click={handleClick}/>

      <button onClick={calculate}>
        =
      </button>

      <button onClick={clear}>
        C
      </button>

    </div>
  );
}

export default Calculator;