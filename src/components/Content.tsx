interface IPropsContent {
  children: JSX.Element|JSX.Element[];
}

export function Content(props: IPropsContent) {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}