// Mảng và object và hàm

// Bản chất gán = là gán địa chỉ
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr1.push(4);
console.log(arr2);

// nhưng khi gán arr=[] thì éo
arr1 = [];
console.log(arr1, arr2);
// NN là vì nó gán = [] nó là tạo 1 instance mới cho arr đó. Như kiểu gán địa chỉ trong C++ thì đây, arr1 gán 
// địa chỉ sang NULL chứ arr2 vẫn trỏ vào địa chỉ cũ. Trừ khi thay đổi giá trị mới ảnh hưởng

//Tương tự object cũng v
var obj1 = { number: 1, text: "Hello" };
var obj2 = obj1;
obj1["additionalProps"] = "more";
console.log(obj2);

obj1 = {};
console.log(obj1, obj2);

//Cách gán rỗng cho arr chuẩn
var arr3 = [1, 2, 3];
var arr4 = arr3;
arr4.length = 0;
console.log(arr3, arr4);
//or
var arr5 = [1, 2, 3];
var arr6 = arr5;
// arr5.splice(0, arr5.length);
arr6.splice(0, arr5.length);
console.log(arr5, arr6);
// Thực chất nếu mảng chỉ có 1 reference thì gán = [] là xong thì mảng trong bộ nhớ k còn reference nào trỏ tới sẽ bị
// GC xóa

//clear object
var obj3 = { number: 1, text: "Hello" };
var obj4 = obj1;
for (const prop of Object.getOwnPropertyNames(obj3)) {//lấy key đó
    delete obj3[prop];
}
console.log(obj3, obj4);

// => nch là gán array empty thì dùng length = 0 là chuẩn nhất. Còn object thì dùng vòng for các key nhé