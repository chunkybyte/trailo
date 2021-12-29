// styled components
import { useEffect, useState } from "react";

const Button = (): any => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {console.log('Test');}, [counter]);

    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}>Nothing to click {counter}</button>
        </div>
    );
}

export default Button;