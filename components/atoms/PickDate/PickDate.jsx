import DatePicker from 'react-datepicker';
import { datePicker } from './PickDate.module.scss';

const PickDate = ({ dateFormat, ...props }) => {
  return <DatePicker className={datePicker} dateFormat={dateFormat} {...props} />;
};

export default PickDate;

PickDate.defaultProps = {
  dateFormat: 'dd.MM.yyyy',
};
