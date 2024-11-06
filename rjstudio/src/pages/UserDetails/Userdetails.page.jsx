import React, { useEffect, useState } from 'react';
import { HeaderEditUpload } from '../../layout/headerEditUpload/headerEditUpload';
import { getUserDetails } from '../../services/auth.service';

const UserDetails = () => {
  const [userData, setUserData] = useState([]);

  const callAPi = async () => {
    const result = await getUserDetails();

    if (result) {
      setUserData(result.data);
    }
  };

  useEffect(() => {
    callAPi();
  }, []);

  return (
    <>
      <HeaderEditUpload userData={userData} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 mb-3">
            {/* <div className='user-details-left shadow-sm d-flex align-items-center justify-content-center p-3'>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/#">Library</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div> */}
          </div>

          <div className="col-lg-4">
            <div className="user-details-left shadow-sm d-flex flex-column gap-2 align-items-center p-3">
              <img
                style={{ height: '12rem', width: '18rem' }}
                className="img-fluid"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww"
                alt=""
              />

              <span className="fw-bold h4">{userData?.firstName}</span>
              <span>{userData?.address}</span>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="user-details-left shadow-sm p-3 ">
              <div className="border-bottom d-flex align-items-center  mb-3 pb-3">
                <span className="fw-bold">Full Name</span>
                <span className="text-muted m-auto">
                  {userData?.firstName} {userData?.lastName}
                </span>
              </div>
              <div className="border-bottom d-flex align-items-center  mb-3 pb-3">
                <span className="fw-bold">Email</span>
                <span className="text-muted m-auto">{userData?.email}</span>
              </div>
              <div className="border-bottom d-flex align-items-center  mb-3 pb-3">
                <span className="fw-bold">Mobile</span>
                <span className="text-muted m-auto">
                  {userData?.phoneNumber}
                </span>
              </div>
              <div className="border-bottom d-flex align-items-center  mb-3 pb-3">
                <span className="fw-bold">Address</span>
                <span className="text-muted m-auto">{userData?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
