import React, { InputHTMLAttributes } from "react";
type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
};
export const Input = React.forwardRef<HTMLInputElement, InputPropsType>((props, ref) => {
	const { label, id, required, ...rest } = props;
	return (
		<>
			<div className="form-group mb-3">
				<label htmlFor={id} className="form-label">
					{label}
				</label>
				<input
					className="form-control form-control-lg form-custom-control"
					placeholder={label}
					id={id}
					{...rest}
					ref={ref}
				/>
			</div>
		</>
	);
});
