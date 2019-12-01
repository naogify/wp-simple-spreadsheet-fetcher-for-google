const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl, PanelBody, ServerSideRender} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

registerBlockType('wp2s2fg/fetcher-item', {
    title: __('Fetcher Item', 'wp2s2fg'),
    parent: ['wp2s2fg/fetcher-advanced'],
    icon: 'smiley',
    category: 'wp2s2fg-blocks-cat',
    supports: {
        className: true,
        html: false,
    },
    attributes: {
        className: {
            type: 'string',
            default: '',
        },
        range: {
            type: 'string',
            default: '',
        }
    },

    edit(props) {
        const {range, attributes, setAttributes} = props;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Fetch Data Setting', 'wp2s2fg')}>
                        <TextControl
                            label={__(`Please set the cell in A1 notation. Example : Sheets1!A1`, 'wp2s2fg')}
                            value={range}
                            onChange={(newRange) => setAttributes({range: newRange === undefined ? 'none' : newRange})}
                            initialOpen={true}
                        />
                    </PanelBody>
                </InspectorControls>
                <ServerSideRender
                    block='wp2s2fg/fetcher-item'
                    attributes={attributes}
                />
            </Fragment>
        );
    },
    save() {
        return null;
    },
});
