export async function handle({ event, resolve}) {
  console.log('in hooks.server.js')
  // console.log('params', event.params)
  // console.log('event', event)
  event.locals.message = 'Hello from hooks.server.js'
  return resolve(event)
}

// export async function handleError(error) {
//   console.log('ERROR')
//   console.log(error)
// }