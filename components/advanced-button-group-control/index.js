import { Button, ButtonGroup } from "@wordpress/components";
const { __ } = wp.i18n;

export const AdvancedButtonGruopControl = props => {
	const { schemaName, setAttributes, attributes } = props;
	const { fontUnit } = attributes;

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onClick = event => {
		saveValue.bind(null, schemaName, event.target.value)();
	};

	const createButtons = label => {
		return (
			<Button
				onClick={onClick}
				value={label}
				className={fontUnit === label ? "is_active" : ""}
			>
				{__(`${label}`, "wp-simple-spreadsheet-fetcher-for-google")}
			</Button>
		);
	};
	const buttonControls = ["px", "em", "rem"].map(createButtons);
	return <ButtonGroup>{buttonControls} </ButtonGroup>;
};
