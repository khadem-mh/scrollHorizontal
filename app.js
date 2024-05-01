let customScroll = document.getElementById('scroll')

window.addEventListener('scroll', function () {

    let scrollPercent = window.scrollY / (document.body.clientHeight - window.innerHeight)

    let scrollPercentRoundede = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRoundede + '%'

})
