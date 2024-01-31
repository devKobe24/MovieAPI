const express = require("express");
require("dotenv").config();
const app = express();
const uuidAPIKey = require("uuid-apikey");

const key = {
  apiKey: process.env.apiKey,
  uuid: process.env.uuid,
};

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("server start: localhost port", process.env.PORT);
});

app.get('/api/movie/boxOffice/', (req, res) => {
  // 쿼리 스트링에 접근
  const apiKey = req.query.apiKey
  const orderBy = req.query.orderBy

  if (!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.apiKey)) {
    res.send("apiKey is not valid.")
  } else {
    if (orderBy == 'month') {
      let data = [
        {
          movieRank: 1,
          movieTitle: "위시",
          releaseDate: "2024-01-03",
          attendanceNumber: 1341451,
          totalAttendanceNumber: 1342533,
        },
        {
          movieRank: 2,
          movieTitle: "외계+인 2부",
          releaseDate: "2024-01-10",
          attendanceNumber: 1319080,
          totalAttendanceNumber: 1319080,
        },
        {
          movieRank: 3,
          movieTitle: "서울의 봄",
          releaseDate: "2023-11-22",
          attendanceNumber: 1190725,
          totalAttendanceNumber: 13045498,
        },
        {
          movieRank: 4,
          movieTitle: "노량: 죽음의 바다",
          releaseDate: "2023-12-20",
          attendanceNumber: 1115346,
          totalAttendanceNumber: 4553155,
        },
        {
          movieRank: 5,
          movieTitle: "시민덕희",
          releaseDate: "2024-01-24",
          attendanceNumber: 551337,
          totalAttendanceNumber: 551337,
        },
        {
          movieRank: 6,
          movieTitle:
            "신차원! 짱구는 못말려 더 무비 초능력 대결전 ~날아라 수제김밥~",
          releaseDate: "2023-12-22",
          attendanceNumber: 341099,
          totalAttendanceNumber: 909355,
        },
        {
          movieRank: 7,
          movieTitle: "인투 더 월드",
          releaseDate: "2024-01-10",
          attendanceNumber: 304408,
          totalAttendanceNumber: 310223,
        },
        {
          movieRank: 8,
          movieTitle: "아쿠아맨과 로스트 킹덤",
          releaseDate: "2023-12-20",
          attendanceNumber: 154852,
          totalAttendanceNumber: 877825,
        },
        {
          movieRank: 9,
          movieTitle: "괴물",
          releaseDate: "2023-11-29",
          attendanceNumber: 101626,
          totalAttendanceNumber: 489053,
        },
        {
          movieRank: 10,
          movieTitle: "길위에 김대중",
          releaseDate: "2024-01-10",
          attendanceNumber: 98593,
          totalAttendanceNumber: 111974,
        },
      ];
      res.send(data);
    } else {
      req.send("orderBy type is not matched")
    };
  };
});



// app.get("/api/movie/boxOffice/:apiKey/:type", async (req, res) => {
//   let { apiKey, type } = req.params;

//   // API 키가 아니거나 할당된 키가 아닐 경우 에러 메시지 띄우기
//   if (!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.uuid)) {
//     res.send("apikey is not valid.");
//   } else {
//     // 그렇지 않으면, 즉 검증된 API 키라면 다음 데이터 반환.
//     if (type == "month") {
//       let data = [
//         {
//           movieRank: 1,
//           movieTitle: "위시",
//           releaseDate: "2024-01-03",
//           attendanceNumber: 1341451,
//           totalAttendanceNumber: 1342533,
//         },
//         {
//           movieRank: 2,
//           movieTitle: "외계+인 2부",
//           releaseDate: "2024-01-10",
//           attendanceNumber: 1319080,
//           totalAttendanceNumber: 1319080,
//         },
//         {
//           movieRank: 3,
//           movieTitle: "서울의 봄",
//           releaseDate: "2023-11-22",
//           attendanceNumber: 1190725,
//           totalAttendanceNumber: 13045498,
//         },
//         {
//           movieRank: 4,
//           movieTitle: "노량: 죽음의 바다",
//           releaseDate: "2023-12-20",
//           attendanceNumber: 1115346,
//           totalAttendanceNumber: 4553155,
//         },
//         {
//           movieRank: 5,
//           movieTitle: "시민덕희",
//           releaseDate: "2024-01-24",
//           attendanceNumber: 551337,
//           totalAttendanceNumber: 551337,
//         },
//         {
//           movieRank: 6,
//           movieTitle:
//             "신차원! 짱구는 못말려 더 무비 초능력 대결전 ~날아라 수제김밥~",
//           releaseDate: "2023-12-22",
//           attendanceNumber: 341099,
//           totalAttendanceNumber: 909355,
//         },
//         {
//           movieRank: 7,
//           movieTitle: "인투 더 월드",
//           releaseDate: "2024-01-10",
//           attendanceNumber: 304408,
//           totalAttendanceNumber: 310223,
//         },
//         {
//           movieRank: 8,
//           movieTitle: "아쿠아맨과 로스트 킹덤",
//           releaseDate: "2023-12-20",
//           attendanceNumber: 154852,
//           totalAttendanceNumber: 877825,
//         },
//         {
//           movieRank: 9,
//           movieTitle: "괴물",
//           releaseDate: "2023-11-29",
//           attendanceNumber: 101626,
//           totalAttendanceNumber: 489053,
//         },
//         {
//           movieRank: 10,
//           movieTitle: "길위에 김대중",
//           releaseDate: "2024-01-10",
//           attendanceNumber: 98593,
//           totalAttendanceNumber: 111974,
//         },
//       ];
//       res.send(data);
//     } else {
//       res.send(data);
//     }
//   }
// });
