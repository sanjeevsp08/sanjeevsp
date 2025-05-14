import React ,{useEffect} from 'react';

function DelayedAlert() {
    useEffect(() => {
        const timer = setTimeout(() => {
            alert('Hello after 3 seconds⏳');
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <div>
            <h1>Wait for the alert</h1>;
        </div>
    );
}

export default DelayedAlert;