import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useLogoContext = () => {
  const { title, description } = useContext(Context);

  return {
    title, description
  };
};

export const LogoProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const providerValue = {
    title: { value: title, setValue: setTitle },
    description: { value: description, setValue: setDescription },
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
};
