import { Route, Routes, useNavigate } from 'react-router-dom';
import Page from './Page.tsx';
import Project from './Project.tsx';
import Qna from './Qna.tsx';
import Layout from './Layout.tsx';
import Dashboard from './Dashboard.tsx';
import { useEffect } from 'react';

export default function Home() {
  const navigate = useNavigate();

  // Dashboard 페이지가 먼저 렌더링되도록 설정
  useEffect(() => {
    navigate('/dashboard');
  }, []);
  return (
    <div>
      <Layout>  
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}/> 
          <Route path="/page" element={<Page />}/> 
          <Route path="/project" element={<Project />}/> 
          <Route path="/qna" element={<Qna />}/> 
        </Routes>
      </Layout>
    </div>
  );
}