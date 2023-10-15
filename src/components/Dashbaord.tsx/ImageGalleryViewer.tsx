import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image_1 from "../../images/1.png";
import image_2 from "../../images/2.png";
import image_3 from "../../images/3.png";
import image_4 from "../../images/4.png";
import image_5 from "../../images/5.png";
import image_6 from "../../images/6.png";

const images = [
  {
    original: image_1,
    thumbnail: image_1,
  },
  {
    original: image_2,
    thumbnail: image_2,
  },
  {
    original: image_3,
    thumbnail: image_3,
  },
  {
    original: image_4,
    thumbnail: image_4,
  },
  {
    original: image_5,
    thumbnail: image_5,
  },
  {
    original: image_6,
    thumbnail: image_6,
  },
];

interface ImageGalleryViewerProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ImageGalleryViewer = ({
  isLoading,
  setIsLoading,
}: ImageGalleryViewerProps) => {
  //   return ({!isLoading && <ImageGallery items={images} />})
  return <ImageGallery items={images} />;
};
