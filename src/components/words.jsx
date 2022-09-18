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
        if(props.languageFrom == 'en'){
          const toSet = props.arrayTo[random];
          const values = toSet.split(";"); 
          setFirst(values[0]);
          setLast(values[1]);
        }
        else if (props.languageTo=='en'){
          const toSet = props.arrayFrom[random];
          const values = toSet.split(";"); 
          setFirst(values[1]);
          setLast(values[0]);
        }
        else{
          const toSetTo = props.arrayTo[random];
          const toSetFrom = props.arrayFrom[random];
          const valuesTo = toSetTo.split(";"); 
          const valuesFrom = toSetFrom.split(";"); 
          setFirst(valuesFrom[1]);
          setLast(valuesTo[1]);
        }
       
      };

      const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      const css = `
      .word {
         font-family: "Helvetica Neue", Times New Roman,Arial, sans-serif; 
        font-weight: 400;
        font-size: 22px;
        line-height: 1.7;
      }
      `
     return (
       <div>
         <style>{css}</style>
  
       
        <hr />
        <div className='word'> {answered?first:last}&nbsp;</div>
        <hr />
        <br />
        <button  onClick={() => setRandomWord()} style={{visibility: props.isLoaded ? 'visible' : 'hidden' }} > 
          {answered?"Answer":(counter==0?"Start":"Word "+(counter+1))}
        </button>
       
        <br />
        
    </div>
    );
 }

 export default Words;
