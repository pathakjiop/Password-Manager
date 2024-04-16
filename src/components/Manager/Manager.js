import React from "react";

const Manager = () => {
  return (
    <>
      <div class='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>

      <div className=' text-white flex flex-col p-4'>
        <input
          type='text'
          name=''
          id=''
        />
        <div className='flex '>
          <input type='text' />
          <input type='text' />
        </div>
      </div>
    </>
  );
};

export default Manager;
