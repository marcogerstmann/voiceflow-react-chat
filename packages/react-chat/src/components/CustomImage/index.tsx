import Image from '@/components/Image';

import { CustomImageProps } from './types';

const CustomImage: React.FC<CustomImageProps> = ({ url }) => {
  console.log('the url', url);
  return <Image image={url} />;
};

export default CustomImage;
