import React, { createContext, useContext, useState } from 'react';

const HimaRplContext = createContext();

export const useHimaRplContext = () => {
  const { title, description } = useContext(HimaRplContext);

  const handleTitle = (titleLogo) => {
    if (titleLogo) {
      title.setValue(titleLogo);
    } else {
      title.setValue('');
    }
  };

  const handleDescription = (descriptionLogo) => {
    if (descriptionLogo) {
      description.setValue(descriptionLogo);
    } else {
      description.setValue('');
    }
  };

  return {
    title: {
      ...title,
      handleTitle,
    },
    description: {
      ...description,
      handleDescription,
    },
  };
};

export const HimaRplProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const providerValue = {
    title: { value: title, setValue: setTitle },
    description: { value: description, setValue: setDescription },
  };

  return (
    <HimaRplContext.Provider value={providerValue}>
      {children}
    </HimaRplContext.Provider>
  );
};
