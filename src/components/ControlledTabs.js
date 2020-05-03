import React from 'react';
import TabHeader from './TabHeader.js';
import Tabs from './Tabs.js';

class ControlledTabs extends React.Component {
  state = {
    activeKey: 'main'
  };

  handleTabClick(tab) {
    this.setState({
      activeKey: tab
    });
  }


  render() {
    return (
      <div className="tab-container">
        <TabHeader handleTabClick={this.handleTabClick.bind(this)} />
        <Tabs activeKey={this.state.activeKey} />
      </div>
    );
  }
}

export default ControlledTabs;
