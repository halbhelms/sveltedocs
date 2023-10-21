export async function load(event) {
  const { parent } = event
  const { league, mostWins } = await parent()
  console.log('league', league)
  const winningestTeam = mostWins.find(team => team.league === league)
  return {
    team: winningestTeam.team
  }
}