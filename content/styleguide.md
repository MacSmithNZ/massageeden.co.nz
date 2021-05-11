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
  h1: This is the secondary hero available for list pages.
  p: It is to be used for list pages on the website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  a: This is a button
  a_href: /schedule-an-appointment
hero_third:
  span: Hero Third
  h1: This is the third hero available for single pages.
  p: It is to be used for single pages on the website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  a: This is a button
  a_href: /schedule-an-appointment
row_primary:
  img: 263A0185.JPG
  alt: Alt text for this image.
  h2: Massage Eden Lifestyle & Wellness Spa — Now Open!
  p: Massage Eden is the newest addition to Rotorua's thriving Day Spa & Wellness industry. Located in the Pullman Hotel, we offer a 5-star massage experience at an affordable starting price. Start your wellness journey with Massage Eden today!
  a_1: Book online
  a_1_href: /schedule-an-appointment
  a_2: Show on maps
  a_2_href: TODO
card_triple:
  h2: Relax, unwind and invest some well deserved time in yourself at Massage Eden. 
  items:
  - img: 263A0199.JPG
    h3: Keep your body working
    p: Massage therapy to help keep your body working better, so you can live better.
    a: See massage
    a_href: /massage
  - img: 263A0219.JPG
    h3: Be confident in your own skin.
    p: Skin care that'll leave you glowing inside and out.
    a: See skin care
    a_href: /skin-care
  - img: waxing-image.jpg
    h3: Everyone deserves smooth skin.
    p: A waxing experience that leaves you feeling smooth and safe.
    a: See waxing
    a_href: /waxing
banner_primary:
  h2: A healthy body needs full body care.
  p: Indulge your body with our popular spa packages.
  a: See spa packages
  a_href: /spa-packages
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
