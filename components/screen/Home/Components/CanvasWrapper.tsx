import React from 'react';
import { BsDownload } from 'react-icons/bs';

import { InputContext } from '@/root/context';

interface CanvasWrapper_ {
  children: React.ReactNode;
}

export const CanvasWrapper: React.FC<CanvasWrapper_> = (props) => {
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
      <div>
        <button
          className="cursor-pointer h-[50px] w-[50px] bg-red-500 text-slate-50 flex items-center justify-center"
          onClick={() => downloadHandler()}>
          <BsDownload className="h-6 w-6 text-slate-50" />
        </button>
      </div>
      <div
        ref={editorRef}
        className="w-[1000px] h-[530px] overflow-hidden"
        style={{
          backgroundColor: inputState.mode === 'Light' ? '#fff' : '#111827',
        }}>
        {props.children}
      </div>
    </div>
  );
};
