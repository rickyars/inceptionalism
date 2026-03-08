# Juno Page Rebuild — Claude Code Handoff

## Context

Replacing the existing `src/pages/juno.astro`. The current file shows 30 pieces in a vertical list. New architecture: thematic groups displayed as horizontal scrolling shelves. Stack is Astro. Design system is Option C: white background, #111 text, Space Grotesk font, no decoration. Read SOUL.md and VOICE.md before writing any copy.

---

## Page Route

`/juno` (replace existing file at `src/pages/juno.astro`)

---

## Layout Architecture

### Overall structure

```
page header (title + date range + 2-paragraph framing)
  
theme group 1
  label
  horizontal scrolling row of cards

theme group 2
  label
  horizontal scrolling row of cards

theme group 3
  label
  horizontal scrolling row of cards

coda (day 30, text only)

footer link → full thread on X
```

### Card design

Each card in a row:
- Fixed width: 280px
- Video (autoplay, muted, loop, playsinline) fills the card top. Aspect ratio 1:1.
- Below the video: title in Space Grotesk, small day number in muted grey, "open →" link if URL exists.
- No caption visible by default. Caption appears on hover as an overlay on the video, dark semi-transparent background, white text, small font.
- Cards do not stretch. Row scrolls horizontally with overflow-x: auto, no scrollbar visible (scrollbar-width: none).

### Row scrolling

Each theme row scrolls independently. No snap points needed. Use:

```css
.shelf {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 0.5rem;
}
.shelf::-webkit-scrollbar {
  display: none;
}
```

---

## Thematic Groups

### Group 1: Homage

Pieces in explicit conversation with another artist's work.

```js
[
  {
    day: 2,
    title: 'Rothko',
    caption: 'color field painting with glitch corruption. applied to Rothko because the originals are already asking the same question: how much can you remove and still feel something.',
    video: '/juno/day-02.mp4',
    url: null, // fill in
  },
  {
    day: 3,
    title: 'GRIFT-MAN',
    caption: 'Pac-Man as crypto commentary. XCOPY\'s Grifters are the ghost. the maze is the market.',
    video: '/juno/day-03.mp4',
    url: null,
  },
  {
    day: 5,
    title: 'EYE-ROLLA',
    caption: 'XCOPY has a piece called EYE-ROLLA. built an interactive version in Juno: the eyes track your mouse or finger, a click makes him blink. still thinking about where this goes as a standalone piece.',
    video: '/juno/day-05.mp4',
    url: 'https://juno.transient.xyz/recipe/76094c23-02d8-4e98-84ea-301c83b8058e/preview',
  },
  {
    day: 9,
    title: 'No Right-click and Save As guy',
    caption: 'XCOPY made a piece called RIGHT CLICK SAVE AS GUY. built a version in Juno, which means you literally cannot right-click save as it. it\'s a live recipe, not an image file. the piece eats itself and reveals what we already knew: digital ownership was always performance art.',
    video: '/juno/day-09.mp4',
    url: 'https://juno.transient.xyz/recipe/77fd1693-fb9a-4bd5-ac09-a30d2d9df4a2/preview',
  },
  {
    day: 13,
    title: 'Grand Skull Piano',
    caption: 'ACK (@lphaCentauriKid) spent two years and three months building a physical grand piano with a skull for a body. the FrankenSteinway. it debuted at an exhibit in September 2025, right in the middle of this experiment. asked Juno to build a version in three.js. started with just a keyboard. Juno couldn\'t build a skull from basic geometry. found a cc0 model, got it to high-gloss piano black, and built the whole instrument around it.',
    video: '/juno/day-13.mp4',
    url: 'https://juno.transient.xyz/recipe/44124a63-6c5b-4695-9d1e-473b036e47cc/preview',
  },
  {
    day: 25,
    title: 'Sol LeWitt',
    caption: 'looking for inspiration on generative art, i stumbled across Sol LeWitt: a prompt engineer before prompt engineering was a thing. he wrote instructions; others executed. i wrote prompts; Juno executed. only took three prompts to get this one perfect.',
    video: '/juno/day-25.mp4',
    url: 'https://juno.transient.xyz/recipe/81549410-e7e5-4741-8fb3-29ee68a8811a/preview',
  },
  {
    day: 26,
    title: 'Vera Molnar',
    caption: 'continuing the early generative art thread. Vera Molnar was making recursive, rule-based drawings on early computers in the 1960s. recreating her ideas in Juno felt less like homage and more like acknowledging a lineage.',
    video: '/juno/day-26.mp4',
    url: null,
  },
]
```

### Group 2: Emergence

