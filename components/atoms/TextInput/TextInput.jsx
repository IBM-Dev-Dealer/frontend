import { ErrorMessage, useField } from 'formik';
import classNames from 'classnames';
import {
  form__field,
  form__field__error,
  form__label,
  form__label__error,
  label__color,
  text_input__colors,
} from './TextInput.module.scss';

const containerTailwindClass = 'pt-8 w-full relative my-2';
const inputTailwindClass =
  ' w-full border-b-2 border-orangeade outline-0 text-sm pb-4 px-0 bg-transparent transition-colors transition-all text-sm';
const labelTailwindClass = 'absolute top-0 block text-sm transition-all';

const TextInput = ({
  placeholder,
  labelText,
  id,
  disabled,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  value,

  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className={containerTailwindClass}>
      <input
        // onChange={onChange}
        // onKeyDown={onKeyDown}
        // value={value}
        disabled={disabled}
        className={
          !meta.error || !meta.touched
            ? classNames(inputTailwindClass, text_input__colors, form__field)
            : classNames(inputTailwindClass, text_input__colors, form__field, form__field__error)
        }
        type={props.type}
        id={id}
        placeholder={placeholder}
        {...field}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete='false'
      />
      <label
        className={
          !meta.error || !meta.touched
            ? classNames(labelTailwindClass, label__color, form__label)
            : classNames(labelTailwindClass, label__color, form__label, form__label__error)
        }
        htmlFor={id}
      >
        {!meta.error || !meta.touched ? labelText : <ErrorMessage name={props.name} />}
      </label>
    </div>
  );
};
export default TextInput;
