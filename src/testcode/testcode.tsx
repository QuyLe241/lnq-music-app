// import {
//   saveLikedSongToLocal,
//   getLikedSongsFromLocal,
//   removeLikedSongFromLocal,
// } from "../../localStorage/dataLocal";
// import HeartFullIcon from "../Components/Icon/HeartFullIcon";

// const [likedSongs, setLikedSongs] = useState<number[]>([]);
// const handleLikeClick = (songId: number) => {
//   if (likedSongs.includes(songId)) {
//     removeLikedSongFromLocal(songId);
//     setLikedSongs(likedSongs.filter((id) => id !== songId));
//   } else {
//     saveLikedSongToLocal(songId);
//     setLikedSongs([...likedSongs, songId]);
//   }
// };

// useEffect(() => {
//   const likedSongsFromLocal = getLikedSongsFromLocal();
//   setLikedSongs(likedSongsFromLocal);

// }, []);

// <button
//   className="flex items-center btn_like_song"
//   onClick={() => handleLikeClick(item.id)}
// >
//   {likedSongs.includes(item.id) ? (
//     <HeartFullIcon
//       width="20px"
//       height="20px"
//       fill="#9b4de0"
//       classname="btn_icon"
//     />
//   ) : (
//     <HeartIcon width="20px" height="20px" fill="white" classname="btn_icon" />
//   )}
// </button>;
