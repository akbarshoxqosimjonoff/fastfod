import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import type { MenuProps } from "antd";
<<<<<<< HEAD
import "animate.css";
=======
<<<<<<< HEAD
import "animate.css";
=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
import {
  Button,
  Col,
  Dropdown,
  Row,
  Typography,
  Spin,
  Segmented,
  Modal,
} from "antd";
import { CgProfile } from "react-icons/cg";
<<<<<<< HEAD
import { FiMessageCircle } from "react-icons/fi";
import MyCartComponent from "@src/pages/karzina";
import Footer from "@src/pages/footer";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
=======
import MyCartComponent from "@src/pages/karzina";
import Footer from "@src/pages/footer";
<<<<<<< HEAD
import { Slide } from "react-awesome-reveal";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f

interface Product {
  id: string;
  image: string;
  price: number;
  weight: number;
  title: string;
  desc: string;
  compound: string[];
  calories: number;
  categoryId: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const HomePage = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
=======
<<<<<<< HEAD
  const navigate = useNavigate();
=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("1");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
<<<<<<< HEAD
  const [isChatModalOpen, setIsChatModalOpen] = useState<boolean>(false);

  const items: MenuProps["items"] = useMemo(
    () => [
      { label: "Akkaunt", key: "0", onClick: () => navigate("/account") },
=======

  const items: MenuProps["items"] = useMemo(
    () => [
<<<<<<< HEAD
      { label: "Akkaunt", key: "0", onClick: () => navigate("/account") },

>>>>>>> f679e8f
      {
        label: (
          <div
            className="flex items-center gap-2"
            onClick={() => navigate("/adminPage")}
          >
            Cтраница администратора
          </div>
        ),
        key: "2",
      },
      { label: "Настройки", key: "1" },
    ],
    [navigate]
<<<<<<< HEAD
=======
=======
      { label: "Аккаунт", key: "0" },
      { label: "Настройки", key: "1" },
    ],
    []
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://175690e55d32338c.mokky.dev/categoriy"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Kategoriyalarni olishda xatolik:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://175690e55d32338c.mokky.dev/products"
        );
        setProducts(
          response.data.filter(
<<<<<<< HEAD
            (product: Product) => product.categoryId === selectedCategory
=======
<<<<<<< HEAD
            (product: Product) => product.categoryId === selectedCategory
=======
            (product: any) => product.categoryId === selectedCategory
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
          )
        );
      } catch (error) {
        console.error("Mahsulotlarni olishda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchProducts();
<<<<<<< HEAD
  }, [selectedCategory]);
=======
<<<<<<< HEAD
  }, [selectedCategory]);
