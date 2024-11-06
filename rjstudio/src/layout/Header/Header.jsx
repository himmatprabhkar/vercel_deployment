import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import '../../assets/css/header.css';
import '../../assets/css/footer.css';
import { AddImageModal } from '../../components/modals/uploadImage/AddImageModal.modal';
import { logout } from '../../slices/authSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const [enablePop, setEnablePop] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toastCallBack = () => {
    navigate('edit-photo');
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    setIsLogin(false);
  };

  const singIn = () => {
    navigate('/sign-in');
  };

  useEffect(() => {
    setIsLogin(!!localStorage.getItem('token'));
  }, [isLogin]);

  return (
    <>
      <header className="position-absolute end-0 start-0 p-2">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a style={{ marginTop: '8px' }} href="#" className="navbar-brand">
              <h2 style={{ color: 'white' }}>MadeWall</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">Framed Print</a>
                </li>
                <li>
                  <a href="/services">Wall art</a>
                </li>
                <li>
                  <a href="/contact">Categories</a>
                </li>
                <li>
                  <a href="/contact">All products</a>
                </li>
              </ul>
              <a
                onClick={isLogin ? () => logOut() : () => singIn()}
                className="common-btn fw-semibold text-decoration-none "
              >
                {isLogin ? 'Logout' : 'Sign In'}
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section className='overlay className="overlay mb-5  d-flex justify-content-center align-items-center text-start'>
        <div className="container d-flex flex-column gap-3 ">
          <span className="big-head text-white fw-bold">
            Live Life to the <br />
            framest
          </span>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </p>
          <a
            href="#"
            onClick={() => setEnablePop(true)}
            className="overlay-btn text-white text-uppercase "
          >
            Start framing
          </a>
        </div>
      </section>

      <AddImageModal
        isShow={enablePop}
        closeModal={() => setEnablePop(false)}
        toastCallBack={(image) => toastCallBack(image)}
      />
    </>
  );
};
