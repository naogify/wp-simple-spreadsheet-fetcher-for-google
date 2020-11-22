import { __ } from "@wordpress/i18n";
const { useState } = wp.element;
const { Toolbar } = wp.components;

export const AdvancedAlignControl = props => {
	const { schemaName, setAttributes, initial } = props;
	const [activeControl, setActiveControl] = useState(initial);

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	function createAlignControl(align) {
		return {
			icon: `editor-align${align}`,
			title: __(`Align ${align}`, "wp-simple-spreadsheet-fetcher-for-google"),
			isActive: activeControl === align,
			onClick: () => {
				setActiveControl(align);
				saveValue.bind(null, schemaName, align)();
			}
		};
	}
	return (
		<Toolbar
			controls={["left", "center", "right"].map(createAlignControl)}
		/>
	);
};
