import request from "../request";

export const status = () => request.get({
  path: 'health'
})
