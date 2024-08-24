interface PaginatorProps {
  page: number;
  setCurrentPage: (page: number) => void;
}

export const Paginator = ({ page, setCurrentPage }: PaginatorProps) => {
  return (
    <div className="join py-5 flex justify-center">
      {page > 5 && (
        <>
          <button
            className="join-item btn"
            onClick={() => setCurrentPage(page - 5)}
          >
            {page - 5}
          </button>
          <button className="join-item btn" disabled>
            ...
          </button>
        </>
      )}
      {page !== 1 && (
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="join-item btn btn-active">{page}</button>
      <button
        className="join-item btn"
        onClick={() => setCurrentPage(page + 1)}
      >
        {page + 1}
      </button>
      <button className="join-item btn" disabled>
        ...
      </button>
      <button
        className="join-item btn"
        onClick={() => setCurrentPage(page + 5)}
      >
        {page + 5}
      </button>
    </div>
  );
};
