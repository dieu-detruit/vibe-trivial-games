import { useState, useEffect } from 'react';

const NumberGuessing = () => {
    const [target, setTarget] = useState<number>(0);
    const [guess, setGuess] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [attempts, setAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    // ゲーム開始時に1-100のランダムな数を設定
    useEffect(() => {
        resetGame();
    }, []);

    const resetGame = () => {
        const newTarget = Math.floor(Math.random() * 100) + 1;
        setTarget(newTarget);
        setGuess('');
        setMessage('1から100までの数字を当ててください！');
        setAttempts(0);
        setGameOver(false);
    };

    const handleGuess = () => {
        const guessNum = Number.parseInt(guess);

        if (Number.isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
            setMessage('1から100までの有効な数字を入力してください');
            return;
        }

        setAttempts(prev => prev + 1);

        if (guessNum === target) {
            setMessage(`おめでとう！${attempts + 1}回の試行で正解しました！`);
            setGameOver(true);
        } else if (guessNum < target) {
            setMessage('もっと大きい数字です！');
        } else {
            setMessage('もっと小さい数字です！');
        }
    };

    return (
        <div className="w-full bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-600 text-center">数当てゲーム</h2>
                <p className="mb-4 text-gray-700 text-center text-sm md:text-base">{message}</p>

                <div className="flex gap-2 mb-4 w-full">
                    <input
                        type="number"
                        className="p-2 border rounded flex-grow text-center"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        disabled={gameOver}
                        min="1"
                        max="100"
                    />
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm md:text-base whitespace-nowrap"
                        onClick={handleGuess}
                        disabled={gameOver}
                    >
                        挑戦
                    </button>
                </div>

                {gameOver && (
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 mt-4 text-sm md:text-base"
                            onClick={resetGame}
                        >
                            もう一度遊ぶ
                        </button>
                    </div>
                )}

                <p className="mt-4 text-xs md:text-sm text-gray-500 text-center">試行回数: {attempts}</p>
            </div>
        </div>
    );
};

export default NumberGuessing; 
