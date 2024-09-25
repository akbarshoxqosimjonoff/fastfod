import { useState, useEffect } from "react";
import { Input, Button, Typography, Form, message, Modal, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const Account = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [userInfo, setUserInfo] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
      setStep(3); // User is already registered
    }
  }, []);

  const handleRegister = () => {
    if (phoneNumber) {
      setStep(2); // Move to code verification step
    } else {
      message.error("Iltimos, telefon raqamingizni kiriting!");
    }
  };

  const handleVerifyCode = () => {
    const code = prompt("Iltimos, kodni kiriting:");
    if (code) {
      const newUserInfo = { phoneNumber, verificationCode: code };
      localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
      setUserInfo(newUserInfo);
      setStep(3); // Move to user info input step
      setModalVisible(true); // Open modal for user info
    } else {
      message.error("Iltimos, kodni kiriting!");
    }
  };

  const handleModalOk = () => {
    const newUserInfo = {
      ...userInfo,
      name,
      surname,
      location,
      image,
    };
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    setUserInfo(newUserInfo);
    setModalVisible(false);
    message.success("Ma'lumotlar muvaffaqiyatli saqlandi!");
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const handleImageChange = (file: any) => {
    setImage(file);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <Typography.Title level={2}>Akkaunt</Typography.Title>
      {step === 1 && (
        <Form layout="vertical">
          <Form.Item label="Telefon raqami" required>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Telefon raqamingizni kiriting"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleRegister}>
              Ro'yxatdan o'tish
            </Button>
          </Form.Item>
        </Form>
      )}
      {step === 2 && (
        <div>
          <Typography.Text>Qayta kodni kiriting:</Typography.Text>
          <Button type="primary" onClick={handleVerifyCode}>
            Tasdiqlash
          </Button>
        </div>
      )}
      {step === 3 && userInfo && (
        <div style={{ background: "#f0f2f5", padding: "20px", borderRadius: "8px" }}>
          <Typography.Text>
            Telefon raqamingiz: {userInfo.phoneNumber}
          </Typography.Text>
          {userInfo.name && (
            <div>
              <Typography.Text>Ism: {userInfo.name}</Typography.Text>
              <Typography.Text>Familiya: {userInfo.surname}</Typography.Text>
              <Typography.Text>Lokatsiya: {userInfo.location}</Typography.Text>
              {userInfo.image && <img src={userInfo.image} alt="Profile" style={{ width: "100px", borderRadius: "50%" }} />}
            </div>
          )}
        </div>
      )}

      <Modal
        title="Shaxsiy ma'lumotlaringizni kiriting"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form layout="vertical">
          <Form.Item label="Rasm yuklang" required>
            <Upload beforeUpload={handleImageChange} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Rasm yuklash</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Ism" required>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Familiya" required>
            <Input value={surname} onChange={(e) => setSurname(e.target.value)} />
          </Form.Item>
          <Form.Item label="Lokatsiya" required>
            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Account;
