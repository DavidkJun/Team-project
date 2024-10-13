# Розроблення функціональних вимог до системи

## Модель прецедентів

В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

_Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів._

Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/).

### Use case 1. registerUser - реєстрація користувача

Користувач заходить в систему вперше, але для того, щоб отримати доступ до інтерфейсу програми їм необхідно зареєструватись. <br>
Основні кроки:

- User відкриває інтерфейс реєстрації
- Вводить необхідну інформацію (ім'я, прізвище, email, пароль)
- Підтверджує пароль за допомогою повторного вводу
- Натискає кнопку реєстрації
- Отримує лист про успішну реєстрацію на пошті та можливість увійти у свій акаунт

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

```plantuml
@startuml

    title
        <font size=32 color=black>UC_1. Реєстрація користувача
        <font size=32 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "User" as User #89b1be
    actor "Система" as System #beb289

    package UCD_1 {
        usecase "<b>UC_1</b>\nЗареєструватись" as UC_1 #89be96
    }

    usecase "<b>UC_1.1</b>\nВідкрити інтерфейс реєстрації" as UC_1_1
    usecase "<b>UC_1.2</b>\nВвести дані" as UC_1_2
    usecase "<b>UC_1.2.1</b>\nПідтвердити пароль" as UC_1_2_1
    usecase "<b>UC_1.2.2</b>\nПеревірити введені дані" as UC_1_2_2
    usecase "<b>UC_1.3</b>\nНадіслати підтвердження на email" as UC_1_3
    usecase "<b>UC_1.4</b>\nПідтвердити реєстрацію та увійти у свій аккаунт" as UC_1_4

    UC_1_1 .u.> UC_1 :includes
    UC_1_2 .u.> UC_1 :includes
    UC_1_2_1 .u.> UC_1_2 :includes
    UC_1_2_2 .u.> UC_1_2 :includes
    UC_1_3 .u.> UC_1_2_2 :includes
    UC_1_4 .d.> UC_1_3 :includes

    System -> UC_1
    User -> UC_1_1

    rectangle "Виключні ситуації" {
        usecase "<b>EX_1</b>\nНекоректні дані" as EX_1
        usecase "<b>EX_2</b>\nПроблеми із сервером" as EX_2
        usecase "<b>EX_3</b>\nКористувач уже зареєстрований" as EX_3

        UC_1_2_2 .u.> EX_1 :extends
        UC_1_4 .u.> EX_3 :extends
        UC_1_3 .u.> EX_2 :extends
    }

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2024
    end footer

@enduml

```

</center>

### Use case 2. loginUser - логін користувача

Користувач вже має свій обліковий запис, але для того, щоб увійти повторно після повного виходу з системи, мають ввести особисті дані для входу й пройти перевірку авторизації <br>
Основні кроки:

- User відкриває інтерфейс входу в систему
- Вводить email та пароль
- Натискає кнопку "Увійти"
- Система перевіряє облікові дані - точніше наявність облікового запису по введеній пошті й відповідність паролю
- User отримує доступ до свого облікового запису

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

```plantuml
@startuml

    title
        <font size=32 color=black>UC_2. Логін користувача
        <font size=32 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "User" as User #89b1be
    actor "Система" as System #beb289

    package UCD_2 {
        usecase "<b>UC_2</b>\nУвійти в систему" as UC_2 #89be96
    }

    usecase "<b>UC_2.1</b>\nВідкрити інтерфейс входу" as UC_2_1
    usecase "<b>UC_2.2</b>\nВвести облікові дані" as UC_2_2
    usecase "<b>UC_2.2.1</b>\nПеревірити облікові дані" as UC_2_2_1
    usecase "<b>UC_2.3</b>\nНадати доступ до акаунту" as UC_2_3

    UC_2_1 .u.> UC_2 :includes
    UC_2_2 .u.> UC_2 :includes
    UC_2_2_1 .u.> UC_2_2 :includes
    UC_2_3 .u.> UC_2_2_1 :includes

    System -> UC_2
    User -> UC_2_1

    rectangle "Виключні ситуації" {
        usecase "<b>EX_1</b>\nНеправильні облікові дані" as EX_1
        usecase "<b>EX_2</b>\nЗабутий пароль" as EX_2
        usecase "<b>EX_3</b>\nПроблеми із сервером" as EX_3
        usecase "<b>EX_4</b>\nКористувач не зареєстрований" as EX_4

        UC_2_2_1 .u.> EX_1 :extends
        UC_2_2_1 .u.> EX_2 :extends
        UC_2_2_1 .u.> EX_3 :extends
        UC_2_2_1 .u.> EX_4 :extends
    }

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2024
    end footer

@enduml

```

</center>

### Use case 3. editUserProfile - редагування особистих даних користувача

Користувач вже має свій обліковий запис та увійшов у нього. Перейшовши на сторінку свого особистого кабінету, хоче змінити щось із введених параметрів під час реєстрації <br>
Основні кроки:

- User відкриває сторінку профілю
- Змінює необхідні дані (email або пароль, імʼя або прізвище, комбінації пунктів) + можливо, встановлює аватар
- Натискає кнопку збереження
- Система перевіряє дані та зберігає зміни, якщо такі було внесено

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
    >

```plantuml
@startuml

    title
        <font size=32 color=black>UC_3. Редагування особистих даних
        <font size=32 color=black>Діаграма прецедентів
    end title

    skinparam actorStyle awesome

    actor "User" as User #89b1be
    actor "Система" as System #beb289

    package UCD_3 {
        usecase "<b>UC_3</b>\nРедагувати особисті дані" as UC_3 #89be96
    }

    usecase "<b>UC_3.1</b>\nВідкрити сторінку профілю" as UC_3_1
    usecase "<b>UC_3.2</b>\nЗмінити дані профілю" as UC_3_2
    usecase "<b>UC_3.2.1</b>\nПеревірити правильність введених даних" as UC_3_2_1
    usecase "<b>UC_3.3</b>\nЗберегти зміни" as UC_3_3

    UC_3_1 .u.> UC_3 :includes
    UC_3_2 .u.> UC_3 :includes
    UC_3_2_1 .u.> UC_3_2 :includes
    UC_3_3 .u.> UC_3_2_1 :includes

    System -> UC_3
    User -> UC_3_1

    rectangle "Виключні ситуації" {
        usecase "<b>EX_1</b>\nНеправильний формат облікових даних" as EX_1
        usecase "<b>EX_2</b>\nПроблеми із сервером" as EX_2
        usecase "<b>EX_3</b>\nДані не змінені" as EX_3

        UC_3_2_1 .u.> EX_1 :extends
        UC_3_3 .u.> EX_2 :extends
        UC_3_3 .u.> EX_3 :extends
    }

    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2024
    end footer

@enduml

```

</center>
