( function( wp ) {
	/**
	 * Registers a new block provided a unique name and an object defining its behavior.
	 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
	 */
	let registerBlockType = wp.blocks.registerBlockType;
	/**
	 * Returns a new element of given type. Element is an abstraction layer atop React.
	 * @see https://github.com/WordPress/gutenberg/tree/master/element#element
	 */
	let el = wp.element.createElement;
	/**
	 * Retrieves the translation of text.
	 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
	 */
	let __ = wp.i18n.__;
	let ServerSideRender = wp.components.ServerSideRender;
	let InspectorControls = wp.editor.InspectorControls;
	let TextControl = wp.components.TextControl;

	/**
	 * Every block starts by registering a new block type definition.
	 * @see https://wordpress.org/gutenberg/handbook/block-api/
	 */
	registerBlockType( 'wp2s2fg/parser', {
		/**
		 * This is the display title for your block, which can be translated with `i18n` functions.
		 * The block inserter will show this name.
		 */
		title: __( 'Display Google Sheets Data', 'wp2s2fg' ),

		/**
		 * Blocks are grouped into categories to help users browse and discover them.
		 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
		 */
		category: 'widgets',

		/**
		 * Optional block extended support features.
		 */
		supports: {
			// Removes support for an HTML mode.
			html: false,
		},

		attributes: {
			range: {
				type: 'string',
				default: '',
			}
		},

		/**
		 * The edit function describes the structure of your block in the context of the editor.
		 * This represents what the editor will render when the block is used.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
		 *
		 * @param {Object} [props] Properties passed from the editor.
		 * @return {Element}       Element to render.
		 */
		edit: function( props ) {

			let range = props.attributes.range;

			function onChangeRange(newRange) {
				props.setAttributes({range: newRange === undefined ? 'none' : newRange});
			}

			return [
				el(
					InspectorControls,
					{key: 'inspector'},
					el(
						TextControl,
						{
							label: __("Please Select Range in A1 notation. Example : Sheets1!A2:E.", 'wp2s2fg'),
							value: range,
							onChange: onChangeRange,
						}
					)
				),
				el(ServerSideRender, {
				block: 'wp2s2fg/parser',
				attributes: props.attributes
				}),
			];
		},

		/**
		 * The save function defines the way in which the different attributes should be combined
		 * into the final markup, which is then serialized by Gutenberg into `post_content`.
		 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
		 *
		 * @return {Element}       Element to render.
		 */
		save: function () {
			return null;
		},
	} );
} )(
	window.wp
);
