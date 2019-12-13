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
        inserter:false
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
        },
        //This attributes is deprecated since v0.2.8.
        range: {
            type: 'string',
            default: '',
        }
    },

    edit(props) {
        const {attributes, setAttributes} = props;
        const {range, sheetId, sheetName, sheetRange} = attributes;

        let renderSettings = () => {
            if (!range) {
                return <Fragment>
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
                </Fragment>;
            } else {
                return <TextControl
                    label={__(`Please set the range to fetch data in A1 notation. Example : Sheets1!A1:E`, 'wp2s2fg')}
                    value={range}
                    onChange={(newRange) => setAttributes({range: newRange === undefined ? 'none' : newRange})}
                    initialOpen={true}
                />
            }
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Fetch Data Setting', 'wp2s2fg')} initialOpen={true}>
                        {renderSettings()}
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
