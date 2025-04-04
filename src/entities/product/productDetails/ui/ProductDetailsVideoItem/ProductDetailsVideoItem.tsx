// react
import { FC, useState } from "react";
//types
import { IUserUploadedVideo } from "../../model/details";
//ui
import { VideoModal } from "@/widgets/VideoModal";
//assets
import StopVideoIcon from "@/shared/libs/assets/svg/stopVideoIcon.svg?react";
// styles
import styles from "./ProductDetailsVideoItem.module.scss";

interface ProductDetailsVideoItemProps {
  visibleVideo: IUserUploadedVideo;
}

export const ProductDetailsVideoItem: FC<ProductDetailsVideoItemProps> = ({
  visibleVideo,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <div
        key={visibleVideo.id}
        className={styles.singleVideoBlock}
        onClick={() => handleVideoClick(visibleVideo.video_url)}
      >
        <div className={styles.imageAndIcon}>
          <img
            src={visibleVideo.video_image_url}
            alt="customer video"
            className={styles.customerVideo}
          />
          <div className={styles.stopVideoIcon}>
            <StopVideoIcon />
          </div>
        </div>

        <div className={styles.authorInfoBlock}>
          <img
            src={visibleVideo.profile_image_url}
            alt="img"
            className={styles.authorImg}
          />
          <div className={styles.titleAndName}>
            <div className={styles.Reviewtitle}>{visibleVideo.title}</div>
            <div className={styles.publicName}>{visibleVideo.public_name}</div>
          </div>
        </div>
      </div>
      {selectedVideo && (
        <VideoModal videoUrl={selectedVideo} onClose={handleCloseModal} />
      )}
    </>
  );
};
