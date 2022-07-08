/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import { LottoReq } from "../constant/lotto.d.ts";
import {
  adjustCenter,
  btn,
  btnBlock,
  title,
  inputBar,
} from "../utils/style.tsx";

export default function Lotto() {
  const [lotto, setLotto] = useState<LottoReq>();

  const getLotto = async () => {
    const res = await fetch("/api/lottoyo");
    const resp: LottoReq = await res.json();
    setLotto(resp);
  };

  useEffect(() => {
    getLotto();
  });

  return (
    <div>
      <div class={tw`mx-auto max-w-screen-md my-12`}>
        <p class={tw`text-6xl font-bold text-center`}>ผลสลากกินแบ่ง</p>
        <p class={tw`text-4xl font-bold text-center mt-4`}>
          ประจำวันที่ {lotto?.response.date}
        </p>
        <div class={tw`container flex justify-center items-center my-14`}>
          <div class={tw`relative`}>
            <input
              type="text"
              class={tw`${inputBar}`}
              placeholder="ค้นหาสลากกินแบ่งของท่าน"
              name="searchLotto"
              disabled
            />
            <div class={tw`absolute top-2 right-2`}>
              <button class={tw`${btn} h-10 w-20 p-0 font-normal m-0`} disabled>
                Search
              </button>
            </div>
          </div>
        </div>
        {lotto?.response.prizes.map((e) => (
          <div>
            <span class={tw`${btnBlock} my-6`}>
              <p class={tw`${title}`}>{e.name}</p>
            </span>
            <div class={tw`bg-neutral-100 px-4 py-6 m-4 shadow-lg rounded-lg`}>
              <div class={tw`${adjustCenter}`}>
                <div class={tw`grid grid-cols-4 gap-4`}>
                  {e.number.map((x) => (
                    <div class={tw`font-medium text-lg mx-4`}>{x}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
