const React = require('react');
const Component = React.Component;
const { render } = require('react-dom');
const { Router, Route, Link, IndexRoute, hashHistory } = require('react-router');
const Draggable = require('react-draggable2');

require('material-design-lite/material.css');


class App extends Component {
  render() {
    return <div id="application-content">{this.props.children}</div>
  }
}

class About extends Component {
  render() {
    return <div>about</div>
  }
}

class User extends Component {
  render() {
    return <div id="user">User {this.props.path}</div>
  }
}

class Users extends Component {
  render() {
    return <div id="users">{this.props.children}</div>
  }
}

class NoMatch extends Component {
  render() {
    return <div>404</div>
  }
}

class Iframe extends Component {
  render() {
    return <iframe id="iframe" src="http://www.yahoo.co.jp"></iframe>
  }
}

class Palette extends Component {
  render() {
    return <Draggable
      handle=".draggable-handle"
      start={{x: 25, y: 25}}
      bound="all box"
      zIndex={100}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}>

      <div id="palette" className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <h2 className="mdl-card__title-text draggable-handle">Update</h2>
        </div>
        <div className="mdl-card__supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Updates
          </a>
        </div>
      </div>

    </Draggable>

  }
}

class Index extends Component {
  render() {
    return <div id="application-index">
      <Iframe></Iframe>
      <Palette></Palette>
    </div>
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/:userId" component={User}/>
      </Route>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('application'));
