
export const saveCookie_uuid = function ({commit}, userInfo) {
  commit(NAME.USER_INFO, userInfo);
};
export const setCookie_uuid = function ({commit}, cookie_uuid) {
  commit('setCookie_uuid', cookie_uuid);
};
