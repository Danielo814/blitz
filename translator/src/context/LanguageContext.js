import React from "react";

const Context = React.createContext("english");

class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };
}
