import React from "react";
import { BsShop } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { LuBox } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";

function DashboardPage() {
  return (
    <div>
      <div
        className=""
        style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
      >
        <ImStatsBars style={{ fontSize: "30px" }} />

        <h1 style={{ fontSize: "20px", fontWeight: "900" }}>Manitoring</h1>
      </div>
      <div className="" style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="cards"
          style={{ paddingTop: "30px", display: "flex", gap: "30px" }}
        >
          <div
            className="dokon"
            style={{
              backgroundColor: "#8B80F9",
              width: "300px",
              display: "flex",
              gap: "20px",
              padding: "30px 20px",
              borderRadius: "10px",
            }}
          >
            <BsShop
              style={{ fontSize: "70px", color: "white", fontWeight: "900" }}
            />
            <div className="">
              <h1
                style={{ fontSize: "20px", fontWeight: "900", color: "white" }}
              >
                4
              </h1>
              <h2
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
              >
                Dokonlar
              </h2>
            </div>
          </div>
          <div
            className="dokon"
            style={{
              backgroundColor: "#8B80F9",
              width: "300px",
              display: "flex",
              gap: "20px",
              padding: "30px 20px",
              borderRadius: "10px",
            }}
          >
            <TbCategory
              style={{ fontSize: "70px", color: "white", fontWeight: "900" }}
            />
            <div className="">
              <h1
                style={{ fontSize: "20px", fontWeight: "900", color: "white" }}
              >
                2
              </h1>
              <h2
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
              >
                Kategoriyalar
              </h2>
            </div>
          </div>
          <div
            className="dokon"
            style={{
              backgroundColor: "#BF69B6",
              width: "300px",
              display: "flex",
              gap: "20px",
              padding: "30px 20px",
              borderRadius: "10px",
            }}
          >
            <LuBox
              style={{ fontSize: "70px", color: "white", fontWeight: "900" }}
            />

            <div className="">
              <h1
                style={{ fontSize: "20px", fontWeight: "900", color: "white" }}
              >
                2
              </h1>
              <h2
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
              >
                Kategoriyalar
              </h2>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{ paddingTop: "30px", display: "flex", gap: "30px" }}
        >
          <div
            className="dokon"
            style={{
              backgroundColor: "#C78530",
              width: "300px",
              display: "flex",
              gap: "20px",
              padding: "30px 20px",
              borderRadius: "10px",
            }}
          >
            <FaUsers
              style={{ fontSize: "70px", color: "white", fontWeight: "900" }}
            />

            <div className="">
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "white",
                }}
              >
                10
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Mijozlar
              </h2>
            </div>
          </div>
          <div
            className="dokon"
            style={{
              backgroundColor: "#CE6842",
              width: "300px",
              display: "flex",
              gap: "20px",
              padding: "30px 20px",
              borderRadius: "10px",
            }}
          >
            <CiDeliveryTruck
              style={{ fontSize: "70px", color: "white", fontWeight: "900" }}
            />

            <div className="">
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "white",
                }}
              >
                60
              </h1>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                  color: "white",
                }}
              >
                Jonatilgan
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
