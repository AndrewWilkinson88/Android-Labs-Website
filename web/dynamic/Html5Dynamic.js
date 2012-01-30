/*
  Document   : Html5Dynamic.js
  Author     : Andrew, AndrewWilkinson88@gmail.com
               UMass Lowell Computer Science
  Description: This is the first JSON File for assign8
 */

var part0 = {
  "title" : "Putting It All Together By Exploring HTML5",
  "sources" : "",
  "example" : {
    "content" : "",
    "form" : {
      "valid" : ""
    }
  },
  "description" : {
    "content" : [
    [
    "I worked on this assignment during my second to last semester as an \
    undergraduate at Umass Lowell. The purpose of this project was to show five\
    new HTML5 tags and techniques."
    ],
    [
    "Lesson 1: Local Storage</br>\
      Lesson 2: The New Video Tag</br>\
      Lesson 3: The New Audio Tag</br>\
      Lesson 4: Meter and Progress</br>\
      Lesson 5: The Canvas Tag"
    ],
    [
      "The assignment also shows off the basic idea behind loading dynamic content\
      into a webpage using javascript and a JSON file. The code isn't that sticky\
      and is fairly well commented. If you're interested in checking it out, please\
      download the source files: <a class=\"plain\" href=\"source/Html5Example.rar\">Html5Example.rar</a>"
    ]
    ]
  }
}

var part1 = {
  "title" : "Local Storage",
  "sources" : [
  ["http://w3schools.com/html5/html5_webstorage.asp"]
  ],
  "example" : {
    "content" :
    [
    ["You're previous string was: <span id=\"currString\"></span>" ],
    ],
    "form" : {
      "valid"  : "True",
      "action" : "javascript:processString()",
      "inputs" : {
        "types" : [ ["text"]     ,["submit"]      ],
        "ids"   : [ ["newString"],[""]            ],
        "values": [ [""]         ,["Set Local String"] ]
      }
    }
  },
  "description" : {
    "content" : [
    ["In HTML5 there's two new ways to store data on the\
        client that works far better than the previous method, cookies.\
        In HTML5, the new method we'll be looking at is localStorage,\
        which will store data for the longterm."
    ],
    ["In the example above you can see a text input box and a button.\
        This is just a simple form tag, with a text input, and a submit\
        input. When you insert a word into the box and hit the button,\
        you'll see the current word change. Now here's where localStorage\
        comes into play. If you reload the page you'll see that the string\
        you inputted last time is still the string there."
    ],
    ["To define a new localStorage object in javascript all you need\
        is to define localStroage.foo = bar, where foo is the name of\
        your variable, and bar is the value associated with it.</br>\
        </p><p class=\"box\">For example: </br>\
        <code>localStorage.string = userInput.value</code>"
    ]
    ]
  }
}

var part2 = {
  "title"  : "The New Video Tag",
  "sources" : [
  ["http://www.w3.org/TR/html5/video.html#video"]
  ],
  "example" : {
    "content" :
    [
    ["I found this video at w3c Schools:" ],
    ["<video controls=\"true\" src=http://www.w3schools.com/html5/movie.ogg> \
      Your browser does not support this video</video>"]
    ],
    "form" : {
      "valid"  : ""
    }
  },
  "description" : {
    "content" : [
    [
    "The video element is used when you want to display a video located by URL. It \
      contains several attributes such as height, width, autoplay, loop. As you can\
      see the video I've chosen shows the controls for playback functionality. \
      Optionally you can have the video preload when the page loads, and be ready\
      to run. "
    ],
    [
    "Putting text between the tags will let users know\
      if their browser does not support the video tag.</p><p class=\"box\">For example: </br>\
      <code> &lt;video controls=\"Yes\" src=http://www.w3schools.com/html5/movie.ogg&gt; \
      Your browser does not support this video&lt;/video&gt; </code>"
    ]
    ]
  }
}

var part3 = {
  "title"  : "The New Audio Tag",
  "sources" : [
  ["http://www.w3.org/TR/html5/video.html#audio"]
  ],
  "example" : {
    "content" :
    [
    ["Here is an example from the w3c schools:" ],
    ["<audio controls=\"true\" src=http://www.w3schools.com/html5/song.ogg> \
      Your browser does not support this sound clip</audio>"]
    ],
    "form" : {
      "valid"  : ""
    }
  },
  "description" : {
    "content" : [
    [
    "This new tag in html5 is very similar to the new video tag, \
    mentioned in lesson 2. It represents a sound or audio stream\
    located by a URL. With these two tags and the <img> tag,\
    all multimedia can now recieve it's own special HTML tag. This\
    is great for semantic web and in general cleanliness with \
    organization of code."
    ],
    [
    "With the audio tag, you get many attributes such as: preload,\
      autoplay, loop, and controls. As with the video tag if their browser\
      does not support the audio tag you can display a message to let them know.\
      </p><p class=\"box\">For example: </br>\
      <code> &lt;audio controls=\"Yes\" src=http://www.w3schools.com/html5/song.ogg&gt; \
      Your browser does not support this sound clip&lt;/audio&gt; </code>"
    ]
    ]
  }
}

