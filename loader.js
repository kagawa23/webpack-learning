const load = platform => componentName =>
  import("./" + platform + "/" + componentName);

export const loadDesktopComponent = load("desktop");
export const loadMobileCompoent = load("mobile");

export default load;
