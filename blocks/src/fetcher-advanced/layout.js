const {__} = wp.i18n;
const {InnerBlocks, RichText} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

export class EventRegistrationAdvance extends React.Component {

    render() {
        const {setAttributes, className, attributes} = this.props.props;
        const {price, after, caption} = attributes;
        const for_ = this.props.for_;
        const ALLOWED_BLOCKS = ['wp2s2fg/fetcher-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {

            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_event-advance`}>
                    <div className={`wp2s2fg_fetcher-advanced_description`}>
                        <RichText
                            tagName="h4"
                            className={'wp2s2fg_fetcher-advanced_caption'}
                            onChange={(value) => setAttributes({caption: value})}
                            value={caption}
                            placeholder={__('General Participant', 'wp-simple-spreadsheet-fetcher-for-google')}
                        />
                        <RichText
                            tagName="p"
                            className={'wp2s2fg_fetcher-advanced_price'}
                            onChange={(value) => setAttributes({price: value})}
                            value={price}
                            placeholder={__('Free', 'wp-simple-spreadsheet-fetcher-for-google')}
                        />
                    </div>
                    <div className={`wp2s2fg_fetcher-advanced_number_container`}>
                        <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
                        <span className={'wp2s2fg_fetcher-advanced_number_line'}>/</span>
                        <RichText
                            tagName="p"
                            className={'wp2s2fg_fetcher-advanced_number_after'}
                            onChange={(value) => setAttributes({after: value})}
                            value={after}
                            placeholder={__('100', 'wp-simple-spreadsheet-fetcher-for-google')}
                        />
                    </div>
                </div>
            );
        }else if(for_ === 'save'){

            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_event-advance`}>
                    <div className={`wp2s2fg_fetcher-advanced_description`}>
                        <RichText.Content
                            tagName="h4"
                            className={'wp2s2fg_fetcher-advanced_caption'}
                            value={caption}
                        />
                        <RichText.Content
                            tagName="p"
                            className={'wp2s2fg_fetcher-advanced_price'}
                            value={price}
                        />
                    </div>
                    <div className={`wp2s2fg_fetcher-advanced_number_container`}>
                        <InnerBlocks.Content/>
                        <span className={'wp2s2fg_fetcher-advanced_number_line'}>/</span>
                        <RichText.Content
                            tagName="p"
                            className={'wp2s2fg_fetcher-advanced_number_after'}
                            value={after}
                        />
                    </div>
                </div>
            );
        }
    }
}

export class EventRegistrationSimple extends React.Component {

    render() {
        const {setAttributes, className, attributes} = this.props.props;
        const {caption} = attributes;
        const for_ = this.props.for_;
        const ALLOWED_BLOCKS = ['wp2s2fg/fetcher-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {
            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_event-simple`}>
                    <div className={`wp2s2fg_fetcher-advanced_description`}>
                        <RichText
                            tagName="h4"
                            className={'wp2s2fg_fetcher-advanced_caption'}
                            onChange={(value) => setAttributes({caption: value})}
                            value={caption}
                            placeholder={__('General Participant', 'wp-simple-spreadsheet-fetcher-for-google')}
                        />
                    </div>
                    <div className={`wp2s2fg_fetcher-advanced_number_container`}>
                        <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
                    </div>
                </div>
            );
        }else if(for_ === 'save'){

            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_event-simple`}>
                    <div className={`wp2s2fg_fetcher-advanced_description`}>
                        <RichText.Content
                            tagName="h4"
                            className={'wp2s2fg_fetcher-advanced_caption'}
                            value={caption}
                        />
                    </div>
                    <div className={`wp2s2fg_fetcher-advanced_number_container`}>
                        <InnerBlocks.Content/>
                    </div>
                </div>
            );
        }
    }
}

export class Minimum extends React.Component {
    render() {
        const {className} = this.props.props;
        const for_ = this.props.for_;
        const ALLOWED_BLOCKS = ['wp2s2fg/fetcher-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {
            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_minimum`}>
                    <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
                </div>
            );
        }else if(for_ === 'save'){
            return (
                <div className={`${className} wp2s2fg_fetcher-advanced_container wp2s2fg_fetcher-advanced_minimum`}>
                    <InnerBlocks.Content/>
                </div>
            );
        }
    }
}
