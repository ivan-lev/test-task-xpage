# Тестовое задание для Xpage

## Стек технологий

- `Vite` - для быстрой удобной сборки
- `React` - для работы с интерактивными элементами страницы
- `TypeScript` - для создания предсказуемой безопасной логики

## Структура проекта

- `public/`: папка, где хранятся картинки, иконки, и прочие неизменяемые ресурсы проекта
- `scr/`: папка с ресурсами проекта
  - `components`: папка с отдельными компонентами, которые составляют проект
  - `types`: папка с файлами типов, которые используются в переменных
  - `variables`: папка с файлами переменных (глобальные стили, цвета, стили шрифтов, данные переменных, которые использует приложение)
  - `vendor`: папка с файлами сторонних разработчиков (непосредственно файлы шрифтов, готовые библиотеки и т.д.)

## Методологии

- `БЭМ`: все стили именованы по данной методологии
- `DRY`: по возможности используется переиспользование кода и стилей
- `KISS`: приложение разбито на простые компоненты, а их имена и именование классов максимально приближены к тому, что они делают, стилизуют или отрисовывают
  Семантические теги

## Особенности

- картинки оптимизированы
- все иконки в формате svg
- все изменяющиеся данные по возможности вынесены в переменные, чтобы можно было легко применить проект в реальной жизни без сильного рефакторинга кода
