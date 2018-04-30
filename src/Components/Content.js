import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Content extends React.Component {
  constructor() {
    super();
  }

  _renderQuestion() {
    const {questionDetails = {}, currentIndex = 0} = this.props;
    const {prompt, is_required, min_char_length} = questionDetails;

    return (
      <div className="prompt-wrapper">
        <span>{`${currentIndex + 1}. `}</span>
        <span>{prompt}</span>
      </div>
    );
  }

  onChange = (event, newValue) => {
    event.preventDefault();
    const {onChange, currentIndex} = this.props;

    onChange(currentIndex, newValue);
  }

  _renderAnswer() {
    const {questionDetails = {}} = this.props;
    const {question_type} = questionDetails;

    switch(question_type) {
      case 'TextQuestion':
        return this._renderTextAnswer();
      case 'Radio':
      case 'Checkbox':
      default:
        return this._renderTextAnswer();  
    }
  }

  _renderTextAnswer() {
    const {questionDetails = {}} = this.props;
    const {question_type, is_required, min_char_length} = questionDetails;
    let {answer = ''} = questionDetails;
    let errorText = '';

    if (answer.length < min_char_length) {
      errorText = `Min character length is ${min_char_length}`;
    }

    if (is_required && answer === '') {
      errorText = 'This field is required';
    }

    return (
      <TextField
        hintText="Type in answer"
        multiLine={true}
        rows={7}
        value={answer}
        fullWidth={true}
        onChange={this.onChange}
        errorText={errorText}
      />
    );
  }

  render() {
    const {questionDetails = {}, currentIndex = 0} = this.props;
    const {question_type, prompt, is_required, min_char_length} = questionDetails;
    let {answer = ''} = questionDetails;

    return (
      <div className="page-content">
        {this._renderQuestion()}
        <br/>
        {this._renderAnswer()}
      </div>
    );
  }
};
