/**
 * gets node responsible for top level scrolling with class .grid-content
 */
export function getScrollerNode() {
    const nodes = document.getElementsByClassName('grid-content');

    if (!nodes[0]) {
        console.warn('No grid scrolling node found');
        return {};
    }

    return nodes[0];
}

/**
 * scroll grid content which is the body or content of the page
 * to top (0) or increment by factor of clientHeight
 */
export function scrollBodyTo({
    toTop = true,
    smooth = true,
    factor
} = {}) {
    const node = getScrollerNode();
    const {
        clientHeight
    } = node;
    const scrollPosition = toTop ? 0 :
        clientHeight * factor + node.scrollTop;

    const options = {
        top: scrollPosition
    };

    if (smooth) {
        options.behavior = 'smooth';
    }

    if (node.scroll) {
        node.scroll(options);
    }
}