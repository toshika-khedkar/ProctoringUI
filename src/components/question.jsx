// QuestionList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = ({ week }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/${week}`)
            .then(res => setQuestions(res.data))
            .catch(err => console.error(err));
    }, [week]);

    return (
        <div>
            <h2>{week} Questions</h2>
            <ul>
                {questions.map(question => (
                    <li key={question._id}>{question.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionList;
