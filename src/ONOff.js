 import React, { useState } from 'react';


 const ONOff  = () =>{
     const [on,setOn] = useState(true);
 const toggle = () => setOn(!on);
        return (
            <div>
            <button onClick={toggle}>{on? 'ON' : 'OFF'}</button>
            </div>
        );
    };

    export default ONOff;