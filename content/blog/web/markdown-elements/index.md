---
title: Markdown Cheat Sheet
description: "Markdown is a lightweight markup language for creating formatted text using a plain-text editor. I created small cheat sheet with all markup elements in one place for you!"
date: "2020-12-27T12:32:54+0000"
tags: [gatsby, react.js, markdown, web development]
readTime: 30 sec
thumbnail: ./thumb.png
---

Markdown is a lightweight markup language for creating formatted text using a plain-text editor.

This website is built with **Gatsby.js** witch uses **React.js** a **JavaScript** framework for building web applications. The interesting fact is that this website also uses markdown files for every blog post, so I posted some elements you will encounter throughout this website and their markup language.

# Text

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Text
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

**bold text**

_italicized text_

~~The world is flat.~~

Here's a sentence with a footnote. [^1]

[Link (markdown.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

> A salted duck egg is a Chinese preserved food product made by soaking duck eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted charcoal paste.

    **bold text**

    _italicized text_

    ~~The world is flat.~~

    [^1]: This is the footnote.

    [link](https://www.example.com)

    > A salted duck egg is a Chinese preserved food product made by soaking duck eggs in brine, or packing each egg in damp, salted charcoal.

# Table & Lists

1. First item
   - First item
2. Second item
   - Second item
3. Third item
   - Third item

```markdown
1. First item
   - First item
2. Second item
   - Second item
3. Third item
   - Third item
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

```
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

# Media

![alt text](salty_egg.jpg)

    ![alt text](salty_egg.jpg)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/tpiyEe_CqB4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```
<iframe width="1031" height="580" src="https://www.youtube.com/embed/tpiyEe_CqB4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

# Code

```javascript
var s = "JavaScript syntax highlighting"
alert(s)
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.

{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
