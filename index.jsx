import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
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
        Đây là một mẫu khởi đầu đơn giản cho một ứng dụng React + JSX + Tailwind.
      </p>
    </>
  );
};

const App = () => {
  useEffect(() => {
    // Effect này chạy một lần sau khi component được gắn kết.
    // Chúng ta xóa class 'loading' khỏi phần tử gốc để làm mờ nội dung.
    // Điều này đảm bảo rằng Tailwind JIT đã có thời gian xử lý các class
    // và áp dụng style, ngăn chặn "flash of unstyled content" (FOUC).
    const rootElement = document.getElementById('root');
    if (rootElement) {
      setTimeout(() => rootElement.classList.remove('loading'), 100);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <main className="bg-gray-800 shadow-2xl rounded-xl p-8 max-w-lg w-full text-center border border-gray-700">
        <Header />
        <div className="bg-gray-700 p-4 rounded-lg text-left mb-6">
          <p className="font-mono text-sm text-green-400">
            <span className="text-gray-400">// Để bắt đầu, hãy chỉnh sửa tệp này:</span><br/>
            <code>index.jsx</code>
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

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Không tìm thấy phần tử gốc để gắn kết");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);