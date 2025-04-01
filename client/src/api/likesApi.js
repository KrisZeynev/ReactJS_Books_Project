// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../contexts/UserContext";

// const baseLikesUrl = "http://localhost:3030/data/bookLikes";

// export const useAddLike = (bookId) => {
//   const [like, setLike] = useState(false);
//   const { accessToken } = useContext(UserContext);

//   useEffect(() => {
//     const isLikedFunc = async () => {
//       try {
//         await fetch(baseLikesUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "X-Authorization": accessToken,
//           },
//           body: JSON.stringify({
//             bookId,
//             isLiked: true,
//             isDisliked: false,
//           }),
//         });

//         setLike(true);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     isLikedFunc();
//   }, [bookId]);

//   return like;
// };
