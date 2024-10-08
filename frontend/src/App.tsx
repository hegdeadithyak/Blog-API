import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup';
import { Mainpage } from './pages/Mainpage';
import { NewBlogs } from './pages/NewBlogs';
import {AuthorBlogs} from './pages/AuthorBlog';
import { MyBlogs } from './pages/Myblogs';

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Mainpage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/newblog' element={<NewBlogs />} />
            <Route path='/author-blogs/:author' element={<AuthorBlogs />} />
            <Route path='/myblogs' element={<MyBlogs />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App
