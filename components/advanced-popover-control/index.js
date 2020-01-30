import { Button, Popover } from "@wordpress/components";
import { withState } from "@wordpress/compose";
const { Fragment, useCallback } = wp.element;
import { AdvancedRangeControl } from "../advanced-range-control";

export const AdvancedPopOverControl = props => {
	const { setAttributes, attributes, popoverLabel } = props;
	const { isVisible } = attributes;
	const toggleVisible = useCallback(() => {
		setAttributes({
			isVisible: !isVisible
		});
	}, [isVisible]);
	return (
		<Fragment>
			<Button isSecondary onClick={toggleVisible}>
				{popoverLabel}
			</Button>
			{isVisible && (
				<Popover onFocusOutside={toggleVisible}>
					<h3>Size</h3>
					<AdvancedRangeControl {...props} />
				</Popover>
			)}
		</Fragment>
	);
};
