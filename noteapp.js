function NotesApplication(author)
{
  this.author = author;
  this.notes = [];

}

 NotesApplication.prototype.create = function(note_content)
 {
 	if(typeof(note_content) == typeof("you"))
 	{
    if(note_content.trim())
    {
      this.notes.push(note_content);
      return "created successfully";
    }
    else
    {
      return "You can't input an empty string. Please try again";
    }
 	}
 	else
 	{
 		return "That type is invalid. Try again";
 	}
 }

 NotesApplication.prototype.listNotes = function()
  {
    for( i = 0; i < this.notes.length; i++)
    {
      console.log("NOTE ID: " + i);
      console.log(this.notes[i]);
      console.log("");
      console.log("By Author " + this.author);
      console.log("");
    }
  }

  NotesApplication.prototype.get = function(note_id)
  {
  	if(typeof(note_content) == typeof(0))
  	{
      if(note_id < this.notes.length)
      {
        return this.notes[note_id];
      }
      else
      {
        return "The id is out of range."
      }
  	}
  	else
  	{
  		return "That type is invalid. index has to be an integer value, try again.";
  	}
  }

  NotesApplication.prototype.search =  function(search_text)
  {
  	if(typeof(search_text) == typeof("you"))
  	{
    var found = [];

    console.log("Showing results for search " + search_text);
    console.log("");

    for(i = 0; i < this.notes.length; i++)
    {
      if(this.notes[i].toLowerCase().indexOf(search_text.toLowerCase()) != -1)
      {
        console.log("NOTE ID: " + i);
        console.log(this.notes[i]);
        console.log("");
        console.log("By Author " + this.author);
        console.log("");
      }
    }
  	}
  	else
  	{
  		return "The search has to be for a string. Please try again";
  	}
  }

  NotesApplication.prototype.deletenote =  function (note_id)
  {
  	if(typeof(note_content) == typeof(0))
  	{
      if(note_id < this.notes.length)
      {
        this.notes.splice(note_id, 1);
      }
      else
      {
        return "The id is out of range."
      }
  	}
  	else
  	{
  		return "That type is invalid. index hs to be an integer value, try again.";
  	}
  }

  NotesApplication.prototype.edit = function(note_id, new_content)
  {
  	if(typeof(new_content) == typeof("you"))
  	{
      if(typeof(note_id) == typeof(0))
      {
      if(note_id < this.notes.length)
      {
        this.notes[note_id] = new_content;
        console.log(this.notes[note_id]);
      }
      else
      {
        return "The id is out of range."
      }
      }
      else {
        return "The id should be an integer";
      }
  	}
  	else
  	{
  		return "That content should be a string";
  	}
  }
