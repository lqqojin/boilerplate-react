import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-shoppyBrand">
        로고11
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/main">
          <button>설정</button>
        </Link>
        <Link to="/main">
          <button>설정1</button>
        </Link>
        <Link to="/main">
          <button>설정2</button>
        </Link>
      </nav>
    </header>
  );
}
