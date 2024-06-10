import React from "react";

const CarouselComponents = () => {
  return (
    <div>
      <div className="w-full  flex items-center justify-center mt-5">
        <div className="container ">
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-38c6eb20967a8f8e9975432d4d11e52a"
                className="w-full object-cover"
              />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OZzE7zSmmSEKidsNH0gE-Yk3_TKw5ivFGA&s"
                className="w-full object-cover"
              />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxrc0IhR_lJOBNBnT8694xCOSKhvmqFnztw&s"
                className="w-full object-cover"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://play-lh.googleusercontent.com/MTh9mc0X1q7wP5VUqokkg4FAA-2jTzlrVBXcYS3AnScYdQgZjJ6H_PgzFuwVeEoIKfI=w526-h296-rw"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponents;
