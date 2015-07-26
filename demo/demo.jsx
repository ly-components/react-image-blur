import React from 'react';
import BlurImage from '../src/index';

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      radius: 5
    };
    this.handleRadiusChange = this.handleRadiusChange.bind(this);
  }
  handleRadiusChange(e) {
    let radius = parseInt(e.target.value);
    if(radius > 20 || radius < 0)
      return alert('请输入0~20之间的数字');
    this.setState({
      radius: radius
    });
  }
  render() {
    return (
      <div>
        <BlurImage radius={this.state.radius} alphaChannel={false} src="http://lingyucoder-demo.qiniudn.com/imgsliders_1.jpg"></BlurImage>,
        <div>
          <input value={this.state.radius} min={0} max={20} type="number" onChange={this.handleRadiusChange}></input>
        </div>
      </div>
    )
  }
}

React.render(
  <Demo/>,
  document.getElementById('demo')
);
