import React, { useState } from 'react';
import Details from '../../Components/Quizz/Details/Details';
import Question from '../../Components/Quizz/Question/Question';
import Option from '../../Components/Quizz/Option/Option';
import Result from '../../Components/Quizz/Result/Result';
import { Container } from 'react-bootstrap';
import Quizz from '../../API/Quizz.json';

const Home = () => {
    const [data, setData] = useState(Quizz);
    const [current, setCurrent] = useState(0);
    const [marks, setMarks] = useState(0);
    const [result, setResult] = useState(false);
    const nextHandle = (option) => {
        if(option === data.questions[current].answer){
            setMarks(marks + 10);
        }
        setCurrent(current + 1);
        if(data.questions.length === (current + 1)){
            setResult(true);
        }else{
            setResult(false);
        }
    }
    return (
        <>
            <section>
                <div className="quizz--cmp">
                    <Container>
                        {
                            result? (<>
                                <Result marks={marks} total={data.marks} />
                            </>):(<>
                                <Details title={data.title} marks={data.marks} questions={data.questions.length} current={current + 1} />
                                <Question question={data.questions[current].question}/>
                                <Option handle={nextHandle} options={data.questions[current].options} />
                            </>)
                        }
                    </Container>
                </div>
            </section>
        </>
    );
}

export default Home;