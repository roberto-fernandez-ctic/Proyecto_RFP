import { useEffect } from 'react';

const TitleUpdater = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default TitleUpdater;
