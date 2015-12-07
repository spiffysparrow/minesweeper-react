var React = require("react");

var Tabs = React.createClass({
  getInitialState: function() {
    return { selectedIndex: 0 };
  },

  handleClick: function(e) {
    var item = e.currentTarget;
    var index = item.getAttribute('data-index');

    this.setState({ selectedIndex: parseInt(index) });
  },

  render: function() {
    var tabs = this.props.tabs;
    var selectedTab = tabs[this.state.selectedIndex];

    var headers = tabs.map(function(tab, index) {
      var isSelected = false;
      if (index === this.state.selectedIndex) {
        isSelected = true;
      }

      return (
        <li key={ index } data-index={ index }
          onClick={ this.handleClick }><a href="#">
          <Header title={ tab.title } selected={ isSelected }/></a></li>
      );
    }.bind(this));

    return (
      <div>
        <ul>
          {headers}
        </ul>
        <article>{ selectedTab.content }</article>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    var cls = "";
    if (this.props.selected) {
      cls = "selected";
    }

    return (
      <span className={ cls }>{this.props.title}</span>
    );
  }
});

module.exports = Tabs;
