import { Button, ButtonGroup } from "@wordpress/components";
import { AdvancedIconControl } from "../advanced-icon-control";
const { __ } = wp.i18n;
const { useState } = wp.element;

export const AdvancedButtonGruopControl = props => {
	const {
		schemaName,
		data,
		setAttributes,
		initial,
		customClassName,
		icon = false
	} = props;
	const [value, setValue] = useState(initial);
	const btnClass = "components-icon-button components-toolbar__control";

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onClick = event => {
		setValue(event.target.value);
		saveValue.bind(null, schemaName, event.target.value)();
	};

	const createButtons = label => {
		return (
			<Button
				onClick={onClick}
				value={label}
				className={
					value === label ? `${btnClass} is-active` : `${btnClass}`
				}
			>
				{__(`${label}`, "wp-simple-spreadsheet-fetcher-for-google")}
			</Button>
		);
	};

	const createIconButtons = label => {
		return (
			<Button
				onClick={onClick}
				value={label}
				className={
					value === label ? `${btnClass} is-active` : `${btnClass}`
				}
			>
				<AdvancedIconControl icon={label} />
			</Button>
		);
	};

	let buttonControls;
	if (icon) {
		buttonControls = data.map(createIconButtons);
	} else {
		buttonControls = data.map(createButtons);
	}
	return (
		<ButtonGroup className={customClassName}>{buttonControls}</ButtonGroup>
	);
};
