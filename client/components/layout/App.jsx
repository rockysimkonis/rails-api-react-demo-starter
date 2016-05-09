var React = require('react');
var BlabsView = require('../blabs/View.jsx');

module.exports = React.createClass({
  render: function() {
    console.log('Rendered!', this.props.data);
    return (
      <div id="content">
        <BlabsView/>
      </div>
    );
  }
});
