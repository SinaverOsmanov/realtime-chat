import {ClassValue, clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) { // функция которая возвращает собранную строку классов для стилизации
    return twMerge(clsx(inputs)) // clsx - возвращает строку миксированных значений, twMerge - Утилитарная функция для эффективного объединения классов Tailwind CSS в JS без конфликтов стилей.
}  