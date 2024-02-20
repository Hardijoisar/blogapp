import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from './contexts/AppContext';
import { Routes, Route, useSearchParams, useLoaderData, useLocation } from 'react-router-dom';
import { BlogPage } from './pages/BlogPage';
import { CategoryPage } from './pages/CategoryPage';
import { TagPage } from './pages/TagPage';
import { Home } from './pages/Home';

function App() {
  const {getData} = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const {page} = searchParams.get("page") ?? 1;
  
  useEffect(() => {

    if (location.pathname.includes("tags"))
    {
      const tagValue = location.pathname.split("/").at(-1);
      const val = tagValue.replaceAll("-", " ");
      getData(Number(page), val);
    } 
    else if (location.pathname.includes("categories"))
    {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      getData(Number(page), null, category);
    } 
    else   
    {
      getData(Number(page));
    }
  }, [location.pathname, location.search])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
        <Route path="/tags/:tag" element={<TagPage/>} />
        <Route path="/categories/:category" element={<CategoryPage/>} />
      </Routes>
    </div>
  );
  
}

export default App;
