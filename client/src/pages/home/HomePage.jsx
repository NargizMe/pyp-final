import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HomePage() {
//   const navigate =useNavigate()
// useEffect(()=>{
// navigate('/signup')
// }, [])

  // navigate('/login')
  return (
    <div style={{ marginTop: "3rem" }}>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
      </Row>
      <Divider orientation="left"></Divider>
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
        <Col className="gutter-row" span={6}>
          <CardItem />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
