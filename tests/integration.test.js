const request = require("supertest");

const app = require("../server");

describe("Tests d'integration", () => {
  test("GET /api/add doit retourner 5 pour 2 + 3", async () => {
    const response = await request(app).get("/api/add?a=2&b=3");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(5);
  });

  test("GET /api/soustraction doit retourner 5 pour 7 - 2", async () => {
    const response = await request(app).get("/api/soustraction?a=7&b=2");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(5);
  });

  test("GET /api/multiplication doit retourner 10 pour 5 * 2", async () => {
    const response = await request(app).get("/api/multplication?a=5&b=2");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(10);
  });

  test("GET api/division doit retourner 2 pour 10 / 5", async () => {
    const response = await request(app).get("/api/division?a=10&b=5");
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });


  test('GET api/division doit retourner une erreru si b = 0', async () => { 
    const response = await request(app).get("/api/division?a=10&b=0");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Division par 0 interdite !");
   })
});
