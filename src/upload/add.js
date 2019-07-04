import React from 'react';
import 'antd/dist/antd.css';

import { Form, Input, Button } from 'antd';


function Add({ db, savephoto, upload1 }) {
    let title;
    let desc;
    let image;

    return (<div>
        <Form>
            <Form.Item label="Title">
                <Input placeholder="Title" id="title" onChange={(e) => { title = e.target.value }} />
            </Form.Item>
            <Form.Item label="Description">
                <Input placeholder="Description" id="desc" onChange={(e) => { desc = e.target.value }} />
            </Form.Item>
            <Form.Item label="Image">
                {/* <Input placeholder="Image" id="image" onChange={(e) => { image = e.target.value }} /> */}
                <input type="file" onChange={(e) => { upload1(e) }}></input>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" onClick={(e) => { savephoto({ image: "/uploads/" + db.path, desc: document.getElementById('desc').value, title: document.getElementById('title').value }) }}>
                    Submit
          </Button>
            </Form.Item>
        </Form>
    </div>)

}

export default Add;