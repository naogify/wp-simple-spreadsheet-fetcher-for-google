const { __ } = wp.i18n;
const { ToggleControl } = wp.components;
import { withState } from "@wordpress/compose";

// export default withState({
// 	hasFixedBackground: false
// })(({ hasFixedBackground, setState }) => (
// 	<ToggleControl
// 		label={__(
// 			"Fixd Table Width",
// 			"wp-simple-spreadsheet-fetcher-for-google"
// 		)}
// 		help={hasFixedBackground ? "Has fixed width." : "No fixed width."}
// 		checked={hasFixedBackground}
// 		onChange={() =>
// 			setState(state => ({
// 				hasFixedBackground: !state.hasFixedBackground
// 			}))
// 		}
// 	/>
// ));

import React, { useEffect, useState } from "react";

function Counter({ initialCount, test }) {
	// Count state.
	const [count, setCount] = useState(initialCount);

	console.log(test);

	// Update count every second.
	useEffect(() => {
		const updateCount = () => setCount(count => count + 1);

		const intervalID = window.setInterval(updateCount, 1000);

		return () => {
			window.clearInterval(intervalID);
		};
	}, []);

	return <p>{count} seconds, and counting!</p>;
}

export default Counter;

// export default props => (
// 	<ToggleControl
// 		label={__(`${props.label}`, "wp-simple-spreadsheet-fetcher-for-google")}
// 		// help={hasFixedBackground ? "Has fixed width." : "No fixed width."}
// 		checked={hasFixedBackground}
// 		onChange={() =>
// 			setState(state => ({
// 				hasFixedBackground: !state.hasFixedBackground
// 			}))
// 		}
// 	/>
// );
