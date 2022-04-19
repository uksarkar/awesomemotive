import { useSelector } from "react-redux";
import IRootStore from "../interfaces/IRootStore";
import Pagination from "./Pagination";
import PostTitleBox from "./PostTitleBox";
import { actions as postListActions } from "../stores/post_list/PostListSlice";
import { useDispatch } from "react-redux";
import PostApi from "../api/PostApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PostList = () => {
  const postListStore = useSelector((state: IRootStore) => state.postListStore);
  const dispatch = useDispatch(),
    location = useLocation(),
    navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageNo = new URLSearchParams(location.search).get("page") || 1;
    setCurrentPage((p) => Number(pageNo));
    dispatch(postListActions.setLoading(true));
    PostApi.getPosts(Number(pageNo))
      .then((r) => {
        if (r) {
          if (r) {
            dispatch(postListActions.setResponse(r));
            window.scrollTo(0, 0);
          }
        }
      })
      .finally(() => {
        dispatch(postListActions.setLoading(false));
      });
  }, [location, dispatch]);

  const paginate = (to: number) => {
    navigate(`/?page=${to}`);
  };

  return (
    <div className="block">
      {postListStore.posts.map((v, i) => (
        <PostTitleBox
          key={v.id}
          title={v.title}
          shortContent={v.content}
          id={v.id}
          date={new Date(v.createdAt).toUTCString()}
        ></PostTitleBox>
      ))}
      <Pagination
        currentIndex={currentPage}
        totalPage={postListStore.totalPage}
        onPaginate={paginate}
      />
      <div className="mt-4"></div>
    </div>
  );
};

export default PostList;
