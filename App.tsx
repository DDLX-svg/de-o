
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <main className="bg-gray-800 shadow-2xl rounded-xl p-8 max-w-lg w-full text-center border border-gray-700">
        <div className="mb-6">
          <svg
            className="w-20 h-20 mx-auto text-cyan-400 animate-spin"
            style={{ animationDuration: '10s' }}
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M64 111.75a47.75 47.75 0 1 1 47.75-47.75A47.8 47.8 0 0 1 64 111.75Zm0-89.5a41.75 41.75 0 1 0 41.75 41.75A41.8 41.8 0 0 0 64 22.25Z"
            />
            <path
              fill="currentColor"
              d="M64 128a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Zm0-122a58 58 0 1 0 58 58 58.07 58.07 0 0 0-58-58Z"
            />
            <path
              fill="currentColor"
              d="M64 82a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm0-30a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold mb-3 text-cyan-300">
          Chào mừng đến với Trang React!
        </h1>
        <p className="text-gray-300 mb-6 text-lg">
          Đây là một ứng dụng React đơn giản được tạo kiểu bằng Tailwind CSS.
          Ứng dụng này đã sẵn sàng để bạn xây dựng và triển khai.
        </p>
        <div className="bg-gray-700 p-4 rounded-lg text-left mb-6">
          <p className="font-mono text-sm text-green-400">
            <span className="text-gray-400">// Để bắt đầu, hãy chỉnh sửa tệp này:</span><br/>
            <code>src/App.tsx</code>
          </p>
        </div>
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          Tìm hiểu React
        </a>
      </main>
      <footer className="mt-8 text-gray-500 text-sm">
        <p>Được tạo bởi một Kỹ sư Frontend đẳng cấp thế giới.</p>
      </footer>
    </div>
  );
};

export default App;
