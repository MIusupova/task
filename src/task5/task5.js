import { useState } from "react"

const Task5 = () => {
    const [user, setUser] = useState('')
    const [list, setList] = useState([])
   
    const getDa = () => {
        setList([...list, {user: user}] );
    }
    return (
      <div className="task">
        <input className="number" name="numberone" placeholder="Пользователь" value={user} onChange={(e) => setUser(e.target.value)}/>
        <button className="btn" onClick={getDa}>Добавить</button>
        <div className="sum"> 
            {list.map(({user}) => (
                <p>{user}</p>
            ))}

        </div>
      </div>
    );
  }
  export default Task5;