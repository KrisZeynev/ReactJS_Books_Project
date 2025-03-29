import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3030/data/catalog";

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
        const searchParams = new URLSearchParams({
          sortBy: "_createdOn desc",
        });

        const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
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
