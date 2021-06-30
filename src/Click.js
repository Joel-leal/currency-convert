import React, {useState, useEffect} from "react";

export default () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = `${count} acessos`
    },[count]
    )
    
    return (
        <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
    )
}