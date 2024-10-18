# Розроблення функціональних вимог до системи

## Діаграма прецедентів

![](https://www.plantuml.com/plantuml/png/ZP6zIiDG5CVtFCMXpXridQKYEEaYk0boRIunaDn0xWrISAYjuAY3LEWcla0C3QRQrbVutpVoDBUnT7F89UVZ_piVfwUDI4qMHvxecoIb5gPOsI4gUsz7Tem2kNriaT1qeMLAUr4Ot9ZhA9D_-S-OOM4dMDf9hHcoOhHcrAeZFmxLHZQGKPJSUbwcPLzeIQqrybm6eJOolLHuHSxgqhuupgRw21LXXGzySv4l_YjGOKxuH8wVTP-kk-Eh_LtmQHA4YgdlA5WuTvpYVwZE5dKc_L1GFr56AaDwmBt6J7rp6qA91NBYfyICeNcxvYxh2Bzst22xM-H9aiOK2oK26JEKQLEKpRnOikw9x4Dz1eRpLpMG0y-hpz3EseTkv1spip5zPtOzjtqEtx63Gus34nok9vNFn_y5)

##  Діаграма можливостей користувача

**Користувач** може виконувати такі основні дії:
1. **Реєстрація облікового запису** – користувач створює новий акаунт для доступу до системи.
2. **Вхід у систему** – після реєстрації користувач може входити у свій акаунт, використовуючи облікові дані.
3. **Взаємодія з медіа-контентом** – після входу користувач отримує доступ до системи медіа-контенту та може переглядати, завантажувати або взаємодіяти з ним

![](https://www.plantuml.com/plantuml/png/ZT2nIiH040RWVfzYEEiKdhqSs6eZs0aIaoK6SXl8RWgxyomi1JbEiFK5OZ2OqpE-mZzlvEoU8kbibltPdM-6cLaNLwwU5qh5YIihck090o_Gymql-HOj6hwRK6pfpEgAzeeyktANHQsLggrEOgjfubzETPPRfwjpWqSq0dIy2iJY1rcY9mnumGUlyIwt5ZqsX3Sq-FBjTasEBlR7y76PvKRKPxHIkDavxV-ewHzrejCyfgGqJXj7zbfcdOlwu8juXQqehxpcUr58KkSJcYZmdzAq2-U0xQzze5JOI9H6Xs7iSPoEe_oUQPFwHNy3)

##  Діаграма можливостей адміністратора

**Адміністратор** має можливість виконувати наступні дії:
1. **Додавання форми** – адміністратор може додавати нові форми для взаємодії користувачів з системою.
2. **Редагування форми** – адміністратор має можливість редагувати існуючі форми, змінюючи їхній вміст або параметри.
3. **Видалення форми** – адміністратор може видаляти форми, які більше не використовуються або стали застарілими.



![](https://www.plantuml.com/plantuml/png/XT8nJiCm50RWtQTuCdDx00PK169ZP6CnpLEfP3ieTWHieR2363emmGsYqagLQ3d3UpV2IL1SMQewH1dy_v_-M1avhmfV6Ys46lky04bljAGDpsdBStxY6LTKyun-kPAW79ncPchXI4ydj_uHjSxlXIWTZfL3a1TvOS0egoPeqFfhIn-quegVQK4rRGFv2lpIMBIXEZphrcngbtqhScS5Ae_DQP2-meX5MrsbKgV4zF-y6rrYnAxkieXz1cGP5dodqtR1hh4NF4UDFVXEwnRysRUkIwUOwAvpa0rEqblO-PnXEKoFuHWaFdYqcPEY7teusiyu71MZy6x-Z3y0)

### Use case 1. registerUser - реєстрація користувача

Користувач заходить в систему вперше, але для того, щоб отримати доступ до інтерфейсу програми їм необхідно зареєструватись. <br>
Основні кроки:

- User відкриває інтерфейс реєстрації
- Вводить необхідну інформацію (ім'я, прізвище, email, пароль)
- Підтверджує пароль за допомогою повторного вводу
- Натискає кнопку реєстрації
- Отримує лист про успішну реєстрацію на пошті та можливість увійти у свій акаунт

![UC_1. Реєстрація користувача - Діаграма прецедентів](https://www.plantuml.com/plantuml/png/ZLNXIXj14FxlKmpwssjp5ueM5S7s2KJeZu9Sucg3bqJkBhIs58oM-ATeAN92gLZh2roZgJ5gV8NPD-gtkzucrKkj4hAxyyqttyxCJkQZs0_ZHZKOYojn8CRexczcjLwBAQgy5xEUI-LwK0zdIu5VNfzRMbWkECG_k2CFP5DkoorEPKicSf-untrik_fuXzimx7Bw7vny81DE-KnnyJMdnBTOTcIBEtoEpmtu4cvh9b5R8QDLRwFrIct33_qg-UMu7Yx6cu4W_ws8wbM3CESqlXI9S9pyYDI29gQcIuMI60RmYL6EU92WeOkRKIogD54I9NTgsj1jGB2_9cXfuSLoWJxOspKYKVOZGUCp9PsZcIUbkTSrFaGIjWQvkalBjWxrsUW1MEiHqyyqsqS4oY5qCiglCa5MUZhJ829iRvHii7-2-4lP9DZkb-VG1bikvFEx6J-tuTtKt0YKWZqPEBiZdAsyOoKFpcsb2Fv69D_gHFJvQd1ja8tKOjKSQveEjsLYRmpkjcsD94_aA9dU7UiHFCx1sEGhw382x-d-hTX1kq_uIabK_KemYE3bynV_bOIyikmHB2cfle3BfO7j48JfFK5d3_yf02Zo87xHD8cf9paDPqwlwNcbLWuQAo8QcDr7pDPVx_8XxcCGRnYG3ocIiv91l260GcHFRTBOZHCUQdQ08tqMYdBirzO2f1nzskKU-cbFxkesGCwwUl3OXiz_dIzVsTTvn1qpjDItt7xOJGexYiHsgExhNtob9uT-ZnSGeokF-clhTSRcZcBBElFRmnbAMA0RYI-6XudcRIkjoCDbnk-PF3qi7MmeltWNOu16VsEA5k6DG7WMuLh4yAmAAsjlObgjrsCHMa_-0caf2fJeURThX1BVgXlY22Q7-3ltzKF6N1Wnzfq1un7_v5C-9MJfc5i4wxN3BOTFiD9rL5DLhVYC-zODwAuYcdIVkiNiHoHJEuyrVl_-0000)

### Use case 2. loginUser - логін користувача

Користувач вже має свій обліковий запис, але для того, щоб увійти повторно після повного виходу з системи, мають ввести особисті дані для входу й пройти перевірку авторизації <br>
Основні кроки:

- User відкриває інтерфейс входу в систему
- Вводить email та пароль
- Натискає кнопку "Увійти"
- Система перевіряє облікові дані - точніше наявність облікового запису по введеній пошті й відповідність паролю
- User отримує доступ до свого облікового запису

![UC_2. Логін користувача - Діаграма прецедентів](https://www.plantuml.com/plantuml/png/ZPNHIXjF5CRlVOf3l7R__-o6eaL5i7q24NfH2BjnjC5DLdOdjBOKagQDDwMK8WfjHQmli4Q3CTNu2cVUgD_CP9E0BaPGPlTyvpVVd7DsN4ka7yj6BPoJLHcAEHhzB6z7TKb9zRrOyLogH64KhmIXNzbTtLmlkmxnBnxofJhYE-813rMJ-wgbFgasTpbL1vpEGE93vAUWDF7tbbFYUonxgiCzliBl7NX7t3KaKTyYwz0y9hlL-fuV-pNoApAAD-H-ACX_AvAePXNsFHKs4n4No4z8BsX-SIae1c9Qm6VMEVUq1IFTs4-agD5y809tSSdYzc3Otn6qkVwYxDA7yUaQYQZuYQ32Sc0gi_nViFgwpkVSXVKROFl4NLAjoIQgRVr0RFo8fMU6zX4RFG9qYYFa3m2lU60ghR6wzfgeckepk3UgHTZq2zfoDRL5kVWurSset0MYPOX8lU2_uAAXsZzXlnIR74reRWvjxF8KDFHGfskdCtFpV7eZxWaoa6LuM0n7mtPl7WZ10O9jNP7fmtksfhOGv3ISLLltvzLw9MniYMGITfy8J-S_Bl6c1P1F95gJJTM2LTWqpEJe1HAiB1OLwTTtGjG0pUdp09NxfWvqkSmOcMEdgeFw7XTo1l7bgt9nNBUU-QfIzBaFr5SDUg8ZEZsFcytDCVGNggtxmJV4zx3K10iRP0Wt3-5beu8CuyDyUcQWht54Cq0OIXEzpMXU7gqqelryU0aHtt6F-5fx0-_Gn43LKOHWFAENREqVTXinD5AyaxX_adoDEuF6cq5JcjQChuIuklD6qdOKIH6FS_axZf3g9keUw079Ee4wu1L23l5l7fgh57t9kLsT2V64__0vdnDgUSeTGlJMuOx3PtPGW6rXVh3YInwEqw3kQz22-xzRokxgpEqQrlZdyWy0)

### Use case 3. editUserProfile - редагування особистих даних користувача

Користувач вже має свій обліковий запис та увійшов у нього. Перейшовши на сторінку свого особистого кабінету, хоче змінити щось із введених параметрів під час реєстрації <br>
Основні кроки:

- User відкриває сторінку профілю
- Змінює необхідні дані (email або пароль, імʼя або прізвище, комбінації пунктів) + можливо, встановлює аватар
- Натискає кнопку збереження
- Система перевіряє дані та зберігає зміни, якщо такі було внесено

![UC_3. Редагування особистих даних - Діаграма прецедентів](https://www.plantuml.com/plantuml/png/ZLJHJjjA47tdAqRX6T-BNLLG0KAY_GA4r8TAaMqM6k7OoDwefLKb0ZIyeBP2A4XL4QNyG0YrI249lp3xHvsTh6sQng9vi2UpPy_CdZFUvKIwiMpKWobPau6O0lDRs8X22KdjdLXqRF2Z88eNlS3rjvRMLggE1VWTK_o97RnM-zYbzm07wZFWK3LnY5VOKqsrHy-FmAY13l-174zKcqbtwTd73k0zXQbgSRMKQkmHeCjC8bo7KTFyDzcgXTjkxDR1zMKKhygTG83xHYHHtI0u3vMrHCGLS1FG0KpFpNkpddW8m0lJVgfROEZgJY957QOzuTbpyoEwRMhOtHImjlAywi3x_7IDHFXk8g2ouB5O2_zvIw_2SS6qEcDogROHIxMvgDxC_Odvfyp-WGfFA63DcXB7gaq4jwHOZ-arAPNOfVI0qlki9YKEA76dFkL5ghEJUMt3Uufzfc3MlCTIDhk4BU_p75FjAdPLE--LoJgaJ8_8ZZG_It84bEfcxeyDr8EIPKTmyYDScQBNet8tsPaA4eVbDOg0rR2ME8PdjT0F6kiYAPRjHvQB_GoU074OKC0B26FCmCsC49pYSUK4EyQvMFZI3JS3EZ4UatItsWbroFQeffQMfgsZMgJcQQLaHb-yh6R6d64wxWEzVu4wq6E4VJssm0DxH-BTKjITP8bcB2jbPpD0V4p4NraFYE-6McQJo6zUxMTiTXbRPkz9Df83J0jlKvtBE8oxVtj4QoI_U2lfGad-n3WvmduKuUI8XzzgNDjyBM4ZYgI8yvtuXPhhQ0tvZZmqAkEzLfbIj6G1ViCXJptPK78DMWNZ6Vx0Ixm4_8hdsD9gzYriMNZ1FcdQfZfYnwvnc6yZT4yJpTZ_sq_oIzLqkqnnenxy1W00)

### Use case 5. editForm - Редагування існуючої форми

Адміністратор має створену форму, яка потребує змін. Обравши форму для редагування, адміністратор хоче внести зміни <br>
Основні кроки:

- Admin відкриває список своїх існуючих форм.
- Обирає форму для редагування.
- Вносить необхідні зміни (додає/видаляє поля, змінює форматування або стилі).
- Зберігає оновлену форму.

![UC_5. Редагування існуючої форми - Діаграма прецедентів](https://www.plantuml.com/plantuml/png/bPJDYXD14CVl_HJ5UdK39l4YIrWHruit4Jm8CaoQTJ2Po7G7_43ORDRrfY0o0Gz-l44sQzmnCSahLBsH_-uXxGoAYuSmtLNr_rLrLP5zOwFC3lizPPuawTCeY_fa4zlJ1uFKtajUQ6gsbJVG_LkFhZU8l_2Sl_6KpsNCCtnNl99t9BcCS1ZBMtd3QvcGdE1pn3-vU9Zo1ycT0lSfB5FY3OvpEVMeENJ729Wf5SLsaD7EpMu_INSeCXIvqzRCNxcGaHn30OZtc-V6whvIGwFZo6Z4_7TvdgExYJqOPFqAwBta02qGL21bGG1iN7vUywBEA-Hru7aQEdMjGlh4P-xbZXBYP4oWBrrfHt-hUCjfLYk2QouZp-4BC78O2iTPrz_ZbQsASi9dKBf4vwLw3UKQsPQ---DAMLjvkoOFkIu2wJj-W5ojQEjSdCeP3UDO6qDNxYQ7Z-sTJEjKATSYQZGweVDqW_RsaZJk3Rkwqt7-vYN-rYN-zh_ymOoOK64zHFdbeztTZXze_TgiNrlrQrkLY-dlORTKfcCRfOUzSfW5BtZf5sWbETRBxPcCiIUdsAx93hrKHBzdyD7rLawWo7bH3d7c9Y4Z67xuHjz-W2ghci_GO2CmZOMBtxYD9kIRokYFIOQb0wMfWAbroA7H7ltCwhHhu0tzTU4Lpokbzd5mVoY_0000)

### Use case 6. publishForm - Публікація форми

Адміністратор має створену повністю готову форму та хоче її опублікувати <br>
Основні кроки:

- Admin відкриває форму для публікації.
- Обирає параметри публікації (посилання, вбудовування на вебсайті).
- Керує доступом (хто може заповнювати форму).
- Публікує форму.

![UC_6. Публікація форми - Діаграма прецедентів](https://www.plantuml.com/plantuml/png/XLDTQnD157sVNp7KvmRS11-aX8fONtmJmGT1ritGBkvkoiui-87G9jA-Y8981455y0TiOm9BsYH_uSu_yimDkyvQQ1wIpBttd3DpxptProRCJP4cGh-Ci-Cm3rDfOfEeWs5c7iTlb0nwGd16Fhd__4v7qayxfWkwj1DQK6dFxCH-alOzhUm9NL7rBAClA9Nq1t69J2bfZUFSdj6SPlWixGY0gH1XP8QvtBatIEDiHuPQXkvKf-aNLVRKZi202DVrQsrKAaIXLHHg1SpDRs7ISV4YYVNHmJ1FFU9dK6Qq0Ax25LL3icE9_2LaQ7rD-oiBOWotFQKVTE4wTIhWuB1fUsv7Jln6cS2J-GR62Q3JMcf6AzS-KcjQqLNDwVfN--8Drs-cPlKyrcykyc9MlW0Y2D0I1QYKxHSWsmm6I9uRr_ZISxVGpOgAA59QorkFuiCZyp1NAXF2JKnsEdr_5_AktDkBioWf1ghVTv1WEwIx7TBR0l4hG3OFRgC4Mr7kxlPvtUqmQ8VTTjWJ6vjox9jFv2eoONQOiF-eeWN6-T6Uqz9Ef3sbYiVPMEIjaFBVqhxJlBKFSFZy0Kpd79hoz-P_yk0fdWnss-t0Z-t8O_g2MttFge60x7yJvDimFlNAg6oW0QYtm0olyaxiuxT8axy0)
