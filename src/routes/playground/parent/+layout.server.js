export async function load(event) {
  return {
    league: 'NFL',
    mostWins: [
      {league: 'NBA', team: 'Boston Celtics'},
      {league: 'NFL', team: 'Green Bay Packers'},
      {league: 'MLB', team: 'San Francisco Giants'},
      {league: 'NHL', team: 'Montreal Canadiens'},
    ]
  }
}