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
          "min_char_length": 15
        },
        {
          "id": 2,
          "question_type": "TextQuestion",
          "prompt": "What is your second answer?",
          "is_required": true,
          "min_char_length": 100
        },
        {
          "id": 3,
          "question_type": "TextQuestion",
          "prompt": "What is your third answer?",
          "is_required": true,
          "min_char_length": 1,
        }
      ],
      currentIndex: 0,
      enableNext: true,
      enablePrev: false
    }
  }

  onPrevClick = () => {
    let currentIndex = this.state.currentIndex - 1;
    
    this.setState({
      currentIndex: currentIndex,
      enablePrev: currentIndex !== 0
    });
  }

  onNextClick = () => {
    let currentIndex = this.state.currentIndex + 1;

    if (currentIndex < this.state.questions.length) {
      this.setState({
        currentIndex: currentIndex,
        enablePrev: currentIndex !== 0,
      });
    } else {
      this.setState({
        enableNext: false
      });
    }
  }

  render() {
    const {title, questions, currentIndex, enableNext, enablePrev} = this.state;

    return (
      <Card>
        <div className="container">
          <Header title={title} />
          <div>
            <Content
              questionDetails={questions[currentIndex]}
              currentIndex={currentIndex}
            />
          </div>
          <Footer
            enableNext={enableNext}
            enablePrev={enablePrev}
            onNextClick={this.onNextClick}
            onPrevClick={this.onPrevClick}
          />
        </div>
      </Card>
    );
  }
};