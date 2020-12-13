const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {

	let nav = document.querySelector('#nav')
	nav.classList.toggle('sticky', window.scrollY > 0)

	if(window.pageYOffset > 300) {
		toTop.classList.add('active')
	} else {
		toTop.classList.remove('active')
	}
})

toTop.addEventListener('click', () => {
	window.scrollTo(0, 0);
})

const burger = document.querySelector('.burger')
const navLink = document.querySelector('.nav-link')
burger.addEventListener('click', function() {
	navLink.classList.toggle('active')
})


const clickLink = document.querySelectorAll('.click-link')

clickLink.forEach(link => {
	link.addEventListener('click', (e) => {
		let el = document.getElementById(e.target.getAttribute("link"))
		if(el.id == 'hero') {
			window.scrollTo(0, 0);
			navLink.classList.remove('active')
		} else {
			el.scrollIntoView({behavior: 'smooth', block:'start'})
			navLink.classList.remove('active')
		}
		
	})
})


