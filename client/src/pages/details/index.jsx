import React from "react";
import { useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import {Card, Col, Row } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

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

    let fill = '#08c'
    const handleClick = () => { console.log('fill')}

    return (
        <Row align={"bottom"} justify={"center"}>
            <Col>                  
                <Card
                    style={{ width: 500, height: 300, display: "flex", justifyContent: "space-between", padding: "20px" }}
                    cover={
                    <img
                        alt="example"
                        src={fakeData.imagesrc}
                    />
                    }
                    actions={[
                        <HeartOutlined key="addfavorite" onClick={handleClick} style={{ fontSize: '32px', color: '#eb4034' }}/>,
                    ]}
                >
                    <Meta
                    title={fakeData.name}
                    description={
                        <>
                            <ul>
                                <li>{fakeData.price}</li>
                                <li>{fakeData.supplier}</li>
                                <li>{fakeData.created}</li>
                                <li>{fakeData.duedate}</li>
                            </ul>
                        </>
                    }
                    />
                </Card>
            </Col>  
        </Row>
    )

}


export default DetailsPage;