import './index.css'
import React, {useState, useEffect} from "react";
import Info from './Info';

function App() {
  let [count, setCount] = useState(0);
  let [forClick, setForClick] = useState(1);
  let [forTime, setForTime] = useState(0);
  let [clickCost, setClickCost] = useState(10);
  let [timeCost, setTimeCost] = useState(10);
  let [impClickValueCost, setImpClickValueCost] = useState(10000);
  let [impTimeValueCost, setImpTimeValueCost] = useState(10000);
  let [clickByBought, setClickByBought] = useState(1);
  let [timeByBought, setTimeByBought] = useState(1);

  function incTotalCount() {
    setCount(count + forClick);
  }

  function incCount() {
    if (count >= clickCost) {
      setCount(count - clickCost)
      setForClick(forClick + clickByBought);
      setClickCost(Math.round(clickCost + (clickCost / 100 * 10)));
    }
  }

  function incForTime() {
    if (count >= timeCost) {
      setForTime(forTime + timeByBought)
      setCount(count - timeCost)
      setTimeCost(Math.round(timeCost + (timeCost / 100 * 10)));
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + forTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [forTime]);

  function impClickValue() {
    if (count >= impClickValueCost) {
      setClickByBought(clickByBought + 2);
      setCount(count - impClickValueCost);
      setImpClickValueCost(Math.round(impClickValueCost + (impClickValueCost / 100 * 50)));
    }
  }

  function impTimevalue() {
    if (count >= impTimeValueCost) {
      setTimeByBought(timeByBought + 2);
      setCount(count - impTimeValueCost);
      setImpTimeValueCost(Math.round(impTimeValueCost + (impTimeValueCost / 100 * 50)));
    }
  }


  return (
    <div className="App">
      <p className='count'>{count}</p>

      <div className='progress_info_wrap'>
        <p className='progress_info'>click: {forClick}</p>
        <p className='progress_info'>second: {forTime}</p>
      </div>    

      <Info />

      <div className='content'>
        <p className='text'>every click +{clickByBought} score </p>
        <button onClick={incCount} className='btn'>{clickCost}</button>

        <br/>

        <p className='text'>+{timeByBought} score every second</p>
        <button onClick={incForTime} className='btn'>{timeCost}</button>

        <br/>

        <p className='text'>improve click value</p>
        <button onClick={impClickValue} className='btn'>{impClickValueCost}</button>

        <br/>

        <p className='text'>improve time value</p>
        <button onClick={impTimevalue} className='btn'>{impTimeValueCost}</button>
      </div>

      <button className='incCount' onClick={incTotalCount}>click</button>
    </div>    
  );
}

export default App;
