interface IPropsSidebar {
  children: JSX.Element|JSX.Element[];
}

export function SideBar(props: IPropsSidebar) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.children}
      </div>
    </nav>
  )
}