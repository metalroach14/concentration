import { useEffect, useState } from "react";

const useKeepAwake = (isActive: boolean) => {
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);

  useEffect(() => {
    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          const wakeLock = await navigator.wakeLock.request("screen");
          setWakeLock(wakeLock);
          wakeLock.addEventListener("release", () => {
            setWakeLock(null); // Clear wake lock on release
          });
        }
      } catch (err) {
        console.error(`Wake Lock failed: ${err}`);
      }
    };

    if (isActive) {
      requestWakeLock(); // Only request wake lock when isActive is true
    } else if (wakeLock) {
      wakeLock.release(); // Release the wake lock when isActive is false
      setWakeLock(null);
    }

    return () => {
      if (wakeLock) {
        wakeLock.release();
      }
    };
  }, [isActive, wakeLock]);

  return wakeLock;
};

export default useKeepAwake;
