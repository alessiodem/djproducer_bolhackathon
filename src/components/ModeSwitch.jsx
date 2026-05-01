import React, { useId } from 'react';
import { Headphones, Radio } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import './ModeSwitch.css';

const ModeSwitch = () => {
  const { isDJMode, toggleMode } = useMode();
  const switchId = useId();

  return (
    <div className="mode-switch-wrapper" title={isDJMode ? 'Switch to Listener mode' : 'Switch to DJ mode'}>
      {/* Left label: DJ */}
      <span className={`mode-label dj ${!isDJMode ? 'inactive' : ''}`}>
        <Radio size={11} style={{ display: 'inline', marginRight: 3, verticalAlign: 'middle' }} />
        DJ
      </span>

      {/* Toggle pill */}
      <label
        htmlFor={switchId}
        className={`mode-track ${isDJMode ? 'dj-active' : 'listener-active'}`}
        aria-label="Toggle DJ / Listener mode"
      >
        <input
          id={switchId}
          type="checkbox"
          checked={!isDJMode}
          onChange={toggleMode}
          aria-label="DJ / Listener mode toggle"
        />
        <span className="mode-thumb" />
      </label>

      {/* Right label: Listener */}
      <span className={`mode-label listener ${isDJMode ? 'inactive' : ''}`}>
        <Headphones size={11} style={{ display: 'inline', marginRight: 3, verticalAlign: 'middle' }} />
        Fan
      </span>
    </div>
  );
};

export default ModeSwitch;
