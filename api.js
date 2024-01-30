const express = require("express");
const app = express();

const server = app.listen(3000, () => {
  console.log("server start: localhost: 3000");
});

app.get('/api/movie/boxOffice/:type', async (req, res) => {
  let { type } = req.params;

  if (type == "month") {
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
        movieTitle: "신차원! 짱구는 못말려 더 무비 초능력 대결전 ~날아라 수제김밥~",
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
		res.send(data);
	}
});