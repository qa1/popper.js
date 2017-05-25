// @flow

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
export default function getParentNode(element: HTMLElement | ShadowRoot): HTMLElement {
  if (element.nodeName === 'HTML') {
    return element;
  }
  // $FlowFixMe
  return element.parentNode || element.host;
}
