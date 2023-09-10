describe("Pokémon API Tests", () => {
    it("should confirm Pokémon number 812 is Rillaboom", () => {
        cy.request({
          method: "GET",
          url: "https://pokeapi.co/api/v2/pokemon/812/",
          headers: {
            accept: "application/json",
          },
          qs: {},
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(812);
            expect(response.body.height).to.eq(21);
            expect(response.body.name).to.eq("rillaboom");
        });
      });
  
  it("should confirm that the 5th generation is set in Unova with two version groups", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/generation/5/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
        expect(response.status).to.eq(200);
      expect(response.body.main_region.name).to.eq("unova");
      expect(response.body.version_groups).to.have.length(2);
    });
  });
  it("should search for all Pokémon in the Kanto Dex", () => {
    cy.request({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokedex/kanto/",
      headers: {
        accept: "application/json",
      },
      qs: {},
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.pokemon_entries).to.have.length(151);
    });
  });
  
});
