import { render } from "@wordpress/element";
import { Popover } from "@wordpress/components";
import { FonSizeControl } from "../font-size-control";

// export default () => {
const app = document.getElementById("app");

render(
	<div>
		<FonSizeControl />
		<Popover.Slot />
	</div>,
	app
);
// };
