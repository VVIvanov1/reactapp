import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.text;
    this.state = {count: 0}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
        event.preventDefault()
        this.setState({count: this.state.count +1})
        console.log(`clicked ${this.title} ${this.state.count} times!`);
  }
  render() {
    return (
      <div className="card">
        <h1 className="text-center">{this.title}</h1>
        <div>
          <div className="row container-fluid">
            <div className="col col-xs-4">
              
            </div>
            <div className="col col-xs-5">
              <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
