import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { image } = this.props;
    const { spans } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img
          ref={this.imageRef}
          alt={image.description}
          src={image.urls.regular}
        />
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.object,
};
