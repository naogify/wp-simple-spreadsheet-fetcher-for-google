const { __ } = wp.i18n;
const { ToggleControl } = wp.components;
import React, { useState } from "react";

function Counter({ initialFixedBackground, label }) {
	// Count state.
	const [hasFixedBackground, setHasFixedBackground] = useState(
		initialFixedBackground
	);

	return (
		<ToggleControl
			label={__(`${label}`, "wp-simple-spreadsheet-fetcher-for-google")}
			help={hasFixedBackground ? "Has fixed width." : "No fixed width."}
			checked={hasFixedBackground}
			onChange={() => setHasFixedBackground(!hasFixedBackground)}
		/>
	);
}
export default Counter;
