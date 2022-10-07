import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getAllAds } from '../../redux/actions/ads.actions';

let schema = yup.object().shape({});
const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const AddAdvertisementPage = () => {
  const { TextArea } = Input;

  const [form] = Form.useForm();
  const { Option } = Select;
  const [categories, setCategories] = useState([]);
  const data = useSelector((state) => state.adsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAds());
  }, []);
  console.log(data);

  const onFinish = (values) => {
    console.log('Success:', values);

    form.resetFields();
  };
  const formStyle = {
    width: '40%',
    margin: 'auto',
  };
  const btnStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%)',
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}> Add new Advertisement</h1>

      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Form.Item name="Name" rules={[yupSync]} label="Name">
          <Input placeholder="Please input product name" />
        </Form.Item>

        <Form.Item name="price" rules={[yupSync]} label="Price">
          <Input placeholder="Please input price" />
        </Form.Item>
        <Form.Item name="image" rules={[yupSync]} label="image">
          <Input type="file" placeholder="Please input image " />
        </Form.Item>
        <Form.Item name="SupplierName" rules={[yupSync]} label="Supplier name">
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item name="email" rules={[yupSync]} label="Supplier email">
          <Input placeholder="Please input your email" />
        </Form.Item>
        <Form.Item name="description" rules={[yupSync]} label="Description">
          <TextArea
            value={value}
            onChange={this.onChange}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />{' '}
        </Form.Item>

        {/* <Form.Item
          name="categoryId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select defaultValue="Select Supplier" style={{ width: '100%' }}>
            {suppliers?.map((supplier) => (
              <Option key={supplier.id} value={supplier.id}>
                {supplier.companyName}
              </Option>
            ))}
          </Select>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" style={btnStyle}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddAdvertisementPage;
