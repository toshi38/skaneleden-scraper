import autoBind from 'auto-bind';

class SkaneledenService {
  constructor() {
    autoBind(this);
  }
}

let skaneledenService = new SkaneledenService();

export function getSkaneledenService() {
  return skaneledenService;
}

export function setSkaneledenService(mock) {
  skaneledenService = mock;
}
