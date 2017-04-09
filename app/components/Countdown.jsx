var React = require('react');
var ReactRouter = require('react-router');

var Countdown = (props) => {
  return (
    <div>
      {props.children}
      <p>Countdown.jsx Rendered</p>
    </div>

  );
}

module.exports = Countdown;
