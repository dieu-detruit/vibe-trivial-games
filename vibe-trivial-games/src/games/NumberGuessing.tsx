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
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">数当てゲーム</h2>
            <p className="mb-4 text-gray-700">{message}</p>

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
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleGuess}
                    disabled={gameOver}
                >
                    挑戦
                </button>
            </div>

            {gameOver && (
                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
                    onClick={resetGame}
                >
                    もう一度遊ぶ
                </button>
            )}

            <p className="mt-4 text-sm text-gray-500">試行回数: {attempts}</p>
        </div>
    );
};

export default NumberGuessing; 
