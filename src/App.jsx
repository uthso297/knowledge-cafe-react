import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsread = (id,time) => {
    setReadingTime(readingTime + time);

    // console.log('remove bookmarks id',id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>

      <div className='md:flex max-w-5xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsread={handleMarkAsread}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
