import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', result: 0 };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.mod = this.mod.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e){
    e.preventDefault();
    const num1 = Number.parseInt(e.target.value);
    this.setState({ num1 });
  }

  setNum2(e){
    e.preventDefault();
    const num2 = Number.parseInt(e.target.value);
    this.setState({ num2 });
  }

  add(){
    const result = this.state.num1 + this.state.num2;
    this.setState({ result });
  }

  subtract(){
    const result = this.state.num1 - this.state.num2;
    this.setState({ result });
  }

  multiply(){
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  divide(){
    const result = this.state.num1 / this.state.num2;
    this.setState({ result });
  }

  mod(){
    const result = this.state.num1 % this.state.num2;
    this.setState({ result });
  }

  clear(){
    this.setState({ num1: '', num2: '' });
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.clear}>clear</button>
        <br />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.mod}>%</button>
      </div>
    );
  }
}

export default Calculator;
