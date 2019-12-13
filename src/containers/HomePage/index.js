import React from "react";
import OffersList from "components/OffersList";
import { connect } from "react-redux";

// Action creator
const applyToOffer = id => {
  return {
    type: "APPLY_TO_OFFER",
    offerId: id
  };
};

const Offers = ({ offers, user, apply }) => {
  return (
    <div className="container py-5">
      <div className="align-items-center d-flex mb-4">
        <h1 className="h3 mr-1 font-weight-bold" style={{ color: "#385b95" }}>
          Offres
        </h1>
        <span style={{ color: "#576b96" }}>
          {offers.length
            ? ` (${offers.length} offres trouvées)`
            : "No offer found"}
        </span>
      </div>
      <OffersList
        offers={offers.map(o => {
          return {
            ...o,
            isActive: user.offers.includes(o._id)
          };
        })}
        user={user}
        onClick={apply}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    offers: state.offers,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    apply: id => {
      dispatch(applyToOffer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
