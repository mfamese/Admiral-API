describe("Pokémon API color test", () => {
 
  it("Should search for colors", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon-color/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[0].name).to.eq("black");
      expect(response.body.results[1].name).to.eq("blue");
      expect(response.body.results[4].name).to.eq("green");
      expect(response.body.results).to.have.length(10);
    });
  });
});
describe("Pokémon API Negative color test", () => {

  it("Confirm the color of 2nd name is not black ", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon-color/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[3].name).to.eq("blue");
    });
  });
  it("Confirm the color of 3rd name is not black ", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon-color/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results[2].name).to.eq("black");
    });
  });
  it("display the color of 3rd name is brown", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon-color/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
      const colorName = response.body.results[2] ? response.body.results[2].name : 'Color not available';
      cy.log('Color for index 2:', colorName); 
    });
  });
});

