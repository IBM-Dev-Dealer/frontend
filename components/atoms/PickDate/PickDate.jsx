import DatePicker from 'react-datepicker';
import { datePicker } from './PickDate.module.scss';

const PickDate = ({ selectedDate, onSelectDate, onDateChange, dateFormat, showTimeSelect }) => {
  return (
    <DatePicker
      className={datePicker}
      selected={selectedDate}
      onSelect={onSelectDate}
      onChange={onDateChange}
      dateFormat={dateFormat}
      showTimeSelect={showTimeSelect}
    />
  );
};

export default PickDate;

PickDate.defaultProps = {
  selectedDate: new Date(),
  dateFormat: 'Pp',
  showTimeSelect: false,
};
