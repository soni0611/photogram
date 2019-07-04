import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import first from './first.jpg';
import second from './second.jpg';
import third from './third.jpg';

import './homepage.css';

export default function Homepage(props) {

    return (<div style={{ marginBottom: "3rem" }}>

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"

                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={second}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    </div>
    )
}

