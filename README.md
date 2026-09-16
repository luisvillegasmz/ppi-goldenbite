Golden Bite 🍔

Aplicación web de restaurante desarrollada con React + TypeScript +
Vite y conectada a Firebase.

El proyecto permite visualizar el menú, consultar el detalle de los
productos, registrarse e iniciar sesión, administrar un carrito de
compras, realizar pedidos y consultar el estado de los pedidos.

📋 Tecnologías utilizadas

React 19 --- Interfaz de usuario.

TypeScript --- Tipado estático.

Vite --- Servidor de desarrollo y build.

React Router DOM 7 --- Navegación entre páginas.

Firebase 12:

Firebase Authentication

Cloud Firestore

Firebase Storage

CSS --- Estilos de la aplicación.

💻 Requisitos para ejecutar el proyecto

Antes de instalar el proyecto, cada computador debe tener instalado:

1. Node.js

Se recomienda utilizar una versión LTS reciente de Node.js.

Para comprobar si Node.js está instalado:

node -v

También comprobar npm:

npm -v

Si alguno de los comandos no funciona, hay que instalar Node.js desde la
página oficial:

https://nodejs.org/

Después de instalar Node.js, cerrar y volver a abrir la terminal para
que el comando node y npm estén disponibles.

🚀 Instalación del proyecto

1. Descargar o clonar el proyecto

Descarga el proyecto en el computador.

Después abre una terminal dentro de la carpeta principal del proyecto.

La carpeta debe contener archivos como:

package.json
vite.config.ts
tsconfig.json
src/

Por ejemplo:

goldenbite/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── firestore.rules
├── firestore.indexes.json
└── src/

2. Instalar las dependencias

Desde la carpeta del proyecto ejecutar:

npm install

Este comando instala todas las librerías indicadas en package.json.

Entre ellas se encuentran:

React

React DOM

Firebase

React Router DOM

TypeScript

Vite

ESLint

No es necesario instalar estas librerías una por una.

▶️ Ejecutar el proyecto

Una vez instaladas las dependencias, ejecutar:

npm run dev

Vite mostrará una dirección similar a:

Local: http://localhost:5173/

Abrir esa dirección en el navegador.

También puede aparecer una dirección de red como:

Network: http://192.168.x.x:5173/

La dirección localhost funciona en el mismo computador donde se está
ejecutando el proyecto.

🛑 Detener el servidor

Para detener el proyecto desde la terminal:

Ctrl + C

🔥 Configuración de Firebase

El proyecto utiliza Firebase para autenticación, base de datos y
almacenamiento.

La configuración actual de Firebase se encuentra en:

src/firebase.ts

Actualmente el proyecto tiene configurado el proyecto Firebase:

goldenbite-ef668

Por lo tanto, para que otro computador pueda utilizar el proyecto
correctamente, debe tener acceso a los servicios Firebase configurados
para esta aplicación.

🔐 Firebase Authentication

La aplicación utiliza Firebase Authentication para:

Registro de usuarios.

Inicio de sesión.

Cierre de sesión.

Recuperación de contraseña.

Inicio de sesión con Google, si está habilitado.

En Firebase Console se debe revisar:

Authentication
→ Sign-in method

Y habilitar los proveedores utilizados por la aplicación.

🗄️ Cloud Firestore

La aplicación utiliza Firestore para almacenar:

dishes
users
carts
orders

dishes

Contiene los productos del menú.

Ejemplo:

dishes/{dishId}

Con información como:

name
category
price
badges
desc
options
image
available
featured

users

Guarda información adicional del usuario:

users/{uid}

carts

Guarda el carrito asociado al usuario:

carts/{uid}

orders

Guarda los pedidos realizados:

orders/{orderId}

🍔 Cargar los productos del menú

El proyecto contiene productos de ejemplo en:

src/lib/seed.ts

El archivo contiene la función:

seedDishes()

que crea los platos iniciales en la colección:

dishes

La carga inicial debe hacerse una sola vez para evitar crear productos
duplicados.

También es posible crear los documentos manualmente desde Firebase
Console.

Importante: ejecutar un script de seed desde la consola del navegador
requiere hacerlo dentro del entorno de desarrollo apropiado; no se
debe asumir que un import relativo como ./src/lib/seed funcionará
directamente pegándolo en cualquier consola del navegador.

🔒 Reglas de seguridad de Firestore

Las reglas se encuentran en:

firestore.rules

Estas reglas controlan el acceso a:

Productos.

Perfiles de usuarios.

Carritos.

Pedidos.

La aplicación está diseñada para que cada usuario pueda acceder a sus
propios datos y que determinadas operaciones administrativas requieran
permisos de administrador.

