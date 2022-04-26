const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService")

const explorer1 = {name: "Explorer1", score: 1}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer1))


const explorer15 = {name: "Explorer15", score: 15}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer15))
//console.log(ExplorerService.filterByMission(explorers, "node"))

console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"))
//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"))