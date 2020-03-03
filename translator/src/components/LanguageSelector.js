import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        <p>{text}</p>
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
      </div>
    );
  }
}

export default LanguageSelector;
