import { Card, Tag, Typography } from 'antd'
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons'
import './UserCard.css'

const { Title, Text } = Typography

function UserCard({ user }) {
  const { name, age, city, active, img } = user

  if (active !== true) {
    return null
  }

  return (
    <Card
      hoverable
      className="user-card"
      cover={<img alt={name} src={img} className="user-card__img" />}
    >
      <Title level={4} className="user-card__name">
        {name}
      </Title>

      <div className="user-card__row">
        <CalendarOutlined />
        <Text>Возраст: {age}</Text>
      </div>

      <div className="user-card__row">
        <EnvironmentOutlined />
        <Text>Город: {city}</Text>
      </div>

      <Tag color="green" className="user-card__tag">
        Active
      </Tag>
    </Card>
  )
}

export default UserCard