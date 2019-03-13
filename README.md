# Litle frontend with react hooks and bootstrap.

> How to run it?

Install dependecies:

``yarn`` or ``npm install``

Then run the project :)

`` yarn start `` or `` npm start ``

---
> How do I run the tests?

``yarn test`` or ``npm test``

---
> Why there are only shallow tests?

Because enzyme currently doesn't have much sopport for react hooks since they are new, actually, there are not many testing libreries with support for hooks. :(

Sadly, couldn't use enzyme or jest too much...

---
> Any support for docker?

Yes sure!

  ``` docker build -t react-redundant-requester ```

And then...

  ``` docker run -d -p 3000:3000 react-redundant-requester ```