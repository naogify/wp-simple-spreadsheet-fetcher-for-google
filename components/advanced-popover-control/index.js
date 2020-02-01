import { Button, Popover } from "@wordpress/components";
const { Fragment, useState } = wp.element;

export const AdvancedPopOverControl = props => {
	const { label, schemaName, initial, render, setAttributes } = props;
	const [visible, setVisible] = useState(initial);

	const onValueChange = (key, value) => {
		setAttributes({ [key]: !value });
	};

	const toggleVisible = () => {
		setVisible(!visible);
		onValueChange.bind(null, schemaName, visible)();
	};
	return (
		<Fragment>
			<Button isSecondary onClick={toggleVisible}>
				<h3>{label}</h3>
			</Button>
			{visible && (
				<Popover onFocusOutside={toggleVisible}>{render}</Popover>
			)}
		</Fragment>
	);
};
