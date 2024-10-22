import PropTypes from 'prop-types';
import { CiBookmarkCheck } from "react-icons/ci";

const Blog = ({ blog , handleAddToBookmark , handleMarkAsread}) => {
    console.log(blog);
    const {id, title, cover, author, author_img, posted_date ,reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`cover picture of id: ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='rounded-[50%] w-[40px] h-[40px]' src={author_img} alt="" />
                    <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} minute read</span>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-red-600 text-2xl'><CiBookmarkCheck /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash , idx) => <span key={idx}><a href=""> {hash} </a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsread(id,reading_time)}
            className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsread: PropTypes.func.isRequired
}

export default Blog;