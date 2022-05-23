import React, { useState } from "react";

import HTMLReactParser from "html-react-parser";

import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useParams } from "react-router-dom";
import millify from "millify";

import { useGetCryptoDetailsQuery } from "../../Redux/crypto";

import { Typography, Col, Row } from "antd";

const { Title, Text } = Typography;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data } = useGetCryptoDetailsQuery(coinId);

  return (
    <div className="details-row">
      <Title level={5}>Coin Name: {data?.data?.coin.name}</Title>
      <img className="coin-details-img" src={data?.data?.coin.iconUrl} alt="" />
      <a href={data?.data?.coin.websiteUrl} target="_blank">
        Coin Site Link
      </a>
    </div>
  );
};

export default CryptoDetails;
