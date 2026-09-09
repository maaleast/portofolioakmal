import { useEffect, useState } from "react";

export default function PageLoader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    let timeoutId;

    const finishLoading = () => {
      const remaining = Math.max(0, 650 - (performance.now() - start));
      timeoutId = window.setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(timeoutId);
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
