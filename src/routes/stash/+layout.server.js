export const load = async ( event    ) => {
  console.log('in load')
  
  return {
    customer: {
      name: 'Hal Helms',
      status: 'Preferred'
    }
    
  }
}