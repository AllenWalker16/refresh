const { useState } = require("react");

function ThisWorks(){
    const [value, setValue] = useState(66);
    function increment(){
        setValue(value + 66);
    }
    return (
        <div>
            <p>{value}</p>
            <button>Click Me!</button>
        </div>
    )
}