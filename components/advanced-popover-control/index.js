import { Button, Popover, Dashicon } from "@wordpress/components";
const { Fragment, useState } = wp.element;

export const AdvancedPopOverControl = props => {
	const { label, schemaName, initial, render, setAttributes } = props;
	const [visible, setVisible] = useState(initial);

	const onValueChange = (key, value) => {
		setAttributes({ [key]: !value });
	};

	const toggleVisible = event => {
		setVisible(!visible);
		onValueChange.bind(null, schemaName, visible)();
	};
	return (
		<Fragment>
			{!visible ? (
				<Fragment>
					<Button isSecondary onClick={toggleVisible}>
						<h3>{label}</h3>
						<Dashicon icon={"edit"} />
					</Button>
				</Fragment>
			) : (
				<Fragment>
					<h3>{label}</h3>
					<Dashicon icon={"edit"} />
					<Popover onFocusOutside={toggleVisible}>{render}</Popover>
				</Fragment>
			)}
		</Fragment>
	);
};
