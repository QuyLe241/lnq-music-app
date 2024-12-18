// // Hàm lưu dữ liệu xuống local storage
// export const saveLikedSongToLocal = (songId: number) => {
//   // Lấy danh sách các bài hát đã like từ local storage
//   const likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");

//   // Kiểm tra xem bài hát đã tồn tại trong danh sách chưa
//   if (!likedSongs.includes(songId)) {
//     // Thêm bài hát vào danh sách
//     likedSongs.push(songId);
//     // Lưu lại danh sách vào local storage
//     localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
//   }
// };

// // Hàm xóa dữ liệu từ local storage
// export const removeLikedSongFromLocal = (songId: number) => {
//   // Lấy danh sách các bài hát đã like từ local storage
//   let likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");

//   // Loại bỏ bài hát khỏi danh sách
//   likedSongs = likedSongs.filter((id: number) => id !== songId);

//   // Lưu lại danh sách vào local storage
//   localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
// };

// // Hàm lấy dữ liệu từ local storage
// export const getLikedSongsFromLocal = (): number[] => {
//   // Lấy danh sách các bài hát đã like từ local storage
//   const likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");
//   return likedSongs;
// };

// Hàm lưu dữ liệu xuống local storage
export const saveLikedSongToLocal = (songId: number) => {
  const likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");
  if (!likedSongs.includes(songId)) {
    likedSongs.push(songId);
    localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
  }
};

// Hàm xóa dữ liệu từ local storage
export const removeLikedSongFromLocal = (songId: number) => {
  let likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");
  likedSongs = likedSongs.filter((id: number) => id !== songId);
  localStorage.setItem("likedSongs", JSON.stringify(likedSongs));
};

// Hàm lấy dữ liệu từ local storage
export const getLikedSongsFromLocal = (): number[] => {
  const likedSongs = JSON.parse(localStorage.getItem("likedSongs") || "[]");
  return likedSongs;
};
