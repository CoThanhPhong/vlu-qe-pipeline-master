const { login } = require("./auth");

describe("Regression Test - Login", () => {
  test("mật khẩu sai", () => {
    expect(() => login("admin", "wrong")).toThrow(
      "Invalid username or password"
    );
  });

  test("username rỗng", () => {
    expect(() => login("", "123")).toThrow("Username is required");
  });

  test("username chỉ chứa khoảng trắng", () => {
    expect(() => login("   ", "123")).toThrow("Username is required");
  });

  test("mật khẩu rỗng", () => {
    expect(() => login("admin", "")).toThrow("Password is required");
  });

  test("mật khẩu null", () => {
    expect(() => login("admin", null)).toThrow("Password is required");
  });

  test("mật khẩu chứa ký tự đặc biệt", () => {
    expect(() => login("admin", "123@456")).toThrow(
      "Password contains special characters"
    );
  });

  test("tài khoản bị khóa", () => {
    expect(() => login("locked", "123")).toThrow("Account is locked");
  });

  test("username không tồn tại", () => {
    expect(() => login("unknown", "123")).toThrow(
      "Invalid username or password"
    );
  });
});
