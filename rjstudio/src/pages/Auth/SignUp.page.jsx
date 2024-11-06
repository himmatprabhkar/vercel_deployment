import React, { useState, useEffect } from 'react';
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { useDispatch, useSelector } from 'react-redux';
import { loginAndFetchDetails } from '../../slices/authSlice';
import { loginApi } from '../../services/auth.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/BackgroundImage/background-image-home.jpg';

export const SignUp = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const url = useSelector((state) => state.uploadImage.url);

  const callAPI = async () => {
    try {
      const getResult = await loginApi({
        userName: userName,
        password: password,
      });

      if (getResult) {
        callToast('Login Successfully', 'success');

        dispatch(loginAndFetchDetails(getResult?.data));

        url ? navigate('/edit-photo') : navigate('/');
      } else {
        callToast('Something went wrong!', 'danger');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(error?.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPI();
  };

  const callToast = (message, type) => {
    if (type === 'success') {
      toast.success(
        { message },
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    } else {
      toast.danger(
        { message },
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }
      );
    }
  };

  const toastContainer = () => {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </>
    );
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, []);

  return (
    <>
      <HeaderEditUpload />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 ps-0">
            <div className="img-part">
              <img
                className="img-fluid"
                src={image}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 px-5">
            <h1>Welcome to RjStudio</h1>
            <br />
            <div className="h2 fw-bold mb-4">Sign in</div>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}

              <div className="username-container d-flex flex-column gap-2 mb-3">
                <label htmlFor="username">Email</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="p-2"
                  name="email"
                  typeof="text"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="password-container d-flex flex-column gap-2 mb-3">
                <label htmlFor="password">Password</label>
                <input
                  required
                  className="p-2"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  typeof="text"
                  placeholder="Password"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="select-size-btn border-1 size-btn m-auto d-block text-center p-3 w-100 rounded text-white"
              >
                Sign in
              </button>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember Me
                  </label>
                </div>
                <a href="/#" className="forgot-pass text-dark">
                  Forgot password?
                </a>
              </div>

              <div className="text-center mt-4">
                <span>Dont have an account?</span>
                <a onClick={() => navigate('/signup')} className="create-ac">
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {toastContainer()}
    </>
  );
};
