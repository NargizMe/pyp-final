import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";

function HomePage() {
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
