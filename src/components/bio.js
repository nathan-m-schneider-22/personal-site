import React from 'react';

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    fetch('https://checkip.amazonaws.com/').then((res) => res.text()).then((data) => console.log(data));
  }

  render() {
    return (
      <div className="bio-container">

        <h1>Nathan Schneider</h1>
        <p>I am a software developer</p>
      </div>
    );
  }
}

export default Bio;
