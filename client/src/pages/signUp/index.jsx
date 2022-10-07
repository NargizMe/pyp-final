import * as yup from 'yup';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
});
const yupSync = {
  async validator({ field }, value) {
    await schema.validateSyncAt(field, { [field]: value });
  },
};

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:5000/users', values);

    navigate('/login');

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
      <h1 style={{ textAlign: 'center' }}> Sign up</h1>

      <Form form={form} name="form1" onFinish={onFinish} style={formStyle}>
        <Form.Item name="name" rules={[yupSync]}>
          <Input placeholder="Please input  name" />
        </Form.Item>

        <Form.Item name="email" rules={[yupSync]}>
          <Input type="email" placeholder="Please input your email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={btnStyle}>
            Sign up
          </Button>
          <Link to='/login'>Do yo have account? sign in !</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
