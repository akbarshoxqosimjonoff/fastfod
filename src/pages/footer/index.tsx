import React from "react";
import { Typography } from "antd";
import { MdCall } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="mb-16 pt-24">
      <div className="bg-white pt-12">
        <div className="flex flex-col md:flex-row justify-around">
          <img src={"/logo-footer.svg"} alt="footerLogo" className="mb-4 md:mb-0" />
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 text-center">
              <Typography className="text-xl font-normal">
                Номер для заказа
              </Typography>
            </div>
            <div className="pt-6 flex items-center gap-2 text-center">
              <MdCall className="text-3xl" />
              <Typography className="font-normal">+7(930)833-38-11</Typography>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Typography className="text-xl font-normal">
              Мы в соцсетях
            </Typography>
            <div className="flex gap-4 pt-6">
              <img src="/vk.svg" alt="vk" className="h-8 w-8" />
              <img src="/bi_telegram.svg" alt="telegram" className="h-8 w-8" />
            </div>
          </div>
        </div>
        <Typography className="pt-14 pl-36 font-normal text-center md:text-left">
          © YouMeal, 2022 Design: <br /> Anastasia Ilina
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
