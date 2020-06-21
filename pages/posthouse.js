import {connect} from 'react-redux'
import Header from '../components/header'
import PostHouse from '../components/postHouse'

function Page () {
  return (
    <div>
      <Header />
      <PostHouse />
    </div>
  )
}

export default connect(state => state)(Page)