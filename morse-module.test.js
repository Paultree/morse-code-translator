
import { splitSentence, splitWord, toOther, translateString } from "./morse-module";

describe('Tests cases for a function that splits a sentence', () => {
    it('can split english sentences into an array of words', () => {
        expect(splitSentence('spaghetti monster', ' ')).toStrictEqual(['SPAGHETTI', 'MONSTER']);
        expect(splitSentence("      spaghetti monster     ", " ")).toStrictEqual(["SPAGHETTI", "MONSTER"]);
        expect(splitSentence('the brown cow went under', ' ')).toStrictEqual(['THE', 'BROWN', 'COW', 'WENT', 'UNDER']);
    });
    it('splits morse sentences into an array of morse words', () => {
        expect(
          splitSentence(
            "... .--. .- --. .... . - - .. / -- --- -. ... - . .-.",
            " / "
          )
        ).toStrictEqual([
          "... .--. .- --. .... . - - ..",
          "-- --- -. ... - . .-.",
        ]);
    });
});

describe('Tests cases for a function that iterates through an array and splits each element into an array of characters', () => {
    it('can split english words into an array of letters', () => {
        expect(splitWord(["SPAGHETTI", "MONSTER"], "")).toStrictEqual([
          ["S", "P", "A", "G", "H", "E", "T", "T", "I"],
          ["M", "O", "N", "S", "T", "E", "R"]
        ]);
    });
    it('can split morse words into an array of morse characters', () => {
        expect(
          splitWord(
            ["... .--. .- --. .... . - - ..", "-- --- -. ... - . .-."],
            " "
          )
        ).toStrictEqual([
          ["...", ".--.", ".-", "--.", "....", ".", "-", "-", ".."],
          ["--", "---", "-.", "...", "-", ".", ".-."]
        ]);
    });
});

describe('Tests cases for a function that translates text from an array', () => {
    it('translates english to morse', () => {
        expect(
          toOther(["S", "P", "A", "G", "H", "E", "T", "T", "I"])
        ).toStrictEqual([
          "...",
          ".--.",
          ".-",
          "--.",
          "....",
          ".",
          "-",
          "-",
          "..",
        ]);
    });
    it('translates morse to english', () => {
        expect(
          toOther(["...", ".--.", ".-", "--.", "....", ".", "-", "-", ".."])
        ).toStrictEqual(["S", "P", "A", "G", "H", "E", "T", "T", "I"]);
    });
});

describe('Tests cases for a function that translates a string to another language', () => {
    it('translates an entire string input to english', () => {
        expect(translateString("SPAGHETTI MONSTER", " ", "", " ", " / ")).toBe(
          "... .--. .- --. .... . - - .. / -- --- -. ... - . .-."
        );
    });
    it('translates an entire string input to morse', () => {
        expect(
          translateString(
            "... .--. .- --. .... . - - .. / -- --- -. ... - . .-.",
            "/",
            " ",
            "",
            " "
          )
        ).toBe("SPAGHETTI MONSTER");
    }) 
})