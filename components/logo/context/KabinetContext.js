import React, { createContext, useContext, useState } from 'react';

const KabinetContext = createContext();

export const useKabinetContext = () => {
  const { title, description } = useContext(KabinetContext);

  return {
    title, description
  };
};

export const KabinetProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const providerValue = {
    title: { value: title, setValue: setTitle },
    description: { value: description, setValue: setDescription },
  };

  return (
    <KabinetContext.Provider value={providerValue}>
      {children}
    </KabinetContext.Provider>
  );
};
