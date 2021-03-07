import React, { useState } from "react";

const Retake = () => {
  // courses data
  const [courses, setCourses] = useState([
    {
      id: 1,
      kredit: 6,
      selected: false,
      subject: "Ma‘lumotlar bazasi",
    },
    {
      id: 2,
      kredit: 4,
      selected: false,
      subject: "Kiberxavfsizlik asoslari",
    },
    {
      id: 3,
      kredit: 5,
      selected: false,
      subject: "Ma‘lumotlar tuzilmasi va algoritmlar",
    },
    {
      id: 4,
      kredit: 3,
      selected: false,
      subject: "Elektronika va sxemalar 1",
    },
    {
      id: 5,
      kredit: 6,
      selected: false,
      subject: "Diskret tuzilmalar",
    },
  ]);

  // handle selected
  const handleSelected = (id) => {
    const SelectedData = [...courses];
    SelectedData[id - 1].selected = !courses[id - 1].selected;
    setCourses(SelectedData);
  };

  return (
    <div className="page-container">
      <div className="mt-2">
        <h4 className="text-secondary">Qayta o’qish</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          <table className="table table-bordered  table-secondary">
            <thead>
              <tr>
                <th>Fan</th>
                <th className="align-middle text-center">Kredit</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.subject}</td>
                  <td className="text-center align-middle">{course.kredit}</td>
                  <td className="align-middle text-center">
                    <button
                      type="button "
                      className={
                        course.selected
                          ? "btn btn-primary w-100 p-1"
                          : "btn btn-outline-primary w-100 p-1"
                      }
                      onClick={() => handleSelected(course.id)}
                    >
                      {course.selected ? "Bekor qilish" : "Tanlash"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <p className="text-muted text-right small">
            Kontrakt summasi = 6 627 840 so’m
          </p>
          <p className="text-muted text-right small">1 kredit = 110 464 so’m</p>
          <div className="panel">
            <h4 className="text-muted">Jami:</h4>
            <h3 className="text-right">
              <span>
                {parseInt(
                  courses.reduce(
                    (total, course) =>
                      course.selected ? total + course.kredit : total,
                    0
                  ) * 110464
                )
                  .toLocaleString()
                  .replace(/,/g, " ")}
              </span>
              so'm
            </h3>
          </div>
          {courses.filter((course) => course.selected).length ? (
            <div className="text-right mt-4">
              <button type="button" className="btn btn-success">
                To'lov
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Retake;
