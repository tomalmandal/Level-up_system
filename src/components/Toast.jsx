import { useState, useEffect, useCallback } from 'react';

let showToastFn = null;

export const toast = (msg, color = '#818cf8', bg = 'rgba(79,110,247,.1)') => {
  if (showToastFn) showToastFn({ msg, color, bg });
};

const Toast = () => {
  const [state, setState] = useState({ msg: '', color: '', bg: '', visible: false });
  const timerRef = { current: null };

  useEffect(() => {
    showToastFn = ({ msg, color, bg }) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setState({ msg, color, bg, visible: true });
      timerRef.current = setTimeout(() => setState(s => ({ ...s, visible: false })), 2800);
    };
    return () => { showToastFn = null; };
  }, []);

  return (
    <div
      className={`toast${state.visible ? ' show' : ''}`}
      style={{ color: state.color, background: state.bg, borderColor: state.color + '44' }}
    >
      {state.msg}
    </div>
  );
};

export default Toast;
