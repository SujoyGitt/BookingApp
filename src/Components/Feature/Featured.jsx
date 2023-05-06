import React from "react";
import "./Featured.scss";
export const Featured = () => {
  return (
    <div className="Featured w-full flex justify-between flex-wrap lg:flex-nowrap gap-7  ">
      <div className="FeaturedItem">
        <img src="https://media.istockphoto.com/id/1294458419/photo/adiyogi-shiva-statue.jpg?s=612x612&w=0&k=20&c=mxXreg-Ah0x9zL00IXnO5Py_E3mJSjnzj5IGJlKz2yU=" alt="" className="featuredImg" />
        <div className="featuredtitle">
          <h1>Coimbatore</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="FeaturedItem">
        <img src="https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=" alt="" className="featuredImg" />
        <div className="featuredtitle">
          <h1>Goa</h1>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="FeaturedItem">
        <img src="https://thumbs.dreamstime.com/b/mayapur-iskcon-temple-krishnanagar-india-krishna-256516609.jpg" alt="" className="featuredImg" />
        <div className="featuredtitle">
          <h1>Mayapur</h1>
          <h2>233 Properties</h2>
        </div>
      </div>
    </div>
  );
};
