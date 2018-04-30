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

  _renderAnswer() {
    const {questionDetails = {}} = this.props;
    const {question_type, is_required, min_char_length} = questionDetails;
    let {answer = ''} = questionDetails;

    return (
      <TextField
        hintText="Type in answer"
        multiLine={true}
        rows={7}
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
