# Life Tarot

Ứng dụng xem vận may miễn phí bằng tiếng Việt. MVP hiện tập trung vào bốn luồng chính: Vận hôm nay, Tarot 1 lá, Tình duyên và Vận năm 2026.

## Cấu trúc chính

- CTA đầu tiên: `Xem vận hôm nay miễn phí`
- Menu chính: Vận hôm nay, Tarot, Tình duyên, Vận năm 2026
- Màn kết quả: 3 điểm chính, điểm hôm nay, tóm tắt tình cảm/tiền bạc/công việc/sức khỏe, quảng cáo, mở khóa chi tiết, ảnh chia sẻ, nhắc quay lại ngày mai
- Chi tiết: mở bằng nút `Xem quảng cáo để mở luận giải chi tiết`
- Lịch sử: lưu trên thiết bị, không cần đăng nhập

## Quảng cáo

Khi chưa có AdSense ID thật, app hiển thị placeholder có chiều cao cố định để tránh CLS. Sau này chỉ cần cấu hình các biến sau:

```html
<script>
  window.TODAY_FORTUNE_ADSENSE_CLIENT = "ca-pub-0000000000000000";
  window.TODAY_FORTUNE_ADSENSE_SLOTS = {
    "result-middle": "0000000000",
    "result-bottom": "1111111111"
  };
</script>
```

Không đặt quảng cáo ở màn đầu và quá trình nhập ngày sinh. Quảng cáo chỉ xuất hiện ở giữa/cuối màn kết quả và vùng mở khóa chi tiết.

## Google Analytics

GA4 Measurement ID đang nằm trong `index.html`:

```html
<meta name="ga4-measurement-id" content="G-Z9H39XQ9P1" />
```

Các event chính:

- `app_boot`
- `screen_view`
- `navigation_click`
- `input_flow_start`
- `entry_step_complete`
- `analysis_start`
- `result_complete`
- `detail_unlock_click`
- `detail_unlocked`
- `share_card_created`
- `share_card_saved`
- `reading_saved`
- `attendance_done`
- `tarot_card_drawn`

Tên, ngày sinh, giờ sinh và ngày phân tích không được gửi lên GA4.

## Chạy local

```bash
npm install
npm run local
```

Mở `http://127.0.0.1:5173`.

## Lưu ý pháp lý

Nội dung chỉ mang tính tham khảo và giải trí. Với các quyết định quan trọng về y tế, pháp lý, tài chính hoặc đầu tư, người dùng cần kiểm tra tình hình thực tế và tham khảo chuyên gia.
