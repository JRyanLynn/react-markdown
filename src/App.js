import React, {useState} from "react";
import ReactMarkdown from 'react-markdown';
import './App.css';


export default function App () {
  const [markdown, setMarkdown] = useState(inputText);

    
  return (
    <body onload={inputText}>
    <div className="container">
      
      <div className="row border">
      <div className="col text-center text-white bg-success my-3 mh-100">
      <h1 className="top-nav"><strong>Markdown Preview</strong></h1>
      </div>
      </div>

      <div className="input row border">
      <div class="col-6 d-flex flex-column">
      <h2 class="text-center my-3"><strong>Input Text</strong></h2>
      <div class="form-group flex-grow-1 d-flex flex-column">
      <textarea
      className="col-6 d-flex flex-column mw-100 vh-100"
      id="editor" 
      autoFocus 
      value={markdown}
      onChange= {(e) => setMarkdown(e.target.value)} />
      </div>
      </div>

      <div className="output-column col-6 border d-flex flex-column" id="preview">
      <h2 className="text-center my-3"><strong>Output</strong></h2>
      <ReactMarkdown 
        id="markdown"
        className="markdown col-6"
        children={markdown}
         />
      </div>
    </div>
    </div>
    </body>
  )
}


const inputText = 
`***Please refer to the following to make your markdown sparkle***

***Text Styles***

***Bolded text with stars***

Hit enter for a

new paragraph...

# This is a big header
## Adding more hashtags (# for you old folks), makes the headers smaller...

***A list, a list. Oh darn, another list***
- This is a list item
- This is another list item

***Block quote magic***

> The quick markdown jumps over the programmer.
>> The quick programmer stumbles over the code.

[This is a link](google.com)

![A paper tiger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)`
