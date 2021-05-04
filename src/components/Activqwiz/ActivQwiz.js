import React from 'react'
import classes from './AktivQwiz.css'
import AnswersList from './Answerlist/Answer'

const AqtivQwiz = props => {
    return(
    <div className="ActivQwiz">
        <p className="Question">
            <span>
            <strong>{props.aqtivNomber}</strong>&nbsp;

            {props.question}
                </span>
            <small>{props.aqtivNomber} из {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClic={props.onAnswerClic}
            state={props.state}

        />
    </div>
    )
}
export default AqtivQwiz