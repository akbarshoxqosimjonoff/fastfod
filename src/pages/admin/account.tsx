import React, { useState, useEffect } from "react";
import { Card, Divider, Tabs, Input, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const Account: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      const userProfile = JSON.parse(savedProfile);
      setName(userProfile.name);
      setSurname(userProfile.surname);
      setPhone(userProfile.phone);
      setCountry(userProfile.country);
    }
  }, []);

  const handleChange = (info: any) => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-1);
    setFileList(fileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} muvaffaqiyatli yuklandi`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} yuklashda xatolik yuz berdi`);
    }
  };

  const onSave = () => {
    const userProfile = {
      name,
      surname,
      phone,
      country,
    };
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    message.success("Ma'lumotlar saqlandi");
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: "900", textAlign: "center" }}>
        Shaxsiy ma'lumotlar
      </h1>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Profil" key="1">
          <Card title="Profil ma'lumotlari" bordered={false}>
            {/* Rasm yuklash */}
            <div style={{ marginTop: "20px", textAlign: "center", display:"flex", justifyContent:"center" }}>
              <Upload
                accept="image/*"
                action="/upload"
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
              >
                {fileList.length < 1 && (
                  <div>
                    <UploadOutlined />
                    <div style={{ marginTop: 8 }}>Rasm yuklash</div>
                  </div>
                )}
              </Upload>
            </div>


            <div
              className="inputs"
              style={{
                display: "flex",
                gap: "125px",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <label htmlFor="" style={{ fontWeight: "800" }}>
                Ism
                <Input
                  placeholder="Ism"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label htmlFor="" style={{ fontWeight: "800" }}>
                Familya
                <Input
                  placeholder="Familya"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </label>
            </div>


            <div
              className="in"
              style={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <label htmlFor="" style={{ fontWeight: "800" }}>
                Telefon raqam
                <Input
                  placeholder="Telefon raqami"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label htmlFor="" style={{ fontWeight: "800" }}>
                Mamlakat
                <Input
                  placeholder="Mamlakat"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
            </div>


            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <Button type="primary" onClick={onSave}>
                Saqlash
              </Button>
            </div>
          </Card>
        </TabPane>


        <TabPane tab="Parol" key="2">
          <Card title="Parolni o'zgartirish" bordered={false}>
            <p>Hozirgi parolingizni kiriting:</p>
            <Input.Password
              placeholder="Hozirgi parol"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <p>Yangi parolingizni kiriting:</p>
            <Input.Password
              placeholder="Yangi parol"
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <Button
              type="primary"
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              Parolni yangilash
            </Button>
          </Card>
        </TabPane>


        <TabPane tab="Faol qurilmalar" key="3">
          <Card title="Faol qurilmalar" bordered={false}>
            <p>
              <strong>Qurilma nomi:</strong> iPhone 14 Pro
            </p>
            <p>
              <strong>Oxirgi kirish vaqti:</strong> 2024-09-26 14:20
            </p>
            <Divider />
            <p>
              <strong>Qurilma nomi:</strong> MacBook Pro
            </p>
            <p>
              <strong>Oxirgi kirish vaqti:</strong> 2024-09-26 18:55
            </p>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Account;
