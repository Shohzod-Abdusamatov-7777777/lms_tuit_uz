import React from "react";
import { FaFileAlt } from "react-icons/fa";
import Avatar from "../images/no-picture.jpg";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="page-container">
      <div className="row pt-5">
        <div className="col-md-6">
          <h4 className="text-secondary">Ma'lumot</h4>
        </div>
        <div className="col-md-6 text-right">
          <Link
            class="btn btn-default border border-primary text-primary pt-1 pb-1"
            to="#"
          >
            <FaFileAlt />
            <span>Ma'lumotnoma olish uchun ariza berish</span>
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5">
          <p>
            <img src={Avatar} alt="img " style={{ width: "150px" }} />
          </p>
          <p>
            <b>F.I.SH</b> : Abdusamatov Shohzod Doniyor o‘g‘li
          </p>
          <p>
            <b>Tug’ilgan sanasi</b> : 01-10-2000
          </p>
          <p>
            <b>Jinsi</b> : Мужской
          </p>
          <p>
            <b>Reyting daftarcha</b> : 71403-19
          </p>
        </div>
        <div className="col-md-7 mt-4">
          <p>
            <b>Yo’nalish</b> : Axborot xavfsizligi
          </p>
          <p>
            <b>O’qish tili</b> : UZ
          </p>
          <p>
            <b>Darajasi</b> : Bakalavr
          </p>
          <p>
            <b>O’qish turi</b> : Kunduzgi
          </p>
          <p>
            <b>Kurs</b> : 2
          </p>
          <p>
            <b>Guruh</b> : 714-19 AXy
          </p>
          <p>
            <b>Kurator</b> : Qaxramonov Elbek
          </p>
          <p>
            <b>Stipendiya</b> : Bor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
