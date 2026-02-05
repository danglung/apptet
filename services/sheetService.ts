
import { StudentInfo } from '../types';

/**
 * URL của Google Sheet công khai (hoặc trang web hiển thị kết quả)
 * Bạn có thể thay thế link này bằng link Google Sheet thực tế của mình.
 */
export const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/your-actual-sheet-id/edit?usp=sharing';

/**
 * Hàm gửi dữ liệu (giả lập)
 * Trong thực tế, bạn sẽ gửi yêu cầu POST đến một Google Apps Script Web App.
 */
export const submitToGoogleSheet = async (data: StudentInfo) => {
  console.log('Đang gửi dữ liệu đến Google Sheet...', {
    'Họ tên': data.fullName,
    'Lớp': data.className,
    'Điểm': data.score,
    'Bắt đầu': data.startTime?.toLocaleString(),
    'Kết thúc': data.endTime?.toLocaleString(),
    'Thời gian (s)': data.startTime && data.endTime 
      ? Math.floor((data.endTime.getTime() - data.startTime.getTime()) / 1000) 
      : 0
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1200);
  });
};
