export function useMDXComponents(components) {
  return {
    h1: (props) => <h1 style={{ color: "tomato" }} {...props} />,
    ...components,
  }
}
