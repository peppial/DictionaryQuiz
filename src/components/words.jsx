import React, { useState, useEffect } from 'react';

function Words(props) {
    const [ counter, setCounter ] = useState(0);
    const [ level, setLevel ] = useState(1);
 
 
     const [first, setFirst] = useState();
     const [last, setLast] = useState();
     const [answered, setAnswered] = useState(false);

     const setRandomWord = () => {
        
        setAnswered(!answered); 
        if (answered) return;
        setCounter(counter+1);
        const random = randomIntFromInterval((level-1)*1000,level*1000);
        const toSet = props.words[random];
        const values = toSet.split(","); 
        setFirst(values[0]);
        setLast(values[1]);
      };

      const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
     return (
       <div>
         
         <button onClick={() => setRandomWord()} > 
          {answered?"Answer":"Next word"}
        </button>
        <br /><br />
        <div> {answered?first:last} </div>
        

        <br />
        
        <hr />
        <span>Level {level} </span> | <span>Count {counter} </span>
        <hr />
         <button onClick={() => level>1 && setLevel(level-1)} > 
         Level -
        </button>

        <button onClick={() => level<10 && setLevel(level+1)} > 
         Level +
        </button>
    </div>
    );
 }

 export default Words;
