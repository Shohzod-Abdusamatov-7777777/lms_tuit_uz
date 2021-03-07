import React from "react";

const News = (props) => {
  const { title, desc, data_time } = props.news;

  return (
    <div className="col-lg-4">
      <div className="card  mb-2">
        <div className="card-header">
          <span
            className="float-right p-1 text-light rounded font-italic font-weight-bold"
            style={{ fontSize: "12px", background: "#bbb" }}
          >
            {data_time}
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title text-secondary font-weight-bold">
            {title}
          </h5>
          <p className="card-text ">{desc}</p>
          <a href="#" className="btn btn-primary float-right pt-1 pb-1">
            Batafsil
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
