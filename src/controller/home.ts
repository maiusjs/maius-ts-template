import Maius from 'maius';
import { HomeService } from '../service/news';

export default class HomeController extends Maius.Controller {
  private readonly homeService: HomeService;
  constructor(app) {
    super(app);
    this.homeService = new HomeService(app);
  }

  public async index() {
    const ctx = this.app.ctx;
    const msg = await this.homeService.getMsg();
    await ctx.render('index', {
      msg,
    });
  }
}
