function climbingLeaderboard(scores, alice) {
  let aliceRanks = []
  let ranks = [...new Set(scores)]
  let first = 0
  let last = ranks.length-1
  let halfway = Math.floor((last-first)/2)
  
  alice.forEach(score => {
    if (score < ranks[last]) {
      aliceRanks.push(ranks.length+1)
    } else if (score < ranks[halfway]) {
      aliceRanks.push(findIndex(ranks, score, halfway))
    } else {
      aliceRanks.push(findIndex(ranks, score, first))
    }
  })
  return aliceRanks
}

function findIndex(ranks, score, index) {
  while(score < ranks[index]) {
    index++
  }
  return index+1
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));