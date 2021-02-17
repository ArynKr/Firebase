import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div class="progress-wrap">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, transition: `all 0.8s` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
