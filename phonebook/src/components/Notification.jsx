import { useEffect } from "react";
import styles from "./Notification.module.css";

export const Notification = ({ message, setMessage }) => {
	useEffect(() => {
		if (message === null) return;

		const timeout = setTimeout(() => {
			setMessage(null);
		}, 5000);

		return () => clearTimeout(timeout);
	}, [message, setMessage]);	

	if (message === null) return null;

	let borderStyle;
	let fontColorStyle;

	if (message.type === "success") {
		borderStyle = styles.borderIfSuccess;
		fontColorStyle = styles.fontColorIfSuccess;
	} else {
		borderStyle = styles.borderIfError;
		fontColorStyle = styles.fontColorIfError;
	}

	return (
		<div className={`${styles.Notification__Container} ${borderStyle}`}>
			<p className={`${styles.Notification__Message} ${fontColorStyle}`}>
				{message.content}
			</p>
		</div>
	);
};
