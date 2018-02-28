import {request} from './httpconfig.js'


export const LatestAnnouncementApi = (params) => {
  return request({method: 'post', url: '/Announcement/LatestAnnouncement', data: params})
}

export const ListApi = (params) => {
  return request({method: 'post', url: '/Announcement/List', data: params})
}


