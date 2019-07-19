var buttons = document.querySelectorAll('.tab-container .button-container button')
var panels = document.querySelectorAll('.tab-container .tab-panel')

panels[0].style.display = 'flex'
panels[0].style.background = '#222'
buttons[0].style.background = '#222'

function showPanel(index, color){
  buttons.forEach(function(node){
    node.style.background = ''
    node.style.color = ''
  })
  buttons[index].style.background = color
  buttons[index].style.color = 'white'
  panels.forEach(function(node){
    node.style.display='none'
  })
  panels[index].style.display='flex'
  panels[index].style.background = color
  panels.forEach(function(item, index){
    // panels[index].innerHTML = ''
  })
}

/**
 * Srcoll suave
 */
var menuItems = document.querySelectorAll('.nav-title a[href^="#"')
menuItems.forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault()
    var element = e.target
    var id = element.getAttribute('href')
    var section = document.querySelector(id)

    // window.scroll({ 
    //   top: section.offsetTop,
    //   behavior: 'smooth'
    // })
    smoothScrollTo(0, section.offsetTop)
  })

})

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();
 
  duration = typeof duration !== 'undefined' ? duration : 400;
 
  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };
 
  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};