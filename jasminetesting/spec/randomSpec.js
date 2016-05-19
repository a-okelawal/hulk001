describe("THe NotesApp ", function()
{

var z = new NotesApplication("Abisoye");

it("author is undefined", function(){
expect(z.author).toBeDefined();
});

it("input is not a number", function(){
  expect(typeof z.author).toBe(typeof "string");
});

it("input cannot be empty", function(){
  expect(z.author.length).toBeGreaterThan(0);
});

  describe("create", function(){
    it("input successful.", function(){
  expect(z.create("This note is first.")).toBe("created");
});

it("input should be a string", function(){
expect(z.create(0)).toBeUndefined();
  });

  it(" cannot create an empty note", function(){
  expect(z.create()).toBeUndefined();
    });

});

  describe("search", function(){
    z.create("First time");
    z.create("Second time");
    it("input should exist", function(){
  expect(z.search("time")).toBe(true);
});

it("input should be a string", function(){
expect(z.search(1)).toBeUndefined();
});

it(" function can only take one argument", function(){
expect(z.search(1, "today")).toBeUndefined();
});

it("ipnut should not be empty", function(){
  expect(z.search()).toBeUndefined();
});

  });

  describe("deletenote", function(){
    z.create("First time");
    z.create("Second time");
    it(" input should be an existing index", function(){
  expect(z.deletenote(0)).toBe(true);
});

it(" input should be an integer", function(){
expect(z.deletenote("today")).toBe(false);
});

it(" input should be defined", function(){
  expect(z.deletenote()).toBe(false);
});

  });

  describe("get", function(){
    z.create("First time");
    z.create("Second time");
    it(" input should get note at the index.", function(){
      expect(z.get(0)).toBe(true);
    });

    it(" input should be an integer", function(){
      expect(z.get("talk")).toBe(false);
    });

    it(" input should be defined", function(){
      expect(z.get()).toBe(false);
    });
  });

    describe("edit", function(){
      z.create("First time");
      z.create("Second time");
      it(" input should be defined", function(){
    expect(z.edit()).toBe(false);
    expect(z.edit()).toBeDefined();
  });

  it(" input should update note at index.", function(){
    expect(z.edit(0, "time to edit.")).toBe(true);
  });

  it(" input is missing index.", function(){
    expect(z.edit("time to edit.")).toBe(false);
  });

  it(" function contains only 2 arguments.", function(){
    expect(z.edit("time to edit.", 8, 9, "gh")).toBe(false);
    expect(z.edit(1)).toBe(false);
  });

    });

    describe("listNotes", function(){
      z.create("First time");
      z.create("Second time");
      z.create("Third time");
      it("There are no notes to display", function(){
        expect(z.listNotes()).toBe(true);
        expect(z.listNotes()).toBeDefined();
      });
    });

});
