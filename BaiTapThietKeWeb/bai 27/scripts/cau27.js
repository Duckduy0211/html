 const danhSach = document.getElementById("danhSach");

        danhSach.addEventListener("click", function (event) {
            if (event.target.classList.contains("nutXoa")) {
                event.target.closest("tr").remove();
            }
        });

        danhSach.addEventListener("input", function (event) {
            if (
                event.target.classList.contains("soLuong") ||
                event.target.classList.contains("donGia")
            ) {
                const dong = event.target.closest("tr");
                const soLuong = Number(dong.querySelector(".soLuong").value) || 0;
                const donGia = Number(dong.querySelector(".donGia").value) || 0;

                dong.querySelector(".tong").value = soLuong * donGia;
            }
        });