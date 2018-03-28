import { css } from 'react-emotion';

export const duration = 300;
const startPosition = '100vh';
const endPosition = '-50%';

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
  top: 50%;
  transform: translateY(${startPosition});
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  transition: transform ${duration}ms ease-in-out;
`