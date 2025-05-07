import { useState } from 'react';

type Hand = 'rock' | 'paper' | 'scissors';
type Result = 'win' | 'lose' | 'draw' | null;

const RockPaperScissors = () => {
    const [playerHand, setPlayerHand] = useState<Hand | null>(null);
    const [computerHand, setComputerHand] = useState<Hand | null>(null);
    const [result, setResult] = useState<Result>(null);
    const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

    const handEmoji: Record<Hand, string> = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️',
    };

    const handName: Record<Hand, string> = {
        rock: 'グー',
        paper: 'パー',
        scissors: 'チョキ',
    };

    const playGame = (selectedHand: Hand) => {
        const hands: Hand[] = ['rock', 'paper', 'scissors'];
        const randomHand = hands[Math.floor(Math.random() * hands.length)];

        setPlayerHand(selectedHand);
        setComputerHand(randomHand);

        let gameResult: Result;

        if (selectedHand === randomHand) {
            gameResult = 'draw';
            setScore(prev => ({ ...prev, draws: prev.draws + 1 }));
        } else if (
            (selectedHand === 'rock' && randomHand === 'scissors') ||
            (selectedHand === 'paper' && randomHand === 'rock') ||
            (selectedHand === 'scissors' && randomHand === 'paper')
        ) {
            gameResult = 'win';
            setScore(prev => ({ ...prev, wins: prev.wins + 1 }));
        } else {
            gameResult = 'lose';
            setScore(prev => ({ ...prev, losses: prev.losses + 1 }));
        }

        setResult(gameResult);
    };

    const resultText = () => {
        if (result === 'win') return '勝ち！🎉';
        if (result === 'lose') return '負け...😢';
        if (result === 'draw') return 'あいこ 😐';
        return '';
    };

    return (
        <div className="w-full bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-600 text-center">じゃんけんゲーム</h2>

                <div className="flex justify-center gap-4 mb-4">
                    <div className="text-center">
                        <p className="text-xs md:text-sm mb-1">あなた</p>
                        <div className="text-3xl md:text-5xl">{playerHand ? handEmoji[playerHand] : '❓'}</div>
                        <p className="mt-1 text-xs md:text-sm">{playerHand ? handName[playerHand] : ''}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs md:text-sm mb-1">コンピューター</p>
                        <div className="text-3xl md:text-5xl">{computerHand ? handEmoji[computerHand] : '❓'}</div>
                        <p className="mt-1 text-xs md:text-sm">{computerHand ? handName[computerHand] : ''}</p>
                    </div>
                </div>

                {result && (
                    <div className="mb-4 text-lg md:text-xl font-bold text-center">
                        {resultText()}
                    </div>
                )}

                <div className="flex justify-center gap-2 mb-4">
                    {(['rock', 'paper', 'scissors'] as const).map(hand => (
                        <button
                            key={hand}
                            type="button"
                            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 flex items-center justify-center w-10 h-10 md:w-14 md:h-14"
                            onClick={() => playGame(hand)}
                        >
                            <span className="text-lg md:text-2xl">{handEmoji[hand]}</span>
                        </button>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <p className="font-semibold mb-1 text-xs md:text-sm">スコア:</p>
                    <div className="flex justify-center gap-3 text-xs md:text-sm">
                        <p className="text-green-600">勝ち: {score.wins}</p>
                        <p className="text-red-600">負け: {score.losses}</p>
                        <p className="text-gray-600">あいこ: {score.draws}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RockPaperScissors; 
