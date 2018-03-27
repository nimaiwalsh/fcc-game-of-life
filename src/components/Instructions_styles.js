import { css } from 'react-emotion';

export const duration = 300;
const startPosition = '50%';
const endPosition = '-110%';

export const transitionStyles = {
  entering: { transform: `translateY(${startPosition})` },
  entered: { transform: `translateY(${endPosition})` },
};

export const defaultStyle = css`
  background-color: #FFFFFF;
  width: 60%;
  padding: 40px;
  border: 4px solid #DF94A0;
  border-radius: 10px;
  position: absolute;
  transform: translateY(${startPosition});
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  transition: transform ${duration}ms ease-in-out;
`