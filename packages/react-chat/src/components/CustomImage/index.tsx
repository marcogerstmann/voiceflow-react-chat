import './react-modal-image-style.css';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Lightbox } from 'react-modal-image';

import Image from '@/components/Image';

import { CustomImageProps } from './types';

const CustomImage: React.FC<CustomImageProps> = ({ url, caption }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const imageStyles = {
    cursor: 'pointer',
  };

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <>
      {isImageOpen && createPortal(<Lightbox large={url} alt={caption} onClose={closeImage} />, document.body)}
      <Image image={url} onClick={openImage} style={imageStyles} />
    </>
  );
};

export default CustomImage;
