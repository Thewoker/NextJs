import React, { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp, onExpire }) {
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire });

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[#ff0000] rounded-2xl max-md:w-screen">
      <div className="text-6xl font-mono flex gap-5 text-white">
        <div className="text-center">
            <p className="text-xl text-center text-black">Días</p>
            {days}
        </div>
        <div className="text-center">
            <p className="text-xl text-center text-black">Horas</p>
            {hours}
        </div>
        <div className="text-center">
            <p className="text-xl text-center text-black">Minutos</p>
            {minutes}
        </div>
        <div className="text-center">
            <p className="text-xl text-center text-black">Segundos</p>
            {seconds}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const calculateExpiryTimestamp = () => {
    const storedExpiry = localStorage.getItem('expiryTimestamp');
    if (storedExpiry) {
      return new Date(storedExpiry);
    } else {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 14 * 24 * 60 * 60); // 14 days timer
      localStorage.setItem('expiryTimestamp', time);
      return time;
    }
  };

  const [expiryTimestamp, setExpiryTimestamp] = useState(calculateExpiryTimestamp());

  const timeOutFunction = () => {
    console.log('Timer expired!');
    localStorage.removeItem('expiryTimestamp');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      if (now >= expiryTimestamp) {
        timeOutFunction();
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [expiryTimestamp]);

  return (
    <div>
      <MyTimer expiryTimestamp={expiryTimestamp} onExpire={timeOutFunction} />
    </div>
  );
}
