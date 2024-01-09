import { useState } from "react"

export default function Player({ name, symbol,isActive}) {
    const [isEditing, setIsEditing] = useState(false)
    const [userName, setUserName] = useState(name)
    const onClick = () =>{
        setIsEditing((editing)=> !editing)

    }
    const onChange = (event)=>{
        setUserName(event.target.value)
        name=event.target.value
    }
                
    return (
        <li className={isActive}>
            <span className="player">
                {isEditing ? <input type="text" required onChange={onChange} value={userName} >
                    </input> : <span className="player-name" >{userName}</span>}

                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={onClick}>{isEditing ? "Save" : "Edit"}</button>
            
        </li>
    )
}