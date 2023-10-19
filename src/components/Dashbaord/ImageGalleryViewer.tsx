import { useMediaQuery } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import guide from "../../images/guide.png";

const images = [
  {
    original: guide,
    thumbnail: guide,
  },
];

interface ImageGalleryViewerProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  generatedImages: string[];
}
export const ImageGalleryViewer = ({
  isLoading,
  setIsLoading,
  generatedImages,
}: ImageGalleryViewerProps) => {
  const isDestopMode = useMediaQuery("(min-width:600px)");

  return (
    <ImageGallery
      useBrowserFullscreen={isDestopMode}
      items={
        generatedImages && generatedImages.length !== 0
          ? generatedImages.map((generatedImage) => {
              return {
                original: `data:image/jpeg;base64,${generatedImage}`,
                thumbnail: `data:image/jpeg;base64,${generatedImage}`,
              };
            })
          : images
      }
    />
  );
};
