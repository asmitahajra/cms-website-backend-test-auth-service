# npm install
sleep 35
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npm run start