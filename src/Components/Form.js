import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {Card} from 'material-ui/Card';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      "title": "Questionnare Demo",
      "questions": [
        {
          "id": 1,
          "question_type": "TextQuestion",
          "prompt": "What is your first answer?",
          "is_required": false,
          "min_char_length": 0
        },
        {
          "id": 2,
          "question_type": "TextQuestion",
          "prompt": "What is your second answer?",
          "is_required": true,
          "min_char_length": 10
        },
        {
          "id": 3,
          "question_type": "TextQuestion",
          "prompt": "What is your third answer?",
          "is_required": true,
          "min_char_length": 3,
        }
      ],
      currentIndex: 0
    }
  }

  onPrevClick = () => {
    let currentIndex = this.state.currentIndex - 1;
    
    this.setState({
      currentIndex: currentIndex
    });
  }

  onNextClick = () => {
    let currentIndex = this.state.currentIndex + 1;

    this.setState({
      currentIndex: currentIndex,
    });
  }

  handleChange = (index, value) => {
    let {questions} = this.state;

    questions[index].answer = value;
    this.setState({
      questions
    });
  }

  shouldEnableNext() {
    const {questions, currentIndex} = this.state;
    const question = questions[currentIndex];
    const value = question.answer || '';

    switch(question.question_type) {
      case 'TextQuestion':
        let isRequiredMet = true;
        if (question.is_required && value === '') {
          isRequiredMet = false;
        }
        const isLengthMet = value.length >= (question.min_char_length || 0);

        return isRequiredMet && isLengthMet && currentIndex < questions.length - 1;

      case 'Radio':
        // Logic to write support for Radio question
        return true;

      case 'Checkbox':
        // Logic to write support for multiple answer question
        return true;

      default:
        return true;
    }
  }

  render() {
    const {title, questions, currentIndex} = this.state;
    const enableNext = this.shouldEnableNext();

    return (
      <Card>
        <div className="container">
          <Header title={title} />
          <div className="content-wrapper">
            <Content
              questionDetails={questions[currentIndex]}
              currentIndex={currentIndex}
              onChange={this.handleChange}
            />
          </div>
          <Footer
            enableNext={enableNext}
            enablePrev={currentIndex !== 0}
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        </div>
      </Card>
    );
  }
};