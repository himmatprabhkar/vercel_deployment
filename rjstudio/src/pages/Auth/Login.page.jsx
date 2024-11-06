import React, { useState } from 'react';
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { register } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile ,setMobile]=useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const callAPI = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const getResult = await register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        mobile: mobile,
      });

      if (getResult) {
        navigate('/sign-in');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !mobile.trim()
    ) {
      setError('All fields are required');
    }

    setError(null);

    callAPI();
  };

  return (
    <>
      <HeaderEditUpload />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7 ps-0">
            <div className="img-part">
              <img
                className="img-fluid"
                src="https://s3-alpha-sig.figma.com/img/7889/4f86/d4999ce67166753465e58d538aedd43b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLCgXKhJM7ybYdMfAVc1t-Kc5jBZYbuJpl4k6ipsUCRMbX1g0QOxfXl93iPEE-6z2XE5K94wFIXXW4NQZueVb4jSDRlVyOK~ba79lo1PHGsgFCTNh2gs~49raD4RDV87M45jlhFVOOsk1zAnTp6CDwSvx6z4vifurGPQUby7-8AwtKIkqPY6PfG2fAPEljsl3KxP1IVzFXva4qWmrGL00veta3Pyafn9ibxwp7qPWNjVXOwNnFx5ggLhta-bnQrp-qmeRw4VLL4bg4vBpvhhuJEM1szKuD9zj7C5DH~9IO0j-wtVMdPS5OS30SuDh2-MJU-BNmVpvysX7BLegRSq3A__"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 px-5">
            <div className="h2 fw-bold mb-4">Create Account</div>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="row">
                <div className="col-lg-6">
                  <div className="first-n-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="first-name">First Name</label>
                    <input
                      required
                      className="p-2 px-3"
                      name="first-name"
                      typeof="text"
                      placeholder="First Name"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="last-n-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="last-name">Last Name</label>
                    <input
                      required
                      className="p-2 px-3"
                      name="last-name"
                      placeholder="Last Name"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="email-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="username">Email</label>
                    <input
                      required
                      className="p-2 px-3"
                      name="email"
                      placeholder="john@example.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="password-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      required
                      className="p-2 px-3"
                      name="password"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="confirm-ps-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                      required
                      className="p-2"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>


                  <div className="confirm-ps-container d-flex flex-column gap-2 mb-3">
                    <label htmlFor="confirm-password">Mobile Number</label>
                    <input
                      required
                      className="p-2"
                      name="Mobile Number"
                      placeholder="Enter the mobile number"
                      type="number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="select-size-btn border-1 size-btn m-auto d-block text-center p-3 w-100 rounded text-white"
              >
                Sign in
              </button>
              <div className="text-center mt-4">
                <span>Already have an account? </span>
                <a href="/sign-in" className="create-ac">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
