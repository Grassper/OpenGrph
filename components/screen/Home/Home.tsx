import React from 'react';

import { Header } from '@/root/components/shared/Header';
import { InputContextProvider } from '@/root/context';

import { EditorCanvas, InputBox } from './Components';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <InputContextProvider>
        <div className="items-center justify-between hidden xl:flex">
          <div className="mt-4 ml-6">
            <InputBox />
          </div>
          <EditorCanvas />
          <div></div>
        </div>
        <div className="items-center justify-center flex xl:hidden h-[500px]">
          <p>Graph editor is accessible only in bigger screen above 1440px</p>
        </div>
      </InputContextProvider>
    </div>
  );
};

export default Home;
