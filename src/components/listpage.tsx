import React from 'react';

const ListPage = ({ data }) => {
  return (
    <div>
      <h1>List Page</h1>
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default ListPage;
