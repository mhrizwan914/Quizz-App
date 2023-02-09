import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Result.css';

const Result = (props) => {
    const {marks, total} = props;
    return (
        <>
            <div className="result--cmp">
                <Row>
                    <Col>
                        <div className="box">
                            <h3 className="mb-3 text-center text-success">Congragulations</h3>
                            <p className="mb-0 text-center">
                                Your Total Marks is out of {total} / <Button type="button" disabled>{marks}</Button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Result;