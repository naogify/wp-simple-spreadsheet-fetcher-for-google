const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl, PanelBody, ServerSideRender} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

registerBlockType('wp2s2fg/parser-item', {
    title: __('Display Google Sheets Data Item', 'wp2s2fg'),
    parent: ['wp2s2fg/parser'],
    icon: 'smiley',
    category: 'widgets',
    supports: {
        className: true,
        html: false,
    },
    styles: [
        {
            name: 'wp2s2fg-default',
            label: __('Default', 'wp2s2fg'),
            isDefault: true
        },
        {
            name: 'wp2s2fg-border',
            label: __('Border', 'wp2s2fg'),
        }
    ],
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
                            label={__("Please Select Range in A1 notation. Example : Sheets1!A2", 'wp2s2fg')}
                            value={range}
                            onChange={(newRange) => setAttributes({range: newRange === undefined ? 'none' : newRange})}
                            initialOpen={true}
                        />
                    </PanelBody>
                </InspectorControls>
                <ServerSideRender
                    block='wp2s2fg/parser-item'
                    attributes={attributes}
                />
            </Fragment>
        );
    },
    save() {
        return null;
    },
});
