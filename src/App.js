import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [list,setList] = useState([]);
  const [inputValue,setInputValue] = useState("");
  const [displayList,setDisplayList] = useState([]);

  useEffect(() => {
    let url = "https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words";
    const fetchJSON = async () => {
      const response = await fetch(url);
      let json = await response.text();
      let arr = json.split('\n');
      setList(arr);
    };
    fetchJSON();
  }, []);
  
  const handleChange = (event) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
    let arr = [];
    if (inputValue.length >= 3) {
      arr = list.filter(elem => elem.includes(inputValue));
    }
    setDisplayList(arr);
  }
  return (
    <div className="App">
      <h2>Divyajyoti Das</h2>
      <div>
        <input type = "text" onChange={handleChange}></input>
      </div>
      <div className = "displayList">
        {
        displayList.map(function(match) {
          let value = inputValue;
          let re = new RegExp(value, 'g');
          let replaceValue = '<mark>'+value+'</mark>';
          let str = match.replace(re, replaceValue);
          let element = <p dangerouslySetInnerHTML={{__html: str }}></p>;
          return (element)
        })
        }
      </div>  
    </div>
    );
}

export default App;
