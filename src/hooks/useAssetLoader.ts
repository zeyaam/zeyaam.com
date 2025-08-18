import { useState, useEffect } from 'react';

interface UseAssetLoaderProps {
  images?: string[];
  fonts?: string[];
  minimumLoadTime?: number; // Minimum time to show loading screen (in ms)
}

export const useAssetLoader = ({ 
  images = [], 
  fonts = [], 
  minimumLoadTime = 1500 
}: UseAssetLoaderProps = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedAssets, setLoadedAssets] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const assetsToLoad = [...images, ...fonts];
    setTotalAssets(assetsToLoad.length);
    
    if (assetsToLoad.length === 0) {
      // No assets to load, just wait for minimum time
      setTimeout(() => {
        setIsLoading(false);
      }, minimumLoadTime);
      return;
    }

    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      setLoadedAssets(loadedCount);
      
      if (loadedCount === assetsToLoad.length) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Count failed loads as complete
      img.src = src;
    });

    // Preload fonts (if any)
    fonts.forEach((fontFamily) => {
      // Use FontFace API if available
      if ('fonts' in document) {
        document.fonts.ready.then(checkAllLoaded);
      } else {
        // Fallback for older browsers
        checkAllLoaded();
      }
    });

  }, [images, fonts, minimumLoadTime]);

  return {
    isLoading,
    progress: totalAssets > 0 ? (loadedAssets / totalAssets) * 100 : 100
  };
};