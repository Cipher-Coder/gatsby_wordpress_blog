import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://www.getunedited.com">Unedited Web Technologies</a>{" "}
      <span className="underline font-bold">All Rights Reserved</span>
    </footer>
  )
}

export default Footer
