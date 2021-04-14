function scanRightArrow() {
    const rightArrow = '→'
    const targetRegex = /->/g
    const roamBlocks = document.querySelectorAll('.rm-block__input')
    roamBlocks.forEach(block => {
        if (!block.querySelector('.rm-code-block')) {
            if (targetRegex.test(block.textContent)) {
                if (block.tagName === "TEXTAREA") {
                    block.value = block.value.replace(targetRegex, rightArrow)
                } else {
                    block.textContent = block.textContent.replace(targetRegex, rightArrow)
                }
            }
        }
    })
}

setInterval(scanRightArrow, 1000)