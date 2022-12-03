import PickDate from "../../../atoms/PickDate/PickDate";
import Link from "next/link";
import { useState } from "react";
import Avatar from "../../../atoms/Avatar/Avatar";
import InfoNote from "../../../atoms/InfoNote/InfoNote";
import { ROUTES } from "../../../../utils/utils";
import { PlusIcon } from "@heroicons/react/20/solid";

const Client = ({
  logo = "",
  name = "",
  startDate = "",
  endDate = "",
  project = "",
  dateDisabled = false,
}) => {
  const [date, setDate] = useState({ startDate: new Date(startDate), endDate: new Date(endDate) });

  // Function formatDate - for testing string date mock
  const formatDate = (d) => {
    // if (!d) return null;
    // const formatDateNum = (num) => (num > 9 ? num : `0${num}`);
    // const day = formatDateNum(d.getDate());
    // const month = formatDateNum(d.getMonth() + 1);
    // const year = d.getFullYear();

    // return day + "." + month + "." + year;

    return new Date(d).toLocaleDateString("RO-ro");
  };

  const onDateChange = (comingDate, type) => {
    setDate({
      ...date,
      [type]: comingDate,
    });
  };

  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <Avatar alt={name} src={logo} round isInNextConfig />
        <div className='flex flex-col justify-between'>
          <div className='text-xl'>{name}</div>
          <div className='flex justify-between items-center w-72'>
            <PickDate
              inputLabel={formatDate(date.startDate) || startDate}
              selected={date.startDate}
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
            <InfoNote message='Project duration' />
          </div>
          {project}
        </div>
      </div>
      <Link
        className='flex h-min p-3 rounded-xl shadow-md hover:bg-light-green'
        href={ROUTES.ADD_PROJECT}
      >
        <PlusIcon className='w-6 h-6' />
        <div className='max-md:hidden'> add project</div>
      </Link>
    </div>
  );
};

export default Client;
