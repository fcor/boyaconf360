import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('home'),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('space3.jpg'));
}

window.React360 = {init};
