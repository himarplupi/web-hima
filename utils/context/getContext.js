import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useContentContext = () => {
  const { content } = useContext(Context);

  return {
    content
  };
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const providerValue = {
    content: { value: content, setValue: setContent },
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
};
