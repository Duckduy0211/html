function tinh(phepTinh) {
            const giaTri1 = document.getElementById("soThuNhat").value.trim();
            const giaTri2 = document.getElementById("soThuHai").value.trim();
            const ketQua = document.getElementById("ketQua");

            const so1 = Number(giaTri1);
            const so2 = Number(giaTri2);

            if (giaTri1 === "" || giaTri2 === "" ||
                !Number.isInteger(so1) || !Number.isInteger(so2)) {
                ketQua.textContent = "Vui lòng nhập hai số nguyên hợp lệ.";
                return;
            }

            if (phepTinh === "chia" && so2 === 0) {
                ketQua.textContent = "Không thể chia cho 0.";
                return;
            }

            const ketQuaTinh = phepTinh === "nhan" ? so1 * so2 : so1 / so2;
            ketQua.textContent = "Kết quả: " + ketQuaTinh;
        }