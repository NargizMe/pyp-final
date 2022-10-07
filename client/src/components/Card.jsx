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
import { Link } from "react-router-dom";

const { Meta } = Card;

function CardItem(props) {
  const dispatch = useDispatch();

  function handleFavorite(item) {
    dispatch(addToFavoritesAction(item));
  }
  return (
    
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={props.data.imgUrl} />}
          actions={[
            <HeartOutlined
              onClick={() => handleFavorite(props.data)}
              key="settings"
            />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Link to={`/details/${props.data._id}`}>
            <Meta
            title={`${props.data.name}`}
            description={`${props.data.description}`}
          />
          </Link>
       
        </Card>
  );
}

export default CardItem;
