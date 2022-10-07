import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";
import { getAllAds } from "../../redux/actions/ads.actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function HomePage() {
  const ads = useSelector((state) => state.adsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAds());
  }, []);

  useEffect(() => {
    console.log(ads);
  }, [ads]);

  const dataUI = ads?.data?.map((data) => (
    <Col key={data._id} className="gutter-row" span={6}>
      <CardItem data={data} />
    </Col>
  ));

  return (
    <div style={{ marginTop: "3rem", width: "90%", margin: "2rem auto auto" }}>
      <Divider orientation="left"></Divider>
      <Row gutter={[16, 24]}>{dataUI}</Row>
    </div>
  );
}

export default HomePage;
