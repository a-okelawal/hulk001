
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
      return "created";
    }
  }
 }

 NotesApplication.prototype.get = function(note_id)
  {
    var opt1 = false;
  	if(typeof(note_id) == typeof(0))
  	{
      if(note_id < this.notes.length)
      {
        console.log(this.notes[note_id]);
        opt1 = true;
      }
  	}
    return opt1;
  }

  NotesApplication.prototype.search =  function(search_text)
  {
    var ans = false;
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

        ans = true;
      }
    }

    return ans;
  	}
  }

  NotesApplication.prototype.deletenote =  function (note_id)
  {
    var ans1 = false;
  	if(typeof(note_id) == typeof(0))
  	{
      if(note_id < this.notes.length)
      {
        this.notes.splice(note_id, 1);
        ans1 = true;
      }
  	}
    return ans1;
  }

  NotesApplication.prototype.edit = function(note_id, new_content)
  {
    var opt = false;
  	if(typeof(new_content) == typeof("you"))
  	{
      if(typeof(note_id) == typeof(0))
      {
      if(note_id < this.notes.length)
      {
        this.notes[note_id] = new_content;
        console.log(this.notes[note_id]);
        opt = true;
      }
      }
  	}
    return opt;
  }

  NotesApplication.prototype.listNotes = function()
   {
     var opt2 = false;
     if(this.notes.length > 0)
     {
     for( i = 0; i < this.notes.length; i++)
     {
       console.log("NOTE ID: " + i);
       console.log(this.notes[i]);
       console.log("");
       console.log("By Author " + this.author);
       console.log("");
       if(i == (this.notes.length-1))
       {
         opt2 = true;
       }
     }
     }
     return opt2;
   }
