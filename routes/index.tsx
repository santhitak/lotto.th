/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Lotto from "../islands/Lotto.tsx";

export default function Home() {
  return (
    <div class={tw`overflow-hidden`}>
      <Lotto />
    </div>
  );
}
