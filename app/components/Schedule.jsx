var React = require('react');
var ScheduleAccordion = require('ScheduleAccordion');

var Schedule = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Schedule component</h3>
        <ScheduleAccordion/>
      </div>
    )
  }
});

module.exports = Schedule;
