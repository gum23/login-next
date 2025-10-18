## Proyecto Login
Sistema web login, register y reset pass, desarrollado con Next.js, MongoDB y Tailwind CSS.

## Descripción
Podrán crear nuevos usuarios que serán guardados en la base de datos. Estos podrán ver una lista de los usuarios existentes. De no recordar la contraseña, podrán recuperarla mediante email. Se usa el email registrado en el que recibirá una redirección mediante unu botón, el link contará con un token de corta duración pra actualizar la contraseña.

## 🧰 Tecnologías
- ⚛️ [Next.js](https://nextjs.org/)
- 🌿 [MongoDB](https://www.mongodb.com/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔐 [JWT (autenticación con tokens)](https://www.npmjs.com/package/jsonwebtoken)
- 📦 [Axios](https://axios-http.com/docs/intro)
- ✉ [NodeMailer](https://nodemailer.com/)

## Instalación

    1 - Cloná el repositorio
    git clone git@github.com:gum23/login-next.git

    2 - Entrá al directorio
    cd login-next

    3 - Instalá las dependencias
    npm install

    4 - Configuralas variables de enterono

    MONGODB_URI=tu_uri
    JWT_SECRET=clave_secreta
    EMAIL_USER=tu_user
    EMAIL_PASS=tu_pass

    5 - Inicia servidor
    npm tun dev

## Uso de la app
    - Registrate o inicia sesion
    - Recuperá la contraseña

## Estructura del proyecto
    |-/src/
    |   |-/app/
    |   |   |-/api/
    |   |   |   |-/auth/
    |   |   |   |   |-/login/
    |   |   |   |   |   |-route.js
    |   |   |   |   |-/logout/
    |   |   |   |   |   |-route.js
    |   |   |   |   |-/recover-pass/
    |   |   |   |   |   |-route.js
    |   |   |   |   |-/register/
    |   |   |   |   |   |-route.js
    |   |   |   |   |-/reset-pass/
    |   |   |   |   |   |-route.js
    |   |   |   |-/users/
    |   |   |   |   |-route.js
    |   |   |-/login/
    |   |   |   |-page.jsx
    |   |   |-/Not-Found/
    |   |   |   |-page.jsx
    |   |   |-/recover-pass/
    |   |   |   |-page.jsx
    |   |   |-/register/
    |   |   |   |-page.jsx
    |   |   |-/reset-pass/
    |   |   |   |-page.jsx
    |   |   |-/users/
    |   |   |   |-page.jsx
    |   |   |-globals.css
    |   |   |-layout.js
    |   |   |-page.jsx 
    |   |-/components/
    |   |   |-Loading.jsx
    |   |   |-NavBar.jsx
    |   |   |-UserItem.jsx
    |   |   |-UserList.jsx
    |   |-/lib/
    |   |   |-dbconnect.js
    |   |-/models/
    |   |   |-User.js
    |   |-/utils/
    |   |   |-auth.js
    |   |   |-config.js
    |   |-middleware.js
    |-README.md

    ##No agregué carpeta "public" por el momento no es requerida.

## API o Backend
## 📡 Endpoints principales
    1 - `POST /api/auth/login` ➡ Inicia sesion
    2 - `POST /api/auth/recover-pass` ➡ Verifica usuario y manda mail de recuperacion
    3 - `POST /api/auth/reset-pass` ➡ Resetear contraseña
    4 - `POST /api/auth/register` ➡ Crear nuevo usuario
    5 - `GET /api/users` ➡ Trae lista de usuarios

## 👤 Autor
**Eduardo Unrrein**  
Desarrollador web especializado en backend y frontend.  
📧 [gum23coder@gmail.com](mailto:gum23coder@gmail.com)

## 🪪 Licencia
Este proyecto está bajo la licencia MIT.  
Consultá el archivo [LICENSE](./LICENSE) para más información.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

