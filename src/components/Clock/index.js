'use client'
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Center from '../Center';

const StyledClock = styled.div`
    color: #AAAAAA;
    font-size: 16px;
    display: flex;
    gap: 10px;
`;

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #222;
    margin: 0;
`;


export default function Clock () {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const getFormattedTime = () => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const getFormattedDate = () => {
    const year = time.getFullYear();
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (

    <Footer>
        <Center>
        <div style={{display:'flex', gap: 40}}>
        <StyledClock>
            <p>Date:</p>
            <p>{getFormattedDate()}</p>
        </StyledClock>
        <StyledClock>
            <p>Time:</p>
            <p>{getFormattedTime()}</p>
        </StyledClock>
        </div>

        </Center>
    </Footer>

  );
};
