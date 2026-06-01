"use client";

import { useEffect, useRef } from "react";

const ORIGINAL_TITLE =
  "Vibe Create Media | Growth, Marketing & Branding Partner";

const MESSAGES = [
  "We miss you! Come back to Vibe Create Media",
  "Did you forget something? Your growth is waiting",
  "Don't leave your next big idea is here",
  "Come back! Let's create something amazing",
  "Ready to scale? We're here when you are",
  "Your brand deserves more come back and let's talk",
  "Hey! Vibe Create Media is missing you",
  "Growth doesn't wait but we'll wait for you",
];

const CYCLE_INTERVAL = 3000;

export default function TabTitleAnimator() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const messageIndexRef = useRef(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is hidden start cycling messages
        messageIndexRef.current = 0;
        document.title = MESSAGES[messageIndexRef.current];

        intervalRef.current = setInterval(() => {
          messageIndexRef.current =
            (messageIndexRef.current + 1) % MESSAGES.length;
          document.title = MESSAGES[messageIndexRef.current];
        }, CYCLE_INTERVAL);
      } else {
        // Tab is visible again restore original title
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        document.title = ORIGINAL_TITLE;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return null;
}
