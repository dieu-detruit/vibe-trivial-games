import { Routes, Route, Link } from 'react-router-dom'
import NumberGuessing from './games/NumberGuessing'
import RockPaperScissors from './games/RockPaperScissors'
import './App.css'

// ホーム画面コンポーネント
function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <header className="bg-blue-600 text-white p-4 shadow-md w-full">
        <div className="w-full">
          <h1 className="text-xl md:text-2xl font-bold mb-2">ミニゲームコレクション</h1>
        </div>
      </header>

      <main className="flex-grow w-full py-6">
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">遊びたいゲームを選んでください！</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <Link to="/number_guessing" className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">数当てゲーム</h3>
              <p className="text-gray-600 text-sm md:text-base">1から100までの数字を当てるゲームです。できるだけ少ない回数で正解を目指しましょう！</p>
            </Link>
            <Link to="/rock_paper_scissors" className="bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-600">じゃんけんゲーム</h3>
              <p className="text-gray-600 text-sm md:text-base">コンピューターとじゃんけん勝負！運を試してみましょう！</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center w-full">
        <p className="text-sm">&copy; {new Date().getFullYear()} ミニゲームコレクション</p>
      </footer>
    </div>
  )
}

// ゲーム画面用のラッパーコンポーネント
function GameWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <div className="w-full p-4">
        <Link to="/" className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm md:text-base">
          ← ホームに戻る
        </Link>
      </div>
      <main className="flex-grow w-full flex justify-center items-center px-4">
        {children}
      </main>
    </div>
  )
}

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
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
    </div>
  )
}

export default App
