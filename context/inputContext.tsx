import React from 'react';

import {
  fontPairs as fontData,
  patterns as patternData,
} from '@/root/components/screen/Home/Components';

interface PropsTypes {
  children: React.ReactNode;
}

interface ContextValues {
  urlFetch: string;
  setUrlFetch: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  pattern: keyof typeof patternData;
  setPattern: React.Dispatch<React.SetStateAction<keyof typeof patternData>>;
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
  fontPairs: keyof typeof fontData;
  setFontPairs: React.Dispatch<React.SetStateAction<keyof typeof fontData>>;
}

export const InputContext = React.createContext<ContextValues>({
  urlFetch: '',
  setUrlFetch: () => undefined,
  title: '',
  setTitle: () => undefined,
  description: '',
  setDescription: () => undefined,
  theme: 'Clean',
  setTheme: () => undefined,
  color: '',
  setColor: () => undefined,
  pattern: 'jigsaw',
  setPattern: () => undefined,
  format: '1200 x 630',
  setFormat: () => undefined,
  fontPairs: 'Open Sans + PT Sans',
  setFontPairs: () => undefined,
});

export const InputContextProvider: React.FC<PropsTypes> = ({ children }) => {
  const [urlFetch, setUrlFetch] = React.useState('');
  const [title, setTitle] = React.useState('Hello buddy, checkout opengrph!');
  const [description, setDescription] = React.useState(
    'Now, You have ability to create opengraph cover just of click of buttton'
  );
  const [theme, setTheme] = React.useState('Clean');
  const [color, setColor] = React.useState('');
  const [pattern, setPattern] =
    React.useState<keyof typeof patternData>('jigsaw');
  const [format, setFormat] = React.useState('Png');
  const [fontPairs, setFontPairs] = React.useState<keyof typeof fontData>(
    'Open Sans + PT Sans'
  );

  const contextValues: ContextValues = {
    urlFetch,
    setUrlFetch,
    title,
    setTitle,
    description,
    setDescription,
    theme,
    setTheme,
    color,
    setColor,
    pattern,
    setPattern,
    format,
    setFormat,
    fontPairs,
    setFontPairs,
  };

  return (
    <InputContext.Provider value={contextValues}>
      {children}
    </InputContext.Provider>
  );
};
