# Task Manager
URL de Aplicacion desplegada: [text](https://task-manager-seven-tawny.vercel.app/)

# Pasos para instalar localmente

Hay dos repositorios en Github, uno para el Frontend y otro para el Backend. 

Repositorio Frontend: https://github.com/JereDev8/Task_Manager_Front/tree/main
Repositorio Backend: https://github.com/JereDev8/Task_Manager_Back/tree/main

Sigue estos pasos para tener la aplicacion de manera local:

1) Crea una nueva carpeta en donde vayas a querer tener el codigo de la aplicacion
2) Abre una terminal dentro de la carpeta creada en el paso anterior y ejecuta los siguientes comandos:
    git clone https://github.com/JereDev8/Task_Manager_Back
    git clone https://github.com/JereDev8/Task_Manager_Front
    cd Task_Manager_Front
    npm install
    npm run dev

Hasta este punto vas a poder trabajar de manera local en el frontend de la aplicacion. 
Los siguientes pasos haran que puedas comunicarte con un backend local.

1) Ubicate en la carpeta Task_Manager_Back
2) Crea un archivo .env y crea las variables PORT y MONGO_URL.
   Elige el puerto que a ti te parezca conveniente y como Url de MongoDB elige si vas a trabajar con la de MongoDB Compass o con MongoDB Atlas.
3) Abre una terminal y ejecuta los siguientes comandos:
    npm install
    npm run dev

Luego de hacer estos pasos, podemos trabajar de manera aislada el Frontend y el Backend. En caso de querer desarrollar simultaneamente en ambos frentes de la aplicacion deberias tomar los siguientes pasos:

1) Ubicate nuevamente en el Frontend de la aplicacion.
2) Estando en el editor de codigo presiona Ctrl + F para buscar palabras en el codigo. 
3) Busca en cada componente y en App.jsx la palabra fetch y en cada fetch cambia la url por la de tu backend local. Por ejemplo si tu backend esta corriendo en el puerto 3000 entonces cambia la url https://taskmanagerback-production-8541.up.railway.app/api/tasks por http://localhost:3000/api/tasks

Haciendo estos pasos, podras tener el proyecto de manera local y funcional. 

WARNING: Asegurate que el frontend este corriendo en el puerto 5173, de esta manera no tendras problemas de CORS. 