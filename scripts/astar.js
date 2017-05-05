(function () {

// var state = {
//   board: [],
//   cx: -1,
//   cy: -1
// }

var INVALID = -1
var NCOLOURS = 6
var SIZE = 7
var DL = 100
var path = []

function getNextState (state, action) {
  if (state == INVALID) return -1
  var { board, cx, cy } = state
  switch (action) {
    case 'left':
      cx -= 1
      if (cx < 0) return INVALID;
      board[cx][cy] = (board[cx][cy] - 1 + NCOLOURS) % NCOLOURS;
      break;
    case 'right':
      cx += 1
      if (cx >= SIZE) return INVALID;
      board[cx][cy] = (board[cx][cy] - 1 + NCOLOURS) % NCOLOURS;
      break;
    case 'up':
      cy -= 1
      if (cy < 0) return INVALID;
      board[cx][cy] = (board[cx][cy] - 1 + NCOLOURS) % NCOLOURS;
      break;
    case 'down':
      cy += 1
      if (cy >= SIZE) return INVALID;
      board[cx][cy] = (board[cx][cy] - 1 + NCOLOURS) % NCOLOURS;
      break;
  }
  return { board, cx, cy }
}

function heurestic (state) {
  var board = state.board, i, j, colourcount = [];
  for (i = 0; i < NCOLOURS; i++) colourcount[i] = 0
  for (i = 0; i < SIZE; i++) {
    for (j = 0; j < SIZE; j++) {
      colourcount[board[i][j]]++
    }
  }
  var max = -1, maxi = -1;
  for (i = 0; i < NCOLOURS; i++) {
    if (colourcount[i] > max) {
      max = colourcount[i]
      maxi = [i]
    } else if (colourcount[i] == max) {
      maxi.push(i)
    }
  }
  var hval = DL + 100;
  maxi.map(function (colour) {
    var v = 0
    for (i = colour; i < NCOLOURS; i++) v += colourcount[i] * (i - colourcount)
    for (i = 0; i < colour;i ++) v += colourcount[i] * (i + NCOLOURS - colourcount)
    if (v < hval) hval = v
  })
  return hval
}

function astar (n, state, dl) {
  SIZE = n
  DL = dl + 10
  // DL = 3
  console.log(bfs(state, 0))
  console.log(path)
}

function bfs (state, depth) {
  // console.log(depth, state)
  if (heurestic(state) == 0) return depth
  if (depth > DL) return -1
  if (state == INVALID) return -1
  var actions = ['left', 'right', 'up', 'down']
  var actioninv = ['right', 'left', 'down', 'up']
  var heurs = []
  for (var i = 0; i < 4; i++) {
    var nstate = getNextState(state, actions[i])
    if (nstate == INVALID) continue
    heurs.push([i, depth + heurestic(state)])
    state = getNextState(nstate, actioninv[i])
  }
  heurs.sort(function (a, b) {
    return a[1] - b[1]
  })
  // console.log(depth, heurs)
  for (i = 0; i < heurs.length; i++) {
    var heur = heurs[i]
    state = getNextState(state, actions[heur[0]])
    var v = bfs(state, depth + 1)
    if (v != -1) {
      path[depth] = actions[heur[0]]
      return v
    }
    state = getNextState(state, actioninv[heur[0]])
  }
  return DL + 100
}


function astarHelper() {
  var state = {
    board: Manager.board.slice(),
    cx: Manager.posnx,
    cy: Manager.posny,
  }
  for (var i = 0; i < Manager.size; i++)
    for (var j = 0; j < Manager.size; j++)
      state.board[i][j] = (state.board[i][j] + NCOLOURS) % NCOLOURS
  console.log(state)
  astar(Manager.size, state, parseInt(Manager.steps))
}

window.astar = astar
window.astarh = astarHelper
})()
