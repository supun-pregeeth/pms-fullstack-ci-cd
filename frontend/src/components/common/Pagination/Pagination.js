import React from "react";

export default function Pagination({ page, totalPages, onPage }) {
  if (!totalPages || totalPages <= 1) return null;

  return (
    <div className="pager">
      <button className="btn btn-ghost btn-sm" disabled={page <= 1} onClick={() => onPage(page - 1)}>
        Prev
      </button>

      <div className="pager__info">
        Page <b>{page}</b> of <b>{totalPages}</b>
      </div>

      <button className="btn btn-ghost btn-sm" disabled={page >= totalPages} onClick={() => onPage(page + 1)}>
        Next
      </button>
    </div>
  );
}
