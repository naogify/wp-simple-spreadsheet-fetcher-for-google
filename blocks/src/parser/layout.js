import React from 'react';

const {__} = wp.i18n;
const {InnerBlocks, RichText} = wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;

export class EventRegistrationAdvance extends React.Component {

    render() {
        const {setAttributes, className, attributes} = this.props.props;
        const {price, after, caption} = attributes;
        const for_ = this.props.for_;
        const ALLOWED_BLOCKS = ['wp2s2fg/parser-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {

            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_event-advance`}>
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
            );
        }else if(for_ === 'save'){

            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_event-advance`}>
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
        const ALLOWED_BLOCKS = ['wp2s2fg/parser-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {
            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_event-simple`}>
                    <div className={`wp2s2fg_parser_description`}>
                        <RichText
                            tagName="h4"
                            className={'wp2s2fg_parser_caption'}
                            onChange={(value) => setAttributes({caption: value})}
                            value={caption}
                            placeholder={__('General Participant', 'wp2s2fg')}
                        />
                    </div>
                    <div className={`wp2s2fg_parser_number_container`}>
                        <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
                    </div>
                </div>
            );
        }else if(for_ === 'save'){

            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_event-simple`}>
                    <div className={`wp2s2fg_parser_description`}>
                        <RichText.Content
                            tagName="h4"
                            className={'wp2s2fg_parser_caption'}
                            value={caption}
                        />
                    </div>
                    <div className={`wp2s2fg_parser_number_container`}>
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
        const ALLOWED_BLOCKS = ['wp2s2fg/parser-item'];
        const TEMPLATE = [ALLOWED_BLOCKS];

        if(for_ === 'edit') {
            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_minimum`}>
                    <InnerBlocks template={TEMPLATE} allowedBlocks={ALLOWED_BLOCKS} templateLock={'all'}/>
                </div>
            );
        }else if(for_ === 'save'){
            return (
                <div className={`${className} wp2s2fg_parser_container wp2s2fg_parser_minimum`}>
                    <InnerBlocks.Content/>
                </div>
            );
        }
    }
}
