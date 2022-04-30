import { motion } from 'framer-motion';
import React from 'react';

import { fontPairs, patterns } from '@/root/components/screen/Home/Data';
import { InputContext } from '@/root/context';

import { CanvasWrapper } from './CanvasWrapper';

export const EditorCanvas = () => {
  const inputState = React.useContext(InputContext);

  const patternHandler = () => {
    if (inputState.pattern !== 'none') {
      return patterns[inputState.pattern]('#fff');
    }
    return '';
  };

  if (inputState.theme === 'Modern') {
    return (
      <CanvasWrapper>
        <div className="flex flex-col justify-end items-end h-full">
          <div className="w-3/4 p-10">
            <motion.h1
              className="leading-snug mt-4"
              drag
              style={{
                color: inputState.mode === 'Light' ? '#212529' : '#fff',
                fontFamily:
                  fontPairs[inputState.fontPairs]?.title.name ??
                  'Montserrat Alternates',
                fontSize: fontPairs[inputState.fontPairs]?.title.size ?? '38px',
                fontWeight:
                  fontPairs[inputState.fontPairs]?.title.weight ?? 800,
                lineHeight:
                  fontPairs[inputState.fontPairs]?.title.lineHeight ?? 1.25,
              }}>
              {inputState.title.substring(0, 70)}
            </motion.h1>
            <motion.p
              className="mt-4 w-5/6"
              drag
              style={{
                color: inputState.mode === 'Light' ? '#adb5bd' : '#94a3b8',
                fontFamily:
                  fontPairs[inputState.fontPairs]?.description.name ??
                  'Montserrat Alternates',
                fontSize:
                  fontPairs[inputState.fontPairs]?.description.size ?? '16px',
                fontWeight:
                  fontPairs[inputState.fontPairs]?.description.weight ?? 400,
                lineHeight:
                  fontPairs[inputState.fontPairs]?.description.lineHeight ??
                  1.625,
              }}>
              {inputState.description.substring(0, 160)}
            </motion.p>
          </div>
          <div
            className="h-[100px] w-full"
            style={{
              backgroundColor: inputState.color,
              backgroundImage: patternHandler(),
            }}></div>
        </div>
      </CanvasWrapper>
    );
  }

  if (inputState.theme === 'Clean') {
    return (
      <CanvasWrapper>
        <div className="flex items-center justify-center h-full">
          <div className="w-3/4 p-10">
            <motion.h1
              className="leading-snug mt-4"
              drag
              style={{
                color: inputState.mode === 'Light' ? '#212529' : '#fff',
                fontFamily:
                  fontPairs[inputState.fontPairs]?.title.name ??
                  'Montserrat Alternates',
                fontSize: fontPairs[inputState.fontPairs]?.title.size ?? '38px',
                fontWeight:
                  fontPairs[inputState.fontPairs]?.title.weight ?? 800,
                lineHeight:
                  fontPairs[inputState.fontPairs]?.title.lineHeight ?? 1.25,
              }}>
              {inputState.title.substring(0, 70)}
            </motion.h1>
            <motion.p
              className="mt-4 w-5/6"
              drag
              style={{
                color: inputState.mode === 'Light' ? '#adb5bd' : '#94a3b8',
                fontFamily:
                  fontPairs[inputState.fontPairs]?.description.name ??
                  'Montserrat Alternates',
                fontSize:
                  fontPairs[inputState.fontPairs]?.description.size ?? '16px',
                fontWeight:
                  fontPairs[inputState.fontPairs]?.description.weight ?? 400,
                lineHeight:
                  fontPairs[inputState.fontPairs]?.description.lineHeight ??
                  1.625,
              }}>
              {inputState.description.substring(0, 160)}
            </motion.p>
          </div>
        </div>
      </CanvasWrapper>
    );
  }

  return (
    <CanvasWrapper>
      <div className="flex justify-between items-center w-full">
        <div
          className="w-1/4 h-[530px]"
          style={{
            backgroundColor: inputState.color,
            backgroundImage: patternHandler(),
          }}></div>
        <div className="w-3/4 p-10">
          <motion.h1
            className="leading-snug mt-4"
            drag
            style={{
              color: inputState.mode === 'Light' ? '#212529' : '#fff',
              fontFamily:
                fontPairs[inputState.fontPairs]?.title.name ??
                'Montserrat Alternates',
              fontSize: fontPairs[inputState.fontPairs]?.title.size ?? '38px',
              fontWeight: fontPairs[inputState.fontPairs]?.title.weight ?? 800,
              lineHeight:
                fontPairs[inputState.fontPairs]?.title.lineHeight ?? 1.25,
            }}>
            {inputState.title.substring(0, 70)}
          </motion.h1>
          <motion.p
            className="mt-4 w-5/6"
            drag
            style={{
              color: inputState.mode === 'Light' ? '#adb5bd' : '#94a3b8',
              fontFamily:
                fontPairs[inputState.fontPairs]?.description.name ??
                'Montserrat Alternates',
              fontSize:
                fontPairs[inputState.fontPairs]?.description.size ?? '16px',
              fontWeight:
                fontPairs[inputState.fontPairs]?.description.weight ?? 400,
              lineHeight:
                fontPairs[inputState.fontPairs]?.description.lineHeight ??
                1.625,
            }}>
            {inputState.description.substring(0, 160)}
          </motion.p>
        </div>
      </div>
    </CanvasWrapper>
  );
};
