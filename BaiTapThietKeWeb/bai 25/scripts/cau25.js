        function tinhTien() {
            const danhSachMon = document.getElementById("danhSachMon");
            const tongTienHienThi = document.getElementById("tongTien");
            const cacMon = [
                ...document.getElementById("thucAn").selectedOptions,
                ...document.getElementById("nuocUong").selectedOptions
            ];

            danhSachMon.innerHTML = "";
            let tongTien = 0;

            cacMon.forEach(function (mon) {
                const gia = Number(mon.value);
                tongTien += gia;

                const dong = document.createElement("tr");
                dong.innerHTML = `
                    <td>${mon.text}</td>
                    <td>${gia.toLocaleString("vi-VN")} đồng</td>
                `;
                danhSachMon.appendChild(dong);
            });

            const thoiDiem = document.querySelector('input[name="thoiDiem"]:checked').value;
            if (thoiDiem === "dem") {
                tongTien *= 1.1;
            }

            tongTienHienThi.textContent = `${tongTien.toLocaleString("vi-VN")} đồng`;
        }