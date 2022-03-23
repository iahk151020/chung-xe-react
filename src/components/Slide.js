import React from 'react'
// import {Link} from 'react-router-dom';
import {
    Carousel,
}from 'react-bootstrap';

export const Slide = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://happyroad.vn/wp-content/uploads/2019/02/LPT0712_117-copy.jpg"
                style={{width: '1836px', height: '580px'}}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://chungxe.vn/blog/wp-content/uploads/2021/11/91180315_1068227980231274_2857273349246025728_n_1.jpg"
                style={{width: '1836px', height: '580px'}}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/3497141.jpg"
                style={{width: '1836px', height: '580px'}}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}