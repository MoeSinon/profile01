import React from "react";

const Address = () => {
  return (
    <>
      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>123 Stree New York City ,
        United States Of America 750065.
      </p> */}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">mail name</span>
        Hirito Katagiri
      </p>

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:ceshizh01@gmail.com">ceshizh01@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +1 347 559 0493">+1 347 559 0493</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
