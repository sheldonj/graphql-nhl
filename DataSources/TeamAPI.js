const { RESTDataSource } = require('apollo-datasource-rest')

class TeamAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://statsapi.web.nhl.com/api/v1/teams'
  }

  async returnTeam(id) {
    const team = await this.get(`/${id}`)
    return team.teams[0]
  }

  async returnTeams() {
    const team = await this.get(`/`)
    return team.teams
  }

  async returnRoster(id) {
    const roster = await this.get(`/${id}?expand=team.roster`)
    return roster.teams[0].roster.roster
  }
}

module.exports = TeamAPI