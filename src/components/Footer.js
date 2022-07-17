import React from "react"

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}
      {` `}
      <a href="https://www.getunedited.com">Unedited Labs</a>{" "}
      <span className="font-bold">All Rights Reserved</span>
    </footer>
  )
}

export default Footer
