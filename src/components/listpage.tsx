import React from 'react';
import avatarTest from '../assets/standinavatar.jpg';

const ListPage = ({ data }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">List Page</h1>
      <ul className="space-y-2">
        <li className="flex items-center justify-between border-b-2 border-gray-300 py-2">
          <div className="flex items-center">
            <img src={avatarTest} alt="avatar" className="w-6 h-6 rounded-full mr-2" />
            <div>
              <p className="font-bold text-sm">Elvis Presley</p>
              <p className="text-sm">Hold My Hand</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-green-500"></button>
        </li>
      </ul>
    </div>
  );
};

export default ListPage;
