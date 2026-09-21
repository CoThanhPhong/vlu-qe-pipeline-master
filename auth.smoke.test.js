const { login } = require("./auth");

describe("Smoke Test - Login", () => {
  test("đăng nhập đúng với admin/123 trả về true", () => {
    expect(login("admin", "123")).toBe(true);
  });
});
