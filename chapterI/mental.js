/* notes: 
1 - What's a mental model?
Unfortunately, sometimes our mental models are wrong. Maybe a tutorial we read early on sacrificed accuracy in order to make a concept easier to explain. Maybe, when we started learning JavaScript, we incorrectly “brought over” an expected behavior from a language we learned earlier. Maybe we inferred a mental model from some piece of code but never really verified it was accurate.
2 - Coding, fast and Slow



https://www.reddit.com/r/learnjavascript/comments/f1scve/confusion_about_dan_abramovs_just_javascript/
*/

/* function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
      throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
      created: Date.now(),
      author: original.author,
      cells: original.cells,
      metadata: original.metadata,
    };
    copy.metadata.title = 'Copy of ' + original.metadata.title;
    return copy;
    
  } */

 
  function duplicateSpreadsheet(original) {
    if (original.hasPendingChanges) {
      throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
      ...original,
      created: Date.now(),
      metadata: { ...original.metadata, title: 'Copy of ' + original.metadata.title }
    };
    return copy;

  } 



