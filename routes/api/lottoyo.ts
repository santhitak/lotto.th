import { Handlers } from "$fresh/server.ts";
import { LottoReq } from "../../constant/lotto.d.ts";

export const handler: Handlers<LottoReq> = {
  async GET(_, __) {
    const resp = await fetch(`https://lotto.api.rayriffy.com/latest`);
    const lotto: LottoReq = await resp.json();
    return new Response(JSON.stringify(lotto));
  },
};
