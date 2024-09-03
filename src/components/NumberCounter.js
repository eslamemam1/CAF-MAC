import React, { useState, useEffect, useRef } from 'react';

function Counter({ targetNumber }) {
  const [count, setCount] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (isVisible) {
      intervalId = setInterval(() => {
        if (count < targetNumber) {
          setCount((prevCount) => prevCount + 1);
        }
      }, 10); // Change the interval as needed
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isVisible, count, targetNumber]);

  return (
    <div ref={counterRef}>
      <h2> {count}</h2>
    </div>
  );
}

export default Counter;
