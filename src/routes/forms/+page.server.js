export const actions = {
  default: async ({ request }) => {
    const data = await request.formData()
    const name = data.get('name')
    const age = data.get('age')
    const fail = {}
    if (age < 18) {
      fail.age = "You aren't old enough."
    }
    return {
      fail
    }
  }
}