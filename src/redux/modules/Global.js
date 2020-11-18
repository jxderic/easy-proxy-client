/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-11-17 15:44:24
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-11-17 15:55:32
 */
export const SET_TOKEN = 'Global/SET_TOKEN'
const initialState = {
	token: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.playload
      }
    }
    default: {
      return state
    }
  }
}

export function setToken(token) {
	return {
		type: SET_TOKEN,
		playload: token
	}
}