import { useRef, useEffect } from "react";
import clapSound from "../assets/studio/clapperboard.mp3";
import swingSound from "../assets/studio/swing.mp3";

const useAudioProvider = (enabled,swingAudioRef,clapAudioRef) => {
  useEffect(() => {
    let clapTimer;
    if (enabled) {
      swingAudioRef.current = new Audio(swingSound);
      swingAudioRef.current.volume = 0.7;
      swingAudioRef.current.loop = false;
      swingAudioRef.current.load();

      clapAudioRef.current = new Audio(clapSound);
      clapAudioRef.current.volume = 0.2;
      clapAudioRef.current.loop = false;
      clapAudioRef.current.load();

      swingAudioRef.current
        .play()
        .then(() => {
          clapTimer = setTimeout(() => {
            clapAudioRef.current.play().catch((error) => {
              console.error("Error playing clap audio:", error);
            });
          }, 2100);
        })
        .catch((error) => {
          console.error("Error playing swing audio:", error);
        });
    }
    return () => {
      clearTimeout(clapTimer);
      if (clapAudioRef.current) {
        clapAudioRef.current.pause();
        clapAudioRef.current.currentTime = 0;
      }
      if (swingAudioRef.current) {
        swingAudioRef.current.pause();
        swingAudioRef.current.currentTime = 0;
      }
    };
  }, [enabled]);

  return { clapAudioRef, swingAudioRef };
};

export default useAudioProvider;