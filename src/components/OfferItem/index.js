import React from "react";
import classnames from "classnames";

const OfferItem = ({ offer, isActive, onClick }) => {
  const newDate = new Date(offer.createdAt);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return (
    <div
      className={classnames(
        "row align-items-center bg-light justify-content-center px-5 py-3 mb-3 mx-0",
        { shadow: isActive }
      )}
      style={{ border: "2px solid #979797", borderRadius: 14 }}
    >
      <div className="col-12 col-lg-2 text-lg-left text-center">
        <img
          src="https://dummyimage.com/600x400/ffffff/0f1fff"
          alt="offer logo"
          className="rounded-circle"
          style={{ width: 120, height: 120, border: "1px solid #3b93e2" }}
        ></img>
      </div>
      <div className="col-12 col-lg-8 font-weight-bold my-4 my-lg-0 text-center text-lg-left">
        <h4 className="mb-0" style={{ color: "#385b95" }}>
          {offer.name}
        </h4>
        <p className="mb-0  my-2" style={{ color: "#4b9be4" }}>
          Ajouté le {day}-{month}-{year}
        </p>
        <p
          className="mb-0"
          style={{
            color: "#585656",
            display: " -webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {offer.description}
        </p>
      </div>
      <div className="col-12 col-lg-2 text-lg-left text-center">
        <button
          disabled={isActive}
          className="btn text-white px-5 py-2 font-weight-bold"
          style={
            isActive
              ? { backgroundColor: "#4bd663", borderRadius: 10 }
              : { backgroundColor: "#0077e2", borderRadius: 20 }
          }
          onClick={onClick}
        >
          {isActive ? "Postulé" : "Postuler"}
        </button>
      </div>
    </div>
  );
};

OfferItem.defaultProps = {
  offer: {},
  isActive: false,
  onClick: () => {}
};

export default OfferItem;
