import { Routes, Route, Link } from 'react-router-dom'
import NumberGuessing from './games/NumberGuessing'
import RockPaperScissors from './games/RockPaperScissors'
import './App.css'

// ホーム画面コンポーネント
function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-4">ミニゲームコレクション</h1>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-4">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">遊びたいゲームを選んでください！</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/number_guessing" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">数当てゲーム</h3>
              <p className="text-gray-600">1から100までの数字を当てるゲームです。できるだけ少ない回数で正解を目指しましょう！</p>
            </Link>
            <Link to="/rock_paper_scissors" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">じゃんけんゲーム</h3>
              <p className="text-gray-600">コンピューターとじゃんけん勝負！運を試してみましょう！</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ミニゲームコレクション</p>
      </footer>
    </div>
  )
}

// ゲーム画面用のラッパーコンポーネント
function GameWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ← ホームに戻る
        </Link>
      </div>
      <main className="container mx-auto flex-grow p-4 flex justify-center items-center">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/number_guessing" element={
        <GameWrapper>
          <NumberGuessing />
        </GameWrapper>
      } />
      <Route path="/rock_paper_scissors" element={
        <GameWrapper>
          <RockPaperScissors />
        </GameWrapper>
      } />
    </Routes>
  )
}

export default App
