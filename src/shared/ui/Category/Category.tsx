// styles
import { FC, ReactNode, useState } from 'react';
import styles from './Category.module.scss';

interface CategoryProps {
  text:
    | 'Phones'
    | 'Computer'
    | 'SmartWatch'
    | 'Camera'
    | 'HeadPhones'
    | 'Gaming';
  icon: ReactNode;
}



export const Category: FC<CategoryProps> = ({ text, icon }) => {
  const [isColor, isSetColor] = useState(false);
  
  const onClickCategory = () => {
    isSetColor(!isColor);
  }


  return (
    <div onClick={onClickCategory} style={{backgroundColor: isColor ? 'red' : '', color: isColor ? 'white' : '', userSelect: 'none'}} className={styles.Category}>
      


      <div className={styles.icon}>{icon}</div>
      <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: '24px' }}>
        {text}
      </div>
    </div>
  );
};
