import DatePicker from "react-datepicker";
import Button from "../Button/Button";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = ({
  label,
  isPeriod = false,
  placeholderSingle = "",
  placeholderPeriod = { start: "", end: "" },
  singleDateState,
  periodState,
}) => {
  return (
    <div>
      <div className='text-sm'>{label}</div>
      {isPeriod
        ? periodState && (
            <div className='flex'>
              <DatePicker
                selected={periodState.value.start}
                onChange={(date) => periodState.set({ start: date, end: periodState.value.end })}
                customInput={
                  <Button
                    type='button'
                    label={
                      periodState.value.start
                        ? periodState.value.start.toLocaleDateString("ro-RO")
                        : placeholderPeriod.start
                    }
                  />
                }
              />
              <div className='w-4' />
              <DatePicker
                selected={periodState.value.end}
                onChange={(date) => periodState.set({ start: periodState.value.start, end: date })}
                customInput={
                  <Button
                    type='button'
                    label={
                      periodState.value.end
                        ? periodState.value.end.toLocaleDateString("ro-RO")
                        : placeholderPeriod.end
                    }
                  />
                }
              />
            </div>
          )
        : singleDateState && (
            <div>
              <DatePicker
                selected={singleDateState.value}
                onChange={(date) => singleDateState.set(date)}
                customInput={
                  <Button
                    type='button'
                    label={
                      singleDateState.value
                        ? singleDateState.value.toLocaleDateString("ro-RO")
                        : placeholderSingle
                    }
                  />
                }
              />
            </div>
          )}
    </div>
  );
};

export default PickDate;
