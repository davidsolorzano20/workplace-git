import React, {Component} from 'react';

export default class LinkServices extends Component {

	render() {
		if (this.props.index === 0) {
			return (
				<li className="tab-item nav-item active">
					<a className="nav-link" data-toggle="tab" href={'#'+this.props.link}>
						<img src={this.props.img} className="tab-item__icon" alt=""/>
						<span className="tab-item__message-count" id={this.props.id}>0</span>
					</a>
				</li>
			)
		} else {
			return (
				<li className="tab-item nav-item">
					<a className="nav-link" data-toggle="tab" href={'#'+this.props.link}>
						<img src={this.props.img} className="tab-item__icon" alt=""/>
						<span className="tab-item__message-count" id={this.props.id}>0</span>
					</a>
				</li>
			)
		}
	}
}
