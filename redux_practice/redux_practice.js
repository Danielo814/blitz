// people dropping off a form (action creators)
const createPolicy = (name, amount) => {
  return {
    //action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

//reducers (departments)
const claimsHistory = (oldListOfClaims, action) => {
  if (action.type === "CREATE_CLAIM") {
    // we care about this action (or form)!
    return [...oldListOfClaims, action.payload];
  }
  // we dont care about this action
  return oldListOfClaims;
};
