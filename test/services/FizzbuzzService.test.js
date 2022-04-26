const FizzbuzzService = require("./../../lib/services/FizzbuzzService")

describe("Test para FizzbuzzService", () =>{
    test("1 Obtener los tricks adecuados o el score", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({"name": "Explorer1", "score": 1, "trick": 1});
    });
    test("2 Obtener los tricks de Fizz", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({"name": "Explorer3", "score": 3, "trick": "FIZZ"});
    });
    test("3 Obtener los tricks Buzz", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({"name": "Explorer5", "score": 5, "trick": "BUZZ"});
    });
    test("4 Obtener los tricks de FizzBuzz", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({"name": "Explorer15", "score": 15, "trick": "FIZZBUZZ"});
    });
});