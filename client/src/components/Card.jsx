import "antd/dist/antd.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

const { Meta } = Card;

function CardItem() {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <HeartOutlined key="settings" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  );
}

export default CardItem;
