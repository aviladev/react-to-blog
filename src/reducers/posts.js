import _ from 'lodash'

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case DELETE_POST:
      return _.omit(state, payload)
    case FETCH_POST:
      const { data: post } = payload

      return { ...state, [post.id]: post }
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id')
    default:
      return state
  }
}
