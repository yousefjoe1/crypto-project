import millify from "millify";
import React from "react";

import { Cryptocurrencies, News } from "../../components";

import { Typography, Row, Col, Statistic } from "antd";

import { useGetCryptosQuery } from "../../Redux/crypto";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);

  const theStats = data?.data?.stats;

  if (isFetching) return "Looding .....";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={theStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(theStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(theStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(theStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(theStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currerncies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to={"/cryptocurrencies"}>show more</Link>
        </Title>
      </div>
      <Cryptocurrencies topTen={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to={"/news"}>show more</Link>
        </Title>
      </div>
      <News topTen={true} />
    </>
  );
};

export default HomePage;
