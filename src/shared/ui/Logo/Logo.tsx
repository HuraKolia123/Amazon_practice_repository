// react
import { FC } from 'react';
import { Link } from 'react-router-dom';
// libs
import classNames from 'classnames';
import { getHomeRoute } from '@/shared/libs/constants/routes';
// styles
import styles from './Logo.module.scss';

interface LogoProps {
  color: 'black' | 'white';
}

export const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <Link
      to={getHomeRoute()}
      className={classNames(styles.Logo, {
        [styles.blackColor]: color === 'black',
        [styles.whiteColor]: color === 'white',
      })}
    >
      Exlusive
    </Link>
  );
};
