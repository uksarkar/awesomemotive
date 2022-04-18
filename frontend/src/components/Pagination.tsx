import React from "react";
import IPagination from "../interfaces/IPagination";

const Pagination = (props: IPagination) => {
  const { currentIndex, totalPage, bubbleLimit = 10, onPaginate } = props,
    leftBubbles = Math.round(bubbleLimit / 2),
    rightBubbles = totalPage - bubbleLimit;

  const paginationBubbles: Array<number | string> =
    totalPage <= bubbleLimit
      ? Array(totalPage)
          .fill("")
          .map((v, i) => i + 1)
      : Array(bubbleLimit + 1)
          .fill("")
          .map((v, i) =>
            i < leftBubbles
              ? i === 0
                ? 1
                : currentIndex + i - 1
              : i === leftBubbles
              ? "."
              : rightBubbles + i
          );

  const paginateTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index?: number | string
  ) => {
    e.preventDefault();
    if (
      typeof index === "number" &&
      index !== currentIndex &&
      index <= totalPage &&
      index >= 1
    )
      onPaginate(index);
  };

  const hasPreviousPage: boolean = currentIndex > 1;
  const hasNextPage: boolean =
    currentIndex < totalPage && bubbleLimit < totalPage;

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a
        href={
          hasPreviousPage
            ? `?page=${currentIndex - 1}`
            : `?page=${currentIndex}`
        }
        onClick={(e) => paginateTo(e, currentIndex - 1)}
        className={
          hasPreviousPage
            ? "pagination-previous"
            : "pagination-previous is-disabled"
        }
      >
        Previous
      </a>
      <a
        href={
          hasNextPage ? `?page=${currentIndex + 1}` : `?page=${currentIndex}`
        }
        onClick={(e) => paginateTo(e, currentIndex + 1)}
        className={
          hasNextPage ? "pagination-next" : "pagination-next is-disabled"
        }
      >
        Next page
      </a>
      <ul className="pagination-list">
        {paginationBubbles.map((b) =>
          b === "." ? (
            <li key={b}>
              <span className="pagination-ellipsis">&hellip;</span>
            </li>
          ) : (
            <li key={b}>
              <a
                href={`?page=${b}`}
                onClick={(e) => paginateTo(e, b)}
                className={
                  b === currentIndex
                    ? "pagination-link is-current"
                    : "pagination-link"
                }
              >
                {b}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
