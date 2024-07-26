
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostList from './pages/PostList';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className="App">
      <h1>Awesome blog</h1>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/:id/edit' element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
