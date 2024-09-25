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
      alert("Passwords do not match!");
      return;
    }

    try {
      console.log(values);

      const res = await fetch("https://175690e55d32338c.mokky.dev/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.userName,  // Foydalanuvchi nomi
          password: values.password
        }),
      });

      navigate("/home");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
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

          <Form.Item<FieldType>
            label={<span style={{ color: "white" }}>Confirm Password</span>}
            name="confirmPassword"
            rules={[
              { required: true, message: "Please confirm your password!" },
            ]}
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
          Already have an account?{" "}
          <Link to={"/login"} className={"text-white ml-1"}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
