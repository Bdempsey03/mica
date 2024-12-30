import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
class ExpandText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFull: false
        };
    }
    render() {
        let expandButton;
        let visibleText = null;
        if (this.state.showFull || this.props.text.length <= this.props.maxLength) {
            visibleText = this.props.text;
            expandButton = "...see less";
        } else {
            const firstHalf = this.props.text.substring(0, this.props.maxLength);
            visibleText = `${firstHalf}...`;
            expandButton = "...see more";
        }
        const self = this;
        const clickHandler = () => {
            self.setState({showFull: !self.state.showFull});
        }
        return (
                  <div className={this.props.className}>
                    <div
                      ref={this.textRef}

                    >
                      <p>{visibleText}</p>
                    </div>
                    <div onClick={clickHandler} className={this.props.classNameExpand}>
                      {expandButton}
                    </div>
                  </div>
                );  }
}

ExpandText.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  className: PropTypes.string,
  classNameExpand: PropTypes.string
};

export default ExpandText;
