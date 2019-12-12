const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl, PanelBody, ServerSideRender} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

registerBlockType('wp2s2fg/fetcher-item', {
    title: __('Fetcher Item', 'wp2s2fg'),
    parent: [['wp2s2fg/fetcher'], ['wp2s2fg/fetcher-advanced']],
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
        sheetId: {
            type: 'string',
            default: '',
        },
        sheetName: {
            type: 'string',
            default: '',
        },
        sheetRange: {
            type: 'string',
            default: '',
        }
    },

    edit(props) {
        const {sheetId, sheetName, sheetRange, attributes, setAttributes} = props;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Fetch Data Setting', 'wp2s2fg')} initialOpen={true}>
                        <TextControl
                            label={__(`Sheet URL`, 'wp2s2fg')}
                            value={sheetId}
                            onChange={(newUrl) => setAttributes({sheetId: newUrl === undefined ? 'none' : newUrl})}
                            initialOpen={true}
                        />
                        <TextControl
                            label={__(`Sheet Name`, 'wp2s2fg')}
                            value={sheetName}
                            onChange={(newName) => setAttributes({sheetName: newName === undefined ? 'none' : newName})}
                            initialOpen={true}
                        />
                        <TextControl
                            label={__(`Range`, 'wp2s2fg')}
                            value={sheetRange}
                            onChange={(newRange) => setAttributes({sheetRange: newRange === undefined ? 'none' : newRange})}
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
