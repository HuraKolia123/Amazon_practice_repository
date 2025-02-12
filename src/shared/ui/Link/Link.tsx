// react
import { Link as ReactRouterLink } from 'react-router-dom';
import { FC } from 'react';
// libs
import classNames from 'classnames';
// styles
import styles from './Link.module.scss';

interface LinkProps {
  colorVariant: 'white' | 'red';
  isUnderLine?: boolean;
  text: string;
  to: string;
}

export const Link: FC<LinkProps> = ({
  colorVariant,
  isUnderLine,
  text,
  to,
}) => {
  return (
    <ReactRouterLink
      to={to}
      className={classNames(styles.Link, {
        [styles.LinkRed]: colorVariant === 'red',
        [styles.LinkWhite]: colorVariant === 'white',
        [styles.underline]: isUnderLine,
      })}
    >
      {text}
    </ReactRouterLink>
  );
};
