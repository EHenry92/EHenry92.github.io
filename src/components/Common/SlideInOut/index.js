import React, { Component } from "react";
import "./styles.css";

const icons = {
  SKILLS: "build",
  EDUCATION: "school",
  EXPERIENCE: "work"
};

class SlideDisplay extends Component {
  state = {
    activeTab: ""
  };

  componentDidMount() {
    const tabs = Object.keys(this.props.data);
    this.setState({ activeTab: tabs[0] });
  }

  showHide = tab => {
    this.setState({activeTab:tab})
  };

  render() {
    const { mainBar, data, DisplayData } = this.props;
    const { activeTab } = this.state;
    const tabs = Object.keys(data);
    return (
      <div>
        {mainBar && mainBar()}
        <div id="section-list" className="flex-it sub-group-list">
          {
            tabs.map(dataGroup => (
              <div
                className="slideIn-subGroup-title"
                key={dataGroup}
                name={dataGroup}
                onClick={() => this.showHide(dataGroup)}
              >
                <i className="material-icons">{icons[dataGroup]}</i>
                <p>
                  <b>{dataGroup}</b>
                </p>
              </div>
            ))
          }
        </div>
        <div className="displaySpace">
          {tabs.map( key => {
            return (
              <DisplayData
                key={key}
                dataPoint={data[key]}
                className={`slideIn-content showHide ${activeTab === key && 'visible'}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SlideDisplay;
