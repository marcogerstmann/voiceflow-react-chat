import { useContext } from 'react';

import { RuntimeStateAPIContext } from '@/contexts';

export interface CustomLegalInfoProps {
  privacyPolicyUrl: string;
}

const CustomLegalInfo: React.FC<CustomLegalInfoProps> = () => {
  const { customConfig } = useContext(RuntimeStateAPIContext);
  return (
    <p>Die URL: {customConfig.privacyPolicyUrl}</p>
    // <Container>
    //   <Avatar size="large" avatar={avatar} />
    //   <Title>{title}</Title>
    //   <Description>{description}</Description>
    // </Container>
  );
};

export default CustomLegalInfo;
// export default Object.assign(AssistantInfo, {
//   Container,
//   Title,
//   Description,
// });
