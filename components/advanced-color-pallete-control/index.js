const { ColorPalette } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

export const AdvancedColorPalleteControl = props => {
	const { schemaName, setAttributes } = props;

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onClick = event => {
		saveValue.bind(null, schemaName, event.target.value)();
	};

	return <ColorPalette value={schemaName} onChange={onClick} />;
};
