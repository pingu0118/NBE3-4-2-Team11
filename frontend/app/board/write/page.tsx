// "use client";

// import { useState } from 'react';
// import { createPost } from '../../../lib/board';
// import { useRouter } from 'next/navigation';
// import { useAuthStore } from '@/store/authStore';  // 로그인 상태 가져오기
// import { getAccessToken } from '@/utils/token';    // 토큰 가져오기
// import { decodeJWT } from '@/utils/decodeJWT';     // JWT 디코딩
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import remarkBreaks from 'remark-breaks'; // 줄바꿈 처리 추가

// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css";

// const WritePostPage = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const router = useRouter();
//   const { isLoggedIn } = useAuthStore();  

//   const handleSubmit = async () => {
//     if (!isLoggedIn) {
//       alert('로그인 후 게시글을 작성할 수 있습니다.');
//       router.push('/login');  
//       return;
//     }

//     try {
//       // 토큰에서 이메일 추출
//       const token = getAccessToken();
//       if (!token) {
//         alert('로그인 정보가 올바르지 않습니다.');
//         return;
//       }

//       const decoded: any = decodeJWT(token);
//       const email = decoded?.sub;  // 이메일 정보는 JWT의 sub 필드에 있음

//       if (!email) {
//         alert('사용자 이메일 정보를 찾을 수 없습니다.');
//         return;
//       }

//       // 이메일 포함하여 게시글 작성 요청
//       await createPost({ title, content, email });
//       router.push('/board');  // 작성 완료 후 목록 페이지로 이동
//     } catch (error: any) {
//       console.error('게시글 작성 실패:', error);
//       alert(`게시글 작성 중 오류가 발생했습니다: ${error.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
//     <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md mr-4 h-[80vh] flex flex-col">
//       <h1 className="text-2xl font-bold mb-4">게시글 작성</h1>

//       <input
//         type="text"
//         placeholder="제목을 입력하세요"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 mb-4 border rounded"
//       />

//       <textarea
//         placeholder="내용을 마크다운 형식으로 작성하세요"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         className="w-full p-2 mb-4 border rounded flex-1"
//       />

//       <button
//         onClick={handleSubmit}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
//       >
//         작성하기
//       </button>
//     </div>

//          {/* 미리보기 */}
//          <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md h-[80vh] flex flex-col">
//         <h2 className="text-2xl font-semibold mb-4">미리보기</h2>
//         <div className="prose max-w-none p-4 border rounded bg-gray-50 flex-1 overflow-y-auto">
//           {content ? ( // 조건부 렌더링 
//             <ReactMarkdown 
//               remarkPlugins={[remarkGfm, remarkBreaks]} //줄바꿈 적용
//               rehypePlugins={[rehypeHighlight]} 
//             >
//               {content}
//             </ReactMarkdown>
//           ) : ( 
//             <p className="text-gray-400">내용을 입력하면 마크다운 형식으로 미리보기가 표시됩니다.</p> // ✅ 기본 메시지 색상 조정
//           )}
//       </div>
//     </div>
//   </div>
// );
// };

// export default WritePostPage;


// "use client";

// import { useState } from "react";
// import { createPost } from "../../../lib/board";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore"; // 로그인 상태 가져오기
// import { getAccessToken } from "@/utils/token"; // 토큰 가져오기
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkBreaks from "remark-breaks"; // 줄바꿈 처리 추가
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github.css";

// const WritePostPage = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const router = useRouter();
//   const { isLoggedIn } = useAuthStore(); // 로그인 상태 확인
//   const handleSubmit = async () => {
//     if (!isLoggedIn) {
//       alert("로그인 후 게시글을 작성할 수 있습니다.");
//       router.push("/login");
//       return;
//     }
  
//     try {
//       // ✅ 토큰 가져오기
//       const token = getAccessToken();
//       if (!token) {
//         alert("로그인이 필요합니다.");
//         router.push("/login");
//         return;
//       }
  
//       // ✅ 토큰 디코딩 & userId 가져오기
//       let userId;
//       try {
//         const tokenPayload = JSON.parse(atob(token.split(".")[1])); // 토큰 디코딩
//         userId = tokenPayload?.userId;
//       } catch (error) {
//         console.error("토큰 디코딩 실패:", error);
//         alert("로그인 정보가 올바르지 않습니다.");
//         router.push("/login");
//         return;
//       }
  
//       if (!userId) {
//         alert("사용자 정보를 찾을 수 없습니다.");
//         return;
//       }
  
//       // ✅ 게시글 작성 요청
//       await createPost({ title, content });
//       router.push("/board"); // 작성 완료 후 목록 페이지로 이동
//     } catch (error: any) {
//       console.error("게시글 작성 실패:", error);
//       alert(`게시글 작성 중 오류가 발생했습니다: ${error.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
//       <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md mr-4 h-[80vh] flex flex-col">
//         <h1 className="text-2xl font-bold mb-4">게시글 작성</h1>

//         <input
//           type="text"
//           placeholder="제목을 입력하세요"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//         />

//         <textarea
//           placeholder="내용을 마크다운 형식으로 작성하세요"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="w-full p-2 mb-4 border rounded flex-1"
//         />

//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
//         >
//           작성하기
//         </button>
//       </div>

//       {/* ✅ 미리보기 */}
//       <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md h-[80vh] flex flex-col">
//         <h2 className="text-2xl font-semibold mb-4">미리보기</h2>
//         <div className="prose max-w-none p-4 border rounded bg-gray-50 flex-1 overflow-y-auto">
//           {content ? (
//             <ReactMarkdown
//               remarkPlugins={[remarkGfm, remarkBreaks]}
//               rehypePlugins={[rehypeHighlight]}
//             >
//               {content}
//             </ReactMarkdown>
//           ) : (
//             <p className="text-gray-400">
//               내용을 입력하면 마크다운 형식으로 미리보기가 표시됩니다.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WritePostPage;
"use client";

import { useState, useEffect } from "react";
import { createPost } from "../../../lib/board";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore"; // 로그인 상태 가져오기
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks"; // 줄바꿈 처리 추가
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const WritePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { isLoggedIn, checkAuthStatus } = useAuthStore(); // 로그인 상태 및 갱신 함수

  useEffect(() => {
    if (!isLoggedIn) {
      checkAuthStatus(); // ✅ 로그인 상태 확인 후 갱신
    }
  }, [isLoggedIn]);

  const handleSubmit = async () => {
    if (!isLoggedIn) {
      alert("로그인 후 게시글을 작성할 수 있습니다.");
      router.push("/login");
      return;
    }

    try {
      // ✅ 게시글 작성 요청 (JWT 쿠키 인증 방식)
      await createPost({ title, content });

      // ✅ 작성 완료 후 게시판 목록 페이지로 이동
      router.push("/board");
    } catch (error: any) {
      console.error("게시글 작성 실패:", error);
      alert(`게시글 작성 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
      <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md mr-4 h-[80vh] flex flex-col">
        <h1 className="text-2xl font-bold mb-4">게시글 작성</h1>

        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <textarea
          placeholder="내용을 마크다운 형식으로 작성하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mb-4 border rounded flex-1"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        >
          작성하기
        </button>
      </div>

      {/* ✅ 미리보기 */}
      <div className="w-1/2 max-w-xl bg-white p-6 rounded shadow-md h-[80vh] flex flex-col">
        <h2 className="text-2xl font-semibold mb-4">미리보기</h2>
        <div className="prose max-w-none p-4 border rounded bg-gray-50 flex-1 overflow-y-auto">
          {content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-400">
              내용을 입력하면 마크다운 형식으로 미리보기가 표시됩니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WritePostPage;
