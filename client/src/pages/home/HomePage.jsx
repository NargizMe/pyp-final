import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";

const style = { background: "#0092ff", padding: "8px 0" };

function HomePage() {
  return (
    <div>
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
