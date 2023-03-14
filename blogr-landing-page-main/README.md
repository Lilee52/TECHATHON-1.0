# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./FireShot%20Webpage%20Capture%20002%20-%20'Frontend%20Mentor%20I%20%5BBlogr%5D'%20-%20127.0.0.1.png)


### Links

- Solution URL: [Add solution URL here](https://github.com/Lilee52/TECHATHON-1.0/tree/main/blogr-landing-page-main)
- Live Site URL: [Add live site URL here](https://snazzy-melba-503653.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

To combine both image and gradient using background-image property in css
To see how you can add code snippets, see below:

```html
<div class="section-2-img">
          <img src="/images/illustration-phones.svg" alt="phones" class="phones"/>
</div>```
```css
    }
.navbar {
        background: url(../images/bg-pattern-intro-mobile.svg), 
        var(--linear-gradient-nav);
        background-repeat: no-repeat;
        background-size: cover cover;
        max-width: 400px;
        margin: 0 auto;
        height: 36em;
        border-bottom-left-radius: 120px;
        padding: 2em 1em;
    }
```
```js
dropdowns.forEach(dropdown => {
    const arrow = dropdown.querySelector(".dropdown-arrow");
    const toggle = dropdown.querySelector(".toggle");
    const subnav = dropdown.querySelector(".sub-list");


    toggle.addEventListener("click", () => {
        arrow.classList.toggle("rotate");
        subnav.classList.toggle("open");
    })
});
```

### Continued development

I will take on challenging projects to help me a better developer


## Author

- Frontend Mentor - [@Lilee52](https://www.frontendmentor.io/profile/Lilee52)
- Twitter - [@imagine_lilies](https://www.twitter.com/imagine_lilies)
