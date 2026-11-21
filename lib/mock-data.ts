export type Question = {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  timeLimit: number;
};

export type Quiz = {
  id: number;
  title: string;
  questions: Question[];
};

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Страны мира",
    questions: [
      {
        id: 1,
        text: "Столица Франции?",
        options: ["Берлин", "Париж", "Рим", "Мадрид"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 2,
        text: "Какая страна является самой большой по площади в мире?",
        options: ["Канада", "Китай", "США", "Россия"],
        correctIndex: 3,
        timeLimit: 20,
      },
      {
        id: 3,
        text: "На каком континенте находится Египет?",
        options: ["Азия", "Африка", "Европа", "Южная Америка"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 4,
        text: "Столица Японии?",
        options: ["Киото", "Осака", "Токио", "Сеул"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 5,
        text: "Какая река является самой длинной в мире?",
        options: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 6,
        text: "Официальный язык Бразилии?",
        options: ["Испанский", "Португальский", "Английский", "Французский"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 7,
        text: "Столица Австралии?",
        options: ["Сидней", "Мельбурн", "Канберра", "Брисбен"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 8,
        text: "Какое государство является самым маленьким в мире?",
        options: ["Монако", "Мальта", "Ватикан", "Сан-Марино"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 9,
        text: "Через какую страну протекает река Сена?",
        options: ["Италия", "Франция", "Германия", "Испания"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 10,
        text: "Какая страна славится своими ветряными мельницами, тюльпанами и каналами?",
        options: ["Бельгия", "Нидерланды", "Швеция", "Дания"],
        correctIndex: 1,
        timeLimit: 20,
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript для начинающих",
    questions: [
      {
        id: 1,
        text: "Какой оператор используется для объявления переменной, значение которой можно изменить?",
        options: ["const", "let", "var", "все вышеперечисленные"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 2,
        text: "Что выведет typeof null?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 3,
        text: "Какой метод используется для добавления элемента в конец массива?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctIndex: 0,
        timeLimit: 20,
      },
      {
        id: 4,
        text: "Чему равно значение выражения '5' + 2?",
        options: ["7", "52", "NaN", "undefined"],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 5,
        text: "Какое ключевое слово используется для создания функции?",
        options: ["def", "func", "function", "fn"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 6,
        text: "Как правильно написать строгое равенство в JavaScript?",
        options: ["=", "==", "===", "!=="],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 7,
        text: "Что вернет выражение Boolean('false')?",
        options: ["true", "false", "NaN", "undefined"],
        correctIndex: 0,
        timeLimit: 20,
      },
      {
        id: 8,
        text: "Какой цикл выполнится хотя бы один раз, даже если условие ложно?",
        options: ["while", "for", "do...while", "for...in"],
        correctIndex: 2,
        timeLimit: 20,
      },
      {
        id: 9,
        text: "Как закомментировать одну строку в JavaScript?",
        options: [
          "# коммент",
          "// коммент",
          "/* коммент */",
          "<!-- коммент -->",
        ],
        correctIndex: 1,
        timeLimit: 20,
      },
      {
        id: 10,
        text: "Какой метод преобразует строку в целое число?",
        options: [
          "parseInt()",
          "parseFloat()",
          "Number.toFixed()",
          "Math.round()",
        ],
        correctIndex: 0,
        timeLimit: 20,
      },
    ],
  },
];
export function getQuizzes(): Quiz[] {
  return quizzes;
}
function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getQuiz(id: number) {
  await wait(1000);

  return quizzes.find((quiz) => quiz.id === id) ?? null;
}
