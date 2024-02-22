import { CustomCalendlyProps } from './types';

const CustomCalendly: React.FC<CustomCalendlyProps> = ({ url }) => {
  const iframeStyles = {
    borderRadius: 8,
  };

  return <iframe className="calendly-embed" title="Termin buchen" src={url} style={iframeStyles} />;
};

export default CustomCalendly;
