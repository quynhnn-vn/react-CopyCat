import React from "react";
import { CopyCat } from "../components/CopyCat";

export default class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: "",
      name: "",
    };
    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <CopyCat
        copying={this.state.copying}
        toggleTape={this.toggleTape}
        input={this.state.input}
        handleChange={this.handleChange}
        name={this.state.name}
      />
    );
  }
}
