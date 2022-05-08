/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillStar } from 'react-icons/ai';
import { BiDna } from 'react-icons/bi';

export const Header: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-br-3xl rounded-bl-3xl">
      <div className="mx-auto px-4 py-6 font-secondary sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between ">
          <div className="flex items-center md:flex-grow xl:w-[600px] xl:flex-grow-0">
            <span className="ml-2 text-[22px] text-slate-800 dark:text-slate-50 font-bold inline-flex font-primary">
              <BiDna className="h-8 w-8 text-red-600 mr-2" />
              OpenGrph
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400 sm:space-x-4 xl:space-x-6">
            <Link
              href="https://www.producthunt.com/posts/opengrph?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-opengrph"
              passHref>
              <a target="_blank">
                <img
                  alt="OpenGrph - Super&#0032;fast&#0032;open&#0032;graph&#0032;&#0038;&#0032;cover&#0032;image&#0032;creator | Product Hunt"
                  className="w-[250px] h-[54px]"
                  height="54"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=345753&theme=light"
                  width="250"
                />
              </a>
            </Link>
            <Link href="https://github.com/Grassper/OpenGrph" passHref>
              <a
                className="rounded-full  bg-red-600 px-6 py-2 text-sm font-semibold text-slate-50 hover:brightness-125 flex space-x-2"
                target="_blank">
                <AiFillStar className="h-6 w-6 text-amber-500" />
                <AiFillGithub className="h-6 w-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
