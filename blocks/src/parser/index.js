const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl,PanelBody} = wp.components;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import {EventRegistrationLayoutAdvance, EventRegistrationSimple, Minimum} from "./layout";

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
								{label: __('Event Registration Advance', 'wp2s2fg'), value: 'event-registration-advance'},
								{label: __('Event Registration Simple', 'wp2s2fg'), value: 'event-registration-simple'},
								{label: __('Minimum', 'wp2s2fg'), value: 'minimum'},
							]}
							onChange={(value) => {
								setAttributes({layout: value})
							}}
						>
						</SelectControl>
					</PanelBody>
				</InspectorControls>
				{layout === 'event-registration-advance' && <EventRegistrationLayoutAdvance
					props={props}
					for_={'edit'}
				/>}
				{layout === 'event-registration-simple' && <EventRegistrationSimple
					props={props}
					for_={'edit'}
				/>}
				{layout === 'minimum' && <Minimum
					props={props}
					for_={'edit'}
				/>}
			</Fragment>
		);
	},

	save(props) {
		const {layout} = props.attributes;
		return (
			<Fragment>
				{layout === 'event-registration-advance' && <EventRegistrationLayoutAdvance
					props={props}
					for_={'save'}
				/>}
				{layout === 'event-registration-simple' && <EventRegistrationSimple
					props={props}
					for_={'save'}
				/>}
				{layout === 'minimum' && <Minimum
					props={props}
					for_={'save'}
				/>}
			</Fragment>
		);
	}
});
