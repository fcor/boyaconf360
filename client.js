import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });


  const mainSurface = new Surface(1140, 620, Surface.SurfaceShape.Cylinder);

  r360.renderToSurface(
    r360.createRoot('app'),
    mainSurface,
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('space3.jpg'));
}

window.React360 = {init};
