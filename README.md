B1. Thay đổi username, password, database trong file config.json:

"development": {
    "username": "root",
    "password": "tinhkirito1",
    "database": "song-demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
B2. Mở terminal và chạy lệnh: npm i

B3. Mở terminal và chạy lệnh:

  npx sequelize-cli db:migrate (tạo table trong database)
  
  npx sequelize-cli db:seed:all (tạo data fake trong bảng user)

B4. Chạy lệnh npm start
  
