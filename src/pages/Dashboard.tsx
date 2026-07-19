import { useState,useEffect } from "react";

export const Dashboard =() =>{
    const[count,setCount] = useState<number>(0);
    const[text,setText] = useState<string>('');

    useEffect(()=>{
        console.log('Side Effect Running : Component Mount or Count Changed to : ', count);

        //cleanup Simulation
        return() => {
            console.log("Clean up Running : Unmounting or cleaning up the old state for count : ", count);
        }
    },[count])

    const handleBatchingTest = () =>{
        // 🧠 Interview Trap: If count is 0, what will count be after clicking this?
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    const handleFunctionalUpdateTest =() =>{
        // 🧠 The Solution to bypass batching snapshots
        setCount(prev => prev +1);
        setCount(prev => prev +1);
        setCount(prev => prev +1);
    }
    return(
        <>
            <div style={{padding: '2rem', fontFamily : 'sans-serif'}}>
                <h2>DocMind Phase1</h2>
                <hr />

                <h3>Counter State : {count}</h3>
                <button onClick={handleBatchingTest}>Batching Test (+1 or +3)</button>
                <button onClick={handleFunctionalUpdateTest} style={{marginLeft: '10px'}}>Functioanl Update Test</button>

                <div>
                    <h3>Controlled Input State Tracking : </h3>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Type something..." />
                    <p>Live Mirrors : <strong>{text}</strong></p>
                </div>
            </div>
        </>
    );
};