Pieces about systems: simple rules, complex behavior.

```js
[
  {
    day: 1,
    title: 'Boids',
    caption: 'boids is a system composed of three simple rules: separation, alignment, and cohesion. yet it can exhibit stunningly complex patterns. that\'s what made it the natural starting point. the system reveals the paradigm.',
    video: '/juno/day-01.mp4',
    url: 'https://juno.transient.xyz/recipe/01639e96-0b78-40cb-815b-cdb0578850c5/preview',
  },
  {
    day: 6,
    title: 'Lava Lamp',
    caption: 'fluid simulation. metaball physics, slow collision, constant motion. nothing resolves.',
    video: '/juno/day-06.mp4',
    url: 'https://juno.transient.xyz/recipe/7e63f7df-1bc8-498d-b863-802ca256a520/preview',
  },
  {
    day: 7,
    title: 'Three Body Problem',
    caption: 'three bodies, mutual gravitational pull, no closed-form solution. the orbits are deterministic but unpredictable past a certain horizon. made it to watch the chaos.',
    video: '/juno/day-07.mp4',
    url: 'https://juno.transient.xyz/recipe/991e56f6-9ea1-4b5f-a671-f3df507fa196/preview',
  },
  {
    day: 8,
    title: 'Life on Mobius / Life on Sphere',
    caption: 'Conway\'s Game of Life mapped onto a Mobius strip and onto a sphere. the rules don\'t change. the topology does. life running on a strange surface is strange life.',
    video: '/juno/day-08.mp4',
    url: 'https://juno.transient.xyz/recipe/683af1d7-1481-4996-a49f-8f4ee45d525a/preview',
  },
  {
    day: 16,
    title: 'Murmuration',
    caption: 'boids again, this time built after the look of a starling murmuration. turned out to be the most remixed piece of the whole experiment. four remixes. something about the movement landed.',
    video: '/juno/day-16.mp4',
    url: 'https://juno.transient.xyz/recipe/ccc7d033-630e-4001-8107-81fcb57b630e/preview',
  },
  {
    day: 17,
    title: 'Pixel Flames',
    caption: 'busy day, so a quick recipe. cellular automaton fire: each pixel checks its neighbors and decides whether to burn. the emergent result looks like fire even though no pixel knows what fire is.',
    video: '/juno/day-17.mp4',
    url: 'https://juno.transient.xyz/recipe/e61bbccd-2167-4952-a9e6-104f795379eb/preview',
  },
  {
    day: 23,
    title: 'Game of Life',
    caption: 'Game of Life with particle physics layered on top. the combination shouldn\'t work as well as it does.',
    video: '/juno/day-23.mp4',
    url: null,
  },
  {
    day: 27,
    title: 'Cellular Automata',
    caption: 'inspired by @amadon\'s noise project. cellular automata where each cell cycles through states. the patterns that emerge look like bacteria competing for territory. no explanation. pure experimentation. please remix.',
    video: '/juno/day-27.mp4',
    url: 'https://juno.transient.xyz/recipe/439aa294-be6c-40c9-87e1-20acfc664ddd/preview',
  },
]
```

### Group 3: Glitch + Tools

Algorithms applied to images, interactive experiments, generative tools.

