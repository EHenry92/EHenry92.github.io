import React from 'react';

class Carousel extends React.Component {
    state = {
      currentDataIdx: 0,
      itemLength: 0,
    }

    componentWillMount (){
      const imageL = this.props.images.length;
      this.setState({currentDataIdx: 0, itemLength: imageL});
      setInterval(() => {
        if (imageL > 1) {
          const {itemLength} = this.state;
          let { currentDataIdx} = this.state;
          currentDataIdx++;
          if (currentDataIdx >= itemLength) {currentDataIdx = 0;}
          this.setState({currentDataIdx})
        }
      }, 3500);
    }

    render = () => {
      return (
        <img className='carousel-image' src={this.props.images[this.state.currentDataIdx]} />
      )
    }
  };

  export default Carousel;
