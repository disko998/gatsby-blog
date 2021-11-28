---
title: Markdown Cheat Sheet
thumbnail: thumb.png
date: 2021-07-16T01:46:59.993Z
description: Markdown is a lightweight markup language for creating formatted
  text using a plain-text editor. I created small cheat sheet with most common
  markup elements in one place for you to get started.
tags:
  - web development
  - react
  - markdown
  - gatsby
  - JavaScript
readTime: 30 sec
hide: false
---

This website is built with **Gatsby.js** which uses **React** a **JavaScript** framework for building static websites. Gatsby.js shines when you use it for something like portfolio, eCommerce, or blog websites as this website does, which under the hood uses markdown files to display blogs. But let's talk a little bit about markdowns and see why and how are they use at all...\
\
Markdown is a lightweight markup language for creating formatted text using a plain-text editor. They are widely used for editing blogs, forums, documentation as most developers are familiar with **README.ME** files. This is essentially a simpler way (more appealing to human readers) to tell computers how to display some content without actually having to write code like **HTML**, all you have to learn is simple markup language syntax and you are ready to go. I create a small cheat sheet for you to get started with markups.

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

```
# Text
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

**bold text**

_italicized text_

~~The world is flat.~~

Here's a sentence with a footnote. [^1]

[Link (markdown.md)](https://raw.github.com/adamschwartz/github-markdown-kitchen-sink/master/README.md)

> A salted duck egg is a Chinese preserved food product made by soaking duck eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted charcoal paste.

```
**bold text**

_italicized text_

~~The world is flat.~~

[^1]: This is the footnote.

[link](https://www.example.com)

> A salted duck egg is a Chinese preserved food product made by soaking duck eggs in brine, or packing each egg in damp, salted charcoal.
```

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

- Write the press release
- Update the website
- Contact the media

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

<!-- !\\\[alt text](salty_egg.jpg)

    !\\\[alt text](salty_egg.jpg) -->

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
