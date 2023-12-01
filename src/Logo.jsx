import { useState, useEffect } from "react";
import "./App.css";

function Logo() {
  const [pqText, setPqText] = useState("p");
  const [pqMirror, setPqMirror] = useState("q");
  const [x, setX] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [xxx, setxxx] = useState(0);
  const [positionCompare, setPositionCompare] = useState([0, 0]);

  const chars1 = "abcdefghijklmnoppppppppqrstuvwxyz";
  function randomLetter(chars) {
    let result = "";
    const letterPicked = Math.floor(Math.random() * chars.length);
    result = chars[letterPicked];
    return result;
  }

  useEffect(() => {
    setPqMirror(pqText);
  }, [pqText]);

  onmousemove = (event) => {
    setX(event.clientX);
  };

  const changeSpeed = 20;

  useEffect(() => {
    const interval1 = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, changeSpeed);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const realX = x;
    const interval = setInterval(() => {
      setxxx(realX);
      setPositionCompare([xxx, positionCompare[0]]);
      diffo(numDiff(positionCompare));
    }, changeSpeed);
    return () => clearInterval(interval);
  }, [seconds]);

  function diffo(num) {
    if (num > 50) {
      setPqText(randomLetter(chars1));
    } else {
      setPqText(randomLetter("p"));
    }
  }

  function numDiff(arr) {
    if (arr[0] > arr[1]) {
      return arr[0] - arr[1];
    } else {
      return arr[1] - arr[0];
    }
  }

  return (
    <div className="pqText">
      <p>{pqText}</p>
      <p className="pqMirror">{pqMirror}</p>
    </div>
  );
}

export default Logo;
