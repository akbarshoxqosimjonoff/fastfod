import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import type { MenuProps } from "antd";
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
      { label: "Аккаунт", key: "0" },
      { label: "Настройки", key: "1" },
    ],
    []
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
            (product: any) => product.categoryId === selectedCategory
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
  }, []);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const fetchProducts = async (id: string) => {
    try {
      const response = await axios.get(
        `https://175690e55d32338c.mokky.dev/products?categoryId=*${id}`
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
    setQuantity(0);
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
      </div>

      <div className="container my-10 mx-auto px-3">
        <Row gutter={[20, 20]}>
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
                    {category.icon ? (
                      <img
                        src={category.icon}
                        alt={category.title}
                        style={{ width: "24px", height: "24px" }}
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
                fetchProducts(value);
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

              <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
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
                          }}
                        >
                          Добавить
                        </Button>
                      </div>
                    </div>
                  </Col>
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
