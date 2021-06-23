import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    
    const [blogs, setBlogs] = useState([]);
    const [isPending, setIsPending] =useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=> id !== blog.id);
        setBlogs(newBlogs);
    }
    //const persBlogs = blogs.filter(blog=>blog.author === 'yoshi');

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
    }, []);

    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
           {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />            
           /*persBlogs.length > 0 && 
           <BlogList blogs={persBlogs} title="New Person's Blog" handleDelete={handleDelete} />*/
           }
        </div>
     );
}
 
export default Home;