var part4 = {
  "title" : "Meter and Progress",
  "sources" : [
  ["http://www.w3.org/TR/html5/the-button-element.html#the-meter-element"],
  ["http://www.w3.org/TR/html5/the-button-element.html#the-progress-element"]
  ],
  "example" : {
    "content" :
    [
    ["The Progress is: <progress id=\"pBar\" value=0 max=100><span>0</span>%</progress>" ],
    ["</br>You may press \"See Progress\" until the meter is full: "],
    ["<meter id=\"met\" min=0 low=3 value=0 high=7 max=10><span>0</span></meter>"]
    ],
    "form" : {
      "valid"  : "True",
      "action" : "javascript:showProgress()",
      "inputs" : {
        "types" : [ ["submit"]      ],
        "ids"   : [ [""]            ],
        "values": [ ["See Progress"] ]
      }
    }
  },
  "description" : {
    "content" : [
    ["These two elements are used to show measure. The meter will show\
        how full something is, or how much out of something there is. Where\
        as the proress bar is there to represent the completion towards\
        a certain task. They sound very similar but are differnt in\
        subtle ways"
    ],
    ["One use of the meter would be to indicate how much space is left\
        on the server hard drive. Whereas the progress bar would be used\
        to tell how close the server is to processing your task. If the\
        browser doesn't have a special way to display the progress bar\
        than you can use span tags inside to display a percentage"
    ],
    ["Some special attributes of the meter are the min, max, high, and low\
      values. The rule must always be min < low < high < max. What's cool about\
      low, and high is the browser may do special things with it. In chrome for\
      the example above, values less than 3 and more than 7 color the meter yellow\
      and turns the meter red when it's full. Similar to the progress bar, if a\
      browser can\'t display the meter at all it\'s a good idea to supply a text\
      alternative.</br>\
      </p><p class=\"box\">For example: </br>\
        <code>&lt;progress value=0 max=100&gt;&lt;span&gt;0&lt;/span&gt;%&lt;/progress&gt;</br>\
        &lt;meter id=\"met\" min=0 low=3 value=0 high=7 max=10&gt;&lt;span&gt;0&lt;/span&gt;&lt;/meter&gt;</code>"
    ]
    ]
  }
}

var part5 = {
  "title"  : "The Canvas Tag",
  "sources" : [
  ["http://www.w3.org/TR/html5/the-canvas-element.html#the-canvas-element"]
  ],
  "example" : {
    "content" :
    [
    ["Using the canvas tag you can draw all sorts of things:" ],
    ["<canvas id=\"canv\" width=200 height=200>Your Browser does not support Canvases</canvas>"]
    ],
    "form" : {
      "valid"  : ""
    }
  },
  "description" : {
    "content" : [
    [
    "I saved the best for last, the highly interesting cavans tag!\
      with this new tag it's possible to it\'s possible to draw 2D graphics\
      right to the webpage. You can set the canvas width and height and than\
      draw to it using javascript."
    ],
    [
    "Using this tag animations and gaming should now be possible through\
      the use of javascript and can avoid having to resort to flash altogether.\
      </p><p class=\"box\">For example: </br>\
      <code> &lt;canvas id=\"canv\" width=200 height=200&rt;Your Browser does\
      not support Canvases&lt;/canvas&gt;</code>;"
    ],
    [
    "As a bonus here's the code for the smiley face I made up!</br>\
      </p><p class=\"box\">Bonus Code!: </br>\
      <code>var canvas=document.getElementById(\'canv\');</br>\
      var ctx=canvas.getContext(\'2d\');</br>\
      //Face</br>\
      ctx.fillStyle=\'#FFFF00\';</br>\
      ctx.beginPath();</br>\
      ctx.arc(100,100,100,0, Math.PI*2, true);</br>\
      ctx.closePath();</br>\
      ctx.fill();</br>\
      //Left Eye</br>\
      ctx.fillStyle=\'#000000\';</br>\
      ctx.beginPath();</br>\
      ctx.arc(50,50,15,0, Math.PI*2, true);</br>\
      ctx.closePath();</br>\
      ctx.fill();</br>\
      //Right Eye</br>\
      ctx.beginPath();</br>\
      ctx.arc(150,50,15,0, Math.PI*2, true);</br>\
      ctx.closePath();</br>\
      ctx.fill();</br>\
      //Smile</br>\
      ctx.beginPath();</br>\
      ctx.arc(100,100,60,0, Math.PI, false);</br>\
      ctx.closePath();</br>\
      ctx.fill();</code>"
    ]
    ]
  }
}

