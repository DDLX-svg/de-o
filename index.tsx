import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.tsx';

const App: React.FC = () => {
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
            <code>index.tsx</code>
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