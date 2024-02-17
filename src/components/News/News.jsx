import React from "react";

import { useGetCryptosNewsQuery } from "../../Redux/newsSlice";

import { Typography, Avatar, Col, Row, Card } from "antd";

import moment from "moment";

const { Title, Text } = Typography;

const News = ({ topTen }) => {
  const { data: cryptoNews } = useGetCryptosNewsQuery({
    newsCategory: "Cryptocurrency",
    count: topTen ? 6 : 12,
  });

  if (!cryptoNews?.value) return <h1 className="bg-dark p-4">Loading</h1>;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} className target={"_blank"} rel={"noreferrer"}>
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img src={news?.image?.thumbnail?.contentUrl || "Image Here"} />
              </div>
              <p className="">
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      "Demo image"
                    }
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.dataPublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
