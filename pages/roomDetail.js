import {connect} from 'react-redux'
import Header from '../components/header'
import RoomDetail from '../components/roomDetail'

function Page () {
  return (
    <div>
      <Header />
      <RoomDetail />
    </div>
  )
}

export default connect(state => state)(Page)