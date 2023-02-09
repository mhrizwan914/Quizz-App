import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Question = (props) => {
    const {question} = props;

    return (
        <>
            <div className="question--cmp">
                <Row>
                    <Col>
                        <div className="box">
                            <h3 className="mb-0">Q : {question}?</h3>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Question;