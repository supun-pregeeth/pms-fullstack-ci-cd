import React from "react";

export default function ProjectFilters({
  search,
  status,
  onChangeSearch,
  onChangeStatus,
  onClear
}) {
  return (
    <div className="filterBar">
      <div className="filterBar__left">
        <div className="field">
          <label className="field__label">Search</label>
          <input
            className="input input--soft"
            placeholder="Search by title or tags..."
            value={search}
            onChange={(e) => onChangeSearch(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field__label">Status</label>
          <select
            className="select input--soft"
            value={status}
            onChange={(e) => onChangeStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </div>
      </div>

      <div className="filterBar__right">
        <button className="btn btn-ghost btn-sm" onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}
