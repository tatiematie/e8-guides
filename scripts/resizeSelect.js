// called when the page loads and when the page is resized
// updates the item selection grid's row height since i haven't found a way to consistently maintain row height in scss yet lol
const resizeSelect = () => {
    const itemSelect = document.querySelector("#item-select"),
    selectChildren = itemSelect.children;

    const childSize = selectChildren[0].getBoundingClientRect()

    if (childSize.width != childSize.height) {
        itemSelect.style.gridAutoRows = `${childSize.width}px`
    }
}

export default resizeSelect