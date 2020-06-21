import {connect} from 'react-redux'
import Header from './header'
import SearchProducts from './searchProducts'

function Page () {
  return (
    <div>
      <Header />
      <SearchProducts/>
    </div>
  )
}

export default connect(state => state)(Page)