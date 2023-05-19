import * as actionTypes from '../actions/gameActions';
const initialState = {
    gameStats: {
        gameTitle:'',
        homeTeamName:'',
        awayTeamName:'',
        awayScore:'',
        homeScore:'',
        currentBatter:'',
        onDeckBatter:'',
        currentFielders: {
            pitcher: '',
            firstBase: '',
            secondBase:'',
            shortStop:'',
            thirdBase:'',
            leftFeild:'',
            centerFeild:'',
            rightFeild:'',
            catcher:''
        },
        currentTeamBating: 'Home',
        outs: 0,
        stikesBalls: {
            strikes: 0,
            balls: 0
        },
        runners:{
            first: false,
            second:false,
            third: false
        }
    },
}; //Initial state of the counter

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_GAME:
            return {
                gameStats: action.payload
            };
        
        default: return state;
    }
};

export default reducer;