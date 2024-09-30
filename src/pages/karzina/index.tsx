import { useState, useEffect } from "react";
import { Typography, Modal, Input, Radio, Form, Button, Row, Col } from "antd";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface MyCartComponentProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const MyCartComponent = ({ cartItems, setCartItems }: MyCartComponentProps) => {
  const [total, setTotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const calculateTotal = () => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };


  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const handleDecrement = (id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          return prevItems.filter((item) => item.id !== id);
        }
      }
      return prevItems;
    });
  };

  const handleIncrement = (id: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return prevItems;
    });
  };

  const showOrderModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-gray-200 w-72 p-5 ">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Корзина</h1>
        <h1 className="bg-white rounded-md text-center p-2 w-10">{quantity}</h1>
      </div>
      <hr className="border-t-2 border-white my-3" />
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center my-3">
          <img src="/burger-res.svg" alt="" className="w-16 h-16" />
          <div className="ml-2 flex-1">
            <Typography className="text-black">{item.name}</Typography>
            <Typography className="text-gray-500 text-sm">
              {item.price}₽
            </Typography>
          </div>
          <div className="flex items-center ml-4">
            <button
              onClick={() => handleDecrement(item.id)}
              className="text-black"
            >
              -
            </button>
            <span className="mx-4 text-xl">{item.quantity}</span>
            <button
              onClick={() => handleIncrement(item.id)}
              className="text-black"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <hr className="border-t-2 border-white my-3" />
      <div className="flex justify-between pt-2">
        <Typography className="font-normal text-lg">Итого</Typography>
        <Typography className="font-normal text-lg">{total}₽</Typography>
      </div>
      <div className="flex justify-center pt-4">
        <Button
<<<<<<< HEAD
          className="bg-orange-600 text-white rounded-lg py-2 px-4 text-lg w-full"
=======
<<<<<<< HEAD
          className="bg-orange-600 text-white rounded-lg py-2 px-4 text-lg w-full"
=======
          className="bg-orange-600 text-white rounded-lg py-2 px-4 text-lg"
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
          onClick={showOrderModal}
        >
          Оформить заказ
        </Button>
      </div>
      <div className="flex items-center gap-2 text-center pt-4">
        <img src="/scuter.svg" alt="" className="w-8 h-8" />
        <Typography className="text-sm font-normal">
          Бесплатная доставка
        </Typography>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ display: "flex" }}
        width={600}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <div className="bg-yellow-400 w-full">
              <img className="w-full mx-auto pt-16" src="/pic.svg" alt="" />
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <Form layout="vertical" onFinish={handleOk}>
              <Form.Item
                label="Имя"
                name="name"
                rules={[
                  { required: true, message: "Пожалуйста, введите ваше имя!" },
                ]}
              >
                <Input placeholder="Введите ваше имя" />
              </Form.Item>
              <Form.Item
                label="Телефон"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите ваш телефон!",
                  },
                ]}
              >
                <Input placeholder="Введите ваш телефон" />
              </Form.Item>
              <Form.Item
                label="Способ оплаты"
                name="paymentMethod"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, выберите способ оплаты!",
                  },
                ]}
              >
                <Radio.Group>
                  <Radio value="cash">Самовывоз</Radio>
                  <Radio value="card">Доставка</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <Button
                  className="bg-orange-600 text-white rounded-lg py-2 px-4"
                  onClick={handleOk}
                >
                  Оформить
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default MyCartComponent;
