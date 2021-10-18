import updateBanking from './banking';

const reducer = (state, action) => {
  return {
    banking: updateBanking(state, action),
  };
};

export default reducer;
