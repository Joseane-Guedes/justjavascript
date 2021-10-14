/* notes: 
1 - What's a mental model?
Unfortunately, sometimes our mental models are wrong. Maybe a tutorial we read early on sacrificed accuracy in order to make a concept easier to explain. Maybe, when we started learning JavaScript, we incorrectly “brought over” an expected behavior from a language we learned earlier. Maybe we inferred a mental model from some piece of code but never really verified it was accurate.
2 - Coding, fast and Slow

https://www.reddit.com/r/learnjavascript/comments/f1scve/confusion_about_dan_abramovs_just_javascript/
*/

/* 
Imagine that you’re in the middle of a lot of work, and you want to quickly identify what this function does. Take a glance at it:

function duplicateSpreadsheet(original) {
    console.log(copy)
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
    console.log(copy)
    return copy;
    
  } */




// code with bug

/*   function duplicateSpreadsheet(original) {
    console.log(`titulo do original: ${original.metadata.title}`);

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
    
    console.log(`titulo da cópia: ${copy.metadata.title}`)
    console.log(`titulo da original após cópia:${original.metadata.title}`)

    return copy;

  }

  duplicateSpreadsheet({ metadata: {title: "TÍTULO ORIGINAL"}}) */

 /*  titulo do original: TÍTULO ORIGINAL
  titulo da cópia: Copy of TÍTULO ORIGINAL
  titulo da original após cópia:Copy of TÍTULO ORIGINAL */

/*   
This function duplicates a spreadsheet.
It throws an error if the original spreadsheet isn’t saved.
It prepends “Copy of” to the new spreadsheet’s title. 
*/

//bug fixed 
   
  function duplicateSpreadsheet(original) {
    console.log(`titulo do original: ${original.metadata.title}`);

    if (original.hasPendingChanges) {
      throw new Error('You need to save the file before you can duplicate it.');
    }
    let copy = {
      ...original,
      created: Date.now(),
      metadata: { ...original.metadata, title: 'Copy of ' + original.metadata.title }
    };

    console.log(`titulo da cópia: ${copy.metadata.title}`)
    console.log(`titulo da original após cópia:${original.metadata.title}`)

    return copy;
    duplicateSpreadsheet({ ...original.metadata, title: 'Copy of ' + original.metadata.title })
    
  } 

  duplicateSpreadsheet({ metadata: {title: "TÍTULO ORIGINAL"}})

/* 
//titulo do original: TÍTULO ORIGINAL
//titulo da cópia: Copy of TÍTULO ORIGINAL
//titulo da original após cópia:TÍTULO ORIGINAL */