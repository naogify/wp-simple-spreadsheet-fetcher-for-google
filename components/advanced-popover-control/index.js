const { Button, Popover, Dashicon, BaseControl, IconButton } = wp.components;
const { Fragment, useState, createRef, Component, setState } = wp.element;

export class AdvancedPopOverControl extends Component {
	constructor() {
		super(...arguments);
		this.state = { visible: false };
		this.buttonRef = createRef();
	}
	render() {
		const popverBtnClass = "apc-icon-btn";

		const onValueChange = (key, value) => {
			this.props.setAttributes({ [key]: !value });
		};

		const popoverVisible = event => {
			const isKeywordInString = (str, keyword) => {
				return str.indexOf(keyword) !== -1;
			};

			const getTarget = async event => {
				if (
					event.currentTarget !== null &&
					event.currentTarget !== false &&
					event.type !== undefined
				) {
					return {
						type: event.type,
						className: event.currentTarget.className
					};
				} else {
					return false;
				}
			};

			getTarget(event).then(target => {
				let open =
					target &&
					target.type === "click" &&
					isKeywordInString(target.className, popverBtnClass) &&
					!isKeywordInString(target.className, "has-text");

				if (open) {
					console.log(
						isKeywordInString(target.className, "has-text")
					);
					console.log(target.type);
					console.log(target.className);
					console.log(open);

					this.setState(state => {
						return { visible: !state.visible };
					});
					onValueChange.bind(
						null,
						this.schemaName,
						!this.state.visible
					)();
				}
			});
		};

		return (
			<Fragment>
				<Button
					isSecondary
					className={popverBtnClass}
					onClick={popoverVisible}
				>
					<h3>{this.props.label}</h3>
				</Button>
				<IconButton
					className={popverBtnClass}
					icon="edit"
					label="More"
					ref={this.buttonRef}
					onClick={popoverVisible}
				>
					{this.state.visible && (
						<Popover
							anchorRef={this.buttonRef.current}
							onFocusOutside={popoverVisible}
						>
							{this.props.renderComp}
						</Popover>
					)}
				</IconButton>
			</Fragment>
		);
	}
}
