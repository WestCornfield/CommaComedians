import React from 'react';

class Comedian extends React.Component {

  state = {
    img: this.props.img,
    staticImg: this.props.img,
    hoverImg: this.props.imgGIF
  }

  render() {
    return (
      <img src={this.state.img} onMouseEnter={() => {
        this.setState({
          img: this.state.hoverImg
        })
      }}

      onMouseOut={() => {
        this.setState({
          img: this.state.staticImg
        })
      }}
      className="gallery__img" alt={this.props.comic}></img>
    )
  }
}

export default Comedian;
