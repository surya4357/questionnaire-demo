import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Footer extends React.Component {
  render() {
    const {enableNext, enablePrev, onPrevClick, onNextClick} = this.props;

    return (
      <div className="page-footer">
        <div className="prev-button-wrapper">
          <RaisedButton
            label="Prev"
            labelPosition="before"
            primary={true}
            disabled={!enablePrev}
            onClick={onPrevClick}
          />
        </div>
        <div className="next-button-wrapper">
          <RaisedButton
            label="Next"
            labelPosition="after"
            primary={true}
            disabled={!enableNext}
            onClick={onNextClick}
          />
        </div>
      </div>
    );
  }
};
