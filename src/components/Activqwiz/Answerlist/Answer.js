import React from 'react'
import classes from './Answer.css'
import AnswerItem from './AnswerItem/AnswerItem'

const Answerlist = props => {

    return(
    <ul className="Answerslist">
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    Key={index}
                    answer={answer}
                    onAnswerClic={props.onAnswerClic}
                    state={props.state ? props.state[answer.id] : null}
                />
            )

        })}
    </ul>
    )
}

export default Answerlist