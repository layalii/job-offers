import React, { useState } from "react";
import OfferItem from "components/OfferItem";
import Pagination from "components/Pagination";

const PAGE_ITEMS_COUNT = 3;

const OffersList = ({ offers, onClick }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const _getPageCount = () => {
    const count = offers.length / PAGE_ITEMS_COUNT;
    const reminder = offers.length % PAGE_ITEMS_COUNT !== 0 ? 1 : 0;
    return parseInt(count + reminder);
  };

  const pageCount = _getPageCount();

  const _gotToPage = n => {
    setCurrentPage(n);
  };

  const _next = () => {
    if (currentPage < pageCount - 1) setCurrentPage(currentPage + 1);
  };

  const _previous = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const _paginate = () => {
    return offers.slice(
      currentPage * PAGE_ITEMS_COUNT,
      (currentPage + 1) * PAGE_ITEMS_COUNT
    );
  };

  if (offers.length === 0) {
    return <span className="lead text-dark">Aucune offre trouvée</span>;
  }

  return (
    <>
      <div className="">
        {_paginate().map(offer => {
          return (
            <OfferItem
              key={offer._id}
              offer={offer}
              isActive={offer.isActive}
              onClick={e => {
                e.preventDefault();
                onClick && onClick(offer._id);
              }}
            />
          );
        })}
      </div>
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        goToPage={_gotToPage}
        onNext={_next}
        onPrevious={_previous}
      />
    </>
  );
};

export default OffersList;
