# paginaNoticias

Link Rawgit: https://rawgit.com/LuisMurcia/paginaNoticias/master/principal.html  
Link versión minimificada: https://github.com/LuisMurcia/paginaNoticias/tree/minify_v

ESTRUCTURA
- 3 archivos html implementados con Boostrap 3 y CSS. Dos para redactar las dos primeras noticias. Uno principal que contiene el mayor contenido de la página, este se encuentra vinculado a un JavaScript (JQuery) para implementar según que funciones como la de cargar noticias.
- Las noticias que se cargan provienen de 3 archivos Json y se cargan de 2 en 2; es decir, cada Json contiene 2 noticias.

CARACTERÍSTICAS
- Todas las noticias siguen los protocolos de formalidad de Google, como poner los títulos con etiqueta "h2".
- Los "hover" de las noticias han sido realizados con JS. Esto se debe a que lo que yo quería es coger todo el "thumbnail" cuando el cursor pasara por la etiqueta de enlace "a".
- Añadido botón en la parte derecha del navbar, que activa y desactiva la carga de archivos Json con scroll.
- Cada vez que se carga un Json, este crea una nueva "row" donde se añade el contenido para evitar descolocaciones de las noticias cuando estas tienen tamaños diferentes.
- Añadido y validado RSS como formato XML.
- Todo el código HTML ha pasado las pruebas de vaidación sin errores ni advertencias.

DISEÑO
- Diseño visualmente cómodo; tonalidades oscuras decantándose hacia el azul para dar una homogeniedad a la página.
- Carousel inicial que aporta una pequeña presentación de la página.
- Implementado un "footer" con 3 "cols" para que quede bien distribuido.