=======
  }, []);
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f679e8f
  const fetchProductsByCategory = async (id: string) => {
    try {
      const response = await axios.get(
        `https://175690e55d32338c.mokky.dev/products?categoryId=${id}`
<<<<<<< HEAD
=======
=======
  const fetchProducts = async (id: string) => {
    try {
      const response = await axios.get(
        `https://175690e55d32338c.mokky.dev/products?categoryId=*${id}`
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Mahsulotlarni olishda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const showModal = (product: Product) => {
    setSelectedProduct(product);
<<<<<<< HEAD
    setQuantity(1);
=======
<<<<<<< HEAD
    setQuantity(1);
=======
    setQuantity(0);
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

<<<<<<< HEAD
  const handleChatOpen = () => {
    setIsChatModalOpen(true);
  };

  const handleChatOk = () => {
    setIsChatModalOpen(false);
    navigate("/chat");
  };

  return (
    <div className="bg-[#F9F9F9]">
      <div className="bg-[url('/ellipse.svg')] bg-cover bg-center flex flex-col items-center py-7">
        <header className="container flex justify-between items-center">
          <img src={"/logo.svg"} alt="Logo" />
          <div className="flex items-center">
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button type="text">
                <CgProfile  style={{fontSize:"23px"}}/>
              </Button>
            </Dropdown>
            <Button
              type="text"
              onClick={handleChatOpen}
              className="flex items-center text-2xl"
            >
              <FiMessageCircle   style={{fontSize:"23px"}}/>
            </Button>
          </div>
=======
  return (
<<<<<<< HEAD
    <div className="bg-[#F9F9F9]">
      <div className="bg-[url('/ellipse.svg')] bg-cover bg-center flex flex-col items-center py-7">
        <header className="container flex justify-between items-center">
          <img src={"/logo.svg"} alt="" />
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button type="text">
              <CgProfile />
            </Button>
          </Dropdown>
>>>>>>> f679e8f
        </header>

        <Slide>
          <div className="flex flex-col md:flex-row items-center my-10">
<<<<<<< HEAD
            <img
              src="/pic.png"
              alt="Burger"
              className="w-full md:w-1/2 lg:w-1/3"
            />
=======
            <img src="/pic.png" alt="" className="w-full md:w-1/2 lg:w-1/3" />
>>>>>>> f679e8f
            <div className="md:ml-6 text-center md:text-left">
              <Typography.Title level={1} className="text-2xl md:text-4xl">
                Только самые <br />
                <span className="text-secondary">сочные бургеры!</span>
              </Typography.Title>
              <Typography className="text-white mt-4 md:mt-6 text-base md:text-lg">
                Бесплатная доставка от 599₽
              </Typography>
            </div>
          </div>
        </Slide>
<<<<<<< HEAD
=======
=======
    <div style={{ backgroundColor: "#F9F9F9" }}>
      <div
        style={{
          background: "url('/ellipse.svg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundColor: "#F9F9F9",
        }}
        className="flex flex-col items-center py-7"
      >
        <header className="container flex justify-between">
          <img src={"/logo.svg"} alt="" />
          <div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button type="text">
                <CgProfile />
              </Button>
            </Dropdown>
          </div>
        </header>

        <div className="flex flex-col md:flex-row items-center my-10">
          <img src="/pic.png" alt="" className="w-full md:w-1/2 lg:w-1/3" />
          <div className="md:ml-6">
            <Typography.Title level={1} className="text-2xl md:text-4xl">
              Только самые <br />
              <span className="text-secondary">сочные бургеры!</span>
            </Typography.Title>
            <Typography className="text-white mt-4 md:mt-6 text-base md:text-lg">
              Бесплатная доставка от 599₽
            </Typography>
          </div>
        </div>
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
      </div>

      <div className="container my-10 mx-auto px-3">
        <Row gutter={[20, 20]}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f679e8f
          <div className="flex gap-5 overflow-x-auto whitespace-nowrap py-2 px-4">
            <Segmented
              className="rounded-lg gap-5 text-black inline-block"
              options={categories.map((category) => ({
                label: (
                  <div className="flex items-center gap-3 py-2 px-3 text-lg">
<<<<<<< HEAD
=======
=======
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              padding: "0 10px",
              margin: "0 30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <Segmented
              style={{
                borderRadius: "12px",
                gap: "20px",
                color: "#000000",
                display: "inline-block",
              }}
              options={categories.map((category) => ({
                label: (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      padding: "9px 8px",
                      fontSize: "18px",
                    }}
                  >
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
                    {category.icon ? (
                      <img
                        src={category.icon}
                        alt={category.title}
<<<<<<< HEAD
                        className="w-6 h-6"
=======
<<<<<<< HEAD
                        className="w-6 h-6"
=======
                        style={{ width: "24px", height: "24px" }}
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
                      />
                    ) : null}
                    <span>{category.title}</span>
                  </div>
                ),
                value: category.id,
              }))}
              value={selectedCategory}
              onChange={(value) => {
                setSelectedCategory(value as string);
<<<<<<< HEAD
                fetchProductsByCategory(value as string);
=======
<<<<<<< HEAD
                fetchProductsByCategory(value as string);
=======
                fetchProducts(value);
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
              }}
              block
              size="large"
            />
          </div>

<<<<<<< HEAD
=======
          <Modal
            title={selectedProduct?.title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <img
                src={selectedProduct?.image || "/photo.svg"}
                alt={selectedProduct?.title}
                className="w-full md:w-40 h-auto"
              />
              <div>
                <Typography className="text-xs mb-4">
                  {selectedProduct?.desc}
                </Typography>
                <Typography className="text-xs font-semibold mb-2">
                  Состав:
                </Typography>
                <Typography className="text-sm">
                  {selectedProduct?.compound.join(", ")}
                </Typography>
              </div>
            </div>

            <div className="pt-6 flex flex-col md:flex-row items-center gap-4">
              <Button
                className="bg-orange-500 text-white w-full md:w-64"
                onClick={() => {
                  if (selectedProduct && quantity > 0) {
                    setCartItems((prevItems) => [
                      ...prevItems,
                      {
                        id: selectedProduct.id,
                        name: selectedProduct.title,
                        price: selectedProduct.price,
                        quantity,
                      },
                    ]);
                    handleOk();
                  }
                }}
              >
                Добавить
              </Button>

<<<<<<< HEAD
              <div className="flex items-center bg-gray-200 px-4 py-1 rounded">
=======
              <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
>>>>>>> ab66aac (fastfods)
                <button onClick={handleDecrement} className="text-black">
                  -
                </button>
                <span className="mx-5 text-xl">{quantity}</span>
                <button onClick={handleIncrement} className="text-black">
                  +
                </button>
              </div>
            </div>
          </Modal>

>>>>>>> f679e8f
          <Col lg={6}>
            <MyCartComponent
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Col>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f679e8f

          <Col lg={18}>
            {loading ? (
              <Spin />
            ) : (
              <Row
                gutter={[20, 20]}
                className="grid grid-cols-2 md:grid-cols-3 gap-5"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
<<<<<<< HEAD
                    onClick={() => showModal(product)}
=======
                    // onClick={() => showModal(product)}
>>>>>>> f679e8f
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <Typography className="font-bold text-lg">
                        {product.price}₽
                      </Typography>
<<<<<<< HEAD
                      <div style={{ paddingTop: "10px" }}>
                        <Typography>{product.title}</Typography>

                        <Typography style={{ color: "#B1B1B1" }}>
                          {product.weight}г
                        </Typography>
                        <div style={{ paddingTop: "20px", fontWeight: "900" }}>
                          <Button
                            className="bg-orange-500 text-white w-full md:w-64"
                            onClick={() => {
                              const cartItem: CartItem = {
                                id: product.id,
                                name: product.title,
                                price: product.price,
                                quantity,
                              };
                              setCartItems((prev) => [...prev, cartItem]);
                            }}
                          >
                            В корзину
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
=======
                      <Typography className="text-black-800" style={{fontWeight:"400", paddingTop:"5px"}}>
                        {product.title}
                      </Typography>
                      <Typography style={{color:"#B1B1B1", paddingTop:"20px"}} >
                        {product.weight}г
                      </Typography>
                      <div className="" style={{ paddingTop: "20px",fontWeight:"900" }}>
                        <Button
                          className="bg-orange-500 text-white w-full md:w-64"
                          onClick={() => {
                            if (selectedProduct && quantity > 0) {
                              setCartItems((prevItems) => [
                                ...prevItems,
                                {
                                  id: selectedProduct.id,
                                  name: selectedProduct.title,
                                  price: selectedProduct.price,
                                  quantity,
                                },
                              ]);
                              handleOk();
                            }
=======
          <Col lg={18}>
            {loading ? (
              <div style={{ textAlign: "center", padding: "50px" }}>
                <Spin size="large" />
              </div>
            ) : (
              <Row gutter={[20, 20]}>
                {products.map((item: Product) => (
                  <Col xs={24} sm={12} md={8} lg={8} xl={8} key={item.id}>
                    <div className="bg-white rounded-lg p-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full rounded"
                      />
                      <Typography className="text-black mt-4 text-xl font-semibold">
                        {item.price}₽
                      </Typography>
                      <Typography className="text-black text-base font-normal">
                        {item.title}
                      </Typography>
                      <Typography className="text-black mt-2 text-sm font-semibold text-gray-500">
                        {item.weight}гр
                      </Typography>
                      <div
                        className="pb-4 text-center"
                        style={{ paddingTop: "10px" }}
                      >
                        <Button
                          onClick={() => showModal(item)}
                          type="primary"
                          style={{
                            width: "100%",
                            background: "#FF7020",
                            border: "none",
>>>>>>> ab66aac (fastfods)
                          }}
                        >
                          Добавить
                        </Button>
                      </div>
                    </div>
<<<<<<< HEAD
                  </div>
=======
                  </Col>
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </div>
<<<<<<< HEAD
      <Modal
        title={selectedProduct?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          <img
            src={selectedProduct?.image || "/photo.svg"}
            alt={selectedProduct?.title}
            className="w-full md:w-40 h-auto"
          />
          <div>
            <Typography className="text-xs mb-4">
              {selectedProduct?.desc}
            </Typography>
            <Typography className="text-xs font-semibold mb-2">
              Состав:
            </Typography>
            <Typography className="text-sm">
              {selectedProduct?.compound.join(", ")}
            </Typography>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center gap-4">
          <Button
            className="bg-orange-500 text-white w-full md:w-64"
            onClick={() => {
              if (selectedProduct && quantity > 0) {
                setCartItems((prevItems) => [
                  ...prevItems,
                  {
                    id: selectedProduct.id,
                    name: selectedProduct.title,
                    price: selectedProduct.price,
                    quantity,
                  },
                ]);
                handleOk();
              }
            }}
          >
            Добавить
          </Button>

          <div className="flex items-center bg-gray-200 px-4 py-1 rounded">
            <button onClick={handleDecrement} className="text-black">
              -
            </button>
            <span className="mx-5 text-xl">{quantity}</span>
            <button onClick={handleIncrement} className="text-black">
              +
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        title="Salom! Chatga ulanishga tayyormisiz?"
        visible={isChatModalOpen}
        onOk={handleChatOk}
        onCancel={() => setIsChatModalOpen(false)}
      >
        <p>Biz bilan suhbatlasha boshlash uchun "OK" tugmasini bosing.</p>
      </Modal>

=======
<<<<<<< HEAD

=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
      <Footer />
    </div>
  );
};
<<<<<<< HEAD
=======
<<<<<<< HEAD

export default HomePage;
=======
>>>>>>> ab66aac (fastfods)
>>>>>>> f679e8f
