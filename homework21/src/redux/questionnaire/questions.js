const questions = [
    {
        id: 1,
        question: 'Что делает createSlice в Redux Toolkit?',
        options: [
            { text: 'Создаёт редьюсер и экшены автоматически', isCorrect: true },
            { text: 'Запускает сервер для хранения данных', isCorrect: false },
        ],
    },
    {
        id: 2,
        question: 'Какой хук используется для получения данных из store?',
        options: [
            { text: 'useSelector', isCorrect: true },
            { text: 'useStoreData', isCorrect: false },
        ],
    },
    {
        id: 3,
        question: 'Где обычно хранятся данные состояния (state) в приложении с Redux Toolkit?',
        options: [
            { text: 'В localStorage', isCorrect: false },
            { text: 'В store', isCorrect: true },
        ],
    },
    {
        id: 4,
        question: 'Что делает createAsyncThunk',
        options: [
            { text: 'Упрощает создание асинхронных экшенов (например, запросов к API)', isCorrect: true },
            { text: 'Создаёт новые slice на лету', isCorrect: false },
        ],
    },
    {
        id: 5,
        question: 'Как правильно создать асинхронный экшен в Redux Toolkit?',
        options: [
            { text: 'Через useEffect и dispatch', isCorrect: false },
            { text: 'С помощью createAsyncThunk', isCorrect: true },
        ],
    },
]

export default questions;