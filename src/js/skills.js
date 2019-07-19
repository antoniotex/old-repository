var skills = {
  frontend: [
    {skill: 'HTML5', level: 'Avançado'},
    {skill: 'CSS3', level: 'Avançado'},
    {skill: 'Javascript ES6+', level: 'Avançado'},
    {skill: 'React', level: 'Intermediário'},
    {skill: 'React Native', level: 'Básico'},
    {skill: 'Angular 2+', level: 'Intermediário'},
    {skill: 'Vue', level: 'Básico'},
    {skill: 'UI / UX', level: 'Básico'},
    {skill: 'Bootstrap', level: 'Intermediário'}
  ],
  backend: [
    {skill: 'NodeJS', level: 'Intermediário'},
    {skill: 'C# .NET', level: 'Intermediário'},
    {skill: 'REST API', level: 'Intermediário'},
    {skill: 'MongoDB', level: 'Básico'},
    {skill: 'MySQL', level: 'Intermediário'},
    {skill: 'SQL Server', level: 'Básico'},
  ],
  outros: [
    {skill: 'SCRUM', level: 'Básico'},
    {skill: 'Docker', level: 'Básico'},
    {skill: 'Gulp', level: 'Básico'},
    {skill: 'Photoshop', level: 'Básico'}
  ]
}

var frontend = document.getElementById('frontend')
for(var i = 0; i < skills.frontend.length; i++){
  var panelItem = document.createElement('div')
  panelItem.classList.add('panel-item')
  var span1 = document.createElement('span')
  var span2 = document.createElement('span')
  span1.textContent = skills.frontend[i].skill
  span2.textContent = skills.frontend[i].level
  panelItem.append(span1)
  panelItem.append(span2)
  frontend.appendChild(panelItem)
}

var backend = document.getElementById('backend')
for(var i = 0; i < skills.backend.length; i++){
  var panelItem = document.createElement('div')
  panelItem.classList.add('panel-item')
  var span1 = document.createElement('span')
  var span2 = document.createElement('span')
  span1.textContent = skills.backend[i].skill
  span2.textContent = skills.backend[i].level
  panelItem.append(span1)
  panelItem.append(span2)
  backend.appendChild(panelItem)
}

var outros = document.getElementById('outros')
for(var i = 0; i < skills.outros.length; i++){
  var panelItem = document.createElement('div')
  panelItem.classList.add('panel-item')
  var span1 = document.createElement('span')
  var span2 = document.createElement('span')
  span1.textContent = skills.outros[i].skill
  span2.textContent = skills.outros[i].level
  panelItem.append(span1)
  panelItem.append(span2)
  outros.appendChild(panelItem)
}