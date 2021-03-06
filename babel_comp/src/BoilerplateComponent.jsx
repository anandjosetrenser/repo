import React from "react";
import PropTypes from "prop-types";
import "./app.css";

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

const defaultProps = {
  styles: {
    input: {
      color: "#000",
    },
  },
};

class BoilerplateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const styles = this.props.styles || {};

    return (
      <div>
        <label style={styles.label}>{this.props.label}</label>
        <input type="text" style={styles.input} onChange={this.handleChange} />
      </div>
    );
  }
}

BoilerplateComponent.propTypes = propTypes;
BoilerplateComponent.defaultProps = defaultProps;

export default BoilerplateComponent;
