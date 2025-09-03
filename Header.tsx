import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="mb-6">
        <svg
          className="w-20 h-20 mx-auto text-cyan-400 animate-spin"
          style={{ animationDuration: '10s' }}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Biểu tượng nguyên tử cho React */}
          <circle cx="64" cy="64" r="10" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeWidth="6">
            <ellipse cx="64" cy="64" rx="58" ry="22" />
            <ellipse cx="64" cy="64" rx="58" ry="22" transform="rotate(60, 64, 64)" />
            <ellipse cx="64" cy="64" rx="58" ry="22" transform="rotate(120, 64, 64)" />
          </g>
        </svg>
      </div>
      <h1 className="text-4xl font-extrabold mb-2 text-cyan-400">Chào mừng đến với React</h1>
      <p className="text-gray-400 mb-8">
        Đây là một mẫu khởi đầu đơn giản cho một ứng dụng React + TypeScript + Tailwind.
      </p>
    </>
  );
};

export default Header;
