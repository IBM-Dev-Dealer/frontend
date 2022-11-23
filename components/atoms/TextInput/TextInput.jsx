import { ErrorMessage, useField } from "formik";
import classNames from "classnames";
import "./TextInput.module.scss";
import {
	input_class,
	form__field,
	input_label,
	form__label,
	form__field__error,
	form__label__error,
} from "./TextInput.module.scss";

const TextInput = ({
	placeholder,
	labelText,
	id,
	disabled,

	...props
}) => {
	const [field, meta] = useField(props);

	// const date = new Date();
	return (
		<div className="pt-4 w-4/5 mt-2.5 relative">
			<input
				disabled={disabled}
				className={
					!meta.error || !meta.touched
						? classNames(input_class, form__field)
						: classNames(input_class, form__field, form__field__error)
				}
				// max={props.type === "date" ? moment(date).format("YYYY-MM-DD") : ""}  <-is left here just in case i want to block some dates
				type={props.type}
				id={id}
				placeholder={placeholder}
				{...field}
				autoComplete="false"
			/>
			<label
				className={
					!meta.error || !meta.touched
						? classNames(input_label, form__label)
						: classNames(input_label, form__label, form__label__error)
				}
				htmlFor={id}
			>
				{!meta.error || !meta.touched ? (
					labelText
				) : (
					<ErrorMessage name={props.name} />
				)}
			</label>
		</div>
	);
};
export default TextInput;
