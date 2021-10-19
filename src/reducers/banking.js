const updateBanking = (state, action) => {
  const {type, payload} = action;

  if (state === undefined) {
    return {
      accounts: [],
      loading: true,
      error: null
    };
  }

  switch (type) {

    case 'LOADED':
      const accounts = payload.accounts.map(item => {
        return{
            ...item,
            balance: (item.balance.toFixed(2)),
            id: Date.now() + Math.floor(Math.random() * 100)
        }
    })
    console.log(accounts)
      return {
          accounts: accounts,
          balance: payload.balance,
          loading: false,
          error: null,
      };
      
    case 'REQUESTED':
        return{
            accounts: [],
            loading: true,
            error: null,
        };

    case 'ERROR':
        return {
            accounts: [],
            loading: false,
            error: payload
        };

    default:
      return state.banking;
  }
};

export default updateBanking;
