import React, { useState, useEffect } from 'react';

function Words(props) {
  const [counter, setCounter] = useState(0);
  const [level, setLevel] = useState(1);

  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [answered, setAnswered] = useState(false);

  const [starColor, setColor] = useState('#fff');
  const [starColor2, setColor2] = useState('#fff');
  const [starColor3, setColor3] = useState('#fff');
  const [starColor4, setColor4] = useState('#fff');
  const [starColor5, setColor5] = useState('#fff');
  const maxColorNumber=50;

  const setRandomWord = () => {

    setAnswered(!answered);
    if (answered) return;
    setCounter(counter + 1);
    setColor(getGradientColor('#ffffcc', '#DD356E', counter/maxColorNumber));
    if(counter>maxColorNumber){
      setColor2(getGradientColor('#ffffcc', '#DD356E', (counter-maxColorNumber)/maxColorNumber));
    }
    if(counter>maxColorNumber*2){
      setColor3(getGradientColor('#ffffcc', '#DD356E', (counter-maxColorNumber*2)/maxColorNumber*2));
    }
    if(counter>maxColorNumber*3){
      setColor4(getGradientColor('#ffffcc', '#DD356E', (counter-maxColorNumber*3)/maxColorNumber*3));
    }
    if(counter>maxColorNumber*4){
      setColor5(getGradientColor('#ffffcc', '#DD356E', (counter-maxColorNumber*4)/maxColorNumber*4));
    }
    const random = randomIntFromInterval((level - 1) * 1000, level * 1000);
    if (props.languageFrom === 'en') {
      const toSet = props.arrayTo[random];
      const values = toSet.split(";");
      setFirst(values[0]);
      setLast(values[1]);
    }
    else if (props.languageTo === 'en') {
      const toSet = props.arrayFrom[random];
      const values = toSet.split(";");
      setFirst(values[1]);
      setLast(values[0]);
    }
    else {
      const toSetTo = props.arrayTo[random];
      const toSetFrom = props.arrayFrom[random];
      const valuesTo = toSetTo.split(";");
      const valuesFrom = toSetFrom.split(";");
      setFirst(valuesFrom[1]);
      setLast(valuesTo[1]);
    }

  };

  
  const getGradientColor = (start_color, end_color, percent) => {
    // strip the leading # if it's there
    start_color = start_color.replace(/^\s*#|\s*$/g, '');
    end_color = end_color.replace(/^\s*#|\s*$/g, '');
 
    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(start_color.length === 3){
      start_color = start_color.replace(/(.)/g, '$1$1');
    }
 
    if(end_color.length === 3){
      end_color = end_color.replace(/(.)/g, '$1$1');
    }
 
    // get colors
    var start_red = parseInt(start_color.substr(0, 2), 16),
        start_green = parseInt(start_color.substr(2, 2), 16),
        start_blue = parseInt(start_color.substr(4, 2), 16);
 
    var end_red = parseInt(end_color.substr(0, 2), 16),
        end_green = parseInt(end_color.substr(2, 2), 16),
        end_blue = parseInt(end_color.substr(4, 2), 16);
 
    // calculate new color
    var diff_red = end_red - start_red;
    var diff_green = end_green - start_green;
    var diff_blue = end_blue - start_blue;
 
    diff_red = ( (diff_red * percent) + start_red ).toString(16).split('.')[0];
    diff_green = ( (diff_green * percent) + start_green ).toString(16).split('.')[0];
    diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split('.')[0];
 
    // ensure 2 digits by color
    if( diff_red.length === 1 ) diff_red = '0' + diff_red
    if( diff_green.length === 1 ) diff_green = '0' + diff_green
    if( diff_blue.length === 1 ) diff_blue = '0' + diff_blue
 
    return '#' + diff_red + diff_green + diff_blue;
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
      <span className='word' style={{ color: starColor, display: props.isLoaded ? '' : 'none' }} >&#9733;</span>
      <span className='word' style={{ color: starColor2, display: props.isLoaded && counter>maxColorNumber ? '' : 'none' }} >&#9733;</span>
      <span className='word' style={{ color: starColor3, display: props.isLoaded && counter>maxColorNumber*2 ? '' : 'none' }} >&#9733;</span>
      <span className='word' style={{ color: starColor4, display: props.isLoaded && counter>maxColorNumber*3 ? '' : 'none' }} >&#9733;</span>
      <span className='word' style={{ color: starColor5, display: props.isLoaded && counter>maxColorNumber*4 ? '' : 'none' }} >&#9733;</span>

      <hr />
      <div className='word'> {answered ? first : last}&nbsp;</div>
      <hr />
      <br />
      <button onClick={() => setRandomWord()} style={{ visibility: props.isLoaded ? 'visible' : 'hidden' }} >
        {answered ? "Answer" : (counter === 0 ? "Start" : "Word " + (counter + 1))}
      </button>

      <br />

    </div>
  );
}

export default Words;
