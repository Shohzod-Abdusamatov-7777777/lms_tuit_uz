import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Finals = (props) => {
  const { Courses, loader } = props;
  const [count, setCount] = useState(2);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [courses, setCourses] = useState(Courses);
  const [sorted, setSorted] = useState(false);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    handleSearch();
  }, [search]);

  useEffect(() => {
    sortByName(sortBy);
    setSortBy(sortBy);
  }, [sorted, sortBy]);

  // search item
  const handleSearch = () => {
    if (search) {
      const filteredData = courses.filter(
        (course) =>
          course.name.toLowerCase().includes(search.toLowerCase()) ||
          course.email.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredData);
    }
  };

  // handle events
  const handleEvents = (sortedBy) => {
    setSorted(!sorted);
    sortByName(sortedBy);
  };

  // sortBy name and email
  const sortByName = (sortBy) => {
    if (!sorted) {
      if (sortBy === "email") {
        const sortCourse = courses.sort((a, b) =>
          a.email.toLowerCase().localeCompare(b.email.toLowerCase())
        );
        setCourses(sortCourse);
      }
      if (sortBy === "name") {
        const sortCourse = courses.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setCourses(sortCourse);
      }
    } else {
      if (sortBy === "email") {
        const sortCourse = courses.sort((b, a) =>
          a.email.toLowerCase().localeCompare(b.email.toLowerCase())
        );
        setCourses(sortCourse);
      }
      if (sortBy === "name") {
        const sortCourse = courses.sort((b, a) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setCourses(sortCourse);
        // console.log(sortCourse.slice(0, 50));
      }
    }
  };

  return (
    <div className="page-container">
      <div className="row align-items-center">
        <div className=" col-sm-12 col-md-6 page-title">
          <h4 className="text-secondary">Yakuniy</h4>
        </div>
      </div>
      <div className="row pb-3">
        <div className=" col-sm-12 col-md-6 mt-2">
          <select
            className="p-1"
            style={{ width: "100px" }}
            name="count"
            onChange={(e) => setCount(e.target.value)}
          >
            <option>2</option>
            <option>5</option>
            <option>8</option>
            <option>10</option>
          </select>
          <label htmlFor="count">&nbsp; ta qatorni ko'rsat</label>
        </div>
        <div className="col-sm-12 col-md-6 text-right">
          <span className="">Izlash:&nbsp;</span>
          <span className=" d-inline-block">
            <input
              name="search"
              className="form-control"
              disabled={courses ? false : true}
              autoComplete="off"
              value={search}
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </span>

          {/* <p>{search}</p> */}
        </div>
      </div>
      {(() => {
        if (search) {
          if (filteredData.length) {
            return (
              <div className="alert alert-success">
                <b>{filteredData.length}</b> items found
              </div>
            );
          } else return <div className="alert alert-danger">Not found</div>;
        }
      })()}

      {/* table */}
      <div className="table-responsive ">
        <table className="table table-striped table-secondary table-bordered table-hover">
          <thead className="">
            <tr>
              <th>Fan</th>
              <th>
                O'qituvchi{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEvents("name")}
                >
                  {courses && (sorted ? <FaArrowUp /> : <FaArrowDown />)}
                </span>
              </th>
              <th>
                Davomad{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleEvents("email")}
                >
                  {courses && (sorted ? <FaArrowUp /> : <FaArrowDown />)}
                </span>
              </th>
              <th>Amal</th>
              <th>Reja</th>
            </tr>
          </thead>
          <tbody>
            {loader ? (
              <tr>
                <td colSpan="5" className="text-center font-weight-bold">
                  Loading...
                </td>
              </tr>
            ) : filteredData && filteredData.length ? (
              filteredData.slice(0, count).map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.email}</td>
                  <td>{course.id}</td>
                  <td>{course.id}</td>
                </tr>
              ))
            ) : (
              courses.slice(0, count).map((course, index) => (
                <tr key={index}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.email}</td>
                  <td>{course.id}</td>
                  <td>{course.id}</td>
                </tr>
              ))
            )}
            <tr style={{ borderTop: "2px solid #444" }}>
              <td colSpan="5">
                Jami {count} ta, 0 dan {count} gachasi ko'rsatilmoqda
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finals;
