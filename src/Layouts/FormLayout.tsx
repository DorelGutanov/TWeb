import {Form, Input, Button, Menu} from 'antd';
export const FormLayout =() =>{
    return(
        <Form
            name="wrap"
            labelCol={{ flex: '110px' }}
            labelAlign="left"
            labelWrap
            wrapperCol={{ flex: 1 }}
            colon={false}
        >
            <Form.Item label="Nume Prenume" name="username" rules={[{ required: true }]}>
                <Input
                />
            </Form.Item>

            <Form.Item label="Email" name="Email" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Phone" name="Phone"   rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}


