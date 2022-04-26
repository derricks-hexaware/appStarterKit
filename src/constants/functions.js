import { Image } from 'react-native';
import preloadFonts from './preloadFonts';
import preloadImages from './preloadImages';

// cache fonts
// /////////////////////////////////////////////////////////////////////////////

// cache images
// /////////////////////////////////////////////////////////////////////////////
const cacheImages = (images) => {
  return Object.values(images).map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }

  });
};

// preload async
// /////////////////////////////////////////////////////////////////////////////
const loadAssetsAsync = async () => {
  // preload assets
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([...imageAssets]);
};

export default {
  cacheImages,
  loadAssetsAsync
};
