// The job of a service is to encapsulate the business logic
// Normally, we would ask the model for the data here but we don't have one!
export const getCoffee = (name = "Latte") => {
  // Return a JSON object
  return {
    drinkType: "Coffee",
    name,
  };
};
