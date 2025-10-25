'use client'
import { useState } from "react";

export default function ClickButton(){
    const [clicks, setClicks] = useState(0);

    function handleClick() {
    setClicks(clicks + 1);
  }

  return <button onClick={handleClick}>Click me! ({clicks})</button>
}