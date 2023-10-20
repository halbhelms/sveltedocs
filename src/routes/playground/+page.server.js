export async function load(event) {
 console.log(event)
 console.log(event.getClientAddress())
  return {
    name: 'George and Grace',
    residence: 'New York'
  }
}