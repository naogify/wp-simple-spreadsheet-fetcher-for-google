import { Button, ButtonGroup } from "@wordpress/components";
import { AdvancedIconControl } from "../advanced-icon-control";
import { __ } from "@wordpress/i18n";
const { useState } = wp.element;

export const AdvancedButtonGruopControl = (props) => {
	const {
		schemaName,
		data,
		setAttributes,
		attributes,
		customClassName,
		icon = false,
	} = props;
	const [value, setValue] = useState(attributes[schemaName]);
	const btnClass = "components-icon-button components-toolbar__control";

	const onClick = (event) => {
		setValue(event.target.value);
		setAttributes({ [schemaName]: event.target.value });
	};

	const createButtons = (label, index) => {
		return (
			<Button
				onClick={onClick}
				value={label}
				className={
					value === label ? `${btnClass} is-pressed` : `${btnClass}`
				}
				key={index}
			>
				{__(`${label}`, "wp-simple-spreadsheet-fetcher-for-google")}
			</Button>
		);
	};

	const createIconButtons = (label, index) => {
		return (
			<Button
				onClick={onClick}
				value={label}
				className={
					value === label ? `${btnClass} is-pressed` : `${btnClass}`
				}
				key={index}
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
