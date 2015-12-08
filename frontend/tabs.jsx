var React = require("react");

var Tabs = React.createClass({
  getInitialState: function() {
    return { selectedIndex: 0 };
  },

  handleClick: function(e) {
    var item = e.currentTarget,
        index = item.getAttribute('data-index');
        
    this.setState({ selectedIndex: parseInt(index) });
  },

  formatHeaders: function() {
    var tabs = this.props.tabs,
        isSelected;

    var headers = tabs.map(function(tab, index) {
      isSelected = (index === this.state.selectedIndex);

      return (
        <li key={ index } data-index={ index }
          onClick={ this.handleClick }><a href="#">
          <Header title={ tab.title } selected={ isSelected }/></a></li>
      );
    }.bind(this));

    return headers;
  },

  render: function() {
    var selectedTab = this.props.tabs[this.state.selectedIndex];

    return (
      <div>
        <ul>
          {this.formatHeaders()}
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
