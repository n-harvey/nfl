const teams_endpoint =
  "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32";

const athlete_endpoint =
  "https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes";

class Teams {
  get = async (href) => {
    const response = await fetch(`${href}`);
    // console.log('Response from get command:', response)
    const data = await response.json();
    return data;
  };

  getTeams = async () => {
    let teams = [];

    const response = await fetch(teams_endpoint);
    const data = await response.json();
    // console.log('logging data from getTeams:', data)
    for (let index = 0; index < data.items.length; index++) {
      let team = await this.get(data.items[index].$ref);
      teams.push(team);
    }
    // console.log('Teams.getTeams was ran, returning data: ', teams)
    return teams;
  };

  getAthlete = async (athlete_id) => {
    const response = await fetch(`${athlete_endpoint}/${athlete_id} `);
    const data = await response.json();
    return data;
  };
}

export const teamAPI = new Teams();
