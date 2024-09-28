
import React from "react";
import { Card, Col, Row, Tag, Badge } from "antd";

interface Order {
  id: number;
  name: string;
  price: number;
  status: "Yangi" | "Qabul qilingan" | "Jonatilgan" | "Yopilgan" | "Bekor qilingan";
  date: string;
}

const orders: Order[] = [
  {
    id: 1,
    name: "Burger Set",
    price: 45000,
    status: "Qabul qilingan",
    date: "2024-09-27",
  },
  { id: 2, name: "Pizza", price: 65000, status: "Yangi", date: "2024-09-26" },
  {
    id: 3,
    name: "Lavash",
    price: 30000,
    status: "Jonatilgan",
    date: "2024-09-25",
  },
  {
    id: 4,
    name: "Shashlik",
    price: 70000,
    status: "Bekor qilingan",
    date: "2024-09-25",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Yangi":
      return "blue";
    case "Qabul qilingan":
      return "green";
    case "Jonatilgan":
      return "orange";
    case "Yopilgan":
      return "red";
    case "Bekor qilingan":
      return "gray";
    default:
      return "default";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "Yangi":
      return "Yangi Buyurtma";
    case "Qabul qilingan":
      return "Qabul Qilingan";
    case "Jonatilgan":
      return "Jonatilgan";
    case "Yopilgan":
      return "Yopilgan";
    case "Bekor qilingan":
      return "Bekor qilingan";
    default:
      return status;
  }
};

const Buyurtma: React.FC = () => {
  return (
    <div style={{ padding: "30px", backgroundColor: "#f5f5f5" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontWeight:"800", fontSize:"20px" }}>
        Buyurtmalar Ro'yxati
      </h2>
      <Row gutter={[16, 16]}>
        {orders.map((order) => (
          <Col xs={24} sm={12} md={8} key={order.id}>
            <Badge.Ribbon
              text={getStatusLabel(order.status)}
              color={getStatusColor(order.status)}
            >
              <Card
                title={order.name}
                bordered={false}
                hoverable
                style={{
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
                bodyStyle={{ padding: "20px" }}
              >
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Narxi:{" "}
                  <span style={{ color: "#fa8c16" }}>{order.price} so'm</span>
                </p>
                <p>Sana: {order.date}</p>
                <div style={{ paddingTop: "20px" }}>
                  <Tag style={{ padding: "3px 7px" }} color={getStatusColor(order.status)}>
                    {order.status}
                  </Tag>
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Buyurtma;
