import './ImageList.css';
import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';

const ImageList = props => {
  const { images } = props;
  const imgArray = images.map(e => <ImageCard key={e.id} image={e} />);

  return <div className="image-list">{imgArray}</div>;
};

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
