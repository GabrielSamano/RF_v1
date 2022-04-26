const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para ExplorerService", () =>{
    test("1 Calcular todos los explorers en una mission", () =>{
        const explorers = [{mission: "node"}];
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission.length).toBe(1);
    });
    test("2 Cantidad de explorers en la mission", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode.length).not.toBeUndefined()
    });
    test("3 Usernames de los explorers", () =>{
        const explorers = [{mission: "node"}];
        const explorersInNodeToGetUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersInNodeToGetUsernames.length).not.toBeUndefined()
    });
});