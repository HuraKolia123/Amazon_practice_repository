//react
import { FC, useEffect, useRef } from "react";
//libs
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from "hls.js";
//assets
import Cross from "@/shared/libs/assets/svg/cross.svg?react";
//styles
import styles from "./VideoModal.module.scss";

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export const VideoModal: FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const player = new Plyr(video, {
      controls: ["play", "progress", "mute", "fullscreen"],
    });

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    }

    return () => {
      player.destroy();
    };
  }, [videoUrl]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={onClose}>
          <Cross />
        </div>

        <video ref={videoRef} className={styles.videoPlayer} autoPlay />
      </div>
    </div>
  );
};
