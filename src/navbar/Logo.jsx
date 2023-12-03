import { useState, useEffect } from "react";
import "../styles/App.css";

function Logo() {
  const [pqText, setPqText] = useState("p");
  const [pqMirror, setPqMirror] = useState("p");
  const [y, setY] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [yyy, setyyy] = useState(0);
  const [positionCompare, setPositionCompare] = useState([0, 0]);

  const chars1 = "abcdefghijklmnoppppppppqrstuvwxyz";
  const chars2 = "1234567890!?{}[]()|/@£$%&";
  const chars3 = "<>,.:;'-=+_~*";

  function randomLetter(speed) {
    let result = "";

    if (speed > 300) {
      const letterPicked = Math.floor(Math.random() * chars1.length);
      const letterPicked2 = Math.floor(Math.random() * chars2.length)
      const letterPicked3 = Math.floor(Math.random() * chars3.length)
      result = chars3[letterPicked3] + chars2[letterPicked2] ;
    } else if (speed > 300) {
      const letterPicked = Math.floor(Math.random() * chars1.length);
      const letterPicked2 = Math.floor(Math.random() * chars2.length)
      const letterPicked3 = Math.floor(Math.random() * chars3.length)
      result = chars2[letterPicked2] + chars1[letterPicked] + chars3[letterPicked3] ;
    }
    else if (speed > 200) {
      const letterPicked = Math.floor(Math.random() * chars1.length);
      const letterPicked2 = Math.floor(Math.random() * chars3.length)
      result = chars3[letterPicked2] + chars1[letterPicked] ;
    } else if (speed > 100) {
      const letterPicked = Math.floor(Math.random() * chars1.length);
      const letterPicked2 = Math.floor(Math.random() * chars3.length)
      result = chars1[letterPicked]+ chars3[letterPicked2] ;
    } else if (speed > 20) {
      const letterPicked = Math.floor(Math.random() * chars1.length);
      result = chars1[letterPicked];
    }  else {
      result = "p"
    }
    return setPqText(result);
  }

  useEffect(() => {
    setPqMirror(pqText);
  }, [pqText]);

  // onmousemove = (event) => {
  //   setX(event.clientX);
  //   // console.log(event.clientX)
  // };

  onscroll = (event) => {
    setY(scrollY);
  };

  const changeSpeed = 25;

  useEffect(() => {
    const interval1 = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, changeSpeed);
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const realY = y;
    const interval = setInterval(() => {
      setyyy(realY);
      setPositionCompare([yyy, positionCompare[0]]);
      randomLetter(numDiff(positionCompare));
    }, changeSpeed);
    return () => clearInterval(interval);
  }, [seconds]);

  // function diffo(num) {
  //   if (num > 50) {
  //     setPqText(randomLetter(num));
  //   } else {
  //     setPqText(randomLetter("p"));
  //   }
  // }

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
