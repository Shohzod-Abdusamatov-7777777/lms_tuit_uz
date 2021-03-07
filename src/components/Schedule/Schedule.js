import React from "react";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="page-container">
      <h4 className="text-secondary mt-2 mb-4">Dars jadvali</h4>

      <div className="table-responsive">
        <table className="table table-striped table-secondary table-bordered text-center">
          <thead className="bg-primary">
            <tr>
              <th>
                Vaqt/
                <br /> Kun
              </th>
              <th className="align-middle">Dushanba</th>
              <th className="align-middle">Seshanba</th>
              <th className="align-middle">Chorshanba</th>
              <th className="align-middle">Payshanba</th>
              <th className="align-middle">Juma</th>
              <th className="align-middle">Shanba</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle bg-primary">08:30-09:50</td>
              <td className="align-middle">
                Python
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>
              <td className="align-middle">
                Matematika
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">C-302</small>
              </td>
              <td className="align-middle">
                Dasturlash
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-304</small>
              </td>
              <td className="align-middle">
                Amaliyot
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
              <td className="align-middle">
                Matematika
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">10:00-11:20</td>
              <td className="align-middle">
                Dasturlash
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Fizika
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">11:30-12:50</td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Web dasturlash
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">13:00-14:20</td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Komputer
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
              <td className="align-middle"></td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">14:30-15:50</td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Hisob
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Murabbiylik soati
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">16:00-17:20</td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                JavaScript
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
            </tr>
            <tr>
              <td className="align-middle bg-primary">17:30-18:50</td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle"></td>
              <td className="align-middle">
                Hisob
                <br />
                <span className="border border-primary pr-1 pl-1 mr-1">
                  714-19 АХу
                </span>
                <small className="text-info">A-312</small>
              </td>{" "}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
