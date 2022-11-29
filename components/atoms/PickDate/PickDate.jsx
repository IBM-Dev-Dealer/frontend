import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "./DatePickerInput";

const PickDate = ({
  label,
  isPeriod = false,
  placeholderPeriod = { start: "", end: "" },
  periodState,
  inputLabel = "",
  placeholder = "",
  ...props
}) => {
  const getPeriodLabel = (value, placeholder) =>
    value ? value.toLocaleDateString("ro-RO") : placeholder;

  return (
    <div>
      <div className='text-sm'>{label}</div>
      {isPeriod ? (
        periodState && (
          <div className='flex'>
            <DatePicker
              selected={periodState.value.start}
              onChange={(date) => periodState.set({ start: date, end: periodState.value.end })}
              customInput={
                <DatePickerInput
                  label={getPeriodLabel(periodState.value.start, placeholderPeriod.start)}
                />
              }
            />
            <div className='w-4' />
            <DatePicker
              selected={periodState.value.end}
              onChange={(date) => periodState.set({ start: periodState.value.start, end: date })}
              customInput={
                <DatePickerInput
                  label={getPeriodLabel(periodState.value.end, placeholderPeriod.end)}
                />
              }
            />
          </div>
        )
      ) : (
        <DatePicker
          customInput={<DatePickerInput placeholder={placeholder} label={inputLabel} />}
          {...props}
        />
      )}
    </div>
  );
};

export default PickDate;
