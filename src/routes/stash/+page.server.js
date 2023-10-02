export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const billTo = data.get('bill-to');
    const restrictTo = data.get('restrictTo');
    console.log('billTo', billTo, 'restrictTo', restrictTo)
  }
}

export const load = async ( request ) => {
  return {
    customer: {
      name: 'Hal Helms',
      status: 200
    }
    
  }
}