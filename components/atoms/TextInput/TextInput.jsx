import { ErrorMessage, useField } from "formik";
import classNames from "classnames";
import {
  form__field,
  form__field__error,
  form__label,
  form__label__error,
  label__color,
  text_input__colors,
} from "./TextInput.module.scss";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

const containerTailwindClass = "pt-8 w-full relative my-2 flex gap-2";
const inputTailwindClass =
  " w-full border-b-2 border-orangeade outline-0 text-sm pb-4 px-0 bg-transparent transition-colors transition-all text-sm flex grow";
const labelTailwindClass = "absolute top-0 block text-sm transition-all";

const TextInput = ({
  placeholder = "",
  labelText,
  id,
  disabled,
  onChange,
  onKeyDown,
  onFocus,
  onBlur,
  value,
  clearValue,

  ...props
}) => {
  const [field, meta] = useField(props);
  const inputRef = useRef();

  return (
    <div className={containerTailwindClass}>
      <div className='flex grow'>
        <input
          ref={inputRef}
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
          onChange={onChange ? onChange : field.onChange}
          onKeyDown={onKeyDown ?? null}
          value={value ? value : field.value}
          onFocus={onFocus ? onFocus : null}
          onBlur={onBlur ? onBlur : field.onBlur}
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
      {clearValue && (
        <XCircleIcon
          onClick={() => {
            clearValue(inputRef);
          }}
          className={`cursor-pointer w-6 h-6 hover:scale-125 active:opacity-20 active:scale-50 self-end fill-gray
          absolute bottom-2.5 right-0`}
        />
      )}
    </div>
  );
};
export default TextInput;
