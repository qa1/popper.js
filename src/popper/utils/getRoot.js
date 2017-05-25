// @flow

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
export default function getRoot(node: HTMLElement): HTMLElement | Node {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
