import React from 'react';
// import myImage from '../../assets/images/RJstudio-logo.svg';

export const Footer = () => {
  return (
    <footer className="footer p-5 mt-5 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-4">
              <a href="#" className="navbar-brand">
                <h2 style={{ color: 'white' }}>MadeWall</h2>
              </a>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="d-flex flex-column gap-3">
                <a
                  className="d-flex align-items-center gap-3 text-white"
                  href="mailto:Hello@Email.com"
                >
                  <svg
                    fill="#fff"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  Hello@Email.com
                </a>
                <a
                  className="d-flex align-items-center gap-3 text-white"
                  href="tel:+62 123 456 789"
                >
                  <svg
                    fill="#fff"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z" />
                  </svg>
                  +62 123 456 789
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="category text-white">
              <span className="fw-bold h5 mb-3 d-block">Quick Links</span>
              <ul className="list-unstyled ps-4">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">All Products</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="category text-white">
              <span className="fw-bold h5 mb-3 d-block">Usefull Links</span>
              <ul className="list-unstyled ps-4">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="category text-white d-flex flex-column gap-2">
              <span className="fw-bold h5 mb-3 d-block">Follow Us</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul className="social-links list-unstyled  d-flex gap-3">
                <li>
                  <a href="#">
                    <svg
                      fill="#fff"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      fill="#fff"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      fill="#fff"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      fill="#fff"
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-second mb-0 border-light border-top py-4 mt-3">
            Allright Reserved - RJ Studio 2024
          </p>
        </div>
      </div>
    </footer>
  );
};
