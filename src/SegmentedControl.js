import React, { Component } from 'react';
import './SegmentedControl.css';
import _ from 'lodash';

function SegmentedControlTab(props) {
  const _id = `seg-tab-option-${props.parentKey}-${props.tabIndex}`;
  const liClassName = `seg-tab${(props.selected)?' selected':''}`;

  return (
    <li className={liClassName} role="tab" aria-selected={props.selected}>
      <input
        type="radio"
        name="option"
        id={_id}
        aria-checked={props.selected}
        tabIndex={props.tabIndex+1}
        value={props.tabIndex}
        className="seg-tab-input"
        checked={props.selected}
        onChange={props.onChange} />

      <label htmlFor={_id}>{props.value}</label>
    </li>
  );
}

class SegmentedControl extends Component {
  get id() {
    return this._id;
  }

  static get counter() {
    SegmentedControl._counter = (SegmentedControl._counter || 0) + 1;
    return SegmentedControl._counter;
  }

  constructor() {
    super()
    this.state = {
      selectedIndex: 0,
    };

    this._id = SegmentedControl.counter;
  }

  handleClick(e, i) {
    this.setState({
      selectedIndex: i,
    });
    if (this.props.onTabPress &&
      this.props.onTabPress instanceof Function)
      this.props.onTabPress(i);
  }

  renderTab(i) {
    return (
      <SegmentedControlTab
        key={i}
        tabIndex={i}
        parentKey={this._id}
        selected={(i === this.state.selectedIndex)}
        value={this.props.values[i]}
        onChange={(e) => this.handleClick(e, i)}
      />
    );
  }

  render() {
    const segBarPercent = 100 * this.state.selectedIndex;
    let segBarStyle = { transform: `translateX(${segBarPercent}%)` };
    
    return (
      <div className="seg-control">
        <ul className="seg-tabs" role="tablist">
          { _.times(this.props.values.length, (i) => this.renderTab(i)) }
        </ul>
        <div className="seg-line">
          { _.times(this.props.values.length, (i) =>
            <li className={(i===0)?"seg-bar selected":"seg-bar"}
                style={(i===0)?segBarStyle:null}
                key={i}>
            </li>
          )}
        </div>
      </div>
    );
  }
}

export default SegmentedControl;
