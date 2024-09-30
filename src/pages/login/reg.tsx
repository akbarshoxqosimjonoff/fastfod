import { Button, Form, FormProps, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  type FieldType = {
    userName: string;
    password: string;
    confirmPassword: string;
  };

  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values.password !== values.confirmPassword) {
<<<<<<< HEAD
      alert("Parollar mos kelmaydi!");
=======
      alert("Passwords do not match!");
>>>>>>> ab66aac (fastfods)
      return;
    }

    try {
<<<<<<< HEAD
      const response = await axios.post(
        "https://175690e55d32338c.mokky.dev/register",
        {
          username: values.userName,
          password: values.password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      navigate("/home");
    } catch (error: any) {
      console.error("Registratsiya xatosi:", error);

      if (error.response) {
        const { status, data } = error.response;
        console.log("Xato ma'lumotlari:", data); // Qo'shimcha ma'lumotlarni konsolga chiqarish

        if (status === 401) {
          if (data.message === "RESOURCE_USER_ALREADY_EXISTS") {
            alert("Bu foydalanuvchi nomi allaqachon mavjud. Iltimos, boshqa foydalanuvchi nomini tanlang.");
          } else {
            alert("Ruxsat berilmagan: Iltimos, kiritishingizni tekshiring.");
          }
        } else {
          alert("Registratsiya amalga oshmadi. Iltimos, qaytadan urinib ko'ring.");
        }
      } else {
        alert("Kutilmagan xato yuz berdi. Iltimos, qaytadan urinib ko'ring.");
      }
=======
      console.log(values);

      const res = await fetch("https://175690e55d32338c.mokky.dev/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.userName,
          password: values.password
        }),
      });

      navigate("/home");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
>>>>>>> ab66aac (fastfods)
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://img.pikbest.com/wp/202344/assorted-an-assortment-of-various-fast-food-items-on-a-textured-gray-table_9906835.jpg!bw700")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
<<<<<<< HEAD
      <div className="relative p-10 min-[300px]:w-[350px] sm:w-[450px] h-[500px] rounded-2xl bg-opacity-80">
        <div className="absolute inset-0 bg-opacity-50 rounded-2xl" style={{ zIndex: -10 }} />
=======
      <div
        className={
          "relative p-10 min-[300px]:w-[350px] sm:w-[450px] h-[500px] rounded-2xl bg-opacity-80"
        }
      >
        <div
          className="absolute inset-0 bg-opacity-50 rounded-2xl"
          style={{
            zIndex: -10,
          }}
        />
>>>>>>> ab66aac (fastfods)
        <p className={"text-4xl text-center font-medium mb-5 z-10"}>Register</p>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={<span style={{ color: "white" }}>Username</span>}
            name="userName"
<<<<<<< HEAD
            rules={[{ required: true, message: "Iltimos, foydalanuvchi nomini kiriting!" }]}
=======
            rules={[{ required: true, message: "Please enter your username!" }]}
>>>>>>> ab66aac (fastfods)
          >
            <Input className={"h-[40px]"} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span style={{ color: "white" }}>Password</span>}
            name="password"
<<<<<<< HEAD
            rules={[{ required: true, message: "Iltimos, parolni kiriting!" }]}
=======
            rules={[{ required: true, message: "Please enter your password!" }]}
>>>>>>> ab66aac (fastfods)
          >
            <Input.Password className={"h-[40px]"} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span style={{ color: "white" }}>Confirm Password</span>}
            name="confirmPassword"
<<<<<<< HEAD
            rules={[{ required: true, message: "Iltimos, parolni tasdiqlang!" }]}
=======
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
>>>>>>> ab66aac (fastfods)
          >
            <Input.Password className={"h-[40px]"} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={"w-[100%] h-[40px] text-[16px]"}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <p className={"text-center"}>
<<<<<<< HEAD
          Allaqachon akkauntingiz bormi?{" "}
          <Link to={"/login"} className={"text-white ml-1"}>
            Kirish
=======
          Already have an account?{" "}
          <Link to={"/login"} className={"text-white ml-1"}>
            Log in
>>>>>>> ab66aac (fastfods)
          </Link>
        </p>
      </div>
    </div>
  );
}
