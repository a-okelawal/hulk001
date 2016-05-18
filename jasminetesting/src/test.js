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
