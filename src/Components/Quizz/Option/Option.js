import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Option.css';

const Option = (props) => {
    const {options, handle} = props;

    return (
        <>
            <div className="option--cmp">
                <Row>
                    <Col>
                        <div className="box">
                            {
                                options.map((element, index) => {
                                    return (
                                        <Form.Check type="radio" />
                                    );
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Option;
