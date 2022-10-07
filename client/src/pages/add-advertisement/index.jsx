import * as yup from 'yup';
import axios from "axios"
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

let schema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  supplierName:yup.string().required(),
  email:yup.string().required(),
  imgUrl:yup.string().required(),
  category:yup.string().required(),
  description:yup.string().required(),
});
const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const AddAdvertisementPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:8080/ads', values)

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
    <div style={{ padding: '70px' }}>
      <h1 style={{ textAlign: 'center' }}>   Add new Advertisement</h1>

      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Form.Item name="name" rules={[yupSync]} >
          <Input placeholder="Please input product name" />
        </Form.Item>
  
        <Form.Item name="price" rules={[yupSync]} >
          <Input placeholder="Please input price" />
        </Form.Item>
        <Form.Item name="imgUrl" rules={[yupSync]} >
          <Input placeholder="Please input image link" />
        </Form.Item>
        <Form.Item name="supplierName" rules={[yupSync]} >
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item name="email" rules={[yupSync]} >
          <Input  type='email' placeholder="Please input your email" />
        </Form.Item>
        <Form.Item name="description" rules={[yupSync]} >
        <Input placeholder="Please input description" />
         </Form.Item>

         <Form.Item name="category" rules={[yupSync]} >
        <Input placeholder="Please input category" />
         </Form.Item>

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