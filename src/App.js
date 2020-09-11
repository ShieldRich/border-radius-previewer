import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topleft: 0,
      topright: 0,
      bottomright: 0,
      bottomleft: 0
    }
  }
  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  
  render() {

    const { topleft, topright, bottomright, bottomleft } = this.state;

    const borderStyle = {
      borderRadius: `${topleft}px ${topright}px ${bottomright}px ${bottomleft}px`,
      background: "#73AD21",
      padding: "20px",
      width: "200px",
      height: "150px"
    };
    
    return (
      <div className="container">
        <h1>Border-Radius Previewer</h1>
        <p style={borderStyle}></p>
        <p>Border-Radius Values:</p>
        <input placeholder="Top-Left" type="number" name="topleft" onChange={this.handleChange} />
        <input placeholder= "Top-Right" type="number" name="topright" onChange={this.handleChange} />
        <input placeholder= "Bottom-Right" type="number" name="bottomright" onChange={this.handleChange} />
        <input placeholder= "Bottom-Left" type="number" name="bottomleft" onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;

/* style={{
  fontSize: "20px",
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "100px",
  border: "2px solid black",
  borderRadius: "this.state.topleft"
}} */