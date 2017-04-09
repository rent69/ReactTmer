var React = require('react');
var ReactRouter = require('react-router');

var Timer = (props) => {
  return (
    <div>
      {props.children}
      <p>Timer.jsx Rendered</p>
    </div>

  );
}

module.exports = Timer;
