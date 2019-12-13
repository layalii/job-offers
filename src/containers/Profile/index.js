import React from "react";
import { connect } from "react-redux";
import IMAGE_PROFILE from "./profile.png";
import OffersList from "components/OffersList";

const Profile = ({ user, offers }) => {
  return (
    <div className="container py-5">
      <div className="d-flex my-5">
        <img src={IMAGE_PROFILE} alt="user-illustration" className="mr-3"></img>
        <div className="pl-3 pt-2">
          <h4 className="font-weight-bold mb-3" style={{ color: "#484747" }}>
            {user.name ? user.name : "no name found"}
          </h4>
          <div className="d-flex align-items-center mb-2">
            <i className="fa fa-envelope mr-2" style={{ color: "#6483b3" }}></i>
            <span className="h6" style={{ color: "#484747" }}>
              {user.email ? user.email : "No email found"}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <i
              className="fa fa-shuttle-van mr-2"
              style={{ color: "#6483b3" }}
            ></i>
            <span className="h6" style={{ color: "#484747" }}>
              {user.adresse ? user.adresse : "No address found"}
            </span>
          </div>
        </div>
      </div>
      <h1 className="h3 my-5" style={{ color: "#385b95" }}>
        Les offres que j'ai postulé
      </h1>
      <OffersList
        offers={offers
          .filter(o => user.offers.includes(o._id))
          .map(o => ({ ...o, isActive: true }))}
        onClick={null}
      />
    </div>
  );
};

Profile.defaultProps = {
  user: {}
};

export default connect(state => {
  return {
    user: state.user,
    offers: state.offers
  };
})(Profile);
