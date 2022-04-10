import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Words from './components/words';
import './App.css';

const file = './bg-en.csv';


function App() {

  useEffect(() => {
    start();
  }, []);

  const [text, setText] = useState();
  const [array, setArray] = useState();
  
 
 
  const start = () => {
  fetch(file)
    .then( response => response.text() )
    .then( responseText => {
        setText( responseText );
        csvFileToArray(responseText);
    });

  };
  
    const csvFileToArray = (string) => {
      const csvHeader = string.slice(0, string.indexOf("\r\n")).split(",");
      const csvRows = string.slice(string.indexOf("\r\n") + 1).split("\r\n");
  
      const array = csvRows.map(i => {
        const values = i.split(",");
        const obj = csvHeader.reduce((object, header, index) => {
          object = values[index];
          return object;
        }, {});
        return obj;
      });

      setArray(array);
    };

    
  return (
    <div className="App">
      <header className="App-header">
        Quiz
       <Words words={array}  />
      </header>
    </div>
    

  );
}

export default App; 
