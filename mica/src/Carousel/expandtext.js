import React from 'react';
import PropTypes from 'prop-types';
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
                      className="text-content"
                      ref={this.textRef}
                      style={{
                        maxHeight: this.props.showFull ? `${contentHeight}px` : "50em", // Adjust collapsed height as needed
                        overflow: "hidden",
                        transition: "max-height 0.9s ease",
                      }}
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

ExpandText.defaultProps = {
  className: ""
};

export default ExpandText;
// import React from "react";
// import PropTypes from "prop-types";
// import "../App.css"; // Add CSS for transitions

// class ExpandText extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showFull: false,
//       contentHeight: 100, // To manage dynamic height
//     };
//     this.textRef = React.createRef(); // Ref to measure content height
//   }

//   componentDidMount() {
//     if (this.textRef.current) {
//       // Set the full height of the content dynamically
//       this.setState({ contentHeight: 100 });
//     }
//   }

//   render() {
//     const { text, maxLength, className, classNameExpand } = this.props;
//     const { showFull, contentHeight } = this.state;

//     let expandButton;
//     let visibleText = null;

//     if (showFull || text.length <= maxLength) {
//       visibleText = text;
//       expandButton = "...see less";
//     } else {
//       const firstHalf = text.substring(0, maxLength);
//       visibleText = `${firstHalf}...`;
//       expandButton = "...see more";
//     }

//     const clickHandler = () => {
//       this.setState((prevState) => ({
//         showFull: !prevState.showFull,
//       }));
//     };

//     return (
//       <div className={`${className} expand-text-container`}>
//         <div
//           className="text-content"
//           ref={this.textRef}
//           style={{
//             maxHeight: showFull ? `${contentHeight}px` : "50em", // Adjust collapsed height as needed
//             overflow: "hidden",
//             transition: "max-height 0.9s ease",
//           }}
//         >
//           <p>{visibleText}</p>
//         </div>
//         <div onClick={clickHandler} className={classNameExpand}>
//           {expandButton}
//         </div>
//       </div>
//     );
//   }
// }

// ExpandText.propTypes = {
//   text: PropTypes.string.isRequired,
//   maxLength: PropTypes.number.isRequired,
//   className: PropTypes.string,
//   classNameExpand: PropTypes.string,
// };

// ExpandText.defaultProps = {
//   className: "",
// };

// export default ExpandText;
