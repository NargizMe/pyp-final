import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'antd/dist/antd.css';
import {Card, Col, Row } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { getAllAds } from "../../redux/actions/ads.actions";
import axios from 'axios'

//const axios = require('axios').default;

const { Meta } = Card;

const DetailsPage = () => {
    const [ad, setAd] = useState({})
    const {id} = useParams();
    // const ads = useSelector((state) => state.adsReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(`http://localhost:8080/ads/${id}`)
        .then(res => setAd(res.data))
    }, []);

    useEffect(() => {
        console.log(ad);
    }, [ad]);

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

    const handleClick = () => { console.log('fill')}

    return (
        <>
          <Row align={"bottom"} justify={"center"}>
            <Col>    
                <div style={{width: "100%", display: "flex",justifyContent: "center"}}>
                    <img src={ad.imgUrl} alt={ad.name}  style={{height: '400px'}}/> 
                </div>             
                <Card
                    style={{ width: 500, height: 300, display: "flex", justifyContent: "space-between", padding: "20px" }}
                >
                    <Meta
                    title={ad.name}
                    description={
                        <>
                            <ul>
                                <li>{ad.supplierName}</li>
                                <li>{ad.email}</li>
                                <li>{ad.description}</li>
                                <li>{ad.price}</li>
                            </ul>
                        </>
                    }
                    />
                </Card>
            </Col>  
        </Row>
        </>
        
    )

}


export default DetailsPage;
