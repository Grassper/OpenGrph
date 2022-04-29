import React from 'react';

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
  pattern: string;
  setPattern: React.Dispatch<React.SetStateAction<string>>;
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
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
  pattern: '',
  setPattern: () => undefined,
  format: '1200 x 630',
  setFormat: () => undefined,
});

export const InputContextProvider: React.FC<PropsTypes> = ({ children }) => {
  const [urlFetch, setUrlFetch] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [theme, setTheme] = React.useState('Clean');
  const [color, setColor] = React.useState('');
  const [pattern, setPattern] = React.useState('');
  const [format, setFormat] = React.useState('Png');

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
  };

  return (
    <InputContext.Provider value={contextValues}>
      {children}
    </InputContext.Provider>
  );
};
