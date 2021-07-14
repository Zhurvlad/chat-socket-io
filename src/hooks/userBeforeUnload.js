import {useEffect} from "react";

export const useBeforeUnload = (value) => {
    const handleBeforeunload = (e)=> {
        let returnValue
        if (typeof value === 'function') {
            returnValue = value(e)
        } else {
            returnValue = value
        }
        if (returnValue) {
            e.preventDefaul()
            e.preventValue = returnValue
        }
        return returnValue
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeunload)
        return () => window.removeEventListener('beforeunload', handleBeforeunload)
    }, [])
}

//Хук «useBeforeUnload()» используется для вывода сообщения или выполнения функции в момент перезагрузки или закрытия страницы (вкладки браузера).
// Мы будем использовать его для отправки на сервер события «user:leave» для переключения статуса пользователя.
// Попытка реализовать отправку указанного события с помощью колбека, возвращаемого хуком «useEffect()», не увенчалась успехом.
// Хук принимает один параметр — примитив или функцию.

//Можно использовать библиотеку "react-use"