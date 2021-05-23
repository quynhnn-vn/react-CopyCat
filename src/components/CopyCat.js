import React from "react";
import { styles } from "../styles";
import PropTypes from "prop-types";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

export class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;
    const input = this.props.input;
    const handleChange = this.props.handleChange;
    const name = this.props.name;
    return (
      <div style={styles.divStyles}>
        <h1>Copy Cat {name ? name : "Tom"}</h1>
        <p>{name ? name : "Tom"} will repeat every word you say!</p>
        <input type="text" value={input} onChange={handleChange}></input>
        <img
          style={styles.imgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};
