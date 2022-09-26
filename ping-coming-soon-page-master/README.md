# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![](./desktop%20view.JPG)


### Links

- Solution URL:  (https://github.com/Lilee52/TECHATHON-1.0/tree/main/ping-coming-soon-page-master)
- Live Site URL: (https://lilee52.github.io/TECHATHON-1.0/ping-coming-soon-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

How to add error messages to invalid user input while filling forms.

To see how you can add code snippets, see below:


```js
if (email.value !== validEmail || email.value !== "") {
        messages.push("Please provide a valid email address");
        email.style.border = "2px solid hsl(354, 100%, 66%)";
        errorElement.style.marginBottom = "2em";
    }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


## Author

- Frontend Mentor - [@Lilee52](https://www.frontendmentor.io/profile/Lilee52)
- Twitter - [@imagine_lilies](https://www.twitter.com/imagine_lilies)


## Acknowledgments

Special Thanks to Techathon
