//fucntion to retrieve  data

const getData = async (season, round) =>{
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    let season = inpSeason.value
    let round = inpRound.value
    console.log(response)
    console.log(response.data)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const raceList = '.race-list'

const createList = (driver, dateOfBirth, permanentNumber, nationality, points, wins, position) => {
    const html = `<div id=${id} class="card mt-3 mb-3" style="width: 18rem;">
    <ul class="list-group list-group-flush" id=${driver}>
    <li class="list-group-item">${dateOfBirth}</li>
    <li class="list-group-item">${permanentNumber}</li>
    <li class="list-group-item">${nationality}</li>    
    <li class="list-group-item">${points}</li>
    <li class="list-group-item">${wins}</li>
    <li class="list-group-item">${position}</li>
    
  </ul>
</div>`;
document.querySelector(raceList).insertAdjacentHTML('beforeend', html)
}

const loadData = async () => {
    const f1RacerStats = await getData()
    

    f1RacerStats.forEach(element => createList(element.Driver.givenName, element.Driver.familyName, element.Driver.dateOfBirth, element.Driver.permanentNumber, element.Driver.nationality, element.points, element.wins, element.position))

}

const clearData = () => {
    document.querySelector(raceList).innerHTML = '';
}