📁 Estructura del proyecto

src/
├── assets/
│
├── components/
│ ├── Footer.tsx
│ ├── Footer.css
│ ├── Navbar.tsx
│ └── Navbar.css
│
├── context/
│ ├── AuthContext.tsx
│ └── CartContext.tsx
│
├── hooks/
│ ├── useMenu.ts
│ └── useOrder.ts
│
├── lib/
│ └── seed.ts
│
├── pages/
│ ├── Home.tsx
│ ├── Menu.tsx
│ ├── ProductDetail.tsx
│ ├── Login.tsx
│ ├── Register.tsx
│ ├── ForgotPassword.tsx
│ ├── Cart.tsx
│ ├── Checkout.tsx
│ ├── OrderConfirmation.tsx
│ ├── OrderTracking.tsx
│ └── Locations.tsx
│
├── types/
│ └── index.ts
│
├── App.tsx
├── App.css
├── index.css
├── firebase.ts
└── main.tsx

🧭 Rutas principales

La aplicación cuenta con las siguientes rutas:

Ruta Descripción

/ Página principal
/menu Menú completo
/menu/:id Detalle de un producto
/login Inicio de sesión
/registro Registro de usuario
/recuperar Recuperación de contraseña
/carrito Carrito de compras
/checkout Finalización del pedido
/confirmacion Confirmación del pedido
/seguimiento Seguimiento del pedido
/ubicaciones Ubicaciones del restaurante

🛒 Flujo de compra

El flujo principal de la aplicación es:

Usuario
↓
Registro / Login
↓
Menú
↓
Detalle del producto
↓
Agregar al carrito
↓
Carrito
↓
Checkout
↓
Crear pedido
↓
Confirmación
↓
Seguimiento del pedido

El carrito se sincroniza con Firestore cuando el usuario está
autenticado.

Los pedidos se almacenan en:

orders

y el seguimiento utiliza actualizaciones en tiempo real de Firestore.

🧪 Comandos disponibles

Ejecutar en desarrollo

npm run dev

Crear build de producción

npm run build

Revisar el código con ESLint

npm run lint

Previsualizar el build

Primero:

npm run build

Después:

npm run preview

🏗️ Build de producción

Para comprobar que el proyecto puede compilar correctamente:

npm run build

Si todo está correcto, Vite generará la carpeta:

dist/

🧯 Solución de problemas comunes

Error: npm is not recognized

Node.js no está instalado o no está agregado al PATH.

Solución:

Instalar Node.js LTS.

Cerrar la terminal.

Abrir una terminal nueva.

Ejecutar:

node -v
npm -v

Error: Cannot find module

Ejecutar:

npm install

y posteriormente:

npm run dev

El navegador muestra una pantalla en blanco

Primero revisar la terminal donde se ejecuta Vite.

Después revisar la consola del navegador:

F12
→ Console

Si aparece un error relacionado con React, Firebase o TypeScript,
revisar el archivo y la línea indicados por el error.

Error relacionado con Firebase

Revisar:

src/firebase.ts

y comprobar que la configuración de Firebase corresponda al proyecto
Firebase utilizado.

También comprobar que los servicios necesarios estén habilitados en
Firebase Console.

Error de permisos de Firestore

Si aparece:

FirebaseError: Missing or insufficient permissions

revisar:

firestore.rules

y comprobar que el usuario esté autenticado cuando la operación requiera
autenticación.

👥 Ejecución por varios integrantes del equipo

Cada integrante debe realizar estos pasos en su computador:

git clone <URL_DEL_REPOSITORIO>
cd goldenbite
npm install
npm run dev

Si el proyecto se entrega como ZIP:

1. Descargar ZIP
2. Extraer ZIP
3. Abrir la carpeta goldenbite
4. Abrir una terminal en esa carpeta
5. Ejecutar npm install
6. Ejecutar npm run dev
7. Abrir http://localhost:5173/

No se debe copiar la carpeta node_modules entre computadores. Cada
computador debe ejecutar:

npm install

para instalar sus propias dependencias.

📌 Notas importantes

No modificar package.json sin necesidad.

Después de descargar el proyecto, ejecutar siempre npm install.

Para desarrollo utilizar npm run dev.

Para comprobar la compilación utilizar npm run build.

Las credenciales y configuración de Firebase deben manejarse con
cuidado.

Las reglas de Firestore son parte importante de la seguridad de la
aplicación.

El archivo src/lib/seed.ts debe utilizarse con cuidado para no
insertar los mismos platos varias veces.

Los cambios realizados en el proyecto deben probarse antes de
subirlos al repositorio.
