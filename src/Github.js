import React from "react";
import "./Github.css";

export default function Github() {
  return (
    <div className="Github">
      <p id="github-link">
        <a
          href="https://github.com/Cuwein/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        &nbsp;by Iortyom Queen Torkwase&nbsp;
        <a
          href="https://weather-react-fdb3.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Vercel
        </a>
      </p>
    </div>
  );
}
