/*----------- Bài tập 1 : Tính tiền lương------------ 

- input:
  + Tiền lương 1 ngày làm việc
  + Số ngày làm 
- xử lý:
  + Tạo biến tinhLuong và gắn sự kiện onclick
  + Tạo biến tienLuongMotNgay lấy value
  + Tạo biến soNgayLam lấy value
  + Tạo biến tinhTienLuong gắn giá trị là 0
  + Công thức tính tổng tiền = Tiền lương 1 ngày * số ngày làm việc
- output:
  + Tổng tiền = ?
*/

document.getElementById('tinhLuong').onclick = function (event) {
    event.preventDefault();
    var tienLuongMotNgay = +document.getElementById('tienLuongMotNgay').value;
    var soNgayLam = +document.getElementById('soNgayLam').value;
    var tinhTienLuong = 0;
    tinhTienLuong = tienLuongMotNgay * soNgayLam;
    document.getElementById('tinhTienLuong').innerHTML = tinhTienLuong.toLocaleString('vi-VN') + ' VND';

}

/*----------- Bài tập 2 : Tính giá trị trung bình------------ 

- input:
  + Số thứ 1 
  + Số thứ 2 
  + Số thứ 3 
  + Số thứ 4 
  + Số thứ 5 
- xử lý:
  + Tạo biến tinhTrungBinh gắn sự kiện onclick
  + Tạo biến number1 lấy value
  + Tạo biến number2 lấy value
  + Tạo biến number3 lấy value
  + Tạo biến number4 lấy value
  + Tạo biến number5 lấy value
  + Tạo biến tinhTrungBinh5So gán gia tri 0
  + Công Thức tính giá trị trung bình = Tổng của 5 số /5
- output:
  + Giá trị trung bình =?
  + Lấy 2 chữ số thập phân toFixe(2)
*/
document.getElementById('tinhTrungBinh').onclick = function (event) {
    event.preventDefault();
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var number4 = +document.getElementById('number4').value;
    var number5 = +document.getElementById('number5').value;
    var tinhTrungBinh5So = 0;
    tinhTrungBinh5So = (number1 + number2 + number3 + number4 + number5)/5;
document.getElementById('tinhTrungBinh5So').innerHTML = tinhTrungBinh5So.toFixed(2);
}

/*----------- Bài tập 3 : Quy đổi tiền------------ 

- input:
  + Số tiền USD
- xử lý:
  + Tạo biến tienquyDoi gán sự kiện onclick
  + Tạo biến soTienUsd lấy value
  + Tạo biến tienViet gán giá trị là 23500
  + Tạo biến tinhTienQuyDoi gan giá tri là 0
  + Công thức tính tiền quy đổi = tiền đô * tiền việt quy đổi
- output:
  + Số tiền quy đổi =?
*/
document.getElementById('tienquyDoi').onclick = function (event) {
    event.preventDefault();
    var soTienUsd = +document.getElementById('soTienUsd').value;
    var tienViet = 23500;
    var tinhTienQuyDoi = 0;
    tinhTienQuyDoi = soTienUsd * tienViet;
    document.getElementById('tinhTienQuyDoi').innerHTML = Intl.NumberFormat('vn-VN').format(tinhTienQuyDoi) + ' VND';
}

/*----------- Bài tập 4 : Tính diện tích, chu vi hình chữ nhật------------ 

- input:
  + Chiều dài 
  + Chiều rộng
- xử lý:
  + Tạo biến tinhKetQua gắn sự kiện onclick
  + Tạo biến chieuDai lấy value
  + Tạo biến chieuRong lấy value
  + Tạo biến dienTich gán giá trị là 0
  + Tạo biến chuVi gán giá trị là 0
  + Công thức tính
     . Chu vi = ( dài + rộng)*2
     . Diện tích = dài*rộng
- output:
  + Chu vi, diện tích =?
*/

document.getElementById('tinhKetQua').onclick = function (event) {
    event.preventDefault();
    var  chieuDai= +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong)*2;
    document.getElementById('dienTich').innerHTML = 'Diện tích: '+ dienTich;
    document.getElementById('chuVi').innerHTML = '; Chu vi: ' + chuVi;

}

/*----------- Bài tập 5 : Tính tổng 2 ký số------------ 


- input:
   + number = n (n là số nguyên dương)
- xử lý:
  + Tạo biến tinhTong gắn sự kiện onclick
  + Tạo biến number lấy value
  + Tạo biến number1 = Tách lấy hàng chục => number/10
  + Tạo biến number2 = Tách lấy hàng đơn vị => number % 10  
  + Tạo biến ketQua gán giá trị 0
  + Công thức tính:  Tổng = hàng chục + hàng đơn vị
- output:
  + Tổng =?
*/
document.getElementById('tinhTong').onclick = function (event) {
    event.preventDefault();
    var  number= +document.getElementById('number').value;
    var number1 = Math.floor(number/10) ;
    var number2 = number%10;
    var ketQua = 0;
    ketQua = number1 + number2;
    document.getElementById('ketQua').innerHTML = ketQua;
}