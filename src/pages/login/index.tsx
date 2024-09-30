import { Button, Form, FormProps, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  type FieldType = {
    userName: string;
    password: string;
  };

  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const response = await axios.post(
        "https://175690e55d32338c.mokky.dev/auth",
        {
          username: values.userName,
          password: values.password,
        }
      );
<<<<<<< HEAD

      // Tokenni saqlash
      localStorage.setItem("token", response.data.token);
=======
<<<<<<< HEAD

      // Tokenni saqlash
      localStorage.setItem("token", response.data.token);
=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
      console.log("Success:", response.data);

      navigate("/dashboard");
    } catch (error) {
<<<<<<< HEAD
      console.error("Login xatosi:", error);
      alert("Login failed. Please check your credentials.");
=======
<<<<<<< HEAD
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials.");
=======
      console.error("Login xatosi:", error);
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
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
=======
<<<<<<< HEAD
      <div className="relative p-10 min-[300px]:w-[350px] sm:w-[450px] h-[400px] rounded-2xl bg-opacity-80">
        <div className="absolute inset-0 bg-opacity-50 rounded-2xl" style={{ zIndex: -10 }} />
=======
>>>>>>> f679e8f
      <div
        className={
          "relative p-10 min-[300px]:w-[350px] sm:w-[450px] h-[400px] rounded-2xl bg-opacity-80"
        }
<<<<<<< HEAD
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
=======
>>>>>>> f679e8f
      >
        <div
          className="absolute inset-0 bg-opacity-50 rounded-2xl"
          style={{
            zIndex: -10,
          }}
        />
<<<<<<< HEAD
        <p className={"text-4xl text-center font-medium mb-5 z-10 text-white"}>
          Login
        </p>
=======
>>>>>>> ab66aac (fastfods)
        <p className={"text-4xl text-center font-medium mb-5 z-10"}>Login</p>
>>>>>>> f679e8f
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
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input className={"h-[40px]"} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span style={{ color: "white" }}>Password</span>}
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password className={"h-[40px]"} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={"w-[100%] h-[40px] text-[16px]"}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
<<<<<<< HEAD
        <p className={"text-center text-white"}>
          You do not have an account?{" "}
          <Link to={"/register"} className={"text-white ml-1"}>
            Sign up
=======
        <p className={"text-center"}>
<<<<<<< HEAD
          You do not have an account?{" "}
          <Link to={"/register"} className={"text-white ml-1"}>
=======
          You do not have account{" "}
          <Link to={"/reg"} className={"text-white ml-1"}>
>>>>>>> ab66aac (fastfods)
            Sign in
>>>>>>> f679e8f
          </Link>
        </p>
      </div>
    </div>
  );
}
