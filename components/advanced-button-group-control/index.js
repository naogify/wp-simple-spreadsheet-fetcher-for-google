import { Button, ButtonGroup } from "@wordpress/components";
const { __ } = wp.i18n;
const { useState } = wp.element;

export const AdvancedButtonGruopControl = props => {
	const { schemaName, data, setAttributes, attributes, initial } = props;
	const [value, setValue] = useState(initial);

	console.log(attributes);
	console.log(attributes[schemaName]);
	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onClick = event => {
		setValue(value);
		saveValue.bind(null, schemaName, event.target.value)();
	};

	const createButtons = label => {
		return (
			<Button
				onClick={onClick}
				value={attributes[schemaName]}
				className={value === label ? "is_active" : ""}
			>
				{__(`${label}`, "wp-simple-spreadsheet-fetcher-for-google")}
			</Button>
		);
	};
	const buttonControls = data.map(createButtons);
	return <ButtonGroup>{buttonControls} </ButtonGroup>;
};
