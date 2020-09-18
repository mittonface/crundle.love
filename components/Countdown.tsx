import React, { useEffect, useState } from "react";

import moment from "moment";

const CountDown = () => {
  const weddingTime = moment(
    "28-08-2021 00:00:00",
    "DD-MM-YYYY HH:mm:ss"
  ).unix();

  let now = moment().unix();
  let diffTime = weddingTime - now;
  let duration = moment.duration(diffTime * 1000, "milliseconds");

  const [days, setDays] = useState(
    Math.floor(moment.duration(duration).asDays())
  );
  const [hours, setHours] = useState(moment.duration(duration).hours());
  const [minutes, setMinutes] = useState(moment.duration(duration).minutes());
  const [seconds, setSeconds] = useState(moment.duration(duration).seconds());

  useEffect(() => {
    const interval = setInterval(() => {
      now = moment().unix();
      diffTime = weddingTime - now;
      duration = moment.duration(diffTime * 1000, "milliseconds");
      setDays(Math.floor(moment.duration(duration).asDays()));
      setHours(moment.duration(duration).hours());
      setMinutes(moment.duration(duration).minutes());
      setSeconds(moment.duration(duration).seconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1 ">{days}</span>
          <span className="label ">Day{days != 1 ? "s" : ""}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1">{hours}</span>{" "}
          <span className="label">Hour{hours != 1 ? "s" : ""}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow mb-4 mb-lg-0 p-3">
          <span className="counter text-primary mb-1">{minutes}</span>{" "}
          <span className="label">Minute{minutes != 1 ? "s" : ""}</span>
        </div>
      </div>
      <div className="col">
        <div className="card card-body countdown-shadow p-3">
          <span className="counter text-primary mb-1">{seconds}</span>{" "}
          <span className="label">Second{seconds != 1 ? "s" : ""}</span>
        </div>
      </div>
    </>
  );
};

export default CountDown;
