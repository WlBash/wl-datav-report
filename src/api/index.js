import request from '../utils/request'

const icode = 'C2CE489D152F6DD7'

export function wordcloud() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}

export function mapScatter() {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}

export function screenData() {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
