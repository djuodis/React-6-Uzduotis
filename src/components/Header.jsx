const Header = ({ title, subtitle }) => {
  return (
    <header>
      <div className    = "container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  )
}

export default Header
