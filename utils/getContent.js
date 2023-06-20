import fs from 'fs';

const getContent = (filename) => {
  const content = JSON.parse(fs.readFileSync(`assets/data/content/${filename}.json`, 'utf8'));
  return {
    props: {
      content,
    },
  };
}

export default getContent;
