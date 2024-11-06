import React, { useState } from 'react';
import S1 from '../../assets/images/StaticFrames/S1.jpg';
import S2 from '../../assets/images/StaticFrames/S2.jpg';
import S3 from '../../assets/images/StaticFrames/S3.jpg';
import S4 from '../../assets/images/StaticFrames/S4.jpg';
import S5 from '../../assets/images/StaticFrames/S5.jpg';
import S6 from '../../assets/images/StaticFrames/S6.jpg';

export const MainComponent = () => {
  const images = [
    S2,
    S1,
    S2,
    S1,
    S3,
    S4,
    S3,
    S5,
    S6,
    S5,
    S3,
    S4,
    S2,
    S1,
    S2,
    S1,
    S3,
    S4,
    S3,
    S5,
    S6,
    S5,
    S3,
    S4,
  ];
  const [visibleCount, setVisibleCount] = useState(8); // initial load

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // increase by 4 for more images
  };

  return (
    <main>
      <section className="my-gallery mb-5">
        <span className="catg-title text-center d-block">Why Choose Us</span>
        <div className="subhead text-dark text-center text-capitalize fw-bold lh-sm mt-3">
          Let's Discover All Of My Work <br />
          Digital Prints
        </div>
      </section>

      <div
        style={{ backgroundColor: 'bisque', padding: '2rem' }}
        className="container mt-4"
      >
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {images.slice(0, visibleCount).map((image, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img
                  src={image}
                  className="card-img-top"
                  alt={`Image ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < images.length && (
        <div className="text-center mt-4">
          <a
            href="#"
            onClick={handleLoadMore}
            className="overlay-btn text-white text-uppercase "
          >
            Load More
          </a>
        </div>
      )}
    </main>
  );
};
