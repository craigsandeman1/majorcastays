"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const handleNecessaryOnly = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    // This would typically open a modal with more options
    // For simplicity, we'll just set it to necessary
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🍪</span>
          <div>
            <p className="text-sm">
              We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you agree to our cookie policy.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleAcceptAll}
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
          >
            Accept All
          </button>
          <button
            onClick={handleNecessaryOnly}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
          >
            Necessary Only
          </button>
          <button
            onClick={handleCustomize}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded text-sm"
          >
            Customize
          </button>
        </div>
      </div>
    </div>
  );
}
