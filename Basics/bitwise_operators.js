/* Побитовые операторы работают с 32-разрядными целыми числами
(при необходимости приводят к ним), на уровне их внутреннего двоичного представвления. 
Эти операторы не являются чем-то специфичным для JavaScript, они
поддерживаются в большинстве языков программирования.
*/

/*
    Поддерживаются следующие побитовые операторы:
    AND(и) (
    &
    )
    OR(или) (
    |
    )
    XOR(побитовое исключающее или) (
    ^
    )
    NOT(не) (
    ~
    )
    LEFT SHIFT(левый сдвиг) (
    <<
    )
    RIGHT SHIFT(правый сдвиг) (
    >>
    )
    ZERO-FILL RIGHT SHIFT(правый сдвиг с заполнением нулями) (
    >>>
    )
*/

/* Но используются побитовые операторы редко, когда возникает
необходимость оперировать с числами на очень низком (побитовом) уровне.
Веб-разработчики редко к ним прибегают, хотя в некоторых сферах
(Например, в криптографии) они очень полезны.
*/