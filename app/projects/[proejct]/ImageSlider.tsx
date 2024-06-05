"use client";

import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/Project";
import Image from "next/image";
import Link from "next/link";

type ImageSliderProps = {
  imageUrls: Project[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="background-color:black h-screen flex items-center justify-center">
      <button onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <Link
        href={`${imageUrls[imageIndex].url}`}
        key={imageUrls[imageIndex]._id}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition "
      >
        <div className="flex items-center justify-center h-screen">
          <Image
            src={imageUrls[imageIndex].image}
            alt={imageUrls[imageIndex].name}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
          />
        </div>
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent flex items-center justify-center text-4xl">
          {imageUrls[imageIndex].name}
        </div>
        <div className="flex items-center justify-center">
          <PortableText value={imageUrls[imageIndex].conetent} />
        </div>
      </Link>
      <button onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
}
