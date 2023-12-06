describe("Pokémon Berries API Tests", () => {
  const baseUrl = "https://pokeapi.co/api/v2/berry/";
  beforeEach(() => {
    cy.request(baseUrl); 
  });

  it("should fetch and display Cheri Berry information", () => {
    const endpoint = 1;
    cy.request({
      method: "GET",
      url: baseUrl + endpoint,
      headers: {
        accept: "text/html",
        accept: "application/json"
      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.eq("cheri");
      expect(response.body.max_harvest).to.eq(5);
      expect(response.body.growth_time).to.eq(3);
      expect(response.body.item.name).to.eq("cheri-berry");
      expect(response.body.natural_gift_power).to.eq(60);
      expect(response.body.natural_gift_type.name).to.eq("fire");
      expect(response.body.size).to.eq(20);
      expect(response.body.smoothness).to.eq(25);
      expect(response.body.soil_dryness).to.eq(15);
    });
  });

  it("should fetch and display Chesto Berry information", () => {
    const endpoint = 2;
    cy.request({
      method: "GET",
      url: baseUrl + endpoint,
      headers: {
        accept: "text/html",
        accept: "application/json"

      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.eq("chesto");
      expect(response.body.max_harvest).to.eq(5);
      expect(response.body.growth_time).to.eq(3);
      expect(response.body.item.name).to.eq("chesto-berry");
      expect(response.body.natural_gift_power).to.eq(60);
      expect(response.body.natural_gift_type.name).to.eq("water");
      expect(response.body.size).to.eq(80);
      expect(response.body.smoothness).to.eq(25);
      expect(response.body.soil_dryness).to.eq(15);
    });
  });
  it("should fetch and display mago Berry information", () => {
    const endpoint = 13;
    cy.request({
      method: "GET",
      url: baseUrl + endpoint,
      headers: {
        accept: "text/html",
        accept: "application/json"

      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.eq("mago");
      expect(response.body.firmness.name).to.eq("hard");
      expect(response.body.flavors[0].flavor.name).to.eq("spicy");
      expect(response.body.growth_time).to.eq(5);
      expect(response.body.item.name).to.eq("mago-berry");
      expect(response.body.natural_gift_power).to.eq(60);
      expect(response.body.natural_gift_type.name).to.eq("ghost");
      expect(response.body.size).to.eq(126);
      expect(response.body.smoothness).to.eq(25);
      expect(response.body.soil_dryness).to.eq(10);
    });
  });
});
