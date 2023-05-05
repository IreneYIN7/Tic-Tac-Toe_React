import './App.css';
import { useState, useEffect} from 'react';



function Timer({time, color}){
    return(
        <h1 style = {{color : color}}>
            {time}
        </h1>
    );
}

function useTime(){
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
      }, []);
      return time;
}

export default function TimeComponent(){
    const curTime = useTime();
    const [color, setColor] = useState('lightcoral');
    return(
        <div>
            <p>
                Pick a color:{' '}
                <select value = {color} onChange={e => setColor(e.target.color)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>

                </select>
            </p>
            <Timer 
            color = {color}
            time = {curTime.toLocaleTimeString()}
            />
        </div>
    );
}