import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { API } from "../../service/api";
import { RxCross2 } from "react-icons/rx";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
  margin: 0px;
  width: 50%;
  background: #6495ed;
  color: #fff;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const recommendedTopics = [
  { id: 1, topic: "Development" },
  { id: 2, topic: "React" },
  { id: 3, topic: "Interview" },
  { id: 4, topic: "Coding" },
  { id: 5, topic: "Tech" },
  { id: 6, topic: "Faishon" },
  { id: 7, topic: "Web" },
];

const Categories = () => {
  const [posts, getPosts] = useState([]);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const addEllipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({ category: category || "" });
      if (response.isSuccess) {
        const firstThreePosts = response.data.slice(0, 3);
        getPosts(firstThreePosts);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div
      style={{
        width: "100%",
        border: "1px solid red",
        padding: "3rem 2rem 0 3rem",
      }}
    >
      <Link
        to={`/create?category=${category || ""}`}
        style={{ textDecoration: "none" }}
      >
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      <div className="flex flex-col pt-4">
        <div>
          <p className="font-bold">Most Popular</p>
          {posts.map((post) => (
            <div className="flex flex-col pt-4 mb-2">
              <div className="flex flex-row items-center">
                <img
                  src={
                    "https://lh3.googleusercontent.com/a/ACg8ocLFsilZP3Xj-5H2vgLPkaetKtyAM2uQihDHhR2P1bzuCKLaLICD=s432-c-no"
                  }
                  className="w-5 h-5 rounded-full mr-2"
                  alt="profile-pic"
                />
                <p className="font-semibold -translate-y-0.5">{post.username}</p>
              </div>
              <p className="mt-0 font-bold text-lg leading-5">
                {addEllipsis(post.title, 60)}
              </p>
            </div>
          ))}
          <a
            href="https://google.com"
            style={{ color: "green", fontSize: "14px", fontWeight: 600 }}
          >
            See Full List
          </a>
        </div>

        <div className="mt-6 p-4" style={{ background: "#03c2fc" }}>
          <RxCross2 className="translate-x-60" />
          <p className="text-xl font-semibold">Writing on Dr's Blog</p>
          <p className="font-semibold mt-2">New Writer FAQ</p>
          <p className="font-semibold mt-2">Expert Writing Advice</p>
          <p className="font-semibold mt-2">Grow your readership</p>

          <button
            className="mt-4 px-4 py-2 rounded-full text-center justify-center items-center"
            style={{ background: "black", color: "white" }}
          >
            Start Writing
          </button>
        </div>

        <div className="mt-6">
          <p className="font-semibold">Recommended topics</p>
         
         <div className="mt-2 -translate-x-2">
          {recommendedTopics.map(item=>(
            <button
            className="m-1 px-4 py-2 rounded-full text-center justify-center items-center"
            style={{ background: "#F2F2F2" }}
          >
            {item.topic}
          </button>
          ))}
          </div>

        <div className="mt-4">
          <a
            href="https://google.com"
            style={{ color: "green", fontSize: "14px", fontWeight: 600 }}
          >
            See more topics
          </a>
          </div>
        </div>

        <div className="mt-8">
            <p className="font-semibold">Who to follow</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
