// Thao tác với JSON
var student_string = '{"name" : "Nguyen Van Cuong", "age" : "26"}';
var student_obj = JSON.parse(student_string);
console.log('--OBJECT--');
console.log(student_obj);
console.log('--STRING--');
console.log(JSON.stringify(student_obj));

// Master dùng stringify và parse
var data = {
  name: 'Marcus',
  passion: 'Future Studio',
  likes: [{
    tag: 'Node.js',
    level: 10
  }],
  today: new Date(),
  func: function () {}
}
// JSON.stringify chuyển 1 kiểu object thành json string. Trường value nó nhận đa số các kiểu dữ liệu đều đc nhưng 
// có 1 số kiểu mà json k nhận làm giá trị thì phải chuyển thành chuỗi trước như kiểu function, xong muốn parse lại
// ra function phải dùng Function constructor
data.func = data.func.toString();
console.log(JSON.stringify(data, null, 2));

console.log(JSON.stringify(data, (key, value) => {
  if (key === "name")
    return value + " nè!";
  return value;
}), 2);
// Đối số 2 của stringify là 1 hàm số nhận key, value return giá trị mới của value
// Nếu truyền null sẽ bỏ qua, nếu nhận 1 object lỗi như lặp vòng, infinity, null thì sẽ trả ra null(optional)

var object = {};
object.prop = object; // VD 1 lỗi object lặp vòng
// Đối số 3 là spacer, là khoảng cách giữa các thành phần trong json, nếu nhỏ hơn 1 or k truyền thì sẽ k có kc, nếu 
// lớn hơn 10 thì set max kc vẫn là 10. Có params 3 thì sẽ tự xuống dòng và có kc, k có 3 thì k xuống dòng luôn

const obj = {
  a: 1,
  b: 2,
  c: 4,
  d: {
    e: 4
  }
};
console.log(JSON.stringify(obj, function boTenHamDuoc(key, val) {
  if (typeof val === 'number')
    return val + 1;
  return val;
}));
// Kể cả các thứ lồng bên trong như e lồng trong d nhưng val là number cx bị ảnh hưởng, nó gọi recursive
// Có thể đặt tên hàm như này or bỏ tên hàm or dùng arrow func

// JSON.parse(value, reviver); với 2 là 1 hàm như replacer đối số 2 của stringify bên trên