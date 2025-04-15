# PRD - Hệ thống Quản lý Công chức/Viên chức cho Quỹ Phát triển Khoa học và Công nghệ Quốc gia

## Overview
Hệ thống nhằm số hóa quy trình quản lý hồ sơ lý lịch và toàn bộ quá trình công tác của công chức/viên chức, bao gồm: bổ nhiệm, điều động, khen thưởng, kỷ luật và nâng lương.

## Goals
- Tự động hóa quy trình quản lý hồ sơ và sự kiện nhân sự.
- Giảm thiểu sai sót thủ công và rút ngắn thời gian xử lý.
- Tăng tính minh bạch và truy vết của các quyết định hành chính.

## Features
1. **Quản lý hồ sơ lý lịch**  
   - Tạo, cập nhật, tra cứu hồ sơ.
   - Quản lý thông tin cá nhân, học vấn, quá trình công tác.

2. **Quản lý bổ nhiệm**  
   - Tạo đề xuất bổ nhiệm.
   - Phê duyệt, lưu trữ quyết định bổ nhiệm.

3. **Quản lý điều động**  
   - Ghi nhận điều chuyển nội bộ.
   - Cập nhật vị trí công tác.

4. **Quản lý khen thưởng**  
   - Theo dõi thành tích.
   - Lập và lưu quyết định khen thưởng.

5. **Quản lý kỷ luật**  
   - Ghi nhận vi phạm.
   - Lưu hồ sơ và quyết định kỷ luật.

6. **Quản lý nâng lương**  
   - Tự động tính thời hạn nâng lương.
   - Gợi ý và theo dõi quy trình xét nâng lương.

## User Roles
- **Admin**: toàn quyền quản trị hệ thống.
- **Nhân sự**: nhập liệu và theo dõi hồ sơ nhân sự.
- **Lãnh đạo**: duyệt quyết định, xem báo cáo.
- **Cán bộ**: xem và cập nhật hồ sơ cá nhân.

## User Stories
- `HR001`: Là nhân sự, tao muốn tạo hồ sơ cho cán bộ mới để lưu trữ thông tin cá nhân và công tác.
- `LD001`: Là lãnh đạo, tao muốn duyệt quyết định bổ nhiệm để đảm bảo quy trình minh bạch.
- `CB001`: Là cán bộ, tao muốn xem quá trình nâng lương của tao để theo dõi quyền lợi.

## Technical Requirements
- Frontend: Angular 17, TailwindCSS
- Backend: NestJS + mySql
- Auth: OAuth2 + Role-based access
- Hosting: Cloud-based hoặc On-premise (tùy theo yêu cầu bảo mật)
# Create Angular project
npx @angular/cli@17 new frontend --style=css --routing=true
cd frontend

# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
## Non-functional Requirements
- Bảo mật dữ liệu theo tiêu chuẩn ISO 27001
- Tốc độ phản hồi dưới 300ms
- Hệ thống hỗ trợ concurrent user: tối thiểu 500

## Acceptance Criteria
- Có thể thêm/sửa/xem/xóa hồ sơ cán bộ.
- Có thể tạo đề xuất và duyệt bổ nhiệm/khen thưởng/kỷ luật/nâng lương.
- Mỗi hành động đều được log và có thể truy vết.