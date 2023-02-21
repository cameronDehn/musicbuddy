import React from 'react';
import avatarTest from '../assets/standinavatar.jpg'

const ListPage = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">List Page</h1>
      <ul className="space-y-2">
        <li className="flex items-center justify-between border-b-2 border-gray-300 py-2">
          <div className="flex items-center w-2 h-2 rounded-full object-cover object-center mr-2">
          <img src={avatarTest} alt="avatar" className="w-8 h-8 rounded-full object-cover object-center mr-2" />
        

            <div>
              <p className="font-bold">Elvis Presley</p>
              <p>Hold My Hand</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-green-500"></button>
        </li>    
      </ul>
    </div>
  );
};

export default ListPage;

// <h1>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={avatarTest} className="logo react" alt="React logo" />
//         </a>
//         music buddy
//       </h1>