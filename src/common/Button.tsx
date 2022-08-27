import React, { ButtonHTMLAttributes } from "react";

type BtnPropsType = {
	label: string;
	width?: string;
	isLoading?: boolean;
	mode?: "Primary" | "Secondary";
};
export function Button({
	isLoading = false,
	label,
	width,
	mode = "Primary",
}: BtnPropsType & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<React.Fragment>
			{!isLoading ? (
				<button
					className={`${
						mode === "Primary" ? "btn__primary" : "btn__add"
					} app-btn ${width}`}
				>
					{label}
				</button>
			) : (
				<button className={`btn__primary app-btn ${width}`} disabled={true}>
					<span>
						en_cours &nbsp; <i className="fas fa-spin fa-spinner"></i>
					</span>
				</button>
			)}
		</React.Fragment>
	);
}
