import { Button, Popover } from "@wordpress/components";
import { withState } from "@wordpress/compose";

export const MyPopover = withState({
	isVisible: false
})(({ isVisible, setState }) => {
	const toggleVisible = () => {
		setState(state => ({ isVisible: !state.isVisible }));
	};
	return (
		<Button isSecondary onClick={toggleVisible}>
			Toggle Popover!
			{isVisible && (
				<Popover>
					Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!Popover is
					toggled!Popover is toggled!Popover is toggled!
				</Popover>
			)}
		</Button>
	);
});
