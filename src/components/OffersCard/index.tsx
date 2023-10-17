import * as React from 'react';

export default function OffersCard({ img, alt, title, parag = [] }) {
  return (
    <div className="px-4 py-6 rounded-lg flex flex-col text-center justify-between items-center h-full border-2">
      <img
        draggable={false}
        src={img}
        alt={alt}
        className="w-auto h-28 mb-14 mt-6"
      />
      <h2 className="text-3xl mb-6 Mulish-black ">{title}</h2>
      <span className="text-base w-full break-all Mulish">
        {parag?.map((item) => (
          <>
            <span className="block">{item}</span>
            <br />
          </>
        ))}
      </span>
    </div>
  );
}
