import React, {Component} from 'react';

export default class WebView extends Component {

  constructor(props) {
    super(props);
    this.preload = "./webview/facebook.js?service=";
  }

  render() {
    if (this.props.index === 0) {
      return (
        <div className="tab-pane services__webview is-active" id={this.props.partition}>
          <div>
            <webview
              src={this.props.src}
              partition={'persist:'+this.props.partition}
              preload={'./webview/facebook.js'}
              autosize={'on'}
              name={this.props.name}/>
          </div>
        </div>
      )

    } else {
      return (
        <div className="tab-pane services__webview" id={this.props.partition}>
          <div>
            <webview
              src={this.props.src}
              partition={'persist:'+this.props.partition}
              preload="./webview/whatsapp.js"
              autosize={'on'}
              name={this.props.name}
            />
          </div>
        </div>
      )
    }
  }
}
