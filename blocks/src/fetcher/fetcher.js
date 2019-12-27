const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl, PanelBody, ServerSideRender} = wp.components;
const {Fragment} = wp.element;
const {RichText, InspectorControls} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

registerBlockType('wp2s2fg/fetcher', {
    title: __('Fetcher', 'wp-simple-spreadsheet-fetcher-for-google'),
    icon: 'smiley',
    category: 'wp2s2fg-blocks-cat',
    supports: {
        className: true,
        html: false,
    },
    styles: [
        {
            name: 'wp2s2fg-fetcher-default',
            label: __('Default', 'wp-simple-spreadsheet-fetcher-for-google'),
            isDefault: true
        },
        {
            name: 'wp2s2fg-fetcher-line',
            label: __('Line', 'wp-simple-spreadsheet-fetcher-for-google'),
        },
        {
            name: 'wp2s2fg-fetcher-none',
            label: __('None', 'wp-simple-spreadsheet-fetcher-for-google'),
        }
    ],
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
                        label={__(`Sheet URL`, 'wp-simple-spreadsheet-fetcher-for-google')}
                        value={sheetId}
                        onChange={(newUrl) => setAttributes({sheetId: newUrl === undefined ? 'none' : newUrl})}
                        initialOpen={true}
                    />
                    <TextControl
                        label={__(`Sheet Name`, 'wp-simple-spreadsheet-fetcher-for-google')}
                        value={sheetName}
                        onChange={(newName) => setAttributes({sheetName: newName === undefined ? 'none' : newName})}
                        initialOpen={true}
                    />
                    <TextControl
                        label={__(`Range`, 'wp-simple-spreadsheet-fetcher-for-google')}
                        value={sheetRange}
                        onChange={(newRange) => setAttributes({sheetRange: newRange === undefined ? 'none' : newRange})}
                        initialOpen={true}
                    />
                </Fragment>;
            } else {
                return <TextControl
                    label={__(`Please set the range to fetch data in A1 notation. Example : Sheets1!A1:E`, 'wp-simple-spreadsheet-fetcher-for-google')}
                    value={range}
                    onChange={(newRange) => setAttributes({range: newRange === undefined ? 'none' : newRange})}
                    initialOpen={true}
                />
            }
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Fetch Data Setting', 'wp-simple-spreadsheet-fetcher-for-google')} initialOpen={true}>
                        {renderSettings()}
                    </PanelBody>
                </InspectorControls>
                <ServerSideRender
                    block='wp2s2fg/fetcher'
                    attributes={attributes}
                />
            </Fragment>
        );
    },

    save() {
        return null;
    }
});
