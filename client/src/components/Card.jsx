import "antd/dist/antd.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoritesAction } from "../redux/actions/ads.actions";

const { Meta } = Card;

function CardItem(props) {
  const dispatch = useDispatch();

  function handleFavorite(item) {
    console.log(item);
    dispatch(addToFavoritesAction(item));
  }

  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={props.imgUrl}
          />
        }
        actions={[
          <HeartOutlined
            onClick={() => handleFavorite(props.data)}
            key="settings"
          />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta title={props.name} description={props.description} />
      </Card>
    </div>
  );
}

export default CardItem;
