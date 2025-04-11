# 1. เลือก base image
FROM node:18-alpine AS builder

# 2. ตั้ง working directory
WORKDIR /app

# 3. คัดลอก package.json และ package-lock.json (หรือ yarn.lock)
COPY package*.json ./

# 4. ติดตั้ง dependencies
RUN npm install

# 5. คัดลอกโค้ดทั้งหมด
COPY . .

# 6. Build โปรเจกต์ด้วย Vite
RUN npm run build

# 7. ใช้ nginx สำหรับ production
FROM nginx:alpine

# 8. คัดลอกไฟล์ build ไป nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# 9. เปิด port
EXPOSE 80

# 10. รัน nginx
CMD ["nginx", "-g", "daemon off;"]