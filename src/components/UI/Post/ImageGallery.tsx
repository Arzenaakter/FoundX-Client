"use client";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  images: string[];
}

const ImageGallery = ({ images }: IProps) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="App">
      <LightGallery
        elementClassNames={`mt-2 grid place-items-center grid-cols-2 gap-2 ${images?.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {images?.map((img, index) => (
          <Link
            key={index}
            href={img}
            className={`w-full ${images.length === 3 && index === 0 ? "col-span-2" : "col-span-1"}`}
          >
            <Image
              alt={`Image ${index + 1}`}
              src={img}
              width={500}
              height={500}
              className="w-full object-cover h-[400px]"
            />
          </Link>
        ))}
      </LightGallery>
    </div>
  );
};

export default ImageGallery;
