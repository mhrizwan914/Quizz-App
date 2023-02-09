import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Details.css';

const Details = (props) => {
    const {title, marks, questions, current} = props;
    return (
        <>
            <div className="details--cmp">
                <Row>
                    <Col>
                        <div className="box">
                            <h3 className="mb-3 text-center">{title}</h3>
                            <Row>
                                <Col xs={6} className="text-start">
                                    <h5>Marks : <strong>{marks}</strong></h5>
                                </Col>
                                <Col xs={6} className="text-end">
                                    <h5>Questions : <strong>{current}/{questions}</strong></h5>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Details;