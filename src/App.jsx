import { Typography } from 'antd'
import UserList from './components/UserList'
import './App.css'

const { Title } = Typography

function App() {
  return (
    <div className="app">
      <Title level={2} className="app__title">
        Карточки пользователей
      </Title>
      <UserList />
    </div>
  )
}

export default App