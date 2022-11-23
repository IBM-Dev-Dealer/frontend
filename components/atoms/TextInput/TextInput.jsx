import { ErrorMessage, useField } from "formik";
import classNames from "classnames";
import "./TextInput.module.scss";
import {
	text_input__colors,
	form__field,
	label__color,
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

	const containerTailwindClass = "pt-4 w-full mt-2.5 relative";
	const inputTailwindClass =
		"w-full border-0 border-b-4 outline-0 text-base py-3.5 px-0 bg-transparent transition-colors";
	const labelTailwindClass = "absolute top-0 block text-sm transition-all";

	return (
		<div className={containerTailwindClass}>
			<input
				disabled={disabled}
				className={
					!meta.error || !meta.touched
						? classNames(inputTailwindClass, text_input__colors, form__field)
						: classNames(
								inputTailwindClass,
								text_input__colors,
								form__field,
								form__field__error
						  )
				}
				type={props.type}
				id={id}
				placeholder={placeholder}
				{...field}
				autoComplete="false"
			/>
			<label
				className={
					!meta.error || !meta.touched
						? classNames(labelTailwindClass, label__color, form__label)
						: classNames(
								labelTailwindClass,
								label__color,
								form__label,
								form__label__error
						  )
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
