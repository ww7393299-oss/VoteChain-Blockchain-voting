export default function Badge({ children }: { children: string }) {
  return <span className={'badge ' + children.toLowerCase().replace(/ /g, '-')}>{children}</span>
}
