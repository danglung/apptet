
import { FlashcardData, Question } from './types';

export const FLASHCARDS: FlashcardData[] = [
  {
    id: 'virus',
    title: 'Virus',
    definition: 'Là phần mềm có khả năng tự nhân bản và cần "tệp chủ" để lây lan từ máy này sang máy khác.',
    icon: '🦠',
    color: 'bg-red-400',
    image: 'https://picsum.photos/seed/virus/400/300'
  },
  {
    id: 'worm',
    title: 'Worm (Sâu máy tính)',
    definition: 'Có thể tự lan truyền qua mạng mà không cần tệp chủ hay sự can thiệp của con người.',
    icon: '🐛',
    color: 'bg-orange-400',
    image: 'https://picsum.photos/seed/worm/400/300'
  },
  {
    id: 'trojan',
    title: 'Trojan',
    definition: 'Giả dạng là một phần mềm hữu ích để lừa người dùng cài đặt, sau đó mới thực hiện hành vi phá hoại.',
    icon: '🐴',
    color: 'bg-blue-400',
    image: 'https://picsum.photos/seed/trojan/400/300'
  },
  {
    id: 'spyware',
    title: 'Spyware (Phần mềm gián điệp)',
    definition: 'Âm thầm theo dõi hoạt động của người dùng để đánh cắp thông tin cá nhân, mật khẩu.',
    icon: '🕵️',
    color: 'bg-purple-400',
    image: 'https://picsum.photos/seed/spyware/400/300'
  }
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    content: 'Nội dung nào sau đây KHÔNG được xem là nguy cơ trên không gian mạng?',
    options: [
      'A. Lộ thông tin cá nhân',
      'B. Bị nhiễm phần mềm độc hại',
      'C. Máy tính chạy nhanh hơn',
      'D. Bị lừa đảo qua Internet'
    ],
    answer: 'C',
    image: 'https://picsum.photos/seed/q1/200/200'
  },
  {
    id: 2,
    content: 'Phần mềm độc hại (malware) là gì?',
    options: [
      'A. Phần mềm gây hại cho hệ thống',
      'B. Phần mềm hỗ trợ học tập trực tuyến',
      'C. Phần mềm dùng để soạn thảo văn bản',
      'D. Phần mềm giúp bảo vệ dữ liệu'
    ],
    answer: 'A',
    image: 'https://picsum.photos/seed/q2/200/200'
  },
  {
    id: 3,
    content: 'Virus máy tính có đặc điểm nào sau đây?',
    options: [
      'A. Có khả năng tự nhân bản',
      'B. Chỉ hoạt động khi có Internet',
      'C. Không gây hại cho dữ liệu',
      'D. Chỉ tồn tại trên điện thoại'
    ],
    answer: 'A',
    image: 'https://picsum.photos/seed/q3/200/200'
  },
  {
    id: 4,
    content: 'Trojan thường nguy hiểm vì đặc điểm nào?',
    options: [
      'A. Giả dạng phần mềm hữu ích',
      'B. Tự sao chép rất nhanh',
      'C. Không cần người dùng cài đặt',
      'D. Chỉ gây chậm máy tạm thời'
    ],
    answer: 'A',
    image: 'https://picsum.photos/seed/q4/200/200'
  },
  {
    id: 5,
    content: 'Worm khác virus ở điểm nào?',
    options: [
      'A. Tự lan truyền không cần tệp chủ',
      'B. Chỉ lây nhiễm qua USB',
      'C. Không thể gây hại hệ thống',
      'D. Phải có người dùng kích hoạt'
    ],
    answer: 'A',
    image: 'https://picsum.photos/seed/q5/200/200'
  }
];
