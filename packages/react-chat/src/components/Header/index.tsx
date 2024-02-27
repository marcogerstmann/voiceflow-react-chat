import { useContext } from 'react';
import { useCookies } from 'react-cookie';

import Avatar from '@/components/Avatar';
import Icon, { IconProps } from '@/components/Icon';
import { RuntimeStateAPIContext } from '@/contexts';

import { Button, Container, Title } from './styled';

export interface HeaderActionProps {
  /**
   * The name of the SVG icon that will be used for the button or a React component.
   *
   * @see {@link https://github.com/voiceflow/react-chat/tree/master/packages/react-chat/src/assets/svg the available icons}
   */
  svg: IconProps['svg'];

  /**
   * A callback that is executed when the button is clicked.
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface HeaderProps {
  /**
   * The name of your assistant or title of the conversation.
   */
  title: string;

  /**
   * An image URL that will be rendered as a small {@link Avatar}.
   */
  image: string;

  /**
   * A list of actions that will appear as icon buttons.
   */
  actions?: HeaderActionProps[];
}

const Header: React.FC<HeaderProps> = ({ title, image, actions = [] }) => {
  const { customConfig } = useContext(RuntimeStateAPIContext);
  console.log('the wordpress test local storage item', localStorage.getItem(customConfig.testCookieName as string));
  const [cookie, setCookie] = useCookies([customConfig.testCookieName as string]);
  console.log('the wordpress test cookie', cookie);
  return (
    <Container>
      <Avatar avatar={image} />
      <Title>{title}</Title>
      {actions.map(({ svg, onClick }, index) => (
        <Button onClick={onClick} key={index}>
          <Icon svg={svg} />
        </Button>
      ))}
    </Container>
  );
};

/**
 * Header for the chat widget with image, title and controls.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/docs/components-chat-header--simple}
 */
export default Object.assign(Header, {
  Container,
  Title,
  Button,
});
