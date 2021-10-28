import React, { useEffect, useState } from 'react';
import data from '../mock/data.json';
import Header from './Header';
import Post from './Post';
import Pagination from './Pagination';
import Categories from './Categories';
const List = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState(data.posts);

  const [loading, setLoading] = useState(false);

  const [currentpage, setCuurentPage] = useState(1);
  const [postsperpage] = useState(4);

  // Get Current Posts

  const IndexOfLastPost = currentpage * postsperpage;
  const IndexOfFirstPost = IndexOfLastPost - postsperpage;
  const CurrentPost = posts.slice(IndexOfFirstPost, IndexOfLastPost);

  // This function filter the posts according to categoryName
  const filterData = (categoryName) => {
    try {
      let filteredCatgoriesPosts = [];
      allPosts.filter((element) =>
        element.categories.filter((category) => {
          if (category.name === categoryName) {
            filteredCatgoriesPosts.push(element);
          }
          return filteredCatgoriesPosts;
        })
      );
      // Here we are setting the filtered posts bt categoryName
      setPosts(filteredCatgoriesPosts);
    } catch (error) {
      alert(error);
    }
  };

  // Here in useEffect we are setting the allposts data in state
  useEffect(() => {
    function fetchData() {
      setLoading(true);
      setAllPosts(data.posts);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Set The page Number
  const Paginate = (number) => {
    setCuurentPage(number);
  };

  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <Header />

      {/* <!-- Content --> */}
      <div className="content clearfix">
        {/* <!-- Main Content --> */}
        <main className="main-content">
          <h1 className="recent-post-title">Recent Posts</h1>
          <Post posts={CurrentPost} loading={loading} />
          <Pagination
            postsperpage={postsperpage}
            totalPosts={posts.length}
            Paginate={Paginate}
          />
        </main>
        {/* <!-- // Main Content --> */}

        <div className="sidebar">
          <div className="section topics">
            <h2 className="section-title">Filter By Categories</h2>
            <Categories filterData={filterData} />
          </div>
        </div>
      </div>
      {/* <!-- // Content --> */}
    </>
  );
};

export default List;
