import { motion } from 'framer-motion';
import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { InputContext } from '@/root/context';

export const EditorCanvas = () => {
  const inputState = React.useContext(InputContext);
  const editorRef = React.useRef<HTMLDivElement>(null);

  const downloadHandler = async () => {
    const key = inputState.format as 'Png' | 'Jpeg';

    const { exportComponentAsJPEG, exportComponentAsPNG } = await import(
      'react-component-export-image'
    );

    const formalFun = {
      Png: () =>
        exportComponentAsPNG(editorRef, {
          fileName: 'OpenGrph',
        }),
      Jpeg: () =>
        exportComponentAsJPEG(editorRef, {
          fileName: 'OpenGrph',
        }),
    };

    formalFun[key]();
  };

  return (
    <div className="flex flex-col items-end">
      <button
        className="cursor-pointer p-4 bg-red-500 text-slate-50"
        onClick={() => downloadHandler()}>
        <BsDownload className="h-6 w-6 text-slate-50" />
      </button>
      <div
        ref={editorRef}
        className="w-[1200px] h-[627px] flex justify-between items-center overflow-hidden"
        style={{
          backgroundColor: '#ffffff',
        }}>
        <div
          className="w-1/4 h-full"
          style={{ backgroundColor: '#e9ecef20' }}></div>
        <div className="w-3/4 p-10">
          <motion.h1
            className="font-primary font-bold text-2xl w-2/3 leading-snug"
            drag="y"
            style={{ color: '#212529' }}>
            {inputState.title.substring(0, 70)}
          </motion.h1>
          <motion.p
            className="font-normal text-base font-secondary mt-4 w-5/6 leading-relaxed"
            drag="y"
            style={{ color: '#adb5bd' }}>
            {inputState.description.substring(0, 160)}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
