const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { SelectControl, PanelBody } = wp.components;
const { Fragment } = wp.element;
const { InspectorControls } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import {
	EventRegistrationAdvance,
	EventRegistrationSimple,
	Minimum
} from "./layout";

registerBlockType("wp2s2fg/fetcher-advanced", {
	title: __("Fetcher Advanced", "wp-simple-spreadsheet-fetcher-for-google"),
	icon: "smiley",
	category: "wp2s2fg-blocks-cat",
	supports: {
		className: true,
		html: false
	},
	attributes: {
		className: {
			type: "string",
			default: ""
		},
		caption: {
			source: "html",
			selector: "h4.wp2s2fg_fetcher-advanced_caption"
		},
		price: {
			source: "html",
			selector: "p.wp2s2fg_fetcher-advanced_price"
		},
		after: {
			source: "html",
			selector: "p.wp2s2fg_fetcher-advanced_number_after"
		},
		layout: {
			type: "string",
			default: "event-registration-simple"
		}
	},

	edit(props) {
		const { setAttributes, attributes } = props;
		const { layout } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label={__(
								"Select Layout",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							value={layout}
							options={[
								{
									label: __(
										"Event Registration Simple",
										"wp-simple-spreadsheet-fetcher-for-google"
									),
									value: "event-registration-simple"
								},
								{
									label: __(
										"Event Registration Advanced",
										"wp-simple-spreadsheet-fetcher-for-google"
									),
									value: "event-registration-advanced"
								}
							]}
							onChange={value => {
								setAttributes({ layout: value });
							}}
						></SelectControl>
					</PanelBody>
				</InspectorControls>
				{layout === "event-registration-simple" && (
					<EventRegistrationSimple props={props} for_={"edit"} />
				)}
				{layout === "event-registration-advanced" && (
					<EventRegistrationAdvance props={props} for_={"edit"} />
				)}
			</Fragment>
		);
	},

	save(props) {
		const { layout } = props.attributes;
		return (
			<Fragment>
				{layout === "event-registration-simple" && (
					<EventRegistrationSimple props={props} for_={"save"} />
				)}
				{layout === "event-registration-advanced" && (
					<EventRegistrationAdvance props={props} for_={"save"} />
				)}
			</Fragment>
		);
	}
});
