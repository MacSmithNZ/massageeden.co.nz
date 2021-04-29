---
title: "Styleguide"
date: 2021-04-28T11:48:28+12:00
draft: true
layout: styleguide
hero_primary:
  img: IMG_7659.JPG
  alt: This is the img alt text.
  h1: This is the primary hero for the homepage.
  p: It is only used once on the website. Secondary and other pages use a different hero style.
  a: This is a button
  a_href: /schedule-an-appointment
hero_secondary:
  img: 263A0199.JPG
  alt: This is the img alt text.
  span: Hero Secondary
  h1: This is the secondary hero for list pages.
  p: It is to be used for list pages on the website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  a: This is a button
  a_href: /schedule-an-appointment
---

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](image.jpg)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
