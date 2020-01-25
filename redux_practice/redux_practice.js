// people dropping off a form (action creators)
const createPolicy = () => {
  return {
    //action (a form in our analogy)
    type: "CREATE_POLICY",
    payload: {
      name: "Alex",
      amount: 20
    }
  };
};
