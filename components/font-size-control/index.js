const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { withState } = wp.compose;

export const FonSizeControl = withState({
	columns: 2
})(({ columns, setState }) => (
	<RangeControl
		label={__(
			"Fixd Table Width",
			"wp-simple-spreadsheet-fetcher-for-google"
		)}
		value={columns}
		onChange={columns => setState({ columns })}
		min={2}
		max={10}
		allowReset={true}
	/>
));
