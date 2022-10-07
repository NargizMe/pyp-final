import React from "react";
import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";

const FavoritesPage = () => {
  const favs = useSelector((state) => state.favoritesReducer);

  const dataUI = favs?.map((data) => (
    <Col key={data._id} className="gutter-row" span={6}>
      <CardItem data={data} />
    </Col>
  ));
  console.log(favs);
  return (
    <div style={{ marginTop: "3rem", width: "90%", margin: "2rem auto auto" }}>
      <Divider orientation="left"></Divider>
      <Row gutter={[16, 24]}>{dataUI}</Row>
    </div>
  );
};

export default FavoritesPage;
