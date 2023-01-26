const showText = (e) => {
  const absoluteImg = document.getElementById("absoluteImg")
  if (window.innerWidth < 475) {
    if (absoluteImg === e.currentTarget) {
      if (window.innerWidth > 370) {
        document
          .getElementsByClassName("Benefits_Section1")[0]
          .classList.toggle("minWidth370px")
      }
      if (window.innerWidth > 345) {
        document
          .getElementsByClassName("Benefits_Section1")[0]
          .classList.toggle("minWidth345px")
      } else if (window.innerWidth > 320) {
        document
          .getElementsByClassName("Benefits_Section1")[0]
          .classList.toggle("minWidth320px")
      }
    }
    e.currentTarget.classList.toggle("openText")
  }
}
