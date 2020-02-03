const { ColorPalette } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

export const AdvancedColorPalleteControl = props => {
	const { schemaName, setAttributes, attributes } = props;

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onClick = color => {
		saveValue.bind(null, schemaName, color)();
	};

	return <ColorPalette value={attributes[schemaName]} onChange={onClick} />;
};
