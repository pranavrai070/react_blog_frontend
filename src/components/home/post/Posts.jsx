import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

// import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid key={post._id} item lg={12} sm={12} xs={12} style={{marginInline:"3rem"}}>
                        
                            <Post post={post} />
                        
                    </Grid>
                )) : <Box  style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        <p className="text-3xl text-white">No data is available for selected category</p>
                    </Box>
            }
        </>
    )
}

export default Posts;