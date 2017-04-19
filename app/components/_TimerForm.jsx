var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetTimer(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="timer-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button ref="seconds" className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = TimerForm;
