import React ,{Component} from 'react'
import ActivQuiz from '../../components/Activqwiz/ActivQwiz'
import FinishQwiz from '../../conteiners/FinisdQwiz/FinisdQwiz'

import classes from './Quiz.css'
import {timeout} from "q";


class Quiz extends Component{
   state={
       isFinis: false,

       activQestion:0,
       answerState: null,
       quiz: [
           {
               question: 'какого цвета небо',
               rightAnswerID: 2,
               id: 1,
               answers: [
                   {text: 'Вопрос один' ,id:1},
                   {text: 'Вопрос два', id: 2},
                   {text: 'Вопрос три', id: 3},
                   {text: 'Вопрос четыре', id:4}
               ]
           },
           {
               question: 'В каком году основан Питер',
               rightAnswerID: 2,
               id: 2,
               answers: [
                   {text: '3444' ,id:1},
                   {text: '1703', id: 2},
                   {text: 'Вопрос три', id: 3},
                   {text: 'Вопрос четыре', id:4}
               ]
           }
       ]
   }
 onAnswerClikHendler = (AnswerID) => {

     if(this.state.answerState){
         const key =Object.keys(this.state.answerState)[0]
         if (this.state.answerState[key]=== 'suses'){
             return
         }
     }
     const qestion =this.state.quiz[this.state.activQestion]

     if (qestion.rightAnswerID=== AnswerID) {

         this.setState({
             answerState:{[AnswerID]: 'suses'}
         })

         const timout= window.setTimeout(()=>{
            if (this.isQuizFinisd()) {

             this.setState({
                 isFinis: true
             })


            }else {
                this.setState({
                    activQestion: this.state.activQestion + 1,
                    answerState: null
                })
            }


             window.clearTimeout(timeout)
         }, 1000)


     } else {

         this.setState({answerState:{[AnswerID]: 'Error'}})

     }
}
    isQuizFinisd(){
       return this.state.activQestion+1===this.state.quiz.length
    }

    render() {
        return(
            <div className="Quiz">

                <div className="QwizWraper">
                    <h1>Ответьте на вопросы</h1>

                    {this.state.isFinis ?<FinishQwiz

                        /> :

                        <ActivQuiz
                            answers={this.state.quiz[this.state.activQestion].answers}
                            question ={this.state.quiz[this.state.activQestion].question}
                            onAnswerClic={this.onAnswerClikHendler}
                            quizLength={this.state.quiz.length}
                            aqtivNomber={this.state.activQestion+1}
                            state={this.state.answerState}
                        />

                    }

                </div>
            </div>

        )
    }

}

export default Quiz