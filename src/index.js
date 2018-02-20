import habitat from 'preact-habitat'; // eslint-disable-line
import Widget from './components/widget';

function init() {
  const widget = habitat(Widget);
  widget.render({
    selector: '.widget-container',
    inline: false,
    clean: false,
  });
}

// in development, set up HMR:
if (module.hot) {
  // eslint-disable-next-line global-require
  require('preact/devtools'); // enables React DevTools, be careful on IE
  module.hot.accept('./components/widget', () => requestAnimationFrame(init));
}

init();
