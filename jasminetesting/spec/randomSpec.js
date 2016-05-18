describe("THe NotesApp ", function()
{

var z = new NotesApplication("Abisoye");

it("author is undefined", function(){
expect(z.author).toBeDefined();
});

it("input is not a number", function(){
  expect(typeof z.author).toBe(typeof "string");
});

  describe("create", function(){
    it("should only be a string", function(){
  expect(z.create("This note is first.")).toBe("created");
});
  });

  describe("search", function(){
    z.create("First time");
    z.create("Second time");
    it("search text should be a string", function(){
  expect(z.search("time")).toBe(true);
  expect(z.search(1)).toBeUndefined();
  expect(z.search()).toBeUndefined();
});
  });

  describe("deletenote", function(){
    z.create("First time");
    z.create("Second time");
    it("the deleted note at index should exists", function(){
  expect(z.deletenote(0)).toBe(true);
  expect(z.deletenote("today")).toBe(false);
});
  });

  describe("get", function(){
    z.create("First time");
    z.create("Second time");
    it(" has to get a note with an index that exists", function(){
      expect(z.get(0)).toBe(true);
      expect(z.get("talk")).toBe(false);
    });
  });

    describe("edit", function(){
      z.create("First time");
      z.create("Second time");
      it("content to update should be a string", function(){
    expect(z.edit(0, "time to edit.")).toBe(true);
    expect(z.edit("time to edit.")).toBe(false);
    expect(z.edit(1)).toBe(false);
    expect(z.edit()).toBe(false);
  });
    });

    describe("listNotes", function(){
      z.create("First time");
      z.create("Second time");
      z.create("Third time");
      it("there are no notes to list", function(){
        expect(z.listNotes()).toBe(true);
      });
    });

});
