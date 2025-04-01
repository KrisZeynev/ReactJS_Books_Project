// import { useState } from "react";

// const baseLikesUrl = "http://localhost:3030/data/bookLikes";

// export const useAddLike = (bookId) => {
//   const [like, setLike] = useState(false);

//   const isLiked = async () => {
//     try {
//       await fetch(baseLikesUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-Authorization": accessToken,
//         },
//         body: JSON.stringify({
//           bookId,
//         }),
//       });

//       setLike(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   isLiked();

//   return like;
// };
