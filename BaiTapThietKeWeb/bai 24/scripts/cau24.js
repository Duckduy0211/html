document.getElementById("formNgay").addEventListener("submit", function (event) {
            event.preventDefault();

            const ngay = Number(document.getElementById("ngay").value);
            const thang = Number(document.getElementById("thang").value);
            const nam = Number(document.getElementById("nam").value);
            const ketQua = document.getElementById("ketQua");

            const ngayCanKiemTra = new Date(nam, thang - 1, ngay);

            if (
                ngay < 1 || thang < 1 || thang > 12 || nam < 1 ||
                ngayCanKiemTra.getFullYear() !== nam ||
                ngayCanKiemTra.getMonth() !== thang - 1 ||
                ngayCanKiemTra.getDate() !== ngay
            ) {
                ketQua.textContent = "Ngày, tháng hoặc năm không hợp lệ.";
                return;
            }

            const tenThu = [
                "Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4",
                "Thứ 5", "Thứ 6", "Thứ 7"
            ];

            ketQua.textContent =
                `${tenThu[ngayCanKiemTra.getDay()]} Ngày ${ngay} tháng ${thang} năm ${nam}`;
        });