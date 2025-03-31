import { useEffect, useState } from "react";

const baseCommentsUrl = "http://localhost:3030/data/bookComments";

export const useBookComments = (id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchComments = async () => {
      try {
        const searchParams = new URLSearchParams({
          where: `bookId="${id}"`,
        });

        const response = await fetch(
          `${baseCommentsUrl}?${searchParams.toString()}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }

        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [id]);

  return comments;
};
