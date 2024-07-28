// src/DateTimeDisplay.jsx
import React, { useState, useEffect } from "react";

const DateComponent = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Use `false` for 24-hour format
    });
  };

  return (
    <div>
      <h3>{formatDate(dateTime)}</h3>
      <h3>{formatTime(dateTime)}</h3>
    </div>
  );
};

export default DateComponent;
