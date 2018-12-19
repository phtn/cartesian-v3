import { Trail } from "react-spring";
import Card from '../components/Card'

export default props => {
  const { items, nav } = props
  return (
    <Trail
      items={items}
      keys={item => item.title}
      from={{ opacity: 0, transform: "translate3d(0,5px,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
    >
      {item => animate => <Card title={item.title} animate={animate} nav={nav}/>}
    </Trail>
  )
}