import {connect} from 'react-redux'
import Header from '../components/header'
import HouseChoose from '../components/houseChoose'

function Page () {
  return (
    <div>
      <Header />
      <HouseChoose />
    </div>
  )
}


export default connect(state => state)(Page)