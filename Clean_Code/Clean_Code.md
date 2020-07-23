---
marp: true
---

<!-- marp: true -->
<!-- paginate: true -->
<!-- headingDivider: 2 -->
<!-- footer: '[Abraham Schilling](https://github.com/n4bb12), 19.07.2020' -->

<!-- N4BB12 Theme -->
<style>
  section {
    font-size: 1.5rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #224466;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
    text-align: center;
  }
  h1 img,
  h2 img,
  h3 img,
  h4 img,
  h5 img,
  h6 img,
  p img,
  pre img {
    display: inline;
  }
  blockquote,
  ul,
  ol,
  p,
  table {
    width: auto;
    margin: 0 auto 1rem;
  }
  strong {
    color: #0366d6 !important;
  }
  img {
    display: table;
    margin: 0 auto;
  }
  footer {
    font-size: 0.75rem;
  }
  footer a {
    text-decoration: underline;
    color: inherit;
  }
</style>

<!-- Global style -->
<style>
pre {
  width: 1000px;
  margin: 0 auto;
  background: #0A0D14;
  color: white;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-type {
  color: #E40F1F;
}
.hljs-number,
.hljs-string,
.hljs-built_in {
  color: #B30C7F;
}
.hljs-attr,
.hljs-selector-attr, 
.hljs-selector-class, 
.hljs-selector-id, 
.hljs-selector-pseudo, 
.hljs-title {
  color: #EE7600;
}
</style>

# 🤤 Bad Code / 🥳 Clean Code

<style scoped>
section { background: #0A0D14; }
h1 { font-size: 2rem; color: white; }
</style>

![bg right](https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2593&q=80)

<!-- _paginate: false -->
<!-- _header: "" -->
<!-- _footer: "" -->

## Why does it matter?

## Why does it matter?

![bg right:40% height:300](https://i.redd.it/51dcpxhdwcox.jpg)
> One of our difficulties will be the maintenance of an appropriate discipline, so that we do not **lose track of what we are doing**.
> 
> *Alan Turing*

## The cost of **fixing software defects** is exponential.

<!-- header: "Why does it matter?" -->

![](https://www.stickyminds.com/sites/default/files/shared/2018-12-10%20ArthurHicken%20The%20Shift-Left%20Approach%20to%20Software%20Testing%20image3.png)

## The long-term cost of implementing **new features**

![bg right contain](https://martinfowler.com/articles/is-quality-worth-cost/cruft-impact.png)

![height:150](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTB56pvjUXrAOR05TKwWlGmKiPCShOU3NJ5LA&usqp=CAU)

> High internal quality keeps cruft to a minimum, allowing a team to add features with less effort, time, and cost.
> 
> *Martin Fowler, author of Refactoring, Chief Scientist at ThoughtWorks, software consultant and public speaker.*

[Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html)

## Code complexity has a major influence on **maintenance time**.

![](https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs10664-017-9508-2/MediaObjects/10664_2017_9508_Fig13_HTML.gif?as=webp)

[Evaluating code complexity triggers, use of complexity measures <br>and the influence of code complexity on maintenance time](https://link.springer.com/article/10.1007/s10664-017-9508-2#Sec28)

## Complex systems are less **secure**.

![bg right:40% height:300](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4G_Ejs-7ySTG3V_QASHb2aIa3J6KImix3Lw&usqp=CAU)

> Complexity is the worst enemy of security, and our systems are getting more complex all the time.
> 
> *Bruce Schneier, Security Technologist, Researcher and Lecturer, Harvard Kennedy School*

## You won't fix it later.

> "Later equals never" - LeBlanc's law

![](https://media-exp1.licdn.com/dms/image/C4E12AQHsZL0Go4p9tQ/article-cover_image-shrink_600_2000/0?e=1598486400&v=beta&t=p38fJDE5yeQUTz3e2QXaLrY8grRQPC6vfwEBykpNLzk)

## **Sustainable** Speed

![bg left:40% height:300](https://cleancoders.com/images/portraits/robert-martin.jpg)

> The only way to go fast, is to go well.
> 
> *Robert C. Martin - author of Clean Code, The Clean Coder and Clean Architecture, founder of the Agile Manifesto, public speaker, proponent of software craftsmanship.*

## What is Clean Code? 🥳

<!-- header: "" -->

## What is Clean Code? 🥳

- Clean code is simple and direct.
- Clean code reads like well-written prose.
- Clean code never obscures the designer’s intent but rather is 
full of crisp abstractions and straightforward lines of control.

> *Grady Booch,
> Object-Oriented Analysis and Design with Applications*

## What is Bad Code? 🤤

## What is Bad Code? 🤤

Influence of code characteristics on complexity:

![height:400](https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs10664-017-9508-2/MediaObjects/10664_2017_9508_Fig10_HTML.gif?as=webp)

[Evaluating code complexity triggers, use of complexity measures <br>and the influence of code complexity on maintenance time](https://link.springer.com/article/10.1007/s10664-017-9508-2#Sec28)

## Bad Code Example

![bg left:75%](https://miro.medium.com/max/1050/0*a22X2dQamMtAWBqx.png)

[Programming Horror: Sharing the WTFs](https://www.reddit.com/r/programminghorror/)

## What makes code clean? 💡

## Principles for Clean Code 💡

- Strong Cohesion
- Good Naming
- Meaningful Comments
- Simplicity
- Clean Abstraction

## Strong Cohesion 🎹

<!-- header: "" -->

----

<!-- header: "Strong Cohesion" -->

Create **small chunks** of **strongly related** code.

Cohesive code is...

- more focused
- more verbal
- more reusable
- more horizontally flat

----

Extract functions until they can't be reasonably split.

```ts
// 💩
initializeGame() {
  const startingPosition = {
    x: Math.floor(Math.random() * mapSize),
    y: Math.floor(Math.random() * mapSize),
  }
  const anthill = new Anthill()
  anthill.setPosition(startingPosition)
  // ... beetles
  // ... beetles
  // ... food
  // ... food
}

// 😎
initializeGame() {
  const startingPosition = generateRandomPosition()
  const anthill = new Anthill()
  anthill.setPosition(startingPosition)
  // ... beetles
  // ... beetles
  // ... food
  // ... food
}

// ✨
initializeGame() {
  this.spawnAnthill()
  this.spawnBeetles()
  this.spawnFood()
}
```

----

Move related things closely together.
Separate weakly related things.

```scss
// 💩
button {
  border: 1px solid cornflowerblue;
  padding: 1rem 2rem;
  :hover {
    box-shadow: 0 0.5rem 0 0 rgba(black, 0.1);
  }
  border-radius: 0.5rem;
}

// ✨
button {
  border: 1px solid cornflowerblue;
  border-radius: 0.5rem;
  padding: 1rem 2rem;

  :hover {
    box-shadow: 0 0.5rem 0 0 rgba(black, 0.1);
  }
}
```

----

Move related things closely together.
Separate weakly related things.

```ts
// 💩
handleMouseDrag() {
  const elementWidth = this.elementRef.getBoundingClientRect().width
  this.setCursor("move")
  this.setKnobX(elementWidth * this.ratio)
}

// ✨
handleMouseDrag() {
  this.setCursor("move")

  const elementWidth = this.elementRef.getBoundingClientRect().width
  this.setKnobX(elementWidth * this.ratio)
}
```

----

Convert comments to function names.

```ts
// 💩
// update the knob position
const elementWidth = this.elementRef.getBoundingClientRect().width
this.setKnobX(elementWidth * this.ratio)

// ✨
this.updateKnobPosition()
```

----

Single responsibility

```ts
// 💩
class Game {
  generateTerrain() {}
  generateVegetation() {}
  generateBuildings() {}
  generateMap() {}
  simulateRound() {}
}

// ✨
class RandomMapGenerator {
  generateTerrain() {}
  generateVegetation() {}
  generateBuildings() {}
  generateMap() {}
}
class Game {
  simulateRound() {}
}
```

----

Split files with more than 200 lines.
Strive for less than 100 lines.

## Good Naming 👶

<!-- header: "" -->

----

<!-- header: "Good Naming" -->

Choose **descriptive** and **unambiguous** names.

```ts
// 💩
toggle
changeValue

// ✨
togglePrivacyCheckbox
```

----

<!-- header: "Good Naming" -->

Choose **unambiguous** names.

```ts
// 💩
timestamp

// ✨
timeCreated
timeLastModified
```

----

<!-- header: "Good Naming" -->

Choose **meaningful** names.

```ts
// 💩
const customers2 = customers.sort(...)

// ✨
const customersByAgeDesc = customers.sort(...)
```

----

Be **specific**.

```ts
// 💩
spawnPlayer()

// ✨
spawnPlayerAtRandomPosition()
```

----

But not unnecessarily verbose.

```ts
// 💩
sumOfPriceOfAllProductsInCart

// ✨
totalPrice
```

----

Make **meaningful distinctions**.
Avoid misinformation.

```ts
// 💩
function createCart() {
  if (!this.cart) {
    this.cart = new Cart()
  }
}

// ✨
function createCart() {
  return new Cart()
}

// ✨
function resetCart() {
  this.cart = new Cart()
}

// ✨
function ensureCartExists() {
  if (!this.cart) {
    this.cart = new Cart()
  }
}
```

----

<!-- header: "Good Naming" -->

Reveal the **unit** when ambiguous.

```ts
// 💩
elapsedTime

// ✨
elapsedTimeInDays
elapsedDays
```

----

Be **conceptually consistent**.

```ts
// 💩
loadProducts()
fetchUserDetails()
getCart()

// ✨
getProducts()
getUserDetails()
getCart()
```

----

Avoid mixing concepts.

```ts
// 💩
setPlayerPosition()
setPlayerHealth(100)

// ✨
initializePlayerPosition()
setPlayerHealth(100)
```

----

Avoid duplicate context.


```ts
// 💩
vehicle.setVehicleSpeed(500)

// ✨
vehicle.setSpeed(500)
```

----

Avoid type information.


```ts
// 💩
personList

// ✨
people
```

----

Prioritize **readability**.


```ts
// 💩
isFast
isHasHooves
isHasFur

// ✨
isFast
hasHooves
hasFur
```

----

Use **pronounceable** names.

```ts
// 💩
itemCnt

// ✨
itemCount
```

----

Avoid ambiguity.

```ts
// 💩
activeOption
currentOption

// ✨
selectedOption
highlightedOption
```

----

Avoid guesswork.
Replace magic numbers with **named constants**.

```ts
// 💩
const products = products.slice(0, 24)

// ✨
const products = products.slice(0, productsPerPage)
```

----

Avoid guesswork.
Replace unclear inline arguments with **named constants**.

```ts
// 💩
sendEmail(recepient, subject, body, true)

// ✨
const requestReadReceipt = true
sendEmail(recepient, subject, message, requestReadReceipt)

// ✨
sendEmail({
  recepient,
  subject,
  message, 
  requestReadReceipt: true,
})
```

----

Avoid encodings, cryptic prefixes and type information.

```ts
// 💩
interface IUser {}
interface PPUser {}

// ✨
interface User {}
interface PayPalUser {}
```

----

Stick to **library conventions**.

```ts
// 💩
onChange // react
imageUploadComplete // you

// ✨
onChange // react
onImageUploadComplete // you
```

----

Stick to **library conventions**.

```tsx
// 💩

react
<img src="https://example.com" />

you
<Image url="https://example.com" />

// ✨

react
<img src="https://example.com" />

you
<Image src="https://example.com" />
```

----

Stick to **library conventions**.

```tsx
// 💩

react
<button disabled />

you
<Button isActive />

// ✨

react
<button disabled />

you
<Button active />
```

----

Stick to **language conventions**.

```ts
// 💩
first_name

// ✨
firstName
```

## Meaningful Comments

<!-- header: "" -->

## 🤮

<!-- header: "Meaningful Comments" -->

```ts
i++; // increment
```

## 🤮

```ts
/**
 * @param sellRequest
 * @return
 * @throws ManagedComponentException
 */
public SellResponse beginSellItem(SellRequest sellRequest)
  throws ManagedComponentException
```

## 🤮

```ts
class User {
  /** The user's firstname */ 
  private firstname: string

  /** The user's lastname */ 
  private lastname: string
}
```

## 🍻

```ts
button.addEventListener("click", () => {
  box.style.transform = "translateX(1000px)"

  // Due to how the render loop queues animations, this transition needs
  // two nested calls to requestAnimationFrame. See more at:
  // https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=20m29s
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      box.style.translate = "transform 1s ease-in-out"
      box.style.transform = "translateX(500px)"
    })
  })
})
```

## 🍻

```ts
export const Modal: FC = () => {
  const handleParentClick: MouseEventListener = (e) => {
    // Bubbling events could cause unwanted side effects while the modal is open.
    e.stopPropagation()
  }
  return (...)
}
```

## 😅

https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered

## Simplicity 🪑

<!-- header: "" -->

----

<!-- header: "Simplicity" -->

Avoid double-negatives.

```ts
// 💩
if (!isUninjured) {

// ✨
if (isInjured) {
```

----

Avoid unnecessary control flow.

```ts
// 💩
if (customerAge < requiredAge) {
  return false
} else {
  return true
}

// ✨
return customerAge >= requiredAge
```

----

Make it easy to call functions.
Prefer few arguments or accept data objects.

```ts
// 💩
function createAccount(firstName: string, lastName: string, birthday: Date, 
  street: string, zipcode: string, city: string, email: string, ...)

// ✨
function createAccount(details: AccountDetails) {}
```

----

Find elegant solutions.

```ts
// 💩
function findMaximum(values: number[]) {
  let max = -Number.MAX_SAFE_INTEGER
  values.forEach(value => {
    if (value > max) {
      max = value
    }
  })
  return max
}

// 😎
function findMaximum(values: number[]) {
  values.sort()
  return values[values.length - 1]
}

// ✨
function findMaximum(values: number[]) {
  return Math.max(...values)
}
```

## Clean Abstraction 🌫

<!-- header: "" -->

## Don't skip layers

<!-- header: "Clean Abstraction" -->

- Child components should not know about parent components.
- Parent components should not know about grandchildren.
- Abstract classes should not know about derived classes.

## Separate Concerns

Abstract away the details of each concern.
Then assembling things becomes easy.

- Calling an API endpoint is a separate concern.
- Mapping data is a separate concern.
- Tracking is a separate concern.
- Error-handling is a separate concern.
- Style is a separate concern.
- Storage is a separate concern.
- Assembly is a separate concern.

## Don't mix concerns

```ts
// 💩
const SearchInput: FC= () => {
  const [orders, setOrders] = useState<Order[]>([])
  
  const onChange = (e) => {
    const input = e.target.value
    const apiURL = `...`
    const data = fetch(apiURL).json().then(setOrders)
  }

  return (
    <input type="search" className="SearchInput" onChange={onChange} />
    <ul className="SearchResults">
      <li>...</li>
    </ul>
  )
}

// ✨
const ordersApi = {
  find(input: string) {
    const apiURL = `...`
    return fetch(apiURL).json()
  }
}
const SearchBox: FC = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const onInputChange = (input) => ordersApi.find(input).then(setOrders)

  return (
    <div className="SearchBox">
      <SearchInput onChange={onInputChange} />
      <SearchResults orders={orders} />
    </div>
  )
}
const SearchInput: FC<SearchInputProps> = ({ onChange }) => (
  <input type="search" className="SearchInput"
    onChange={e => onChange(e.target.value)} />
)
```

## Principles for Clean Code 💡

<!-- header: "" -->

- Strong Cohesion
- Good Naming
- Meaningful Comments
- Simplicity
- Clean Abstraction

## Working code is 50%

![bg left:40% height:300](https://cleancoders.com/images/portraits/robert-martin.jpg)

> It is not enough for code to work. Code that works is often badly broken. Programmers who satisfy themselves with merely working code are behaving unprofessionally. They may fear that they don’t have time to improve the structure and design of their code, but I disagree. Nothing has a more profound and long-term degrading effect upon a development project than bad code.
> 
> *Robert C. Martin*

# Thank you! 🙌

<style scoped>
section { background: #0A0D14; }
h1 { font-size: 2rem; color: white; }
</style>

![bg right:70% height:300px](https://miro.medium.com/max/640/1*YSYhINS70gJpvT6ZeI09UA.jpeg)
