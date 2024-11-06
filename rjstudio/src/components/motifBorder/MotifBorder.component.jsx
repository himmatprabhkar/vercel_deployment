import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setImageStatus } from '../../slices/imageStatusSlice';
import { setSelectMotifBorder } from '../../slices/selectMotifBorderSlice';
import { getMotifBorder } from '../../services/motifBorder.service';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import whiteBorder from '../../assets/images/BackgroundImage/thumbnailMotifBorder.png';

export const MotifBorder = () => {
  const [data, setData] = useState([]);
  const getSelectedMotifBorder = useSelector(
    (state) => state.selectMotifBorder.selectedMotifBorder
  );
  // const getFrameBorderCss = useSelector(state => state.selectFrameCss.imageBorderCss);

  const dispatch = useDispatch();

  const callApi = async () => {
    const getResult = await getMotifBorder();
    if (getResult) {
      setData(getResult?.data?.getMotifBorderSizes);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  const sizes = {
    0: 0,
    1: 0.1,
    2: 0.2,
    3: 0.3,
    4: 0.4,
    5: 0.5,
    6: 0.6,
    7: 0.7,
    8: 0.8,
  };

  const setOrderValues = (ele, index) => {
    dispatch(setSelectMotifBorder({ selectedMotifBorder: sizes[index] }));

    // dispatch(setImageMotifBorder({ index: getFrameBorderCss, paddingValue: '18' }))

    // dispatch(setMotifBorderDetail({
    //     motifBorderId: ele._id,
    //     motifBorderSizeName: ele.sizeName,
    //     motifBorderPrice: ele.price,
    //     motifBorderSize: ele.size
    // }))
  };

  // style={{ backgroundColor: ele.size === zoom ? "#B3D7FE" : "" }}

  return (
    <>
      <div className="col-lg-5">
        <div className="d-flex flex-column gap-3 mt-4">
          <div className="uploaded-title text-center">Choose White Border</div>
          <p className="text-center text-dark ">
            We adapt these formats to the aspect ratio of your photo always
            perfectly fitting.
          </p>
        </div>
        <div className="row">
          <div>
            {' '}
            <button
              onClick={() => dispatch(setImageStatus({ imageStatus: 3 }))}
              className="btn btn-primary"
            >
              Back
            </button>
          </div>
          {data.map((ele, index) => (
            <div key={index} className="col-4">
              <div
                className="card mt-3"
                data-tooltip-id={`motif-tooltip-${index}`}
                data-tooltip-content={`Name: ${ele.name} \n Size: ${ele.sizeName} \n Price: ${ele.price}`}
                style={{
                  height: 100,
                  width: 180,
                  cursor: 'pointer',
                  backgroundColor:
                    getSelectedMotifBorder === index ? '#B3D7FE' : '',
                }}
                onClick={() => setOrderValues(ele, index)}
              >
                <div className="card-body">
                  <img height={'70px'} width={'100px'} src={whiteBorder} />
                </div>
                <span>{ele?.name}</span>
                <span>{ele?.sizeName}</span>
              </div>
              <Tooltip
                id={`motif-tooltip-${index}`}
                place="top"
                type="dark"
                effect="float"
                multiline={true}
              />
            </div>
          ))}
        </div>

        <a
          onClick={() => dispatch(setImageStatus({ imageStatus: 5 }))}
          href="#"
          className="select-size-btn m-auto mt-5 mx-5 bg-dark d-block text-center p-3  rounded text-white"
        >
          Next: Select Size
        </a>
      </div>
    </>
  );
};
