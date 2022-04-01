# Instalación

Descargue el repositorio e instale sobre windows, en la terminal y estando sobre la ruta del proyecto ejecutar el comando:

```bash
winget install k6
```

## Usage

```javascript
import foobar

# Urls disponibles
const baseUrl = "http://52.90.194.113:3000/stats";
const baseUrl = "http://52.90.194.113:3000/mutant";

# Estructura con cadenas de ADN

const dnaDB = [
  ["TTTT", "AAAA", "AAAA", "AAAA"],
  ["AAAA", "AAAA", "AAAA", "TTTT"],
  ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
]
```

## Validar test

Una vez ajustados los parámetos ejecute el siguiente comando estando sobre el directorio del proyecto y

```bash
k6 run index.js
```

## Análisis de resultados

Tiempos asociados a la petición
http_req_duration..........: avg=2.22s    min=0s    med=1.7s     max=8.44s   p(90)=4.52s    p(95)=4.82s

Porcentaje de peticiones fallidas
http_req_failed............: 100.00% ✓ 1523      ✗ 0

Número de peticiones realizadas
http_reqs..................: 1523    47.535534/s