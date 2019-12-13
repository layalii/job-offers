export const user = (state = {}, action) => {
  switch (action.type) {
    case "APPLY_TO_OFFER":
      return {
        ...state,
        offers: state.offers.concat(action.offerId)
      };
    default:
      return state;
  }
};

export const offers = (state = []) => {
  return state;
};
