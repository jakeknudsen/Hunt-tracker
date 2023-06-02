import * as actionTypes from '../actions/gameActions';
const initialState = {
  gameStats: {
    gameTitle: '',
    homeTeamName: '',
    awayTeamName: '',
    awayScore: '',
    homeScore: '',
    currentBatter: '',
    onDeckBatter: '',
    currentFielders: {
      pitcher: '',
      firstBase: '',
      secondBase: '',
      shortStop: '',
      thirdBase: '',
      leftFeild: '',
      centerFeild: '',
      rightFeild: '',
      catcher: '',
    },
    currentTeamBating: 'Home',
    outs: 0,
    stikesBalls: {
      strikes: 0,
      balls: 0,
    },
    runners: {
      first: false,
      second: false,
      third: false,
    },
  },
  organization: null,
  allOrganizations: [],
  homeTeam: null,
  awayTeam: null,
}; //Initial state of the game

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return {
        ...state,
        gameStats: action.payload,
      };
    case actionTypes.ADD_ORGANIZATION:
      return {
        ...state,
        organization: action.payload,
      };
    case actionTypes.ALL_ORGANIZATIONS:
      return {
        ...state,
        allorganizations: action.payload,
      };
    case actionTypes.ADD_AWAY_TEAM:
      return {
        ...state,
        awayTeam: action.payload,
      };
    case actionTypes.ADD_HOME_TEAM:
      return {
        ...state,
        homeTeam: action.payload,
      };
    case actionTypes.END_GAME:
      return {
        ...state,
        gameStats: initialState.gameStats,
      };

    default:
      return state;
  }
};

export default gameReducer;

export const startGame = (gameInfo) => {
  return {
    type: actionTypes.START_GAME,
    payload: gameInfo,
  };
};

export const addAllOrganizations = (organization) => {
  return {
    type: actionTypes.ALL_ORGANIZATIONS,
    payload: organization,
  };
};

export const addOrganization = (organization) => {
  return {
    type: actionTypes.ADD_ORGANIZATION,
    payload: organization,
  };
};

export const addAwayTeam = (awayTeam) => {
  return {
    type: actionTypes.ADD_AWAY_TEAM,
    payload: awayTeam,
  };
};

export const addHomeTeam = (homeTeam) => {
  return {
    type: actionTypes.ADD_HOME_TEAM,
    payload: homeTeam,
  };
};

export const endGame = () => {
  return {
    type: actionTypes.END_GAME,
  };
};
