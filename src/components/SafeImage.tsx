import React, { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'eager' | 'lazy';
};

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = '/s1.png',
  loading = 'lazy'
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default SafeImage;

