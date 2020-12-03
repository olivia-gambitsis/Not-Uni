import request from 'superagent'

export function getAllModulesAPI () {
  return request.get('/api/modules')
    .then(res => res.body)
}

// export function getModulesBySearchAPI () {
//   return request.get(rootUrl)
//     .then(res => res.body)
// }

export function getSavedModulesAPI () {
  return request.get('/api/modules/saved')
    .then(res => res.body)
}