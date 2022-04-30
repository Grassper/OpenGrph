import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineMenu } from 'react-icons/ai';
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
            <Link href="https://github.com/Grassper/OpenGrph" passHref>
              <a
                className="rounded-full hidden bg-red-600 px-6 py-2 text-sm font-semibold text-slate-50 hover:brightness-125 md:block"
                target="_blank">
                <AiFillGithub className="h-6 w-6" />
              </a>
            </Link>
            <button
              className="cursor-pointer rounded-full border border-slate-400 
                p-2 md:hidden ">
              <AiOutlineMenu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
