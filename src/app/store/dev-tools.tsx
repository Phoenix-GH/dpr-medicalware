import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import SliderMonitor from 'redux-slider-monitor';
/* eslint-disable react/jsx-boolean-value */
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-q"
               changeMonitorKey="ctrl-m"
               defaultIsVisible={false}>
    <LogMonitor theme="tomorrow" />
    <SliderMonitor keyboardEnabled />
    <ChartMonitor />
  </DockMonitor>
);
/* eslint-enable react/jsx-boolean-value */
export default DevTools;
