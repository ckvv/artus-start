import { HTTPController, GET } from '@artusx/core';
import { type ArtusxContext } from '@artusx/core';

@HTTPController()
export default class HomeController {
  @GET('/')
  async home(ctx: ArtusxContext) {
    (ctx as any).body = 'Hello World';
  }
}
