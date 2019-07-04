import React from 'react';
import 'antd/dist/antd.css';
import Button from 'react-bootstrap/Button'
import { Card, Row, Col, Icon } from 'antd';
const { Meta } = Card;



export default function Gallery({ db, delete1 }) {

    return (<div>
        <Row gutter={16}>

            {db.photos.map((photo) => <Col span={6}><Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={photo.image} />}
            >
                <Meta title={photo.title} description={photo.desc}
                />


                <Button onClick={() => delete1(photo)} variant="primary" >Delete</Button>
            </Card></Col>)}

        </Row>


    </div>)


}