import {connect} from 'react-redux'
import Counter from './counter'
import Header from './header'

function Page () {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  )
}

export default connect(state => state)(Page)