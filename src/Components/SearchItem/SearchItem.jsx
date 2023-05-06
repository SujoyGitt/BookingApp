import React from "react";
import "./SearchItem.scss";
import { useNavigate } from "react-router-dom";
export const SearchItem = () => {
  let navigate = useNavigate()
  return (
    <div className="SearchItem" onClick={()=>navigate('/hotels/id')}>
      <img
        src="https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg"
        className="siImg"
        alt=""
      />
      <div className="siDesc">
        <div className="siTitle">Tower street Apartment</div>
        <div className="siDistance">500m from Center</div>
        <div className="siTaxiOp">Free Airport Taxi</div>
        <div className="siSubTitle">Studio Apartment with Air Conditioning</div>
        <div className="siFeatures">
          Entire Studio . 1 bathroom . 21m 1 full bed
        </div>
        <span className="siCancelOP">Free Cancelletion</span>
        <span className="siCancelOpSubTitle">
          You cancle later,So lock in this greate price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating flex justify-between">
          <span>Excellent</span>
          <button className="bg-themeblue text-white p-1 font-bold">8.9</button>
        </div>
        <div className="siDetailText">
          <span className="siPrice font-semibold text-lg">$132</span>
          <span className="siTaxOp text-sm text-gray-600">Include Texes and fees</span>
          <button className="siCheckBtn bg-themeblue text-white py-2 px-1 cursor-pointer rounded-md">See Availability</button>
        </div>
      </div>
    </div>
  );
};
 