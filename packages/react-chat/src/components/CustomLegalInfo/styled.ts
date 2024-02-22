import { CustomClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

const tag = tagFactory(CustomClassName.LEGAL_INFO);

export const Description = styled(tag('p', 'description'), {
  display: '-webkit-box',
  margin: 0,
  typo: {},
  color: '$darkGrey',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  wordBreak: 'break-word',
  fontSize: '$1',
});

export const Container = styled(tag('div'), {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '12px 32px',
  textAlign: 'center',
  marginBottom: '32px',
});
