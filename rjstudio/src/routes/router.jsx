import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage/Landing.Page';
import { EditFrame } from '../components/EditFrames/EditFrame.components';
import { EditPhoto as EditPhoto } from '../pages/EditPhoto/EditPhoto.page';
import { SignUp } from '../pages/Auth/SignUp.page';
import { Login } from '../pages/Auth/Login.page';
import { Checkout } from '../pages/Checkout/Checkout.page';
import { AddToCart } from '../pages/AddToCart/AddToCart.page';
import { TermsAndConditions } from '../pages/TermsAndPrivacy/TermsAndConditions.page';
import { PrivacyPolicy } from '../pages/TermsAndPrivacy/PrivacyPolicy.page copy';
import { SuccessfulMessage } from '../pages/Messages/SuccessfulMessage.page';
import { CancelMessage } from '../pages/Messages/CancelMessage.page';
import UserDetails from '../pages/UserDetails/Userdetails.page';
import CanvasComponent from '../pages/UserDetails/DummyData';
import ImageUploader from '../pages/UserDetails/Sizes';
import ImageFrameCropper from '../pages/UserDetails/crop';
import ImageUploaderCheck from '../pages/UserDetails/checkImage';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/edit-frame" element={<EditFrame />} />

        <Route path="/edit-photo" element={<EditPhoto />} />

        <Route path="/signup" element={<Login />} />
        <Route path="/sign-in" element={<SignUp />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addtocart" element={<AddToCart />} />

        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/success" element={<SuccessfulMessage />} />
        <Route path="/cancel" element={<CancelMessage />} />

        <Route path="/user" element={<UserDetails />} />

        <Route path="/dummy-data" element={<CanvasComponent />} />

        <Route path="/sizes" element={<ImageUploader />} />
        <Route path="/crop" element={<ImageFrameCropper />} />
        <Route path="/check" element={<ImageUploaderCheck />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
