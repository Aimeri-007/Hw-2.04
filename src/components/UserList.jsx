import { Row, Col } from 'antd'
import UserCard from './UserCard'
import { users } from '../data/users'
import './UserList.css'

function UserList() {
  return (
    <Row gutter={[24, 24]} className="user-list">
      {users
        .filter((user) => user.active === true)
        .map((user) => (
          <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
            <UserCard user={user} />
          </Col>
        ))}
    </Row>
  )
}

export default UserList