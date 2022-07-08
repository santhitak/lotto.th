import { apply } from "twind";

const btn = apply`inline-block rounded-lg p-4 my-2 font-semibold text-lg bg-gray-400 text-white`;
const btnBlock = apply`${btn} block bg-gradient-to-r from-purple-700 to-pink-400 text-white`;
const title = apply`text-xl text-center`;
const adjustCenter = apply`flex h-full w-full justify-center justify-items-center items-center`;
const inputBar = apply`h-14 w-96 pl-10 pr-20 rounded-lg bg-gray-100 z-0 focus:shadow focus:outline-none`;

export { adjustCenter, btn, btnBlock, title, inputBar };
