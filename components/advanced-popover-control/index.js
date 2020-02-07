const { Button, Popover, IconButton } = wp.components;
const { Fragment, createRef, Component } = wp.element;
const { __ } = wp.i18n;

export class AdvancedPopOverControl extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.buttonRef = createRef();
	}

	render() {
		const popverBtnClass = "apc-icon-btn";

		const handleOpen = () => {
			this.setState({ open: !this.state.open });
		};

		const handleClose = () => {
			this.setState({ open: false });
		};

		const handleOnClickOutside = event => {
			if (
				event.relatedTarget &&
				!event.relatedTarget.closest(`.${popverBtnClass}`) &&
				event.relatedTarget !== this.buttonRef.current
			) {
				handleClose();
			}
		};

		return (
			<Fragment>
				<div className={"wssffg-button-icon-control__wrapper"}>
					<Button
						isSecondary
						className={popverBtnClass}
						onClick={handleOpen}
					>
						<h3>{this.props.label}</h3>
					</Button>
					<IconButton
						className={popverBtnClass}
						icon="edit"
						label={__(
							"More",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
						onClick={handleOpen}
						id={`wssffg-button-icon-control__edit`}
						ref={this.buttonRef}
					/>
					{this.state.open && this.buttonRef.current && (
						<Popover
							anchorRect={this.buttonRef.current.getBoundingClientRect()}
							children={this.props.renderComp}
							onFocusOutside={handleOnClickOutside}
						></Popover>
					)}
				</div>
			</Fragment>
		);
	}
}
