import { useContext } from 'react';

import { RuntimeStateAPIContext } from '@/contexts';

import { Container, Description } from './styled';

export interface CustomLegalInfoProps {
  privacyPolicyUrl: string;
}

const CustomLegalInfo: React.FC<CustomLegalInfoProps> = () => {
  const { customConfig } = useContext(RuntimeStateAPIContext);
  return (
    <>
      {customConfig.privacyPolicyUrl && (
        <Container>
          <Description>
            Durch die Nutzung dieses Service stimmst du den{' '}
            <a target="_blank" href={customConfig.privacyPolicyUrl} rel="noreferrer">
              Datenschutzrichtlinien
            </a>{' '}
            zu.
          </Description>
        </Container>
      )}
    </>
  );
};

export default Object.assign(CustomLegalInfo, {
  Container,
  Description,
});
