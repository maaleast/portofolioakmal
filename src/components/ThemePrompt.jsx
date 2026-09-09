import { useState } from "react";
import { Moon, Sun, X } from "lucide-react";

export default function ThemePrompt({ onClose }) {
  const [lightMode, setLightMode] = useState(
    () => localStorage.getItem("portfolio-theme") === "light"
  );

  const chooseTheme = (nextLightMode) => {
    setLightMode(nextLightMode);
    document.documentElement.classList.toggle("light-mode", nextLightMode);
    localStorage.setItem("portfolio-theme", nextLightMode ? "light" : "dark");
    window.dispatchEvent(new CustomEvent("portfolio-theme-change", {
      detail: { lightMode: nextLightMode },
    }));
  };

  return (
    <div className="theme-prompt-backdrop" role="presentation">
      <div
        className="theme-prompt"
        role="dialog"
        aria-modal="true"
        aria-labelledby="theme-prompt-title"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close theme selection"
          className="theme-prompt-close"
        >
          <X size={16} />
        </button>
        <p className="theme-prompt-eyebrow">PREFERENCES</p>
        <h2 id="theme-prompt-title">How would you like to view this portfolio?</h2>
        <p className="theme-prompt-subtitle">Kamu lebih suka Dark atau Light mode?</p>
        <div className="theme-prompt-options">
          <button
            type="button"
            onClick={() => chooseTheme(true)}
            className={lightMode ? "theme-prompt-option active" : "theme-prompt-option"}
          >
            <Sun size={17} />
            Light
          </button>
          <button
            type="button"
            onClick={() => chooseTheme(false)}
            className={!lightMode ? "theme-prompt-option active" : "theme-prompt-option"}
          >
            <Moon size={17} />
            Dark
          </button>
        </div>
        <button type="button" onClick={onClose} className="theme-prompt-skip">
          Continue with {lightMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
}
