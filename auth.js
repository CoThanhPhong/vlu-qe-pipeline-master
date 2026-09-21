function login(username, password) {
  // Tài khoản hợp lệ
  if (username === "admin" && password === "123") {
    return true;
  }

  // Tài khoản bị khóa
  if (username === "locked") {
    throw new Error("Account is locked");
  }

  // Kiểm tra dữ liệu đầu vào
  if (!username || username.trim() === "") {
    throw new Error("Username is required");
  }

  if (password === undefined || password === null || password === "") {
    throw new Error("Password is required");
  }

  // Mật khẩu chứa ký tự đặc biệt
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    throw new Error("Password contains special characters");
  }

  // Sai mật khẩu
  throw new Error("Invalid username or password");
}

module.exports = { login };
