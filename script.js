const img = document.querySelector(".img")
const social = document.querySelector(".social")
const navbar = document.querySelector(".navbar")
const servcont = document.querySelector(".servcont")
const serve = document.querySelectorAll(".serve")
const projects = document.querySelector(".prcont")
// console.log(serve)

document.addEventListener("load", () => {
  anime({
    targets: ".img .el",
    translateX: 250,
  })
})

socialData.forEach((elem) => {
  const { icon, link } = elem
  const data = `<a
  href="${link}"
  target="_blank"
  ><i class="${icon}"></i
></a>`
  social.insertAdjacentHTML("afterbegin", data)
  console.log(elem)
})

projectData.forEach((elem) => {
  const { name, descp, stack, image, weblink, codelink } = elem
  const data = `<div>
  <div
  class="outerpr"
  style="background-image: url(${image})"
>
  <div class="projback"></div>
  <div class="proj">
    <h2>${name}</h2>
    <p>
    ${descp}
    </p>
    <div>
      <p>Stack</p>
      <div>
        <p>${stack}</p>
      </div>
    </div>
    <div class="btngrp">
      <a href="${weblink}" target="blank"
        ><button class="btnpr">Website</button></a
      >
      <a href="${codelink}" target="blank"
        ><button class="btnpr">Code</button></a
      >
    </div>
  </div>
</div>
</div>`
  projects.insertAdjacentHTML("afterbegin", data)
  console.log(elem)
})

img.addEventListener("click", (e) => console.log(e))

navbar.addEventListener("click", (e) => {
  e.preventDefault()
  if (e.target.classList.contains("navitem")) {
    const id = e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})

// servcont.addEventListener("click", (e) => {
//   if (e.target.classList.contains("serve")) {
//     serve.forEach((elem) => {
//       elem.classList.remove("active")
//     })
//     e.target.classList.add("active")
//   }
// })
