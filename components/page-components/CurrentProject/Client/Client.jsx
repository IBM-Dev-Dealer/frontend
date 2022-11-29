import PickDate from "../../../atoms/PickDate/PickDate";
import style from "./Client.module.scss";
import { useState } from "react";
import Avatar from "../../../atoms/Avatar/Avatar";

const Client = ({
  logo = "",
  name = "",
  startDate = "",
  endDate = "",
  project = "",
  dateDisabled = false,
}) => {
  const [date, setDate] = useState({ startDate: null, endDate: null });

  // Function formatDate - for testing string date mock
  const formatDate = (d) => {
    if (!d) return null;
    const formatDateNum = (num) => (num > 9 ? num : `0${num}`);
    const day = formatDateNum(d.getDate());
    const month = formatDateNum(d.getMonth() + 1);
    const year = d.getFullYear();

    return day + "." + month + "." + year;
  };

  const onDateChange = (comingDate, type) => {
    setDate({
      ...date,
      [type]: comingDate,
    });
  };

  return (
    <div className={style.client}>
      <Avatar alt={name} src={logo} round isInNextConfig />
      <div className={style.details}>
        <div className={style.name}>{name}</div>
        <div className={style.date}>
          <PickDate
            inputLabel={formatDate(date.startDate) || startDate}
            selected={date.startDate || new Date(startDate)}
            onChange={(date) => onDateChange(date, "startDate")}
            disabled={dateDisabled}
            todayButton='Starting date'
          />
          <PickDate
            inputLabel={formatDate(date.endDate) || endDate}
            selected={date.endDate}
            onChange={(date) => onDateChange(date, "endDate")}
            disabled={dateDisabled}
            todayButton='Ending date'
          />
        </div>
        {project}
      </div>
    </div>
  );
};

export default Client;
