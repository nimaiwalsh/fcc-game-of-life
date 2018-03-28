import React from 'react';
import {
  defaultStyle,
  transitionStyles,
  duration
} from './Instructions_styles';
import { Transition } from 'react-transition-group';

const Instructions = props => {
  return (
    <Transition
      in={props.display}
      timeout={duration}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <aside className={defaultStyle} style={{ ...transitionStyles[state] }}>
          <p>
            The Game of Life, also known simply as Life, is a cellular automaton
            devised by the British mathematician John Horton Conway in 1970.
          </p>
          <p>
            The "game" is a zero-player game, meaning that its evolution is
            determined by its initial state, requiring no further input. One
            interacts with the Game of Life by manipulating blocks and observing
            how it evolves, or, for advanced "players", by creating patterns
            with particular properties.
          </p>
          <p>
            Use the <strong>buttons</strong> on at the top of the board to <strong>pause</strong>, <strong>clear</strong>, <strong>resume</strong> and <strong>speedup</strong> the generation. To create a new random board, click one of the
            board size buttons at the bottom of the screen.
          </p>
          <p>
            Each block on the grid is in one of two possible states, alive or
            dead, or "populated" or "unpopulated". Each generation, every cell
            interacts with its eight neighbours, which are the cells that are
            horizontally, vertically, or diagonally adjacent. At each step in
            time, the following transitions occur:
          </p>
          <ol>
            <li>
              Any live cell with fewer than two live neighbours dies, as if
              caused by underpopulation.
            </li>
            <li>
              Any live cell with two or three live neighbours lives on to the
              next generation.
            </li>
            <li>
              Any live cell with more than three live neighbours dies, as if by
              overpopulation.
            </li>
            <li>
              Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </li>
          </ol>
          <p>
            For more information see the following <a
              href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
              target="_blank">
              article
            </a>
          </p>
        </aside>
      )}
    </Transition>
  );
};

export default Instructions;
