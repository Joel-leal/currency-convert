import logo from "./logo.svg";
import "./App.css";
import { Input } from "./Input";
import { useEffect, useState } from "react";
import Select from "./Select";
import currencyOptions from "./exChance";

function App() {
  const [value, setValue] = useState(0);
  const [inputSelect, setInputSelect] = useState("BRL");
  const [outputSelect, setOutputSelect] = useState("USD");
  const [ratio, setRatio] = useState(0);
  const [returnError, setReturnError] = useState("");

  useEffect(() => {
    const value = `${inputSelect}-${outputSelect}`;
    const responseKey = `${inputSelect}${outputSelect}`;
    if (inputSelect === outputSelect) {
      setRatio(1);
      return;
    }
    fetch(`https://economia.awesomeapi.com.br/last/${value}`)
      .then((response) => response.json())
      .then((data) => setRatio(data[responseKey].low))
      .catch((error) => setReturnError(error));
  }, [inputSelect, outputSelect]);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>Conversor de moedas</h2>
          <div className="App-input">
            <Input
              inputValue={value}
              onChange={handleChange}
              selectValue={inputSelect}
              onSelectChange={(e) => setInputSelect(e.target.value)}
            />
            <Input
              inputValue={parseFloat(value) * parseFloat(ratio)}
              selectValue={outputSelect}
              onSelectChange={(e) => setOutputSelect(e.target.value)}
              disabled
            />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
