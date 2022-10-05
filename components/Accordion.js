import React from 'react';
import SVG from './SVG';

export default class Accordion extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			maxHeight: 0,
		};
		this.bodyWrapperRef = React.createRef();
	}
	componentDidUpdate(prevProps){

		if(prevProps.expanded !== this.props.expanded || prevProps.body !== this.props.body){

			this.setState({
				maxHeight: (this.props.expanded ? this.bodyWrapperRef.current.scrollHeight+'px' : 0)
			});
		}
	}
    render(){
		const Tag = (this.props.tag ? this.props.tag : 'div')
		const HeadingTag = (this.props.heading_tag ? this.props.heading_tag : 'h6')
		const classes = `accordion border-[1px]` +
			(this.props.expanded ? ' expanded' : '') +
			(this.props.classes ? ` ${this.props.classes}` : '')

		return (
			<Tag className={classes} {...this.props.attr}>
				<header className="flex-row items-center content-space-between">
					<HeadingTag className="flex-row items-center p-3 font-['basier_circle_semibold']">				
						{this.props.heading}
					</HeadingTag>
					<button type="button" className="flex items-center justify-end toggle"
					onClick={this.props.toggleExpand}>
						<SVG name={'chevron_left'} classes={'w-5 h-5 mr-2 transition-transform duration-300'} attr={{
							style: {transform: `rotate(${this.props.expanded ? '-90' : '0'}deg)`}
						}}/>
						<span className="sr-only">Toggle accordion</span>
					</button>
				</header>
				<div className="body-wrapper" ref={this.bodyWrapperRef}
				style={{'maxHeight': this.state.maxHeight}}>
					<div className="p-3 body">
						{this.props.body}
					</div>
				</div>
			</Tag>
		);
    }
}

Accordion.defaultProps = {
	heading: 'Heading',
	body: 'Lorem ipsum',
	expanded: false, // Boolean
	toggleExpand: () => {alert('Please set the toggle expand')},
	tag: 'div',
	heading_tag: 'h6',
	classes: '',
	attr: {}
}