import React, {useState} from 'react';

export const OnOff = () => {


    const [on, setOn] = useState(true)

    const container = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'center',
        alignItems: 'center',
    }

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        cursor: 'pointer',
        backgroundColor: on ? 'green' : 'white',
    }

    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        padding: '5px',
        margin: '10px',
        cursor: 'pointer',
        backgroundColor: on ? 'white' : 'red'
    }

    const indicator = {
        border: '1px solid black',
        borderRadius: '30px',
        width: '20px',
        height: '20px',
        backgroundColor: on ? 'green' : 'red'
    }


    return (
        <div style={container}>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicator}></div>
        </div>
    );
};

