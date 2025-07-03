import Image from "next/image";
import { useEffect, useState } from "react";

type ImageComponentProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackSrc?: string; // Optional fallback image source
} & React.ComponentProps<typeof Image>;
function ImageComponent({
  src,
  alt,
  fallbackSrc = "/placeholder-image.png",
  ...props
}: ImageComponentProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Reset imgSrc and hasError if the parent's src prop changes
  // This is important if the component is reused with different images
  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      // Prevent infinite loop if fallback also fails
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };
  return <Image src={imgSrc} alt={alt} onError={handleError} {...props} />;
}

export default ImageComponent;
