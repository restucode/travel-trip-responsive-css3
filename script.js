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


// tweeenmax

TweenMax.to('.wrapper', 3 , {
	top: '-200%',
	ease: Expo.easeInOut,
	delay: 3.6
})


var tl = new TimelineMax();

tl.from('.loader', 1.6, {
	scaleY: '0%',
	y: 80,
	ease: Expo.easeInOut,
	delay: 1,
	transformOrigin: '50% 100%'
})

tl.to('.loader', 1.6, {
 height: '20vh',
 scaleY: '0%',
 ease: Expo.easeInOut,
 transformOrigin: '0% -100%'
})

setTimeout(() => {
	document.body.style.overflowY = 'scroll';
	document.body.style.overflowX = 'hidden';
	document.querySelector('.wrapper').style.display = 'none';
}, 7800)


var tl = new TweenMax.staggerFrom('.hero-left', 2 , {
	opacity: 0,
	x:-20,
	ease: Expo.easeInOut,
	delay: 4.2
})

var tl = new TweenMax.staggerFrom('.hero-right', 2 , {
	opacity: 0,
	x:20,
	ease: Expo.easeInOut,
	delay: 4.2
})
