import {request} from './httpconfig.js'


export const MyNotificationsApi = (params) => {
  return request({method: 'post', url: '/Notification/MyNotifications', data: params})
}