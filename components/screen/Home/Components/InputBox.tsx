import React from 'react';

import {
  fontPairs as fontData,
  patterns as patternData,
} from '@/root/components/screen/Home/Components';
import { InputContext } from '@/root/context';

export const InputBox: React.FC = () => {
  const inputState = React.useContext(InputContext);

  return (
    <div className="bg-white dark:bg-slate-900 px-10 py-14 w-[450px] font-secondary text-slate-900 dark:text-slate-50 rounded-3xl">
      {/* <div className="block">
        <p className="font-bold text-[16px]">Url Fetch</p>
        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg dark:placeholder:text-slate-500 placeholder:text-slate-300"
          maxLength={70}
          onChange={(e) => inputState.setUrlFetch(e.target.value)}
          placeholder="https://www.blockscribers.com"
          value={inputState.urlFetch}
        />
      </div> */}
      <div className="block mt-6">
        <p className="font-bold text-[16px]">Title</p>
        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg "
          maxLength={70}
          onChange={(e) => inputState.setTitle(e.target.value)}
          value={inputState.title}
        />
      </div>
      <div className="block mt-6">
        <p className="font-bold text-[16px]">Description</p>
        <textarea
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg resize-none"
          maxLength={160}
          onChange={(e) => inputState.setDescription(e.target.value)}
          rows={5}
          value={inputState.description}
        />
      </div>
      <div className="block mt-6">
        <p className="font-bold text-[16px]">Font pairs</p>
        <select
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
          onChange={(e) =>
            inputState.setFontPairs(e.target.value as keyof typeof fontData)
          }
          value={inputState.fontPairs}>
          <option>Open Sans + PT Sans</option>
          <option>Quicksand + Source Sans Pro</option>
          <option>Yellowtail + Lato</option>
          <option>Yeseva One + Josefin Sans</option>
          {/* <option>Open Sans Condensed + Lora</option>
          <option>Raleway + Libre Baskerville</option>
          <option>Rubik + Roboto Mono</option>
          <option>Playfair Display + Quattrocento Sans</option>
          <option>Merriweather Sans + Merriweather</option>
          <option>Oswald + Noto Serif</option>
          <option>Lora + Poppins</option>
          <option>Lato + Crimson Text</option>
          <option>Great Vibes + Montserrat</option>
          <option>Mulish + Space Mono</option>
          <option>Fredoka One + ABeeZee</option>
          <option>Fjalla One + Nunito</option>
          <option>Teko + Montserrat</option>
          <option>Bangers + Gudea</option>
          <option>Copse + Mulish</option>
          <option>Anton + Roboto</option> */}
        </select>
      </div>
      <div className="flex">
        <div className="block mt-6 w-1/2">
          <p className="font-bold text-[16px]">Theme</p>
          <select
            className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
            onChange={(e) => inputState.setTheme(e.target.value)}
            value={inputState.theme}>
            <option>Minimal</option>
            <option>Clean</option>
            <option>Modern</option>
          </select>
        </div>
        <div className="block mt-6 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Color</p>
          <input
            className=" mt-4 outline-red-500 h-12"
            onChange={(e) => inputState.setColor(e.target.value)}
            type="color"
            value={inputState.color}
          />
        </div>
      </div>
      <div className="flex">
        <div className="block mt-6 w-1/2">
          <p className="font-bold text-[16px]">Pattern</p>
          <select
            className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
            onChange={(e) =>
              inputState.setPattern(e.target.value as keyof typeof patternData)
            }
            value={inputState.pattern}>
            <option>none</option>
            <option>jigsaw</option>
            <option>overcast</option>
            <option>formalInvitation</option>
          </select>
        </div>
        {/* <div className="block mt-6 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Format</p>
          <select
            className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
            onChange={(e) => inputState.setFormat(e.target.value)}
            value={inputState.format}>
            <option>Png</option>
            <option>Jpeg</option>
          </select>
        </div> */}
        <div className="block mt-6 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Mode</p>
          <select
            className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
            onChange={(e) => inputState.setMode(e.target.value)}
            value={inputState.mode}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>
    </div>
  );
};
