import React from 'react';

const ImageUploaderCheck = () => {
  return (
    <div
      style={{
        maxwidth: '12%',
        marginLeft: '28rem',
        marginTop: '16rem',
      }}
    >
      {/* blob:http://localhost:3000/785e76f8-d735-4f19-92fc-202a083c0ce5 */}
      <img
        src={'blob:http://localhost:3000/c963350f-8ca0-4918-9af0-562ee51cea49'}
        alt="Uploaded"
        style={{ maxwidth: '100%' }}
      />
    </div>
  );
};

export default ImageUploaderCheck;
