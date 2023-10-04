export const load = async (request) => {
  const { rest } = request.params;
  // what do we do with this string?
  // we leave this as an exercise for the bad dog
  return {
    restParams: rest
  }
}