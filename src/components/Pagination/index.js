import React from "react";
import classnames from "classnames";

const Pagination = ({
  pageCount,
  currentPage,
  goToPage,
  onNext,
  onPrevious
}) => {
  return (
    <div className="d-flex justify-content-end">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#previous"
              aria-label="Previous"
              onClick={e => {
                e.preventDefault();
                onPrevious();
              }}
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {Array.from({ length: pageCount }, (_, i) => i).map(num => {
            return (
              <li
                key={num}
                className={classnames("page-item", {
                  active: currentPage === num
                })}
              >
                <span
                  className=" page-link"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    goToPage(num);
                  }}
                >
                  {num + 1}
                </span>
              </li>
            );
          })}
          <li className="page-item">
            <a
              className="page-link"
              href="#next"
              aria-label="Next"
              onClick={e => {
                e.preventDefault();
                onNext();
              }}
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
