const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl,PanelBody} = wp.components;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import {EventRegistrationLayoutAdvance} from "./layout";

registerBlockType('wp2s2fg/parser', {
	title: __('Display Google Sheets Data', 'wp2s2fg'),
	icon: 'smiley',
	category: 'widgets',
	supports: {
		className:true,
		html: false,
	},
	attributes: {
		className: {
			type: 'string',
			default: '',
		},
		caption: {
			source: 'html',
			selector: 'h4.wp2s2fg_parser_caption',
		},
		price: {
			source: 'html',
			selector: 'p.wp2s2fg_parser_price',
		},
		after: {
			source: 'html',
			selector: 'p.wp2s2fg_parser_number_after',
		},
		layout: {
			type: 'string',
			default: 'event-registration-advance',
		},
	},

	edit(props) {
		const {setAttributes,attributes} = props;
		const {layout} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody>
						<SelectControl
							label={__('Select Layout', 'wp2s2fg')}
							value={layout}
							options={[
								{label: __('Minimum', 'wp2s2fg'), value: 'minimum'},
								{label: __('Event Registration Simple', 'wp2s2fg'), value: 'event-registration-simple'},
								{label: __('Event Registration Advance', 'wp2s2fg'), value: 'event-registration-advance'},
							]}
							onChange={(value) => {
								setAttributes({layout: value})
							}}
						>
						</SelectControl>
					</PanelBody>
				</InspectorControls>
				<EventRegistrationLayoutAdvance
					props={props}
					for_={'edit'}
				/>
			</Fragment>
		);
	},

	save(props) {
		return (
			<EventRegistrationLayoutAdvance
				props={props}
				for_={'save'}
			/>);
	}
});
