import instance from './axios'

export const addRequestBlood = (arg) => instance.post('/request-blood', arg)
export const getPendingRequests = () => instance.get('/request-blood')
export const getAcceptedRequests = () => instance.get('/request-blood/accepted')
export const markAsAccepted = (payload) => instance.put('/request-blood/markAsAccepted/list', { listID: payload })
export const updateStatus = (id, status) => instance.patch(`/request-blood/${id}`, { status })
export const deleteRequest = (id) => instance.delete(`/request-blood/${id}`)