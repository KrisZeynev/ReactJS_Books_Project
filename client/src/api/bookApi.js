import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useSelector } from "react-redux";

const baseUrl = "http://localhost:3030/data/bookCatalog";

// export const useHomeBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const controller = new AbortController();
//     const fetchBooks = async () => {
//       try {
//         const searchParams = new URLSearchParams({
//           sortBy: "_createdOn desc",
//           pageSize: 3,
//         });

//         // const response = await fetch(`${baseUrl}?${searchParams.toString()}`);
//         const response = await fetch(`${baseUrl}?${searchParams.toString()}`, { signal });

//         if (!response.ok) throw new Error("Failed to fetch books");

//         const data = await response.json();
//         setBooks(data);
//       } catch (error) {
//         if (error.name !== "AbortError") {
//           console.error("Fetch error:", error);
//         }
//       }
//     };

//     fetchBooks();
//     return () => controller.abort();
//   }, []);

//   return books;
// };

export const useHomeBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal; 

    const fetchBooks = async () => {
      try {
        const searchParams = new URLSearchParams({
          sortBy: "_createdOn desc",
          pageSize: 3,
        });

        const response = await fetch(`${baseUrl}?${searchParams.toString()}`, { signal });

        if (!response.ok) throw new Error("Failed to fetch books");

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchBooks();

    return () => controller.abort();
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

export const useCatalog = (category, searchTerm) => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    const fetchCatalog = async () => {
      const obj = {
        sortBy: "_createdOn desc",
      };
      if (category && searchTerm) {
        
        obj["where"] = `${category}="${searchTerm}"`;
      }
      try {
        const searchParams = new URLSearchParams(obj);
        const response = await fetch(`${baseUrl}?${searchParams.toString()}`);

        if (!response.ok) {
          throw new Error(`Error fetching catalog: ${response.statusText}`);
        }

        const data = await response.json();
        setCatalog(data);
      } catch (error) {
        console.error("Fetch catalog error:", error);
      }
    };

    fetchCatalog();
  }, [category, searchTerm]);

  return catalog;
};

export const useDeleteBook = (id) => {
  // const { accessToken } = useContext(UserContext);
  const accessToken = useSelector((state) => state.auth.accessToken);
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
  return { deleteBook };
};
