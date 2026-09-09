import { useEffect, useState } from "react";

export default function PageLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setVisible(false);
      onComplete?.();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="page-loader" role="status" aria-label="Loading portfolio">
      <div className="page-loader-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p>Loading</p>
    </div>
  );
}
