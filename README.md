# Guitar Chord Shapes Website

### This is the source code for my Guitar Chord Shapes website hosted on www.guitarchordshapes.com

It is a React website utilizing React Routers and React Components features to create an easily editable website.

## Explanation of Structure

The React Router structure is pretty standard, and the benefits of using React for this website is really highlighted in `ChordShapes.js` and `Chord.js`.

`ChordShapes.js` creates an unordered list of buttons that take data from `ChordItems.js`, and then using `<Link></Link>` maps that data to a new page. If a page link follows the structure of `"/chordshapes/:chordUrl"`, then it loads the `Chord.js` component. This is highlighted in `App.js` by: 
` <Route path="/chordshapes/:chordUrl" component = {Chord}/>`.

What this means is that I each page for each chord shape follows the `Chord.js` structure, and the information displayed on the change depends on the corresponding data inside `ChordItems.js`. For example, the first item in `ChordItems.js` looks like this: 

`{
        title: 'Major',
        url: 'major',
        cName: 'chord-links',
        images: ['/images/Major/major1.png', '/images/Major/major2.png', '/images/Major/major3.png'
    ,'/images/Major/major4.png', '/images/Major/major5.png', '/images/Major/major6.png']
    }`
    
So the title of the page is denoted by `title: 'Major'`, the url by `url: 'major'`, and the images of the chord shapes by `images: ['/images/Major/major1.png', '/images/Major/major2.png', '/images/Major/major3.png','/images/Major/major4.png', '/images/Major/major5.png', '/images/Major/major6.png']`. So, if I wanted to add a new chord shape, I wouldn't need to create a new HTML page. All I would have to do is go into `ChordItems.js`, add a new object to the array in that structure, and that's it.

If you're more comfortable with OOP than scripting languages, React is a great way to get more in to frontend web development and/or Javascript because of the reusability of components, which in turn allows for extremely easy edits and deploying your website.


