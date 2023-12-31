/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData()

    return (
        <div>
            <h3 className='mb-4'>Dragon News Home</h3>
            {
                allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Home;