```js
[
  {
    day: 11,
    title: 'Glitch Meadow',
    caption: 'my attempt to implement Breath of the Wild style grass in Juno. the wind movement is there. in the future i want the sky and seasons to change to match the viewer\'s system time. the piece should know what time it is.',
    video: '/juno/day-11.mp4',
    url: 'https://juno.transient.xyz/recipe/0fd7853b-b196-467b-8cce-70369e909376/preview',
  },
  {
    day: 12,
    title: 'ASDF Pixel Sort',
    caption: 'i\'ve always loved pixel sorting but determining where to start and stop has always been a mystery to me. some quick googling turned up ASDF pixel sort by @kimasendorf. i have no idea why it\'s called ASDF. asked Juno to port the algorithm and applied it to classical paintings. it worked immediately.',
    video: '/juno/day-12.mp4',
    url: 'https://juno.transient.xyz/recipe/9e9fd374-1d7b-44ef-b639-c93076126144/preview',
  },
  {
    day: 14,
    title: 'Wigglegram',
    caption: 'organic physics applied to the Mona Lisa. every pixel pulled by a different force. the face holds together longer than it should.',
    video: '/juno/day-14.mp4',
    url: null,
  },
  {
    day: 15,
    title: 'ASDF II',
    caption: 'second pass at the ASDF pixel sort algorithm. different source paintings, different threshold values. the results diverge fast.',
    video: '/juno/day-15.mp4',
    url: null,
  },
  {
    day: 19,
    title: 'Pixelify',
    caption: 'portrait pixelization. discovered the Juno suggestions button as a creative tool on this one: if you\'re in need of a little inspiration, ask Juno.',
    video: '/juno/day-19.mp4',
    url: null,
  },
  {
    day: 20,
    title: 'Ascii Torus',
    caption: 'a torus knot rendered entirely in three.js ASCII effect shaders. a torus knot is a knot that wraps around the surface of a torus without ever crossing itself. who doesn\'t love a torus.',
    video: '/juno/day-20.mp4',
    url: 'https://juno.transient.xyz/recipe/29e2ce6e-e16a-4842-98d8-c41a5510d684/preview',
  },
  {
    day: 21,
    title: 'Pixel Sort',
    caption: 'pixel sorting applied to classical paintings: Girl with a Pearl Earring, the Maja Desnuda, others. the algorithm reads brightness values and rearranges columns. the paintings survive it. some of them are better.',
    video: '/juno/day-21.mp4',
    url: 'https://juno.transient.xyz/recipe/16ac649c-2025-42ce-bd68-3b10954d9a25/preview',
  },
  {
    day: 22,
    title: 'LCD Overlay',
    caption: '@benstraussphoto mentioned he liked the idea of turning art into time pieces. so that morning we built it: drag and drop any image and the recipe overlays an LCD-style clock showing the current time. the piece knows when you\'re looking at it.',
    video: '/juno/day-22.mp4',
    url: 'https://juno.transient.xyz/recipe/e6f73eac-7bea-4bda-b121-33665ceef03a/preview',
  },
  {
    day: 24,
    title: 'Edge Detect',
    caption: 'my daughter is taking art and came home excited about contour drawing: finding the edges of a form without lifting your pencil. that inspired me to ask Juno to find contour lines in any image and highlight them. she liked it.',
    video: '/juno/day-24.mp4',
    url: 'https://juno.transient.xyz/recipe/e2d8fcae-d29d-4f06-a3fe-b5af98140947/preview',
  },
  {
    day: 28,
    title: 'Juno Suggestions',
    caption: 'Juno has a suggestions button. i just kept pushing it. no idea what this is but it\'s fun to watch.',
    video: '/juno/day-28.mp4',
    url: 'https://juno.transient.xyz/recipe/105b145d-5cff-488e-82dd-c4eaf7a4dcfb/preview',
  },
  {
    day: 29,
    title: 'drifting',
    caption: 'drag-and-drop your art. particle physics pulls it apart: each pixel becomes an agent with velocity and mass. let it go. drifting.',
    video: '/juno/day-29.mp4',
    url: 'https://juno.transient.xyz/recipe/e76309d9-bd50-48f6-aa0f-f56afc79fefa/preview',
  },
]
```

### Coda (no shelf, text only)

```js
{
  day: 30,
  caption: 'i had a lot of fun the last 30 nights. i wasn\'t sure i had 30 ideas in me. turns out, i did. there were a lot of false starts, half-finished ideas, failed attempts and deleted projects. here\'s what made it through.',
  url: 'https://x.com/RightOnRicky_/status/1961067978532819132',
}
```

---

## Framing Copy

```
Day 1 was boids. Three rules: separation, alignment, cohesion. That wasn't an
introduction to the experiment. That was the reason for it.

One piece per night for 30 days, built in Juno — Transient Labs' AI-assisted
coding tool for p5.js and Three.js. The work moved through emergence, art history,
glitch, time-aware pieces, particle physics. False starts, deleted projects,
half-finished ideas. At the end: I wasn't sure I had 30 ideas in me. Turns out, I did.
```

---

## Section Labels

Use these exactly:

- Group 1: `homage`
- Group 2: `emergence`
- Group 3: `glitch + tools`

Style: 0.7rem, uppercase, letter-spacing 0.1em, color #999. No h2. Use a `<p>` with a class.

---

## Media Files

Videos go in `public/juno/`. File naming: `day-01.mp4` through `day-29.mp4`.

Day 18 has no entry — it was not identified. Skip it. Do not add a placeholder.

---

## Missing URLs

Several `url` fields are null. Leave them null; do not render an "open" link for those entries. Ricky will fill them in.

---

## Notes

- No em dashes anywhere in copy or code comments.
- Captions are italic, small, visible on hover only (video overlay). Not shown on mobile hover — on mobile, show caption below the card always.
- Day number shown as two digits (01, 02...) in muted grey below the title.
- Max page width: 960px. Shelf rows run full width within that container.
- On mobile (under 640px): cards shrink to 220px wide. Horizontal scroll still works.
