import { useState, useEffect } from 'react';

const useTriviaCategories = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch('https://opentdb.com/api_category.php');
        const data = await response.json();

        if (isMounted) {
          const transformedData = data.trivia_categories.map(category => ({
            id: category.id,
            name: category.name,
          }));
          console.log('Transformed Data', transformedData);
          setCategoryList(transformedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return categoryList;
};

export default useTriviaCategories;