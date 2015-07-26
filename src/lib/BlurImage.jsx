import React from 'react';
import blur from './blur';

export default class BlurImage extends React.Component {
  static propTypes = {
    radius: React.PropTypes.number,
    alphaChannel: React.PropTypes.bool
  }
  static defaultProps = {
    radius: 5,
    alphaChannel: false
  }
  constructor() {
    super();
    this._blur = this._blur.bind(this);
  }
  _blur() {
    let img = React.findDOMNode(this);
    let {
      radius,
      alphaChannel
    } = this.props;
    var blurFn = function() {
      img.removeEventListener('load', blurFn);
      blur(img, radius, alphaChannel);
    };
    if (img.complete)
      blur(img, radius, alphaChannel);
    else
      img.addEventListener('load', blurFn);
  }
  componentDidMount() {
    this._blur();
  }
  componentDidUpdate() {
    let img = React.findDOMNode(this);
    img.setAttribute('src', this.props.src);
    this._blur();
  }
  render() {
    return (
      <img {...this.props} crossOrigin="anonymous"></img>
    );
  }
}
