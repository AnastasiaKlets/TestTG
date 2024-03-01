document.querySelectorAll('.close-modal').forEach(el => {
    el.onclick = () => {
        const details = el.closest('details')
        details.open = !details.open
    }
})

document.querySelectorAll('.open-modal').forEach(el => {
    el.onclick = () => {
        const details = document.body.querySelector('details')
        details.open = true
    }
})