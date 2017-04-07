var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Schedule = require('Schedule');
var Welcome = require('Welcome');
var TimeHome = require('TimeHome');
var ScheduleAccordion = require('ScheduleAccordion');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="schedule" component={Schedule}/>
      <Route path="timehome" component={TimeHome}/>
      <IndexRoute component={Welcome}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
