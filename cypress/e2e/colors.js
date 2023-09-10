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
