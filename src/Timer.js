import React, {useState} from 'react';
/*
* Таймер написан на react.js, пожалуйста добавьте данный файл в src проекта и импортируйте его
*/
const Timer = () => {

    const [running, setRunning] = useState(null)
    const [value, setValue] = useState(0)
    const [remainingTime, setRemainingTime] = useState(0)

    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value);
    }

    const onClickHandler = () => {
        setRemainingTime(value);
        setValue(0);

        if (value > 0 && running === null) {
            const intervalId = setInterval(() => {
                setRemainingTime((tik) => {
                    if (tik > 0) {
                        return tik - 1;
                    } else {
                        clearInterval(intervalId);
                        setRunning(null);
                        return 0;
                    }
                });
            }, 1000);

            setRunning(intervalId);
        }
    };

    const errorMessage = running === null && value <= 0 ? 'Please enter a valid value' : ''
    const formattedTime = new Date(remainingTime * 1000).toISOString().substr(11, 8);

    return (
        <>
            <input
                value={value}
                type="number"
                onChange={onChangeHandler}
            />
            <button
                disabled={value < 0}
                onClick={onClickHandler}
            >
                {running ? 'stop & reset' : 'start'}
            </button>
            <br/>
            <span>{errorMessage}</span>
            <br/>
            <span>{formattedTime}</span>
        </>
    );
};

export default Timer;