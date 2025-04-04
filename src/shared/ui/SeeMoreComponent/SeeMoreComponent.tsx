//react
import { FC, ReactNode, useState, useRef, useEffect } from "react";
// assets
import ChevronDown from "@/shared/libs/assets/svg/chevron_down.svg?react";
// styles
import styles from "./SeeMoreComponent.module.scss";

interface SeeMoreComponentProps {
  children: ReactNode;
  maxHeight?: number;
  className?: string;
  topTextButton: string;
  bottomTextButton: string;
}

export const SeeMoreComponent: FC<SeeMoreComponentProps> = ({
  children,
  className = "",
  maxHeight = 0,
  bottomTextButton,
  topTextButton,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpand, setNeedsExpand] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setNeedsExpand(contentRef.current.scrollHeight > maxHeight);
    }
  }, [children, maxHeight]); // Викликається при зміні контенту або maxHeight

  return (
    <div className={`${styles.seeMoreContainer} ${className}`}>
      <div
        ref={contentRef}
        className={styles.seeMoreContent}
        style={{
          maxHeight: isExpanded ? "none" : maxHeight,
          overflow: isExpanded ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
      {needsExpand && ( // Рендеримо кнопку тільки якщо треба
        <button
          className={styles.seeMoreButton}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronDown className={isExpanded ? styles.rotate : ""} />
          {isExpanded ? topTextButton : bottomTextButton}
        </button>
      )}
    </div>
  );
};

// // react
// import { FC, ReactNode, useState } from "react";
// //assets
// import ChevronDown from "@/shared/libs/svg/chevron_down.svg?react";
// // styles
// import styles from "./SeeMoreComponent.module.scss";

// interface SeeMoreComponentProps {
//   children: ReactNode;
//   maxHeight?: number;
//   className?: string;
//   topTextButton: string;
//   bottomTextButton: string;
// }

// export const SeeMoreComponent: FC<SeeMoreComponentProps> = ({
//   children,
//   className,
//   maxHeight,
//   bottomTextButton,
//   topTextButton,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const toggleExpand = () => setIsExpanded((prev) => !prev);

//   return (
//     <div className={`${styles.seeMoreContainer} ${className || ""}`}>
//       <div
//         className={styles.seeMoreContent}
//         style={{ maxHeight: isExpanded ? "none" : `${maxHeight}px` }}
//       >
//         {children}
//       </div>
//       <div className={styles.seeMoreButton} onClick={toggleExpand}>
//         {isExpanded ? (
//           <div className={styles.lessbtn}>
//             <div className={styles.lessIcon}>
//               <ChevronDown />
//             </div>
//             <div>{topTextButton}</div>
//           </div>
//         ) : (
//           <div className={styles.moreBtn}>
//             <div className={styles.moreIcon}>
//               <ChevronDown />
//             </div>
//             <div>{bottomTextButton}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
