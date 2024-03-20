import { useState } from "react";

const Task = () => {
    const [numberone, setNumberone] = useState('')
    const [numbertwo, setNumbertwo] = useState('')
    const [sum, setSum] = useState('')

    const getData = () => {
        setSum(+numberone + +numbertwo)
    }
    return (
      <div className="task">
        <input className="number" name="numberone" placeholder="0" value={numberone} onChange={(e) => setNumberone(e.target.value)}/>
        <input className="number" name="numbertwo" placeholder="0" value={numbertwo} onChange={(e) => setNumbertwo(e.target.value)}/>
        <button className="btn" onClick={getData}>Вычислить сумму</button>
        <div className="sum"> 
            <p>Ваш ответ:{sum}</p>
        </div>
      </div>
    );
  }
  export default Task;