var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            What's happening at CoC!
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Home</IndexLink>
          </li>
          <li>
            <Link to="/schedule" activeClassName="active-link">My Schedule</Link>
          </li>
          <li>
            <Link to="/timehome" activeClassName="active-link">Time back Home</Link>
          </li>
        </ul>

      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by Mark Workman
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = Navigation;
