import React from 'react';

export const SingleOfferList = ({ offer }) => {
  const { id, title, salary_from, salary_to } = offer;
  console.log('>> single offer list', offer);

  return (
    <div
      key={`offer-${id}`}
      className="flex w-full h-32 px-4 rounded-2xl border-2 my-4"
    >
      <div className="h-full w-32 p-4 border-2 border-black">
        <img />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full items-center px-2 pb-6">
        <div className="justify-self-start">{title}</div>
        <div className="justify-self-end">
          {salary_from}-{salary_to} USD
        </div>
      </div>
    </div>
  );
};
