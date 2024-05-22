import * as prowlarr from '../services';

export const run = async () => prowlarr.health.status({
  retry: true
})
