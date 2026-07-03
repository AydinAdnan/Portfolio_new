import BackgroundScenery from './components/BackgroundScenery'
import MenuBar from './components/MenuBar'
import Desktop from './components/Desktop'

export default function App() {
  return (
    <div className="os">
      <BackgroundScenery />
      <MenuBar />
      <Desktop />
    </div>
  )
}
