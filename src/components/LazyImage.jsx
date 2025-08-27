import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiLz48L3N2Zz4=',
  loading = 'lazy',
  fetchpriority = 'auto',
  onLoad,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    let observer;
    
    if (imgRef.current && imageSrc === placeholder) {
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setImageSrc(src);
                observer.unobserve(imgRef.current);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '50px'
          }
        );
        observer.observe(imgRef.current);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setImageSrc(src);
      }
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  const handleLoad = (event) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(event);
    }
  };

  return (
    <div className={`lazy-image-wrapper ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading={loading}
        fetchpriority={fetchpriority}
        onLoad={handleLoad}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        {...props}
      />
      <noscript>
        <img src={src} alt={alt} className={className} {...props} />
      </noscript>
    </div>
  );
};

export default LazyImage;