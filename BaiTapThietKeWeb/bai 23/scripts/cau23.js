  document.getElementById("formTinhLuong").addEventListener("submit", function (event) {
            event.preventDefault();

            const luong = Number(document.getElementById("luong").value);
            const heSo = Number(document.getElementById("heSo").value);
            const luongThang = luong * heSo;

            document.getElementById("ketQua").textContent = luongThang;
        });