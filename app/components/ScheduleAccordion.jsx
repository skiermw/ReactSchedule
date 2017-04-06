var React = require('react');

var ScheduleAccordion = React.createClass({
  render: function () {
    return (
      <div>
        <ul class="accordion" data-accordion>
          <li class="accordion-item " data-accordion-item>
            <a class="accordion-title">Accordion 1</a>
            <div class="accordion-content" data-tab-content>
              <ul>
                 First line
              </ul>
              <ul>
                 Seconcd line
              </ul>
            </div>
          </li>
          <li class="accordion-item " data-accordion-item>
            <a class="accordion-title">Accordion 2</a>
            <div class="accordion-content" data-tab-content>
              <ul>
                 First line
              </ul>
              <ul>
                 Second line
              </ul>
            </div>
          </li>
          <li class="accordion-item " data-accordion-item>
            <a class="accordion-title">Accordion 3</a>
            <div class="accordion-content" data-tab-content>
              <ul>
                 First line
              </ul>
              <ul>
                 Seconcd line
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
});

module.exports = ScheduleAccordion;
