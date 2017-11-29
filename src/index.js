import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SegmentedControl from './SegmentedControl';
import registerServiceWorker from './registerServiceWorker';

function onTabPress(i) {
  console.log(`onTabPress(${i})`)
}

const testTabValues = ["Audiences", "Partners", "Brands"];

ReactDOM.render(
  <SegmentedControl
    values={testTabValues}
    onTabPress={onTabPress} />,
  document.getElementById('root')
);

registerServiceWorker();
