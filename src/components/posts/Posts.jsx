import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Sarah Manny",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Strengthening prevention implementation and evaluation across California | #PreventionAcrossCA",
      img: "https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvbWVzdGljJTIwdmlvbGVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Nora Smith",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/8090136/pexels-photo-8090136.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Strengthening prevention implementation and evaluation across California | #PreventionAcrossCA",
    },
    {
      id: 3,
      name: "Jamie Len",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/4382484/pexels-photo-4382484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Strengthening prevention implementation and evaluation across California | #PreventionAcrossCA",
    },
    {
      id: 4,
      name: "Sacha Miller",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/4010484/pexels-photo-4010484.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc: "Strengthening prevention implementation and evaluation across California | #PreventionAcrossCA",
      img: "https://images.unsplash.com/photo-1617236050614-3f19e20158d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9tZXN0aWMlMjB2aW9sZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
