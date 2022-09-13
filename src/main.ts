import './style.css'

const { body } = document
const btn = document.getElementById('menu-btn')!
const menu = document.getElementById('menu')!

const navToggle = () => {
	btn.classList.toggle('open')
	menu.classList.toggle('flex')
	menu.classList.toggle('hidden')
	btn.classList.contains('open')
		? body.classList.add('h-full', 'overflow-hidden')
		: body.classList.remove('h-full', 'overflow-hidden')
}

btn.addEventListener('click', navToggle)
