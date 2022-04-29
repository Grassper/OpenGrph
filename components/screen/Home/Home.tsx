import React from 'react';

import { Header } from '@/root/components/shared/Header';
import { InputContextProvider } from '@/root/context';

import { EditorCanvas, InputBox } from './Components';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <InputContextProvider>
        <div className="flex items-center justify-between">
          <div className="mt-6 ml-6">
            <InputBox />
          </div>
          <EditorCanvas />
          <div></div>
        </div>
      </InputContextProvider>
    </div>
  );
};

export default Home;
