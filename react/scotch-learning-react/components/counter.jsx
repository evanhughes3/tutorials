var Counter = React.createClass({
  incrementCount: function(){
    this.setState({
      count: this.state.count + 2.5
    });
  },
  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    return (
      <div className="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
})

React.render(
  <Counter />,
  document.getElementById("counter")
);