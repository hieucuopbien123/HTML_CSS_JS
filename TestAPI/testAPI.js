// Query API trong JS thuần
// Dùng fetch của JS được tích hợp sẵn trong browser
async function test() {
    var res = await fetch('https://cavifood.vn/wp-json/wp/v2/posts', {
            method: 'GET'
        })
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                console.log("Mã lỗi: ", response.status);
                //throw Error(response.statusText);
            }
            return response.json();
        })
        .catch((error) => {
            return error;
        });
    console.log(res);
}
test();