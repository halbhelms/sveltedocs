export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const yourName = data.get('your-name');
    return {
      message: `Thanks for adding your name, ${yourName}`
    }
  }
}