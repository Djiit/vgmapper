export default(state = {players:[]}, payload) => {
  switch (payload.type) {
    case 'SET_USER_DATA':
      return {...state,
        name: payload.name,
        region: payload.region
      };
    case 'SET_USER_POS':
      return {...state,
        pos: [payload.lat, payload.lon],
        timestamp: payload.timestamp
      };
    case 'ADD_NEW_PLAYER':
      state.players.push(payload.player);
      return state;
    case 'SET_CURRENT_PLAYER':
      return {...state,
        currentPlayer: payload.player
      };
    default:
        return state;
  }
};
