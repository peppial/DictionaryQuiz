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
      const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
      setArray(csvRows);
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
