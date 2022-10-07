import CardItem from "../../components/Card";
import { Col, Divider, Row } from "antd";


function FavoritesPage() {
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
      </Row>
      <Divider orientation="left"></Divider>
    </div>
  );
}

export default FavoritesPage;
