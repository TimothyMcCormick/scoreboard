console.log('js launched');
let homeScore = 0
let awayScore = 0

function incHome(){
  homeScore++
  draw()
}

function incHome3(){
  homeScore += 3
  draw()
}

function incAway(){
  awayScore++
  draw()
}

function incAway3(){
  awayScore += 3
  draw()
}

function resetScore(){
  homeScore = 0
  awayScore = 0
  draw()
}

function draw(){
  let homeTotal = document.getElementById('homeScore')
  let awayTotal = document.getElementById('awayScore')

  homeTotal.innerText = homeScore.toString()
  awayTotal.innerText = awayScore.toString()
}

  
  
  
  
  
  
  
