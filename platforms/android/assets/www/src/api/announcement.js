import {request} from './httpconfig.js'


export const LatestAnnouncementApi = (params) => {
  return request({method: 'post', url: '/Announcement/LatestAnnouncement', data: params})
}


