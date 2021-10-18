const updateBanking = (state, action) => {

  if (state === undefined) {
    return {
      error: null
    };
  }

  switch (action.type) {

    default:
      return state.banking;
  }
};

export default updateBanking;
