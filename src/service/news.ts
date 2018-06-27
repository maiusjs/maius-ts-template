import Maius from 'maius';

export class HomeService extends Maius.Service {
  constructor(app) {
    super(app);
  }
  public async getMsg() {
    return 'Welcome to Maius';
  }
}
