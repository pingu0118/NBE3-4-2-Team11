// 게시글 목록 페이지
// 작성버튼-> 작성페이지
//게시글 클릭->상세페이지

"use client";

import { useEffect, useState } from 'react';
import { getAllPosts } from '../../lib/board';
import { useRouter } from 'next/navigation';

interface Post {
  id: number; //현재 모든 사용자의 게시글 보여주는 구조.. 게시글 id임
  title: string;
  content: string;
  createdAt: string;
}

const BoardListPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);  // 게시글 목록 상태
  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지 번호
  const [totalPages, setTotalPages] = useState(1);  // 전체 페이지 수
  const router = useRouter();  // 페이지 이동을 위한 Next.js 라우터 사용

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  // 게시글 목록 가져오는 함수
  const fetchPosts = async (page: number) => {
    try {
      const data = await getAllPosts(page);
      setPosts(data.boards);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('게시글 불러오기 실패:', error);
    }
  };

  // 이전 페이지로 이동
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 다음 페이지로 이동
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-xl mx-auto mt-8">
        {/* 게시판 제목 */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">게시판</h1>

          {/* 글쓰기 버튼 */}
          <button
            onClick={() => router.push('/board/write')}  // 글쓰기 페이지로 이동
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            글쓰기
          </button>
        </div>

        {/* 게시글 목록 */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="mb-6 border rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => router.push(`/board/${post.id}`)}  // 게시글 클릭 시 상세 페이지로 이동
          >
            {/* 게시글 제목 및 작성일자 */}
            <div className="bg-gray-300 flex justify-between items-center p-2">
              <span className="font-bold">{post.title}</span>
              <span className="text-sm text-gray-600">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            {/* 게시글 내용 (100자 미리보기) */}
            <div className="bg-gray-700 text-white p-4">
            <p>{post.content.replace(/[#_*`>~\\-]/g, '').substring(0, 100)}...</p> 
            </div>
          </div>
        ))}

        {/* 페이지네이션 */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4 bg-transparent p-2 rounded">
         <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-500 text-white'}`}
          >
            &lt;  {/* 이전 페이지 버튼 */}
          </button>
          <span>{currentPage}</span>  {/* 현재 페이지 번호 표시 */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-500 text-white'}`}
          >
            &gt;  {/* 다음 페이지 버튼 */}
          </button>
        </div>
      </main>
    </div>
  );
};

export default BoardListPage;
