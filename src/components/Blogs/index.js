import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './BlogsStyle';
import BlogCard from '../Cards/BlogCard';
import { blogs } from '../../data/constants';

const Blogs = ({ openBlogModal, setOpenBlogModal }) => {
  return (
    <Container id="blogs">
      <Wrapper>
        <Title>Blogs</Title>
        <Desc>
          I have written a variety of blogs covering topics from web development to AI advancements. Here are some of my blogs.
        </Desc>
        <CardContainer>
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              blog={blog}
              openBlogModal={openBlogModal}
              setOpenBlogModal={setOpenBlogModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Blogs;
