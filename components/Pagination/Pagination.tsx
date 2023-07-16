import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import styles from "../../styles/pagination.module.scss";

interface Props {
  numOfCards: object[];
  cardsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
  goToPrevPage: () => void;
  goToNextPage: () => void;
}

const Pagination = ({
  numOfCards,
  cardsPerPage,
  goToPrevPage,
  goToNextPage,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage === 1} onClick={goToPrevPage}>
        <HiArrowLeft className={styles.arrowLeft} />
      </button>
      {Array.from({ length: Math.ceil(numOfCards.length / cardsPerPage) }).map(
        (_, index) => (
          <button
            className={`${styles.btn} ${
              currentPage === index + 1 ? styles.activeBtn : ""
            }`}
            key={index}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        )
      )}
      <button
        disabled={currentPage === Math.ceil(numOfCards.length / cardsPerPage)}
        onClick={goToNextPage}
      >
        <HiArrowLeft className={styles.arrowRight} />
      </button>
    </div>
  );
};

export default Pagination;
