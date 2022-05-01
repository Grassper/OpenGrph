import React from 'react';

import {
  fontPairs as fontData,
  patterns as patternData,
} from '@/root/components/screen/Home/Data';
import { InputContext } from '@/root/context';

export const InputBox: React.FC = () => {
  const inputState = React.useContext(InputContext);

  return (
    <div className="bg-white dark:bg-slate-900 px-8 pt-4 pb-10 w-[400px] font-secondary text-slate-900 dark:text-slate-50">
      <div className="block mt-4">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px]">Title</p>
          <p className="text-[12px] text-slate-400">Max 70 chars</p>
        </div>

        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg "
          maxLength={70}
          onChange={(e) => inputState.setTitle(e.target.value)}
          value={inputState.title}
        />
      </div>
      <div className="block mt-4">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[16px]">Description</p>
          <p className="text-[12px] text-slate-400">Max 160 chars</p>
        </div>
        <input
          className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg resize-none"
          maxLength={160}
          onChange={(e) => inputState.setDescription(e.target.value)}
          value={inputState.description}
        />
      </div>
      <div className="block mt-4">
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
          <option>Open Sans Condensed + Lora</option>
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
          <option>Anton + Roboto</option>
        </select>
      </div>
      <div className="flex">
        <div className="block mt-4 w-1/2">
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
        <div className="block mt-4 w-1/2 ml-4">
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
        <div className="block mt-4 w-1/2">
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
            <option>topography</option>
            <option>texture</option>
            <option>jupiter</option>
            <option>architect</option>
            <option>cutout</option>
            <option>hideout</option>
            <option>graphPaper</option>
            <option>yyy</option>
            <option>squares</option>
            <option>fallingTriangles</option>
            <option>pianoMan</option>
            <option>pieFactory</option>
            <option>dominos</option>
            <option>hexagons</option>
            <option>charlieBrown</option>
            <option>autumn</option>
            <option>temple</option>
            <option>stampCollection</option>
            <option>deathStar</option>
            <option>churchOnSunday</option>
            <option>iLikeFood</option>
            <option>overlappingHexagons</option>
            <option>fourPointStars</option>
            <option>bamboo</option>
            <option>bathroomFloor</option>
            <option>corkScrew</option>
            <option>happyIntersection</option>
            <option>kiwi</option>
            <option>lips</option>
            <option>lisbon</option>
            <option>randomShapes</option>
            <option>steelBeams</option>
            <option>tinyCheckers</option>
            <option>xEquals</option>
            <option>anchorsAway</option>
            <option>bevelCircle</option>
            <option>brickWall</option>
            <option>fancyRectangles</option>
            <option>heavyRain</option>
            <option>overlappingCircles</option>
            <option>plus</option>
            <option>roundedPlusConnected</option>
            <option>volcanoLamp</option>
            <option>wiggle</option>
            <option>bubbles</option>
            <option>cage</option>
            <option>connections</option>
            <option>current</option>
            <option>diagonalStripes</option>
            <option>flippedDiamonds</option>
            <option>floatingCogs</option>
            <option>glamorous</option>
            <option>houndstooth</option>
            <option>leaf</option>
            <option>linesInMotion</option>
            <option>moroccan</option>
            <option>morphingDiamonds</option>
            <option>rails</option>
            <option>rain</option>
            <option>skulls</option>
            <option>squaresInSquares</option>
            <option>stripes</option>
            <option>ticTacToe</option>
            <option>zigZag</option>
            <option>aztec</option>
            <option>bankNote</option>
            <option>boxes</option>
            <option>circlesAndSquares</option>
            <option>circuitBoard</option>
            <option>curtain</option>
            <option>diagonalLines</option>
            <option>endlessClouds</option>
            <option>eyes</option>
            <option>floorTile</option>
            <option>groovy</option>
            <option>intersectingCircles</option>
            <option>melt</option>
            <option>overlappingDiamonds</option>
            <option>parkayFloor</option>
            <option>pixelDots</option>
            <option>polkaDots</option>
            <option>signal</option>
            <option>slantedStars</option>
            <option>wallpaper</option>
          </select>
        </div>
        {/* <div className="block mt-4 w-1/2 ml-4">
          <p className="font-bold text-[16px]">Format</p>
          <select
            className="bg-slate-100 dark:bg-gray-800 w-full mt-4 p-4 outline-red-500 rounded-lg"
            onChange={(e) => inputState.setFormat(e.target.value)}
            value={inputState.format}>
            <option>Png</option>
            <option>Jpeg</option>
          </select>
        </div> */}
        <div className="block mt-4 w-1/2 ml-4">
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
