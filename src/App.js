import logo from './logo.svg';
import './App.css';
import { Input } from './Input';
import { useEffect, useState } from 'react';
import Select from './Select';
import exchangeRate from './exChance';
function App() {
  // const [exchangeRate,setExchangeRate] = useState(1)
  const [value,setValue] = useState(0)
  const [inputSelect,setInputSelect] = useState("Real")
  const [outputSelect,setOutputSelect] = useState("Dolar")
  const [ratio,setRatio] = useState(0)

  useEffect(() => {
    let newRatio = exchangeRate[inputSelect]/exchangeRate[outputSelect]
    setRatio(newRatio)
    console.log(inputSelect)
    console.log(outputSelect)
  },[inputSelect, outputSelect])
  
  const handleChange = (event) => {
    
    setValue(event.target.value)
    console.log(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Conversor de moedas</h2>
        <div className="container">
        <Input value={value} onChange={handleChange} label={inputSelect} onSelectChange={e => setInputSelect(e.target.value)}/>
        <Input  value={parseFloat(value)*ratio} label={outputSelect} onSelectChange={e => setOutputSelect(e.target.value)} disabled/>
        </div>
      </header>
    </div>  
  );
}

export default App;
