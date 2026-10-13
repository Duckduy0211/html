        <p id="ketQua"></p>
        function tinhDienTichTamGiac(a, b, c) {
            const nuaChuVi = (a + b + c) / 2;
            const dienTich = Math.sqrt(
                nuaChuVi * (nuaChuVi - a) * (nuaChuVi - b) * (nuaChuVi - c)
            );
            return dienTich;
        }
        var a = 5;
        var b = 6;
        var c = 7;
        var dienTich = tinhDienTichTamGiac(a, b, c);
        console.log("Diện tích tam giác:", dienTich);
        window.alert("Diện tích tam giác: " + dienTich);
        document.getElementById("ketQua").innerHTML = "Diện tích tam giác: " + dienTich;