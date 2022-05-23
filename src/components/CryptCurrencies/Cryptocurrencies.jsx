import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../../Redux/crypto";

const Cryptocurrencies = ({ topTen }) => {
  const count = topTen ? 10 : 100;
  const { data: crptList, isFetching } = useGetCryptosQuery(count);
  const [searchcrypto, setSearchcrypto] = useState("");

  const [crpts, setCrpts] = useState([]);

  useEffect(() => {
    setCrpts(crptList?.data?.coins);
    const filterdCryptos = crptList?.data?.coins.filter((coin) => {
      return coin.name.includes(searchcrypto);
    });
    setCrpts(filterdCryptos);
  }, [searchcrypto]);

  if (isFetching) return "Looding .....";

  return (
    <>
      {!topTen && (
        <div className="search-crypto">
          <Input
            placeholder="seach crypto"
            onChange={(e) => setSearchcrypto(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crpts?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.uuid}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                hoverable
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img src={crypto.iconUrl} className="crypto-image" />}
              >
                <p>Price: {millify(crypto.price)}</p>
                <p>marketCap: {millify(crypto.marketCap)}</p>
                <p>Daily changes: {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
