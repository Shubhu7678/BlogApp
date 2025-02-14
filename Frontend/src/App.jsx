import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Profile from './components/core/Dashboard/Profile/Profile'
import OpenRoute from './components/core/Auth/OpenRoute'
import PrivateRoute from './components/core/Auth/PrivateRoute'
import ErrorPage from './pages/ErrorPage'
import AddBlog from './components/core/Dashboard/AddBlog/AddBlog'
import Categories from './components/core/Dashboard/Category/Categories'
import AddCategory from './components/core/Dashboard/Category/AddCategory'
import UpdateCategory from './components/core/Dashboard/Category/UpdateCategory';
import MyBlogs from './components/core/Dashboard/MyBlogs/myBlogs'
import EditBlog from './components/core/Dashboard/AddBlog/EditBlog'
import Setting from './components/core/Dashboard/Setting/Setting'
import Blog from './components/core/BlogsPage/Blog'


function App() {

  return (
    <>
      <div className="w-full">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/blog/:blogId"  element={<Blog/>} />
          <Route path="/login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          } />
          <Route path="/signup" element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          } />
          <Route element={
            <Dashboard />
          }>
            <Route path="/dashboard/my-profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />
            <Route path="/dashboard/my-blogs" element={
              <PrivateRoute>
                <MyBlogs />
              </PrivateRoute>
            } />
            <Route path="/dashboard/add-blog" element={
              <PrivateRoute>
                <AddBlog />
              </PrivateRoute>
            } />
            <Route path="/dashboard/edit-blog/:blogId" element={
              <PrivateRoute>
                <EditBlog />
              </PrivateRoute>
            } />
            <Route path='/dashboard/categories' element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            } />
            <Route path='/dashboard/categories/add-category' element={
              <PrivateRoute>
                <AddCategory />
              </PrivateRoute>
            } />
            <Route path='/dashboard/categories/:categoryId' element={
              <PrivateRoute>
                <UpdateCategory />
              </PrivateRoute>
            } />
            <Route path='/dashboard/setting' element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            } />

          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
