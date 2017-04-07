var React = require('react');

var ScheduleAccordion = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="accordion" data-accordion>
          <li className="accordion-item is-active" data-accordion-item>
            <a  className="accordion-title">Accordion 1</a>
            <div className="accordion-content" data-tab-content>
              <p>1st line</p>
              <p>2nd line</p>
            </div>
          </li>
          <li className="accordion-item " data-accordion-item>
            <a href="#" className="accordion-title">Accordion 2</a>
            <div className="accordion-content" data-tab-content>
              <ul>
                 First line
              </ul>
              <ul>
                 Second line
              </ul>
            </div>
          </li>
          <li className="accordion-item " data-accordion-item>
            <a href="#" className="accordion-title">Accordion 3</a>
            <div className="accordion-content" data-tab-content>
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
