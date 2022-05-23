import React from "react";

import { Menu, Typography, Avatar } from "antd";
import { BulbOutlined, FundOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src={
            "https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/5b6adf89-45c7-46ea-a466-fe8616f32b16.jpg?source=next&amp;fit=scale-down&amp;quality=highest&amp;width=1067"
          }
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Cryptos</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to={"/news"}>News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
