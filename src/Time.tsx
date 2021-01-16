import React, { useEffect, useState } from "react";

let c = 0;

export default function Time({ defaultTime, getTime }: any) {
  const [time, setTime] = useState<any>();
  useEffect(() => {
    const i = setInterval(() => {
      const t = c++;
      setTime(t);
      getTime(t);
    }, 1000);
    return () => clearInterval(i);
  });
  useEffect(() => {
    setTime(defaultTime);
  }, [defaultTime]);
  return (
    <div style={{ display: "block", width: "100vw", height: "100vh" }}>
      <div>
        input:
        <input
          onChange={(e) => {
            setTime(e.target.value);
            getTime(e.target.value);
          }}
        ></input>
      </div>
      <div>time:{time}</div>
    </div>
  );
}
