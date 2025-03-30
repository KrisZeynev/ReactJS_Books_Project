import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";

const baseUrl = "http://localhost:3030/data/bookCatalog";

export const useHomeBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const searchParams = new URLSearchParams({
          sortBy: "_createdOn desc",
          pageSize: 3,
        });

        const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return books;
};

export const useBook = (id) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${baseUrl}/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  return book;
};

export const useCatalog = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        // const searchParams = new URLSearchParams({
        //   sortBy: "_createdOn desc",
        // });

        // const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
        const response = await fetch(baseUrl);
        const data = await response.json();
        setCatalog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCatalog();
  }, []);

  return catalog;
};

export const useDeleteBook = (id) => {
  const { accessToken } = useContext(UserContext);
  const deleteBook = async () => {
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": accessToken,
        },
      });
      if (!response.ok) {
        throw new Error("Unable to delete the book");
      }
      return await response.json();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return {deleteBook};
};
