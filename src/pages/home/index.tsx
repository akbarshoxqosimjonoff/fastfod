import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import type { MenuProps } from "antd";
import "animate.css";
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
import MyCartComponent from "@src/pages/karzina";
import Footer from "@src/pages/footer";
import { Slide } from "react-awesome-reveal";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("1");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const items: MenuProps["items"] = useMemo(
    () => [
      { label: "Akkaunt", key: "0", onClick: () => navigate("/account") },

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
            (product: Product) => product.categoryId === selectedCategory
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
  }, [selectedCategory]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const fetchProductsByCategory = async (id: string) => {
    try {
      const response = await axios.get(
        `https://175690e55d32338c.mokky.dev/products?categoryId=${id}`
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
    setQuantity(1);
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

  return (
    <div className="bg-[#F9F9F9]">
      <div className="bg-[url('/ellipse.svg')] bg-cover bg-center flex flex-col items-center py-7">
        <header className="container flex justify-between items-center">
          <img src={"/logo.svg"} alt="" />
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Button type="text">
              <CgProfile />
            </Button>
          </Dropdown>
        </header>

        <Slide>
          <div className="flex flex-col md:flex-row items-center my-10">
            <img src="/pic.png" alt="" className="w-full md:w-1/2 lg:w-1/3" />
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
      </div>

      <div className="container my-10 mx-auto px-3">
        <Row gutter={[20, 20]}>
          <div className="flex gap-5 overflow-x-auto whitespace-nowrap py-2 px-4">
            <Segmented
              className="rounded-lg gap-5 text-black inline-block"
              options={categories.map((category) => ({
                label: (
                  <div className="flex items-center gap-3 py-2 px-3 text-lg">
                    {category.icon ? (
                      <img
                        src={category.icon}
                        alt={category.title}
                        className="w-6 h-6"
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
                fetchProductsByCategory(value as string);
              }}
              block
              size="large"
            />
          </div>

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

          <Col lg={6}>
            <MyCartComponent
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Col>

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
                    onClick={() => showModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <Typography className="font-bold text-lg">
                        {product.title}
                      </Typography>
                      <Typography className="text-gray-500">
                        {product.price}₽
                      </Typography>
                      <div className="" style={{paddingTop:"20px"}}>
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
                      </div>
                    </div>
                  </div>
                ))}
              </Row>
            )}
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
