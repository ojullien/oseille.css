const sidenav = document.querySelector('#doc-menu')
const closenav = document.querySelector('#doc-menu-close')
const opennav = document.querySelector('#doc-menu-button')

// set focus to our open/close buttons after animation
sidenav.addEventListener('transitionend', e => {
if (e.propertyName !== 'transform')
return

const isOpen = document.location.hash === '#doc-menu'

isOpen
? closenav.focus()
: opennav.focus()

if (!isOpen) {
history.replaceState(history.state, '')
}
})

// close our menu when esc is pressed
sidenav.addEventListener('keyup', e => {
if (e.code === 'Escape')
window.history.length
? window.history.back()
: document.location.hash = ''
})