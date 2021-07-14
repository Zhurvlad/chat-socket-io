export const useLocalStorage = (key, initValue) => {
    const [value, setValue] = React.useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initValue
    })
    useEffect(() => {
        const item = JSON.stringify(value)
        window.localStorage.setItem(key, item)
        // отключаем линтер, чтобы не получать предупреждений об отсутствии зависимости key, от которой useEffect, на самом деле, не зависит
        // здесь мы немного обманываем useEffect
    }, [])
    return [value, setValue]
}

// Хук «useLocalStorage()» позволяет хранить (записывать и извлекать) значения в локальном хранилище браузера (local storage).
// Мы будем использовать его для сохранения имени и идентификатора пользователя между сессиями браузера.
// Мы не хотим заставлять пользователя каждый раз вводить свое имя, а идентификатор нужен для определения сообщений, принадлежащих данному пользователю.
// Хук принимает название ключа и, опционально, начальное значение.

//Можно использовать библиотеку "react-use"