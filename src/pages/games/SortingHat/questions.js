import React, { Component } from 'react'
import Question from './question';

export default class Questions extends Component {
    state = {
        currentQuestionCount: 0,
        result: ''
    }

    findDuplicates(holder) { 
        var winner;
        var map = new Map();
        var max = 1;
        var maxRecurring = "";
        for (winner of holder) {

            if (map.get(winner) === undefined) {
                map.set(winner, 1);
            } else {
                var count = map.get(winner);
                count = count + 1;
                map.set(winner, count);
                if (max < count) {
                    max = count;
                    maxRecurring = winner;
                }
            }
        }
        let selected = "";
        switch (maxRecurring) {
            case 1:
                selected = "Gryfindor!";
                break;
            case 2:
                selected = "Slytherine";
                break;
            case 3:
                selected = "Hufflepuf";
                break;
            case 4:
                selected = "Ravenclaw";
                break;
        }
        return selected;
    }

    getNextQuestion = (holder) => {
        let current = this.state.currentQuestionCount;
        this.setState({
            currentQuestionCount: current + 1
        });
        if (current === 5) {
            let result = this.findDuplicates(holder);
            this.setState({
                result
            });
        }
    }
    render() {
        const { questions } = this.props;
        return (
            <div>
                {
                    questions.map(question => {
                        if (question.no === this.state.currentQuestionCount) {
                            return (
                                <Question
                                    key={question.id}
                                    no={question.no}
                                    soru={question.soru}
                                    asikki={question.asikki}
                                    bsikki={question.bsikki}
                                    csikki={question.csikki}
                                    dsikki={question.dsikki}
                                    getNextQuestion={this.getNextQuestion}
                                />
                            )
                        }
                    })
                }
                {
                    <div className="row">
                        {
                            this.state.result ? this.state.result : null
                        }
                    </div>
                }
            </div>
        )
    }
}