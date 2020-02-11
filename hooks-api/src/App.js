import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,
      );
      console.log(result.data);
      // setData(result.data);
      // console.log(data);
    };
    fetchData();
  }, [query]);
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      <ul>
        {/* {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))} */}
      </ul>
    </Fragment>
  );
}

export default App;