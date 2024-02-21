import { useState } from 'react';
import { createPortal } from 'react-dom';

import Image from '@/components/Image';

import { CustomPdfProps } from './types';

const CustomPdf: React.FC<CustomPdfProps> = ({ pdfUrl, previewUrl }) => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const imageStyles = {
    cursor: 'pointer',
  };

  const openPdf = () => {
    setIsPdfOpen(true);
  };

  const closePdf = () => {
    setIsPdfOpen(false);
  };

  return (
    <>
      {isPdfOpen && createPortal(<iframe src={pdfUrl} title="test" width="100%" height="500px" />, document.body)}
      <Image image={previewUrl} onClick={openPdf} style={imageStyles} />
    </>
  );
};

export default CustomPdf;
