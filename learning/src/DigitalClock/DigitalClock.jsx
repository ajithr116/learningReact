import React, {useState,useEffect} from 'react';
import DigitalClockCSS from './DigitalClock.module.css';

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interValid = setInterval(()=>{
            setTime(new Date)
        }, 1000);

        return ()=>{
            clearInterval(interValid);
        }

    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "pm" : "am";

        hours = hours%12 || 12;

        return `${hours} : ${minutes} : ${seconds} : ${meridiem}`;
    }
    return (
        <div className={DigitalClockCSS.clockContainer}>
            <div className={DigitalClockCSS.clock}>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}


export default DigitalClock;
