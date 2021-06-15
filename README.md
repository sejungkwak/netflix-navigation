# Netflix Navigation

![screen recording](https://media.giphy.com/media/WyODpBMu4Z1ycqICZa/giphy.gif)

## project notes

1. HTML

- hamburger icon from font awesome
- text(all uppercase)
  - logo: Netflix
  - Mobile navigation
- navigation bar on the left
  - background: black => red => white
- navigation items(all uppercase)
  - close icon from font awesome
  - logo: Netflix
  - teams
  - locations
  - life at netflix > netflix culture memo, work life balance, inclusion & diversity, blog

2. CSS

- mix-width: 320px;

3. JavaScript

- click event listener

---

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

---

## Takeaways from the instructor

1. HTML

- logo and p without container
- used div instead of nav tag
- logo image in the nav outside of ul
- a tag inside li

2. CSS

- open button: position: fixed
- transform: translateX(-100%);
- min-width to the navbar, not the body
- class 'visible'
- add transition-delay to each color seperately.

3. JavaScript

```
open-btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close-btn.addEventListener('click', () => {
  nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
```
