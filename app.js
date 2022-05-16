console.log('js launched');
let homeScore = 0
let awayScore = 0

function incHome(){
  let homeTotal = document.getElementById('homeScore')
  homeScore ++
  homeTotal.innerText = homeScore.toString()
}

function incAway(){
  let awayTotal = document.getElementById('awayScore')
  awayScore ++
  awayTotal.innerText = awayScore.toString()
}
  
function incHome3(){
  let homeTotal = document.getElementById('homeScore')
  homeScore += 3
  homeTotal.innerText = homeScore.toString()
}

function incAway3(){
  let awayTotal = document.getElementById('awayScore')
  awayScore += 3
  awayTotal.innerText = awayScore.toString()
}

function resetScore(){
  let homeTotal = document.getElementById('homeScore')
  let awayTotal = document.getElementById('awayScore')
  homeScore = 0
  awayScore = 0
  homeTotal.innerText = homeScore.toString()
  awayTotal.innerText = awayScore.toString()
}
  
  
  
  
  
  
  
