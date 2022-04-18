import Pagination from "./Pagination";
import PostTitleBox from "./PostTitleBox";

const PostList = () => {
  const list = Array(50)
    .fill("")
    .map((v, i) => ({
      title: `This is test post title of post ${i}`,
      shortContent:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facere a itaque corrupti similique eum natus! Ut temporibus tempora ducimus saepe non, ullam vel illo consequuntur, itaque in, possimus porro.",
    }));

  return (
    <div className="block">
      {list.map((v, i) => (
        <PostTitleBox
          key={i}
          title={v.title}
          shortContent={v.shortContent}
          id={i}
          date={new Date().toUTCString()}
        ></PostTitleBox>
      ))}
      <Pagination
        currentIndex={50}
        totalPage={500}
        onPaginate={function (index: number): void {
          console.log(index);
        }}
      />
      <div className="mt-4"></div>
    </div>
  );
};

export default PostList;
