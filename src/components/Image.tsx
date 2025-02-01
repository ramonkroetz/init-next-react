import ExportedImage from "next-image-export-optimizer";

import type { StaticImageData } from "next/image";
import s from "./Image.module.css";

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  width: number;
  height: number;
};

export function Image({ src, alt, priority, width, height }: ImageProps) {
  return (
    <ExportedImage
      className={s.image}
      src={src}
      alt={alt}
      priority={priority}
      width={width}
      height={height}
      style={{ maxHeight: height, maxWidth: width }}
    />
  );
}
