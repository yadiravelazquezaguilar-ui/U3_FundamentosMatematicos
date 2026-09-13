# Unidad III · Fundamentos Matemáticos

Sitio interactivo de **Solución de ecuaciones con matrices**, construido con la misma estructura académica y funcional de las Unidades I y II.

## Contenido oficial

1. Matrices: elementos, orden, tipos, suma, resta, multiplicación escalar y matricial, transpuesta e inversa.
2. Determinantes: orden 2, regla de Sarrus y método de cofactores.
3. Sistemas lineales de tres o más incógnitas: matrices de coeficientes y aumentada, Gauss, Gauss-Jordan, matriz inversa y Cramer.

Cada tema contiene teoría, ejemplos guiados y seis módulos con cinco ejercicios por recorrido: respuesta abierta, opción múltiple, relacionar, memoria, ordenar pasos y verdadero/falso.

La fuente prioritaria de ejercicios es *Matemáticas simplificadas*, capítulo 16. Los enunciados fueron adaptados al formato interactivo y alineados con el programa oficial vigente desde septiembre de 2024.

## Configuración

El proyecto reutiliza las cuentas, grupos y docentes de Supabase, pero guarda el avance en `progreso.u3`, separado de las otras unidades.

Configura en Netlify:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
TEACHER_LOGIN_EMAIL=
SUPABASE_SERVICE_ROLE_KEY=
```

Nunca agregues las claves al repositorio. Para validar el proyecto usa `npm install`, `npm run lint` y `npm run build`.
