// @flow

export default function isOffsetContainer(element: HTMLElement): boolean {
  const { nodeName } = element;
  if (nodeName === 'BODY') {
    return false;
  }
  return !!(
    nodeName === 'HTML' || (element.firstElementChild && element.firstElementChild.offsetParent === element)
  );
}
