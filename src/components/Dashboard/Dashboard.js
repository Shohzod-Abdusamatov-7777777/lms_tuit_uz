import React, { useState } from "react";
import "./Dashboard.css";
import News from "../NewsCard/News";
import { NewsData } from "../../NewsData";
import { NavLink } from "react-router-dom";

const Dashboard = (props) => {
  const { user } = props;
  console.log(user);

  // const { id } = useParams();

  const [page, setPage] = useState(1);

  const News_Data = NewsData.slice((page - 1) * 9, page * 9);
  const pagLength = Math.ceil(NewsData.length / 9);
  let rows = [];
  for (let i = 1; i <= pagLength; i++) {
    rows.push(
      <NavLink
        activeClassName="active"
        className="pagination"
        key={i}
        to={`/dashboard/news/${i}`}
        onClick={() => setPage(i)}
      >
        {i}
      </NavLink>
    );
  }

  return (
    // page container
    <div className="page-container">
      <div className="row">
        {News_Data.map((news) => (
          <News key={news.id} news={news} />
        ))}
      </div>
      <div className="row float-right mr-1 mt-4">
        {page <= 1 ? (
          <span className="pagination arrow " style={{ cursor: "not-allowed" }}>
            ‹
          </span>
        ) : (
          <NavLink
            className="pagination"
            to={`/dashboard/news/${page - 1}`}
            onClick={() => (page > 1 ? setPage(page - 1) : "")}
          >
            ‹
          </NavLink>
        )}

        {rows}
        {page >= 5 ? (
          <span className="pagination arrow " style={{ cursor: "not-allowed" }}>
            ›
          </span>
        ) : (
          <NavLink
            className="pagination"
            to={`/dashboard/news/${page + 1}`}
            onClick={() => (page < pagLength ? setPage(page + 1) : "")}
          >
            ›
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
