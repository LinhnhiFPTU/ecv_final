// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  title: string;
  path: string;
  cName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, path }) => {
  return (
    <div className="">
      <a href={path} className="block hover:bg-gray-700 px-4 py-2 rounded">
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Sidebar;
