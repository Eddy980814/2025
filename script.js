// 設定內部人員帳號密碼
const staffAccounts = [
    { id: "1", password: "1" },
    { id: "staff1", password: "abcdef" }
];

// 用戶資料（JSON 模擬）
const users = [
    { id: "1001", name: "張三", phone: "0912345678", balance: 5000 },
    { id: "1002", name: "李四", phone: "0987654321", balance: 2000 },
    { id: "1003", name: "王五", phone: "0977111222", balance: 3000 }
];

// 登入功能
function login() {
    const staffId = document.getElementById("staffId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const staff = staffAccounts.find(user => user.id === staffId && user.password === password);

    if (staff) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "query.html"; // 登入成功跳轉
    } else {
        errorMessage.innerText = "帳號或密碼錯誤";
    }
}

// 查詢用戶資料
function searchUser() {
    const userId = document.getElementById("userId").value;
    const userResult = document.getElementById("userResult");

    const user = users.find(user => user.id === userId);

    if (user) {
        userResult.innerHTML = `
            <h3>用戶資料</h3>
            <p><strong>用戶 ID:</strong> ${user.id}</p>
            <p><strong>姓名:</strong> ${user.name}</p>
            <p><strong>電話:</strong> ${user.phone}</p>
            <p><strong>餘額:</strong> $${user.balance}</p>
        `;
    } else {
        userResult.innerHTML = `<p style="color:red;">查無此用戶</p>`;
    }
}

// 檢查是否已登入
function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "index.html"; // 未登入則返回登入頁面
    }
}

// 登出功能
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html"; // 返回登入頁
}

// 若在查詢頁面則執行登入檢查
if (window.location.pathname.includes("query.html")) {
    checkLogin();
}
