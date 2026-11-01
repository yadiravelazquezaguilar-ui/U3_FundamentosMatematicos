// Cinco casos de diagnóstico por cada uno de los tres temas de la Unidad III.
export const detectErrors = [
  [
    {
      "q": "Un alumno afirma que A=[[1,2,3],[4,5,6]] es de orden 3 por 2. ¿Qué debe corregir?",
      "options": [
        "El orden correcto es 2 por 3.",
        "La matriz tiene 3 filas y 3 columnas.",
        "El orden correcto es 2 por 2."
      ],
      "a": "El orden correcto es 2 por 3.",
      "why": "Primero se cuentan las filas (2) y luego las columnas (3)."
    },
    {
      "q": "Al sumar [[1,2],[3,4]]+[[2,1],[0,−1]], un alumno obtiene [[3,1],[3,3]]. ¿Cuál es el error?",
      "options": [
        "La entrada de la primera fila, segunda columna debe ser 3.",
        "La entrada de la segunda fila, primera columna debe ser 0.",
        "La entrada de la segunda fila, segunda columna debe ser 5."
      ],
      "a": "La entrada de la primera fila, segunda columna debe ser 3.",
      "why": "En la posición (1,2): 2+1=3."
    },
    {
      "q": "Al calcular 2·[[1,−3],[4,0]], alguien escribe [[2,−3],[8,0]]. ¿Qué faltó?",
      "options": [
        "Multiplicar también −3 por 2; se obtiene −6.",
        "Cambiar el 0 por 2.",
        "Multiplicar 4 por 4, para obtener 16."
      ],
      "a": "Multiplicar también −3 por 2; se obtiene −6.",
      "why": "En un producto por escalar, se multiplica cada entrada."
    },
    {
      "q": "Se afirma que [[1,2,3],[4,5,6]]ᵀ=[[1,4],[2,5]]. ¿Cuál es la corrección?",
      "options": [
        "Falta una tercera fila: [3,6].",
        "La transpuesta debe conservar dos filas y tres columnas.",
        "Hay que cambiar todos los signos."
      ],
      "a": "Falta una tercera fila: [3,6].",
      "why": "La transpuesta tiene tres filas y dos columnas: [[1,4],[2,5],[3,6]]."
    },
    {
      "q": "Al multiplicar matrices de orden 2×3 y 2×2, se asegura que el producto existe. ¿Qué falla?",
      "options": [
        "Las dimensiones interiores no coinciden: 3≠2.",
        "El resultado siempre es de orden 2×2.",
        "Solo se pueden multiplicar matrices cuadradas."
      ],
      "a": "Las dimensiones interiores no coinciden: 3≠2.",
      "why": "Para AB, las columnas de A deben coincidir con las filas de B."
    }
  ],
  [
    {
      "q": "Para [[3,2],[1,4]] se obtiene det=3·4+2·1=14. ¿Cuál es el error?",
      "options": [
        "Se resta el segundo producto: 12−2=10.",
        "El resultado es 3·1−2·4=−5.",
        "Se suman las cuatro entradas: 10."
      ],
      "a": "Se resta el segundo producto: 12−2=10.",
      "why": "En 2×2, det(A)=ad−bc."
    },
    {
      "q": "Se calcula det([[1,−2],[4,3]])=3−8=−5. ¿Qué signo se manejó mal?",
      "options": [
        "El producto (−2)·4 es −8; el determinante es 3−(−8)=11.",
        "El producto de la diagonal principal es −3.",
        "El determinante es 3+(-8)=−5."
      ],
      "a": "El producto (−2)·4 es −8; el determinante es 3−(−8)=11.",
      "why": "Restar un producto negativo equivale a sumar."
    },
    {
      "q": "Un alumno quiere usar Sarrus en una matriz de orden 4×4. ¿Qué se corrige?",
      "options": [
        "Sarrus se aplica directamente solo a matrices 3×3.",
        "Sarrus solo sirve para matrices 2×2.",
        "Toda matriz 4×4 tiene determinante cero."
      ],
      "a": "Sarrus se aplica directamente solo a matrices 3×3.",
      "why": "Para 4×4 pueden usarse cofactores o eliminación."
    },
    {
      "q": "Se dice que det([[0,2],[3,0]])=6. ¿Cuál es la corrección?",
      "options": [
        "El valor correcto es −6, porque 0·0−2·3=−6.",
        "El valor correcto es 0, porque la diagonal principal es cero.",
        "El valor correcto es 5, porque 2+3=5."
      ],
      "a": "El valor correcto es −6, porque 0·0−2·3=−6.",
      "why": "También se resta el producto de la diagonal secundaria."
    },
    {
      "q": "Si det(A)=0, alguien intenta calcular A⁻¹. ¿Qué afirmación debe cambiar?",
      "options": [
        "A no tiene inversa.",
        "La inversa es siempre la identidad.",
        "La inversa se obtiene dividiendo entre cero."
      ],
      "a": "A no tiene inversa.",
      "why": "Una matriz con determinante cero es singular."
    }
  ],
  [
    {
      "q": "Para x+y+z=6, se propone la fila aumentada [1,1,1|0]. ¿Cuál es el error?",
      "options": [
        "El término independiente debe ser 6: [1,1,1|6].",
        "El coeficiente de x debe ser 6.",
        "La fila debe tener solo tres entradas."
      ],
      "a": "El término independiente debe ser 6: [1,1,1|6].",
      "why": "La última columna contiene el resultado de la ecuación."
    },
    {
      "q": "Para 2x−3y+z=7, un alumno escribe [2,3,1|7]. ¿Qué se debe corregir?",
      "options": [
        "El coeficiente de y es −3.",
        "El coeficiente de x es −2.",
        "El término independiente es −7."
      ],
      "a": "El coeficiente de y es −3.",
      "why": "Hay que conservar los signos de los coeficientes."
    },
    {
      "q": "En x−2z=5, se registra la fila [1,−2|5] usando el orden x,y,z. ¿Qué falta?",
      "options": [
        "El coeficiente cero de y: [1,0,−2|5].",
        "El coeficiente de y debe ser 1.",
        "El término independiente debe ser 0."
      ],
      "a": "El coeficiente cero de y: [1,0,−2|5].",
      "why": "Las variables ausentes se representan con coeficiente 0."
    },
    {
      "q": "Al resolver por Gauss, alguien concluye que basta con crear ceros debajo de los pivotes y leer x,y,z sin más pasos. ¿Qué falta?",
      "options": [
        "Aplicar sustitución regresiva después del escalonamiento.",
        "Cambiar siempre todas las variables de signo.",
        "Calcular necesariamente una matriz inversa."
      ],
      "a": "Aplicar sustitución regresiva después del escalonamiento.",
      "why": "El método de Gauss termina de resolver mediante sustitución desde la última ecuación."
    },
    {
      "q": "Por Cramer, det(A)=4 y det(Aₓ)=12, pero se obtiene x=12·4=48. ¿Qué operación es correcta?",
      "options": [
        "Dividir: x=12/4=3.",
        "Restar: x=12−4=8.",
        "Sumar: x=12+4=16."
      ],
      "a": "Dividir: x=12/4=3.",
      "why": "La regla de Cramer emplea el cociente det(Aₓ)/det(A)."
    }
  ]
];
