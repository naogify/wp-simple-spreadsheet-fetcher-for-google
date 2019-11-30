const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {SelectControl,PanelBody, ServerSideRender, TextControl} = wp.components;
const {Fragment} = wp.element;
const {InnerBlocks,RichText, InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

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
		const {setAttributes, className} = props;
		const {layout, price, after, caption} = props.attributes;
		const ALLOWED_BLOCKS = ['wp2s2fg/parser-item'];
		const TEMPLATE = [ALLOWED_BLOCKS];

		return (
			<Fragment>
				<InspectorControls>
					<SelectControl
						label={__('Display Google Sheets Data', 'wp2s2fg')}
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
				</InspectorControls>
				<div className={`${className} wp2s2fg_parser_container`}>
					<div className={`wp2s2fg_parser_description`}>
						<RichText
							tagName="h4"
							className={'wp2s2fg_parser_caption'}
							onChange={(value) => setAttributes({caption: value})}
							value={caption}
							placeholder={__('General Participant', 'wp2s2fg')}
						/>
						<RichText
							tagName="p"
							className={'wp2s2fg_parser_price'}
							onChange={(value) => setAttributes({price: value})}
							value={price}
							placeholder={__('Free', 'wp2s2fg')}
						/>
					</div>
					<div className={`wp2s2fg_parser_number_container`}>
						<InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
						<span className={'wp2s2fg_parser_number_line'}>/</span>
						<RichText
							tagName="p"
							className={'wp2s2fg_parser_number_after'}
							onChange={(value) => setAttributes({after: value})}
							value={after}
							placeholder={__('100', 'wp2s2fg')}
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save(props) {
		const {layout, price, after, caption} = props.attributes;

		return (
			<div className={`wp2s2fg_parser_container`}>
				<div className={`wp2s2fg_parser_description`}>
					<RichText.Content
						tagName="h4"
						className={'wp2s2fg_parser_caption'}
						value={caption}
					/>
					<RichText.Content
						tagName="p"
						className={'wp2s2fg_parser_price'}
						value={price}
					/>
				</div>
				<div className={`wp2s2fg_parser_number_container`}>
					<InnerBlocks.Content/>
					<span className={'wp2s2fg_parser_number_line'}>/</span>
					<RichText.Content
						tagName="p"
						className={'wp2s2fg_parser_number_after'}
						value={after}
					/>
				</div>
			</div>);
	}
});
