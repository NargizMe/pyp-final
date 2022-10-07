import React from "react";
import { useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import {Card } from 'antd';

//const axios = require('axios').default;

const { Meta } = Card;

const DetailsPage = () => {

    const {id} = useParams();

    // axios fetch id

    const fakeData = {
        name: 'samsung A51',
        category: 'mobile tech',
        price: 500,
        supplier: 'Irshad Telecom',
        created: '01-01-2022',
        duedate: '01-12-2022',
        imagesrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLfEIRIkabpkviMYx_czoVFk650mewV5hNw&usqp=CAU'
    }

    return (
        <Card
            style={{ width: 300 }}
            cover={
            <img
                alt="example"
                src={fakeData.imagesrc}
            />
            }
            actions={[
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
            title="Card title"
            description={fakeData.price}
            />
        </Card>
    )

}


export default DetailsPage;