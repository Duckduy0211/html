        function tinhCanChi() {
            const giaTriNam = document.getElementById("namDuongLich").value.trim();
            const ketQua = document.getElementById("namAmLich");
            const thongBao = document.getElementById("thongBao");

            if (!/^\d+$/.test(giaTriNam)) {
                ketQua.value = "";
                thongBao.textContent = "Vui lòng nhập năm là số nguyên dương.";
                return;
            }

            const nam = Number(giaTriNam);

            if (!Number.isSafeInteger(nam) || nam < 1 || nam > 9999) {
                ketQua.value = "";
                thongBao.textContent = "Năm phải nằm trong khoảng từ 1 đến 9999.";
                return;
            }

            const can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu",
                         "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
            const chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ",
                         "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

            const chiSoCan = ((nam - 4) % 10 + 10) % 10;
            const chiSoChi = ((nam - 4) % 12 + 12) % 12;

            ketQua.value = `${can[chiSoCan]} ${chi[chiSoChi]}`;
            thongBao.textContent = "";
        }

        tinhCanChi();