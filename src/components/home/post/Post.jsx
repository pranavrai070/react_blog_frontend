import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";
import moment from "moment";

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  function readingTime(text) {
    const wordsPerMinute = 175;
    const noOfWords = text.split(/\s/g).length;
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return `${readTime} minute read`;
  }

  const originalDateString = post.createdDate;

  // Parse the original date string using moment
  const originalDate = moment(originalDateString);

  // Format the date to "MMM D, YYYY" (e.g., "Mar 1, 2024")
  const formattedDate = originalDate.format("MMM D, YYYY");
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "2px solid #F2F2F2",
        padding: "2rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="flex flex-row gap-1 mb-4 items-center">
        <img
          src={
            "https://lh3.googleusercontent.com/a/ACg8ocLFsilZP3Xj-5H2vgLPkaetKtyAM2uQihDHhR2P1bzuCKLaLICD=s432-c-no"
          }
          className="w-6 rounded-full mr-1 translate-y-1"
          alt="profile-pic"
        />
        <p>{post.username}</p>
        <p
          className="text-center items-center -translate-y-1"
          style={{ color: "#6B6B6B" }}
        >
          .
        </p>
        <p style={{ color: "#6B6B6B" }}>{formattedDate}</p>
      </div>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`details/${post._id}`}
      >
        <div className="flex flex-row gap-20">
          <div className="flex flex-col" style={{ width: "60%" }}>
            <p className="text-xl font-bold">{addEllipsis(post.title, 60)}</p>
            <p>{addEllipsis(post.description, 180)}</p>
          </div>
          <div className="translate-y-2">
            <img className="w-56 h-44 rounded-lg" src={url} alt="post_image" />
          </div>
        </div>
      </Link>

      <div className="flex flex-row justify-between translate-y-6">
        <div className="flex flex-row items-center">
          <p
            className="px-3 py-2 rounded-full text-center justify-center items-center"
            style={{ background: "#F2F2F2" }}
          >
            Development
          </p>
          <p className="translate-x-4" style={{ color: "#6B6B6B" }}>
            {readingTime(post.description)}
          </p>
        </div>

        <div className="flex flex-row mt-1 -translate-x-80 gap-4 items-center">
          <MdOutlineBookmarkAdd
            className="w-6 h-6"
            style={{ color: "#6B6B6B" }}
          />
          <CiCircleMinus className="w-6 h-6" style={{ color: "#6B6B6B" }} />
          <BsThreeDots className="w-6 h-6" style={{ color: "#6B6B6B" }} />
        </div>
      </div>
    </div>
  );
};

export default Post;
