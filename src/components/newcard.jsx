import React from "react";

const NewCard = ({ title, img, description, onRemove, id }) => {
  function handleClick() {
    onRemove(id);
  }
  return (
    <div>
      <div className="w-96  bg-base-100 shadow-xl rounded-lg mx-auto px-5">
        <figure>
          <img
            className="w-full h-[300px] object-cover rounded-t-lg"
            src={img}
            alt={title}
          />
        </figure>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="mt-2">{description}</p>
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary" onClick={handleClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
