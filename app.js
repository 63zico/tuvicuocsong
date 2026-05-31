const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const VERSION = "service-engine-1";

const elements = [
  { key: "wood", vi: "Mộc", symbol: "木", color: "#3a9cff", role: "Quan tinh" },
  { key: "fire", vi: "Hỏa", symbol: "火", color: "#ff5158", role: "Ấn tinh" },
  { key: "earth", vi: "Thổ", symbol: "土", color: "#f4c430", role: "Tỷ kiên" },
  { key: "metal", vi: "Kim", symbol: "金", color: "#f3f4f6", role: "Thực thương" },
  { key: "water", vi: "Thủy", symbol: "水", color: "#25272d", role: "Tài tinh" },
];

const stems = [
  { vi: "Giáp", han: "甲", element: "wood" },
  { vi: "Ất", han: "乙", element: "wood" },
  { vi: "Bính", han: "丙", element: "fire" },
  { vi: "Đinh", han: "丁", element: "fire" },
  { vi: "Mậu", han: "戊", element: "earth" },
  { vi: "Kỷ", han: "己", element: "earth" },
  { vi: "Canh", han: "庚", element: "metal" },
  { vi: "Tân", han: "辛", element: "metal" },
  { vi: "Nhâm", han: "壬", element: "water" },
  { vi: "Quý", han: "癸", element: "water" },
];

const branches = [
  { vi: "Tý", han: "子", element: "water", animal: "Chuột" },
  { vi: "Sửu", han: "丑", element: "earth", animal: "Trâu" },
  { vi: "Dần", han: "寅", element: "wood", animal: "Hổ" },
  { vi: "Mão", han: "卯", element: "wood", animal: "Mèo" },
  { vi: "Thìn", han: "辰", element: "earth", animal: "Rồng" },
  { vi: "Tỵ", han: "巳", element: "fire", animal: "Rắn" },
  { vi: "Ngọ", han: "午", element: "fire", animal: "Ngựa" },
  { vi: "Mùi", han: "未", element: "earth", animal: "Dê" },
  { vi: "Thân", han: "申", element: "metal", animal: "Khỉ" },
  { vi: "Dậu", han: "酉", element: "metal", animal: "Gà" },
  { vi: "Tuất", han: "戌", element: "earth", animal: "Chó" },
  { vi: "Hợi", han: "亥", element: "water", animal: "Heo" },
];

const tenGods = ["Chính Quan", "Thiên Quan", "Chính Ấn", "Thiên Ấn", "Tỷ Kiên", "Kiếp Tài", "Thực Thần", "Thương Quan", "Chính Tài", "Thiên Tài"];
const seasonalTags = ["Trường sinh", "Mộc dục", "Quan đới", "Lâm quan", "Đế vượng", "Suy", "Bệnh", "Tử", "Mộ", "Tuyệt", "Thai", "Dưỡng"];
const salTags = ["Thiên Ất", "Đào hoa", "Hoa cái", "Dịch mã", "Văn xương", "Quý nhân", "Thiên y", "Nguyệt đức", "Lộc thần", "Tướng tinh", "Hồng loan", "Thiên hỷ"];
const tenGodKo = ["정관", "편관", "정인", "편인", "비견", "겁재", "식신", "상관", "정재", "편재"];
const seasonalKo = ["장생", "목욕", "관대", "건록", "제왕", "쇠", "병", "사", "묘", "절", "태", "양"];
const salKo = ["천덕귀인", "도화살", "화개살", "역마살", "문창귀인", "귀문관살", "천의성", "월덕", "록신", "장성", "홍란", "천희"];
const elementKo = { wood: "목", fire: "화", earth: "토", metal: "금", water: "수" };
const elementRoleKo = { wood: "관성", fire: "인성", earth: "비겁", metal: "식상", water: "재성" };
const animalKo = {
  "Chuột": "쥐",
  "Trâu": "소",
  "Hổ": "호랑이",
  "Mèo": "토끼",
  "Rồng": "용",
  "Rắn": "뱀",
  "Ngựa": "말",
  "Dê": "양",
  "Khỉ": "원숭이",
  "Gà": "닭",
  "Chó": "개",
  "Heo": "돼지",
};
const animalEmoji = {
  "Chuột": "🐭",
  "Trâu": "🐮",
  "Hổ": "🐯",
  "Mèo": "🐰",
  "Rồng": "🐲",
  "Rắn": "🐍",
  "Ngựa": "🐴",
  "Dê": "🐑",
  "Khỉ": "🐵",
  "Gà": "🐔",
  "Chó": "🐶",
  "Heo": "🐷",
};
const stemElementKo = {
  wood: "나무木",
  fire: "불火",
  earth: "흙土",
  metal: "쇠金",
  water: "물水",
};

const serviceIcons = {
  year: `<svg viewBox="0 0 64 64"><path d="M16 25h30l6 13H22z"/><path d="M19 25V14h22v11"/><circle cx="31" cy="32" r="7"/><path d="M48 23h7m-4-4v8"/></svg>`,
  secret: `<svg viewBox="0 0 64 64"><rect x="25" y="12" width="17" height="22" rx="4"/><path d="M18 45h29M20 36l-6 6m0-6 6 6m34-7-6 6m0-6 6 6"/></svg>`,
  traditional: `<svg viewBox="0 0 64 64"><path d="M14 14h17v35H14zM33 14h17v35H33z"/><path d="M18 23h9M18 31h9M37 23h9M37 31h9"/><path d="M42 42l7 7 3-15z"/></svg>`,
  today: `<svg viewBox="0 0 64 64"><rect x="13" y="17" width="38" height="34" rx="6"/><path d="M21 12v10M43 12v10M13 27h38"/><circle cx="43" cy="43" r="8"/><path d="M39 43l3 3 6-7"/></svg>`,
  tomorrow: `<svg viewBox="0 0 64 64"><circle cx="31" cy="31" r="20"/><path d="M31 18v13l9 5"/><circle cx="45" cy="43" r="8"/><path d="M41 43h8m-3-3 3 3-3 3"/></svg>`,
  special: `<svg viewBox="0 0 64 64"><rect x="17" y="12" width="28" height="40" rx="5"/><path d="M23 22h16M23 30h12M23 38h10"/><circle cx="44" cy="43" r="9"/><path d="M39 45l4 4 8-13"/></svg>`,
  face: `<svg viewBox="0 0 64 64"><path d="M32 11c12 0 18 10 18 22 0 13-8 22-18 22s-18-9-18-22c0-12 6-22 18-22z"/><path d="M23 31c3-3 6-3 9 0m1 0c3-3 6-3 9 0M27 43c3 3 8 3 11 0"/><circle cx="32" cy="39" r="5"/></svg>`,
  psychology: `<svg viewBox="0 0 64 64"><circle cx="31" cy="31" r="22"/><path d="M31 43S19 36 19 27c0-5 6-8 12-2 6-6 12-3 12 2 0 9-12 16-12 16z"/></svg>`,
  couple: `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="22"/><path d="M23 27c0-6 8-7 9 0 1-7 9-6 9 0 0 7-9 12-9 12s-9-5-9-12z"/></svg>`,
  tarot: `<svg viewBox="0 0 64 64"><path d="M25 13h18v30H25z"/><path d="M19 20h18v30H19z"/><circle cx="40" cy="25" r="8"/><path d="M40 18v14M33 25h14"/></svg>`,
};

const services = [
  { id: "year", label: "Vận năm mới", tone: "Tổng quan 2026", title: "Vận năm mới", heading: "Xem xu hướng lớn trong năm", copy: "Cơ hội, điều cần tránh và nhịp hành động phù hợp." },
  { id: "secret", label: "Bí mật lá số", tone: "Cấu trúc ẩn", title: "Bí mật lá số", heading: "Đọc phần ẩn trong lá số", copy: "Tập trung vào ngũ hành, thập thần và điểm mất cân bằng." },
  { id: "traditional", label: "Tử vi truyền thống", tone: "Tứ trụ", title: "Tử vi truyền thống", heading: "Mở bảng tứ trụ cơ bản", copy: "Bảng năm, tháng, ngày, giờ theo phong cách truyền thống." },
  { id: "today", label: "Vận hôm nay", tone: "Miễn phí mỗi ngày", title: "Vận hôm nay", heading: "Xem nhịp vận khí trong ngày", copy: "Điểm vận khí, lời khuyên và phần cần chú ý hôm nay." },
  { id: "tomorrow", label: "Vận ngày mai", tone: "Chuẩn bị trước", title: "Vận ngày mai", heading: "Xem trước nhịp ngày mai", copy: "Hợp để chuẩn bị lịch, hẹn gặp và quyết định nhỏ." },
  { id: "special", label: "Ngày đặc biệt", tone: "Ngày chọn", title: "Ngày đặc biệt", heading: "Xem vận cho một ngày quan trọng", copy: "Dành cho ngày hẹn, ký việc, đi xa hoặc bắt đầu dự án." },
  { id: "face", label: "Xem tướng", tone: "Khí chất", title: "Xem tướng", heading: "Đọc khí chất cá nhân", copy: "Bản demo mô phỏng phong thái, chưa dùng camera." },
  { id: "psychology", label: "Tâm lý", tone: "Cảm xúc", title: "Tâm lý tình cảm", heading: "Xem kiểu phản ứng cảm xúc", copy: "Phù hợp để hiểu thói quen yêu, lo lắng và tự bảo vệ." },
  { id: "couple", label: "Cặp đôi", tone: "Tương hợp", title: "Cặp đôi", heading: "Xem nhịp hợp của hai người", copy: "Bản hiện tại đọc theo hồ sơ chính, phần hai hồ sơ sẽ mở sau." },
  { id: "tarot", label: "Tarot", tone: "Một lá bài", title: "Tarot hôm nay", heading: "Rút một lá để đọc tín hiệu hôm nay", copy: "Phù hợp khi bạn muốn một câu trả lời nhanh về tình cảm, tiền bạc hoặc lựa chọn trước mắt." },
  { id: "monthTarot", label: "Tarot tháng", tone: "Dòng chảy tháng", title: "Tarot tháng này", heading: "Xem nhịp may mắn trong tháng", copy: "Đọc xu hướng chính, điểm nên tiến và điểm nên chậm lại trong tháng này." },
  { id: "yearTarot", label: "Tarot 2026", tone: "Vận năm", title: "Tarot 2026", heading: "Đọc dòng chảy vận may năm 2026", copy: "Một trải bài cho thay đổi, cơ hội, lựa chọn lớn và nhịp phát triển trong năm." },
  { id: "loveTarot", label: "Tarot tình yêu", tone: "Tình cảm", title: "Tarot tình yêu 2026", heading: "Đọc dòng chảy tình yêu năm 2026", copy: "Xem điểm thu hút, thời điểm dễ gần nhau và điều cần nói thật trong tình cảm." },
  { id: "reunionTarot", label: "Tarot tái hợp", tone: "Nhớ thương", title: "Tarot tái hợp", heading: "Xem khả năng quay lại hoặc tiến gần", copy: "Dành cho mối quan hệ còn lửng lơ, người cũ, crush hoặc một lời chưa nói." },
  { id: "moneyTarot", label: "Tarot tài lộc", tone: "Tiền bạc", title: "Tarot tài lộc 2026", heading: "Đọc dòng chảy tiền bạc năm 2026", copy: "Xem nhịp thu chi, cơ hội tăng tiền và những khoản nên kiểm soát." },
  { id: "careerTarot", label: "Tarot sự nghiệp", tone: "Công việc", title: "Tarot công việc 2026", heading: "Đọc dòng chảy công việc năm 2026", copy: "Xem chuyển việc, học hành, cơ hội mới và thời điểm cần quyết đoán." },
  { id: "etcTarot", label: "Tarot khác", tone: "Câu hỏi riêng", title: "Tarot câu hỏi riêng", heading: "Rút bài cho điều bạn đang phân vân", copy: "Hợp với lựa chọn nhỏ, cảm giác khó gọi tên hoặc một quyết định cần thêm tín hiệu." },
];

const serviceUiCopy = {
  year: { label: "신년운세", tone: "2026 흐름", title: "신년운세", heading: "올해의 큰 흐름을 확인하세요", copy: "연애, 재물, 일, 관계에서 올해 강해지는 운과 조심할 구간을 분석합니다." },
  secret: { label: "토정비결", tone: "길흉 예측", title: "토정비결", heading: "올해의 길흉과 조심할 달", copy: "월별 길흉 흐름과 반드시 조심해야 할 선택을 토정비결식으로 풀어줍니다." },
  traditional: { label: "정통사주", tone: "원국 분석", title: "정통사주", heading: "사주팔자 원국을 정밀하게 풀이합니다", copy: "년주, 월주, 일주, 시주의 생극과 강약을 기준으로 기본 성향과 운의 방향을 분석합니다." },
  today: { label: "오늘의 운세", tone: "매일 무료", title: "오늘의 운세", heading: "오늘 나에게 필요한 운의 힌트", copy: "총운, 재물운, 연애운, 건강운을 오늘의 흐름에 맞춰 빠르게 확인합니다." },
  tomorrow: { label: "내일운세", tone: "미리보기", title: "내일운세", heading: "내일의 변수와 준비 포인트", copy: "내일 중요한 선택과 만남을 앞두고 미리 조심할 점과 기회 구간을 알려줍니다." },
  special: { label: "특정일 운세", tone: "중요한 날", title: "특정일 운세", heading: "중요한 날의 성사운을 봅니다", copy: "계약, 고백, 면접, 이동처럼 특별한 하루의 타이밍과 주의점을 분석합니다." },
  face: { label: "관상", tone: "인상운", title: "관상", heading: "나의 첫인상과 매력 흐름", copy: "현재는 데모 분석으로, 분위기와 표현 방식이 만드는 대인운을 중심으로 풀이합니다." },
  psychology: { label: "심리사주", tone: "마음 패턴", title: "심리사주", heading: "감정 습관과 관계 패턴 분석", copy: "사주 흐름을 심리 패턴으로 풀어 지금의 고민과 회복 포인트를 보여줍니다." },
  couple: { label: "궁합", tone: "상호작용", title: "궁합", heading: "두 사람의 끌림과 장기궁합", copy: "서로의 기운이 어디서 맞고 어디서 부딪히는지 관계 흐름을 분석합니다." },
  tarot: { label: "오늘의 타로", tone: "원카드", title: "오늘의 타로", heading: "오늘 필요한 카드 메시지", copy: "지금 가장 필요한 선택과 감정의 방향을 한 장의 카드로 확인합니다." },
  monthTarot: { label: "월간 타로", tone: "이번 달", title: "월간 타로", heading: "이번 달의 흐름과 기회", copy: "한 달 동안 강해지는 기회, 정체 구간, 회복 포인트를 타로로 분석합니다." },
  yearTarot: { label: "2026 타로", tone: "연간 예측", title: "2026 타로", heading: "2026년의 큰 변화와 선택", copy: "올해의 전환점, 성취운, 관계 흐름을 연간 타로로 확인합니다." },
  loveTarot: { label: "연애 타로", tone: "감정선", title: "연애 타로", heading: "상대와 나의 감정 흐름", copy: "설렘, 불안, 진전 가능성을 중심으로 연애운을 풀이합니다." },
  reunionTarot: { label: "재회 타로", tone: "다시 연결", title: "재회 타로", heading: "다시 이어질 가능성", copy: "미련, 연락운, 재시작 가능성을 현실적으로 분석합니다." },
  moneyTarot: { label: "금전 타로", tone: "돈 흐름", title: "금전 타로", heading: "수입과 지출의 흐름", copy: "돈이 들어오는 구간과 새는 지점을 타로 관점으로 확인합니다." },
  careerTarot: { label: "직업 타로", tone: "커리어", title: "직업 타로", heading: "일과 커리어의 다음 선택", copy: "성과운, 평판운, 이동운을 중심으로 커리어 방향을 봅니다." },
  etcTarot: { label: "질문 타로", tone: "맞춤 질문", title: "질문 타로", heading: "지금 고민에 대한 카드 답변", copy: "한 가지 질문에 집중해 선택 기준과 조심할 변수를 확인합니다." },
};

services.forEach((service) => Object.assign(service, serviceUiCopy[service.id] || {}));

const serviceCopy = {
  year: ["Năm này nên chọn một hướng dài hạn", "Vận năm nghiêng về tích lũy. Bạn hợp với cách đi chậm, giữ tiêu chuẩn rõ và tránh đổi hướng vì áp lực ngắn hạn."],
  secret: ["Điểm mạnh nằm ở khả năng tự chỉnh nhịp", "Lá số cho thấy bạn phát huy tốt khi có khuôn khổ. Môi trường quá lộn xộn sẽ làm bạn mất năng lượng nhanh."],
  traditional: ["Tứ trụ cần cân bằng sinh khắc", "Các trụ có cả lực đẩy và lực giữ. Khi chọn đúng thời điểm, bạn có thể biến áp lực thành nhịp tiến đều."],
  today: ["Bạn càng bình tĩnh càng mạnh", "Hôm nay hợp với việc có kế hoạch, tránh quyết định vội và giữ nhịp ổn định."],
  tomorrow: ["Ngày mai nên chuẩn bị trước", "Nếu có việc quan trọng, hãy viết trước ba điều cần nói. Cách này giúp bạn không bị cuốn theo người khác."],
  special: ["Ngày này hợp để chọn việc rõ ràng", "Đừng ôm quá nhiều kỳ vọng trong một lần. Chọn mục tiêu chính và giữ biên an toàn."],
  face: ["Khí chất hợp với sự tin cậy", "Bạn tạo cảm giác ổn định khi nói ít nhưng chắc. Điều cần thêm là biểu đạt mềm hơn để người khác dễ đến gần."],
  psychology: ["Bạn nhạy nhưng không thích bị nhìn thấu", "Càng quan trọng, bạn càng quan sát kỹ. Bạn cần thời gian riêng trước khi mở lòng hoàn toàn."],
  couple: ["Quan hệ tốt khi tôn trọng nhịp riêng", "Bạn hợp với người nói rõ ràng và không ép phản hồi ngay. Khoảng riêng giúp cảm xúc bền hơn."],
  tarot: ["Lá bài hôm nay nghiêng về sự chậm lại", "Đừng vội kết luận chỉ vì một tín hiệu nhỏ. Hôm nay phù hợp để quan sát thêm, hỏi một câu rõ ràng hơn và chọn điều khiến bạn nhẹ lòng nhất."],
  monthTarot: ["Tháng này nên chọn một việc chính", "Các lá bài nhắc bạn bớt phân tán. Việc nào có thể đo được tiến triển thì nên làm trước, việc nào chỉ khiến tâm trạng nặng hơn thì nên để sang nhịp sau."],
  yearTarot: ["2026 là năm mở rộng có chọn lọc", "Vận năm không thúc bạn chạy nhanh, mà yêu cầu bạn chọn đúng bàn chơi. Khi một cơ hội xuất hiện, hãy xem nó có giúp bạn ổn định hơn sau ba tháng hay chỉ khiến bạn bận hơn."],
  loveTarot: ["Tình cảm cần sự rõ ràng dịu dàng", "Năm nay tình yêu tốt khi bạn dám nói nhu cầu thật mà không biến nó thành áp lực. Người hợp với bạn là người giữ lời nhỏ, không chỉ nói những câu lớn."],
  reunionTarot: ["Có thể còn duyên, nhưng cần cách mới", "Nếu muốn quay lại hoặc tiến gần, điều quan trọng không phải là ai nhắn trước mà là hai người có còn lặp lại kiểu tổn thương cũ hay không."],
  moneyTarot: ["Tài lộc đến từ nhịp đều", "Tiền bạc năm nay hợp với cách tích lũy nhỏ, thử phản ứng thị trường và giữ quỹ an toàn. Tránh quyết định tài chính chỉ vì sợ bỏ lỡ."],
  careerTarot: ["Công việc mở ra khi bạn dám đổi vai", "Bạn có cơ hội nhận trách nhiệm mới hoặc đổi hướng học tập. Điểm cần nhớ là đừng chứng minh bằng kiệt sức, hãy chứng minh bằng kết quả có hệ thống."],
  etcTarot: ["Câu trả lời nằm ở cảm giác nhẹ hơn", "Khi có hai lựa chọn gần như ngang nhau, hãy chọn điều giúp bạn ngủ yên hơn và ít phải giải thích bản thân hơn."],
};

Object.assign(serviceCopy, {
  year: ["2026년 전체 흐름은 확장보다 선택과 집중에 가깝습니다.", "신년운세는 올해의 대운, 세운, 오행 균형을 함께 보며 어느 시기에 움직이고 어느 시기에 지켜야 하는지 알려줍니다."],
  secret: ["올해 토정비결은 길한 달과 조심할 달의 차이가 뚜렷합니다.", "토정비결은 월별 길흉과 피해야 할 선택을 중심으로 봅니다. 좋은 운이 들어오는 때를 놓치지 말고, 불리한 달에는 무리한 약속과 지출을 줄이세요."],
  traditional: ["정통사주는 원국의 강약과 생극 관계가 핵심입니다.", "년주, 월주, 일주, 시주의 구조를 바탕으로 타고난 성향, 사회적 역할, 관계에서 반복되는 패턴을 정밀하게 풀이합니다."],
  today: ["오늘은 작게 움직여도 반응이 빨리 오는 날입니다.", "오늘의 운세는 총운, 재물운, 연애운, 건강운을 시간대별 흐름으로 봅니다. 지금 해야 할 일과 미뤄야 할 일을 나누는 것이 중요합니다."],
  tomorrow: ["내일은 준비한 사람이 훨씬 유리한 흐름입니다.", "내일운세는 갑자기 생길 변수와 미리 챙겨야 할 포인트를 봅니다. 오늘 밤에 정리한 계획이 내일의 실수를 줄여줍니다."],
  special: ["지정일 운세는 그날의 성사운과 타이밍을 보는 풀이입니다.", "계약, 고백, 면접, 이동처럼 중요한 하루는 운의 온도가 다릅니다. 그날 밀어붙일 일과 피해야 할 행동을 분리해서 보세요."],
  face: ["관상은 첫인상, 신뢰감, 표현력이 만드는 운을 봅니다.", "지금은 강한 인상보다 편안하게 다가가는 태도가 더 유리합니다. 말투와 표정의 온도를 맞추면 대인운이 좋아집니다."],
  psychology: ["심리풀이는 마음의 반응 패턴과 회복 속도를 봅니다.", "겉으로는 괜찮아 보여도 속으로는 생각이 많은 흐름입니다. 감정을 오래 묵히기보다 짧게 정리해 표현하는 것이 좋습니다."],
  couple: ["짝궁합은 끌림보다 오래 맞춰갈 수 있는 리듬을 봅니다.", "서로의 성향이 어디에서 맞고 어디에서 부딪히는지 분석합니다. 좋은 궁합은 감정의 크기보다 대화 방식에서 결정됩니다."],
});

const serviceAnalysisProfiles = {
  year: {
    kicker: "YEAR FLOW",
    title: "신년운세 장기 흐름 분석",
    metrics: ["확장운", "유지력", "전환점"],
    weights: [0.72, 0.64, 0.86],
    summary: [
      "올해는 무리하게 판을 키우기보다, 이미 가진 자원을 어디에 집중할지 정하는 것이 운의 핵심입니다.",
      "큰 변화는 한 번에 오지 않고 작은 선택이 누적되며 만들어집니다. 상반기에는 기반, 하반기에는 실행력이 중요합니다.",
      "올해의 운은 속도보다 방향성에 민감합니다. 오래 끌고 갈 관계와 일을 먼저 고르면 손실이 줄어듭니다.",
    ],
    focus: [
      "연간 운에서는 대운의 방향과 일간의 체력, 부족한 오행의 보완 여부를 함께 봅니다.",
      "좋은 기회가 와도 사주의 균형이 약하면 지속력이 떨어지므로, 반복 가능한 루틴이 먼저입니다.",
      "새로운 시도는 2개 이하로 좁히고, 이미 결과가 보이는 영역에 힘을 더 실어야 합니다.",
    ],
    risk: [
      "주변 분위기에 밀려 결정하면 올해 중반부터 피로가 커질 수 있습니다.",
      "좋은 제안처럼 보여도 책임 범위가 불명확한 일은 뒤탈이 남기 쉽습니다.",
      "금전과 관계를 동시에 걸어야 하는 선택은 올해 가장 조심해야 할 패턴입니다.",
    ],
    action: [
      "이번 달 안에 올해의 핵심 목표를 하나만 정하고, 나머지는 보조 목표로 낮춰두세요.",
      "계약, 이직, 투자처럼 큰 결정은 최소 하루 이상 시간을 두고 다시 검토하세요.",
      "운을 살리려면 새 계획보다 끊어진 계획 하나를 다시 살리는 쪽이 유리합니다.",
    ],
  },
  secret: {
    kicker: "TOJEONG FLOW",
    title: "토정비결 월별 길흉 분석",
    metrics: ["길운", "흉살주의", "피할 선택"],
    weights: [0.82, 0.54, 0.76],
    summary: [
      "올해의 토정비결은 좋은 달과 조심할 달의 차이가 뚜렷합니다. 운이 좋을 때 크게 움직이고, 불리한 때는 지키는 전략이 맞습니다.",
      "길운은 들어오지만 한 번에 무리하면 흉으로 바뀔 수 있습니다. 시기 선택이 올해 성패를 가릅니다.",
      "올해는 새로운 인연과 제안이 들어오되, 약속과 돈이 함께 묶이는 선택은 신중해야 합니다.",
    ],
    focus: [
      "토정비결은 월운의 상승과 하강을 기준으로 언제 움직이고 언제 멈춰야 하는지 봅니다.",
      "상반기는 준비와 정리, 하반기는 선택과 확장의 흐름이 강하게 들어옵니다.",
      "올해는 멀리 보고 움직이는 일에는 길하지만, 즉흥적인 지출과 말실수에는 약한 편입니다.",
    ],
    risk: [
      "좋은 제안이라도 조건이 흐릿하면 나중에 책임만 남을 수 있습니다.",
      "운이 오른다고 느껴질수록 과감함과 무모함을 구분해야 합니다.",
      "가까운 사람과 돈이 얽히는 일은 올해 가장 조심해야 할 흉 포인트입니다.",
    ],
    action: [
      "중요한 결정은 바로 하지 말고 하루를 넘겨 다시 확인하세요.",
      "올해는 새로 늘리는 일보다 불필요한 지출과 약속을 줄이는 것이 먼저입니다.",
      "운을 살리려면 좋은 달에는 실행하고, 불안한 달에는 정리하는 리듬을 만드세요.",
    ],
  },
  traditional: {
    kicker: "CLASSIC CHART",
    title: "정통 사주 원국 분석",
    metrics: ["격국 안정", "용신 적합", "세운 반응"],
    weights: [0.82, 0.72, 0.68],
    summary: [
      "정통 사주는 일간의 세력, 월지의 계절감, 오행의 생극을 함께 보아 전체 구조를 판단합니다.",
      "지금의 핵심은 강한 기운을 더 키우는 것이 아니라, 부족한 기운을 어떤 방식으로 보완하느냐입니다.",
      "원국의 균형이 완전히 나쁘지는 않지만, 특정 상황에서 같은 약점이 반복될 가능성이 있습니다.",
    ],
    focus: [
      "월지와 일간의 관계를 중심으로 사회적 역할과 실제 성향의 차이를 읽습니다.",
      "용신은 단순히 부족한 오행이 아니라, 전체 흐름을 가장 부드럽게 만드는 기운입니다.",
      "대인관계에서는 말보다 태도, 일에서는 속도보다 완성도가 운을 끌어올립니다.",
    ],
    risk: [
      "강한 오행을 계속 자극하면 자신감이 고집으로 변하기 쉽습니다.",
      "부족한 기운을 보완하지 않으면 좋은 기회 앞에서도 체력과 집중력이 먼저 흔들립니다.",
      "정통 사주상 급한 결정보다 순서를 정하지 않은 상태가 더 큰 문제입니다.",
    ],
    action: [
      "해야 할 일을 세 단계로 나누고, 가장 작은 단계부터 바로 끝내세요.",
      "관계에서는 설명을 줄이기보다 핵심 의도를 먼저 말하는 것이 좋습니다.",
      "이번 운에서는 생활 리듬을 정리하는 것이 가장 현실적인 개운법입니다.",
    ],
  },
  today: {
    kicker: "TODAY SCORE",
    title: "오늘의 운세 실시간 분석",
    metrics: ["총운", "관계운", "실행운"],
    weights: [0.78, 0.68, 0.84],
    summary: [
      "오늘은 기동력과 순발력을 발휘해야 하는 하루입니다.",
      "차분하게 정리하면 예상보다 좋은 반응을 얻을 수 있는 날입니다.",
      "말보다 행동이 운을 당기는 날이니 작은 일부터 바로 처리하는 편이 좋습니다.",
    ],
    focus: [
      "오늘은 오전보다 오후의 흐름이 더 안정적입니다. 중요한 말은 한 번 더 정리한 뒤 꺼내세요.",
      "사람을 설득하기보다 상황을 먼저 정리하면 자연스럽게 유리해집니다.",
      "작은 성과를 빠르게 만드는 것이 오늘의 운을 가장 잘 쓰는 방식입니다.",
    ],
    risk: [
      "성급하게 답하면 나중에 수정할 일이 생길 수 있습니다.",
      "감정이 올라오는 순간에는 바로 결정하지 않는 편이 좋습니다.",
      "해야 할 일을 미루면 저녁에 피로가 몰릴 수 있습니다.",
    ],
    action: [
      "오늘 가장 중요한 일 하나를 먼저 끝내세요.",
      "연락은 짧고 정확하게, 약속은 여유 시간을 두고 잡는 것이 좋습니다.",
      "운을 끌어올리려면 책상이나 휴대폰 알림처럼 자주 보는 곳부터 정리하세요.",
    ],
  },
  tomorrow: {
    kicker: "TOMORROW PREP",
    title: "내일운세 선행 분석",
    metrics: ["준비운", "변수", "회복력"],
    weights: [0.86, 0.62, 0.74],
    summary: [
      "내일은 미리 정리한 사람이 유리합니다. 오늘 밤의 준비가 내일의 운을 크게 바꿉니다.",
      "변수가 생겨도 당황하지 않으면 오히려 좋은 방향으로 흐름을 돌릴 수 있습니다.",
      "내일의 운은 계획표보다 우선순위에 반응합니다.",
    ],
    focus: [
      "내일 해야 할 일을 세 개 이하로 줄이면 집중력이 살아납니다.",
      "대화가 필요한 일은 먼저 메시지를 보내 흐름을 만들어두세요.",
      "준비한 만큼 운이 따라오는 구조라 즉흥성보다 사전 정리가 중요합니다.",
    ],
    risk: [
      "내일 아침에 모든 것을 결정하려 하면 선택지가 좁아집니다.",
      "예상보다 주변 요청이 많아질 수 있어 여유 시간을 남겨야 합니다.",
      "기분에 따라 약속을 잡으면 체력이 빨리 떨어질 수 있습니다.",
    ],
    action: [
      "잠들기 전 내일의 첫 행동을 정해두세요.",
      "가방, 문서, 연락처처럼 실수하기 쉬운 항목을 미리 확인하세요.",
      "중요한 결정은 오전보다 점심 이후가 더 안정적입니다.",
    ],
  },
  special: {
    kicker: "SPECIAL DAY",
    title: "특정일 운세 이벤트 분석",
    metrics: ["성사운", "긴장도", "타이밍"],
    weights: [0.84, 0.56, 0.88],
    summary: [
      "특정일 운세는 그날의 기운과 내 사주의 충돌 여부를 보는 것이 핵심입니다.",
      "중요한 날일수록 결과보다 준비 순서가 운의 질을 결정합니다.",
      "이 날은 한 가지 목표에 집중할수록 성사 가능성이 올라갑니다.",
    ],
    focus: [
      "만남, 계약, 이동처럼 외부 변수가 있는 일정은 시간 여유가 곧 운입니다.",
      "내가 통제할 수 있는 부분과 맡겨야 하는 부분을 구분해야 합니다.",
      "말을 많이 하기보다 핵심 자료나 증거를 준비하는 쪽이 유리합니다.",
    ],
    risk: [
      "기대가 커질수록 작은 변수에도 흔들릴 수 있습니다.",
      "상대 반응을 너무 빨리 해석하면 오판하기 쉽습니다.",
      "일정을 빡빡하게 잡으면 좋은 흐름도 급하게 소모됩니다.",
    ],
    action: [
      "그날 반드시 지켜야 할 기준 하나를 정하세요.",
      "중요한 일정 앞뒤로 30분 이상 여유를 남겨두세요.",
      "결과를 재촉하기보다 다음 연락이나 후속 행동까지 준비하세요.",
    ],
  },
  face: {
    kicker: "FACE FLOW",
    title: "관상 기반 인상운 분석",
    metrics: ["신뢰감", "표현력", "매력운"],
    weights: [0.74, 0.82, 0.68],
    summary: [
      "관상운은 타인이 처음 느끼는 분위기와 실제 성향의 차이를 보는 분석입니다.",
      "지금은 강한 인상보다 편안하게 다가가는 태도가 더 큰 운을 만듭니다.",
      "겉으로 보이는 자신감과 말투의 온도를 맞추면 대인운이 좋아집니다.",
    ],
    focus: [
      "표정과 말의 속도가 신뢰도를 크게 좌우하는 흐름입니다.",
      "첫인상은 차분하지만 가까워질수록 개성이 드러나는 타입입니다.",
      "중요한 자리에서는 선명한 문장 하나가 긴 설명보다 효과적입니다.",
    ],
    risk: [
      "무표정이 오래 지속되면 상대가 거리감으로 해석할 수 있습니다.",
      "강하게 보이려는 태도는 오히려 방어적으로 보일 수 있습니다.",
      "상대 반응을 살피지 않고 설명이 길어지면 매력이 줄어듭니다.",
    ],
    action: [
      "처음 만나는 자리에서는 질문 하나를 먼저 준비하세요.",
      "말끝을 흐리지 말고 짧게 마무리하는 연습이 좋습니다.",
      "오늘은 밝은 색 포인트나 깔끔한 정돈감이 운을 돕습니다.",
    ],
  },
  psychology: {
    kicker: "MIND PATTERN",
    title: "심리 사주 패턴 분석",
    metrics: ["감정 민감도", "회복속도", "관계욕구"],
    weights: [0.7, 0.78, 0.66],
    summary: [
      "심리운은 사주에서 반복되는 반응 습관과 마음의 피로도를 함께 봅니다.",
      "당신은 겉보다 속에서 더 많은 계산과 배려가 일어나는 타입입니다.",
      "요즘의 핵심은 더 버티는 것이 아니라 감정의 출구를 만드는 것입니다.",
    ],
    focus: [
      "내가 힘든 이유를 설명하기 전에 먼저 몸의 피로부터 확인해야 합니다.",
      "좋아하는 사람에게는 기준이 높아지고, 불편한 사람에게는 침묵이 길어질 수 있습니다.",
      "감정이 흔들릴 때는 결론보다 상태를 먼저 말하는 것이 관계를 지킵니다.",
    ],
    risk: [
      "괜찮은 척이 길어지면 어느 순간 갑자기 거리를 두게 됩니다.",
      "상대의 기분까지 책임지려 하면 내 운이 빨리 소진됩니다.",
      "작은 서운함을 오래 묵히면 큰 판단으로 변할 수 있습니다.",
    ],
    action: [
      "오늘 느낀 감정을 세 단어로만 적어보세요.",
      "답장을 늦추더라도 감정이 정리된 뒤 보내는 편이 좋습니다.",
      "혼자 쉬는 시간을 죄책감 없이 확보하는 것이 가장 강한 처방입니다.",
    ],
  },
  couple: {
    kicker: "MATCH FLOW",
    title: "궁합 상호작용 분석",
    metrics: ["끌림", "소통", "장기궁합"],
    weights: [0.86, 0.64, 0.76],
    summary: [
      "궁합은 단순히 잘 맞는지보다, 서로의 부족한 기운을 어떻게 건드리는지가 중요합니다.",
      "끌림은 있지만 속도가 다르면 오해가 생길 수 있어 대화의 리듬을 맞추는 것이 핵심입니다.",
      "이 관계는 감정의 온도보다 생활 방식의 합이 장기 흐름을 좌우합니다.",
    ],
    focus: [
      "상대의 반응을 시험하기보다 원하는 방식을 직접 말할수록 궁합이 좋아집니다.",
      "서로의 장점이 다르기 때문에 역할을 나누면 관계가 안정됩니다.",
      "좋아하는 마음이 클수록 기대를 말로 확인해야 합니다.",
    ],
    risk: [
      "침묵을 배려로 착각하면 상대는 거리감으로 받아들일 수 있습니다.",
      "한쪽이 계속 맞추는 구조가 되면 장기궁합이 약해집니다.",
      "질투나 불안이 생겼을 때 돌려 말하면 갈등이 길어질 수 있습니다.",
    ],
    action: [
      "오늘은 상대에게 원하는 것 하나를 부드럽게 말해보세요.",
      "관계의 속도를 정할 때는 감정뿐 아니라 생활 리듬도 함께 보세요.",
      "좋은 궁합을 만들려면 연락 빈도보다 약속의 신뢰도를 높이는 것이 중요합니다.",
    ],
  },
  tarot: {
    kicker: "ONE CARD",
    title: "오늘의 타로 원카드 해석",
    metrics: ["직감", "선택", "메시지"],
    weights: [0.88, 0.68, 0.8],
    summary: [
      "오늘의 카드는 지금 가장 먼저 확인해야 할 감정과 선택의 방향을 보여줍니다.",
      "답은 복잡한 계산보다 이미 마음이 반응한 쪽에 가까이 있습니다.",
      "오늘 타로는 결론을 재촉하지 말고 상황의 신호를 읽으라고 말합니다.",
    ],
    focus: [
      "카드는 지금 붙잡고 있는 생각보다 실제로 움직일 수 있는 선택을 강조합니다.",
      "마음이 가벼워지는 쪽이 현재의 정답에 가깝습니다.",
      "새로운 정보를 기다리기보다 이미 나온 신호를 정리해야 합니다.",
    ],
    risk: [
      "불안한 마음으로 같은 질문을 반복하면 해석이 흐려집니다.",
      "상대의 마음을 단정하면 내 선택권이 줄어듭니다.",
      "결과만 보려 하면 과정에서 오는 힌트를 놓칠 수 있습니다.",
    ],
    action: [
      "오늘 질문을 하나로 좁히고, 그 질문에 대한 첫 느낌을 기록하세요.",
      "선택지가 두 개라면 덜 무거운 쪽부터 작은 행동을 해보세요.",
      "답을 기다리는 동안 내가 할 수 있는 준비 하나를 끝내세요.",
    ],
  },
  monthTarot: {
    kicker: "MONTH TAROT",
    title: "월간 타로 흐름 분석",
    metrics: ["월간기회", "정체구간", "회복운"],
    weights: [0.76, 0.58, 0.84],
    summary: [
      "이번 달은 여러 일을 동시에 벌이기보다 하나의 흐름을 끝까지 밀어야 운이 열립니다.",
      "초반에는 정리, 중반에는 선택, 후반에는 결과 확인의 리듬이 강합니다.",
      "월간 타로는 기다림보다 반복 행동에서 변화가 생긴다고 말합니다.",
    ],
    focus: [
      "이번 달의 핵심 키워드는 지속성입니다. 하루에 많이 하기보다 매일 남기는 것이 중요합니다.",
      "관계와 돈 문제는 감정이 섞이면 판단이 느려질 수 있습니다.",
      "월말에 좋은 결과를 보려면 월초의 기준을 너무 자주 바꾸지 않아야 합니다.",
    ],
    risk: [
      "새로운 자극이 많아질수록 기존 약속이 흐트러질 수 있습니다.",
      "중간에 성과가 안 보인다고 방향을 바꾸면 운이 분산됩니다.",
      "돈과 감정이 동시에 걸린 선택은 한 번 더 검토해야 합니다.",
    ],
    action: [
      "이번 달 꼭 지킬 루틴 하나를 정하세요.",
      "계획표보다 중간 점검 날짜를 먼저 잡는 것이 좋습니다.",
      "월말 보상을 미리 정해두면 흐름을 유지하기 쉽습니다.",
    ],
  },
  yearTarot: {
    kicker: "2026 TAROT",
    title: "2026 타로 연간 예측",
    metrics: ["변화운", "성취운", "보호운"],
    weights: [0.84, 0.74, 0.64],
    summary: [
      "2026년은 익숙한 선택을 반복할지, 더 큰 판으로 옮겨갈지 결정하는 해입니다.",
      "연간 타로는 한 번의 대박보다 방향 전환 후 쌓이는 성취를 강하게 보여줍니다.",
      "올해는 관계와 일 모두에서 나의 기준을 분명히 세울수록 운이 좋아집니다.",
    ],
    focus: [
      "상반기에는 정리와 준비, 하반기에는 공개와 확장의 운이 강합니다.",
      "나를 오래 붙잡던 문제에서 벗어날 수 있지만, 결정을 미루면 기회도 늦어집니다.",
      "사람을 많이 만나는 것보다 나에게 맞는 무리를 고르는 것이 중요합니다.",
    ],
    risk: [
      "큰 변화를 원하면서도 과거 방식에 머무르면 답답함이 커집니다.",
      "모두에게 좋은 사람으로 남으려 하면 중요한 선택을 놓칠 수 있습니다.",
      "무리한 확장보다 준비 없는 확장이 더 위험합니다.",
    ],
    action: [
      "2026년에 버릴 습관 하나와 키울 습관 하나를 정하세요.",
      "새로운 일은 3개월 유지 가능한 방식인지 먼저 검토하세요.",
      "올해의 키워드를 한 문장으로 적어 자주 보는 곳에 두세요.",
    ],
  },
  loveTarot: {
    kicker: "LOVE TAROT",
    title: "연애 타로 감정선 분석",
    metrics: ["끌림", "진전운", "안정감"],
    weights: [0.9, 0.7, 0.62],
    summary: [
      "연애운은 상대의 마음보다 내 마음이 어떤 신호에 반응하는지 먼저 봐야 합니다.",
      "지금은 설렘과 불안이 함께 움직이기 쉬운 흐름입니다.",
      "좋은 인연은 빠른 확신보다 편안한 반복에서 더 선명해집니다.",
    ],
    focus: [
      "상대의 말보다 행동의 일관성을 보는 것이 중요합니다.",
      "연애에서는 내가 원하는 관계의 모양을 먼저 인정해야 합니다.",
      "감정 표현을 아끼면 오해가 생기고, 너무 몰아붙이면 상대가 물러날 수 있습니다.",
    ],
    risk: [
      "혼자 의미를 크게 부여하면 작은 반응에도 흔들립니다.",
      "확인받고 싶은 마음이 커질수록 대화가 시험처럼 느껴질 수 있습니다.",
      "과거의 상처를 현재 상대에게 덧씌우지 않도록 조심하세요.",
    ],
    action: [
      "연락을 기다리기보다 가벼운 제안 하나를 먼저 해보세요.",
      "오늘은 마음을 길게 설명하기보다 짧고 따뜻하게 표현하세요.",
      "관계의 속도가 불안하다면 나에게 필요한 기준을 먼저 적어보세요.",
    ],
  },
  reunionTarot: {
    kicker: "REUNION TAROT",
    title: "재회 타로 가능성 분석",
    metrics: ["미련", "연결운", "재시작"],
    weights: [0.82, 0.66, 0.72],
    summary: [
      "재회운은 돌아올 가능성보다 같은 문제가 반복되지 않을 준비가 되었는지를 봅니다.",
      "아직 감정의 끈은 남아 있지만, 방식이 바뀌지 않으면 관계도 같은 자리로 돌아갑니다.",
      "지금은 먼저 연락할지보다 연락 후 무엇을 다르게 할지가 더 중요합니다.",
    ],
    focus: [
      "상대의 마음보다 두 사람 사이에 남은 미해결 감정을 읽어야 합니다.",
      "재회 가능성은 있지만 서두르면 방어적인 반응이 나올 수 있습니다.",
      "그리움과 현실성을 분리해야 정확한 선택이 가능합니다.",
    ],
    risk: [
      "외로움 때문에 연락하면 대화가 다시 흐려질 수 있습니다.",
      "지난 문제를 덮고 시작하면 같은 갈등이 빨리 돌아옵니다.",
      "상대 반응을 과하게 해석하면 내 생활 리듬이 흔들립니다.",
    ],
    action: [
      "연락 전 하고 싶은 말과 하지 말아야 할 말을 따로 적으세요.",
      "재회를 원한다면 사과, 설명, 요청 중 하나만 먼저 선택하세요.",
      "상대의 답보다 내 기준을 지키는 것이 재회운을 안정시킵니다.",
    ],
  },
  moneyTarot: {
    kicker: "MONEY TAROT",
    title: "금전 타로 자금 흐름 분석",
    metrics: ["수입운", "지출위험", "축적운"],
    weights: [0.78, 0.54, 0.86],
    summary: [
      "금전운은 들어오는 돈보다 새는 돈을 먼저 잡을 때 좋아집니다.",
      "이번 흐름은 큰 한 방보다 작은 수익과 절약이 쌓이는 구조입니다.",
      "돈과 감정이 섞인 소비를 줄이면 생각보다 빠르게 안정됩니다.",
    ],
    focus: [
      "지금은 투자보다 현금 흐름을 확인하는 쪽이 유리합니다.",
      "새 수입 기회는 있지만 조건을 꼼꼼히 봐야 실제 이익이 남습니다.",
      "금전운을 키우려면 자동으로 빠져나가는 비용부터 점검하세요.",
    ],
    risk: [
      "기분 전환성 소비가 반복되면 작은 지출이 크게 쌓입니다.",
      "남의 성공담을 보고 따라가는 결정은 손실 위험이 있습니다.",
      "빌려주거나 함께 쓰는 돈은 관계까지 흔들 수 있습니다.",
    ],
    action: [
      "오늘 고정지출 하나를 점검하고 필요 없는 결제를 끊으세요.",
      "큰 지출은 24시간 뒤 다시 결정하는 규칙을 만드세요.",
      "돈이 들어오면 먼저 저축 비율을 정한 뒤 남은 돈을 쓰세요.",
    ],
  },
  careerTarot: {
    kicker: "CAREER TAROT",
    title: "직업 타로 커리어 분석",
    metrics: ["성과운", "평판운", "이동운"],
    weights: [0.84, 0.72, 0.68],
    summary: [
      "직업운은 지금 맡은 역할을 어떻게 보이게 만들지에 달려 있습니다.",
      "일의 양보다 결과를 정리해 보여주는 능력이 커리어운을 끌어올립니다.",
      "새 기회가 들어올 수 있지만 준비된 포트폴리오나 기록이 있어야 잡을 수 있습니다.",
    ],
    focus: [
      "당장은 크게 바꾸기보다 내가 잘하는 일을 명확히 포장하는 것이 유리합니다.",
      "상사나 동료에게 보이는 신뢰도는 마감과 약속에서 만들어집니다.",
      "이직이나 전환은 감정적 탈출보다 전략적 이동일 때 성공률이 높습니다.",
    ],
    risk: [
      "성과를 냈는데 기록하지 않으면 평가에서 놓칠 수 있습니다.",
      "불만을 바로 말하면 의도보다 감정이 먼저 전달됩니다.",
      "새 제안의 이름보다 실제 업무 범위를 먼저 확인해야 합니다.",
    ],
    action: [
      "최근 성과 세 가지를 숫자나 결과 중심으로 정리하세요.",
      "오늘은 미뤄둔 업무 하나를 끝내 평판 포인트를 만드세요.",
      "커리어 전환을 고민한다면 필요한 역량 한 가지부터 보강하세요.",
    ],
  },
  etcTarot: {
    kicker: "QUESTION TAROT",
    title: "질문 타로 맞춤 해석",
    metrics: ["해답성", "변수", "선택운"],
    weights: [0.82, 0.58, 0.78],
    summary: [
      "질문 타로는 질문이 구체적일수록 답도 선명해지는 구조입니다.",
      "지금의 문제는 정답이 없는 것이 아니라 기준이 아직 흐릿한 상태에 가깝습니다.",
      "두 선택지 사이에서 고민 중이라면 덜 무거운 쪽이 현재 운에 더 맞습니다.",
    ],
    focus: [
      "질문 안에 이미 원하는 방향이 숨어 있을 가능성이 큽니다.",
      "지금은 결과보다 선택 후 감당해야 할 현실을 보는 것이 중요합니다.",
      "카드는 빠른 답보다 오래 후회하지 않을 기준을 요구합니다.",
    ],
    risk: [
      "질문을 바꿔가며 확인하면 판단이 더 흐려질 수 있습니다.",
      "타인의 반응만 기준으로 삼으면 내 선택의 힘이 줄어듭니다.",
      "불안할 때 결정하면 나중에 다시 원점으로 돌아올 수 있습니다.",
    ],
    action: [
      "질문을 한 문장으로 줄이고, 원하는 결과와 두려운 결과를 따로 적으세요.",
      "오늘은 결론보다 선택 기준 하나를 정하는 데 집중하세요.",
      "답이 애매하다면 48시간 안에 확인 가능한 작은 행동부터 해보세요.",
    ],
  },
};

const tarotServiceIds = new Set(["tarot", "monthTarot", "yearTarot", "loveTarot", "reunionTarot", "moneyTarot", "careerTarot", "etcTarot"]);

const dailyTarotCards = [
  { title: "The Sun", symbol: "☀", message: "오늘은 솔직하게 움직일수록 좋은 반응을 얻습니다. 작은 기회도 밝게 받아보세요." },
  { title: "The Moon", symbol: "☾", message: "불확실한 마음을 억지로 결론 내리지 마세요. 오늘은 관찰이 답이 됩니다." },
  { title: "The Star", symbol: "✦", message: "기대했던 흐름이 천천히 회복됩니다. 조급함보다 꾸준함이 운을 부릅니다." },
  { title: "The Lovers", symbol: "♡", message: "관계에서는 선택의 기준이 중요합니다. 마음이 편안한 쪽을 고르세요." },
  { title: "Wheel of Fortune", symbol: "◎", message: "예상 밖의 변화가 들어올 수 있습니다. 방향을 바꾸는 데 겁먹지 마세요." },
  { title: "Strength", symbol: "♌", message: "강하게 밀기보다 부드럽게 버티는 힘이 필요한 날입니다." },
];

function isTarotService(serviceId) {
  return tarotServiceIds.has(serviceId);
}

const realDailyTarotCards = [
  { title: "The Fool", symbol: "0", file: "RWS_Tarot_00_Fool.jpg", message: "새로운 시작의 문이 열립니다. 완벽한 준비보다 가볍게 첫발을 떼는 용기가 중요합니다." },
  { title: "The Magician", symbol: "I", file: "RWS_Tarot_01_Magician.jpg", message: "이미 필요한 도구는 손 안에 있습니다. 오늘은 말과 행동을 한 방향으로 모으세요." },
  { title: "The High Priestess", symbol: "II", file: "RWS_Tarot_02_High_Priestess.jpg", message: "겉으로 보이는 정보보다 직감이 더 정확할 수 있습니다. 서두르지 말고 관찰하세요." },
  { title: "The Empress", symbol: "III", file: "RWS_Tarot_03_Empress.jpg", message: "관계와 창작의 기운이 풍성합니다. 아끼던 마음을 조금 더 표현해도 좋은 날입니다." },
  { title: "The Emperor", symbol: "IV", file: "RWS_Tarot_04_Emperor.jpg", message: "기준과 질서가 운을 만듭니다. 오늘은 감정보다 원칙을 세울수록 유리합니다." },
  { title: "The Hierophant", symbol: "V", file: "RWS_Tarot_05_Hierophant.jpg", message: "검증된 방식과 조언이 도움이 됩니다. 혼자 판단하기보다 기준을 참고하세요." },
  { title: "The Lovers", symbol: "VI", file: "RWS_Tarot_06_Lovers.jpg", message: "중요한 선택 앞에 있습니다. 마음이 편안하고 오래 책임질 수 있는 쪽을 고르세요." },
  { title: "The Chariot", symbol: "VII", file: "RWS_Tarot_07_Chariot.jpg", message: "방향을 정했다면 밀고 나가야 합니다. 흔들림보다 집중력이 결과를 만듭니다." },
  { title: "Strength", symbol: "VIII", file: "RWS_Tarot_08_Strength.jpg", message: "강하게 버티기보다 부드럽게 다루는 힘이 필요한 날입니다." },
  { title: "The Hermit", symbol: "IX", file: "RWS_Tarot_09_Hermit.jpg", message: "잠시 거리를 두면 답이 보입니다. 조용한 정리가 오늘의 가장 좋은 선택입니다." },
  { title: "Wheel of Fortune", symbol: "X", file: "RWS_Tarot_10_Wheel_of_Fortune.jpg", message: "예상 밖의 변화가 들어올 수 있습니다. 방향이 바뀌어도 겁먹지 마세요." },
  { title: "Justice", symbol: "XI", file: "RWS_Tarot_11_Justice.jpg", message: "공정한 판단이 필요합니다. 감정이 아니라 사실과 균형을 기준으로 보세요." },
  { title: "The Hanged Man", symbol: "XII", file: "RWS_Tarot_12_Hanged_Man.jpg", message: "멈춤은 실패가 아닙니다. 관점을 바꾸면 막힌 일이 다르게 보입니다." },
  { title: "Death", symbol: "XIII", file: "RWS_Tarot_13_Death.jpg", message: "끝내야 새로 시작됩니다. 붙잡고 있던 것을 정리할수록 다음 운이 들어옵니다." },
  { title: "Temperance", symbol: "XIV", file: "RWS_Tarot_14_Temperance.jpg", message: "균형과 조율이 핵심입니다. 오늘은 극단보다 중간 지점에서 답이 나옵니다." },
  { title: "The Devil", symbol: "XV", file: "RWS_Tarot_15_Devil.jpg", message: "익숙한 집착이나 유혹을 조심하세요. 끊어야 할 패턴을 알아차리는 날입니다." },
  { title: "The Tower", symbol: "XVI", file: "RWS_Tarot_16_Tower.jpg", message: "갑작스러운 변화가 있을 수 있습니다. 무너지는 것은 새 기준을 세우라는 신호입니다." },
  { title: "The Star", symbol: "XVII", file: "RWS_Tarot_17_Star.jpg", message: "기대했던 흐름이 천천히 회복됩니다. 조급함보다 꾸준함이 이끌어줍니다." },
  { title: "The Moon", symbol: "XVIII", file: "RWS_Tarot_18_Moon.jpg", message: "불확실한 마음을 억지로 결론 내리지 마세요. 오늘은 관찰이 답이 됩니다." },
  { title: "The Sun", symbol: "XIX", file: "RWS_Tarot_19_Sun.jpg", message: "오늘은 솔직하게 움직일수록 좋은 반응을 얻습니다. 작은 기회도 밝게 받아보세요." },
  { title: "Judgement", symbol: "XX", file: "RWS_Tarot_20_Judgement.jpg", message: "다시 부름을 받는 흐름입니다. 미뤄둔 결정을 깨끗하게 마무리하세요." },
  { title: "The World", symbol: "XXI", file: "RWS_Tarot_21_World.jpg", message: "한 사이클이 완성되는 운입니다. 결과를 인정하고 다음 단계로 넘어가세요." },
].map((card) => ({
  ...card,
  image: `https://commons.wikimedia.org/wiki/Special:FilePath/${card.file}`,
}));

let currentService = "today";
let currentReading = null;
let activeNav = "year";
let entryStep = 1;
let analysisTimer = null;
let analysisProgressTimer = null;
let tarotShuffleOffset = 0;

function mod(number, base) {
  return ((number % base) + base) % base;
}

function clamp(number, min, max) {
  return Math.max(min, Math.min(max, number));
}

function getElement(key) {
  return elements.find((item) => item.key === key) || elements[0];
}

function pillarFromIndex(index) {
  return { stem: stems[mod(index, 10)], branch: branches[mod(index, 12)] };
}

function birthSeed(dateValue, timeValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const [hour, minute] = timeValue.split(":").map(Number);
  return year * 372 + month * 31 + day + hour * 3 + Math.round(minute / 10);
}

function makeReading(profile) {
  const seed = birthSeed(profile.date, profile.time);
  const [year, month, day] = profile.date.split("-").map(Number);
  const [hour] = profile.time.split(":").map(Number);
  const pillars = {
    hour: pillarFromIndex(Math.floor(hour / 2) + seed),
    day: pillarFromIndex(seed + day * 2),
    month: pillarFromIndex(seed + month * 5),
    year: pillarFromIndex(year - 4),
  };

  const counts = Object.fromEntries(elements.map((item) => [item.key, 0]));
  Object.values(pillars).forEach((pillar) => {
    counts[pillar.stem.element] += 1.2;
    counts[pillar.branch.element] += 1;
  });

  const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const values = Object.fromEntries(elements.map((item) => [item.key, Math.round((counts[item.key] / total) * 100)]));
  const dominant = elements.reduce((best, item) => (values[item.key] > values[best.key] ? item : best), elements[0]);
  const weak = elements.reduce((best, item) => (values[item.key] < values[best.key] ? item : best), elements[0]);
  const dayMaster = getElement(pillars.day.stem.element);
  const score = clamp(58 + ((seed + currentService.length * 7) % 35), 50, 96);
  const strength = clamp(42 + values[dayMaster.key] + (values[dominant.key] > 30 ? 8 : 0) - values[weak.key] / 4, 35, 92);
  const god = tenGods[mod(seed + currentService.length, tenGods.length)];
  const [headline, body] = serviceCopy[currentService] || serviceCopy.today;

  return { profile, seed, pillars, values, dominant, weak, dayMaster, score, strength: Math.round(strength), god, headline, body };
}

function renderServices() {
  $("#service-grid").innerHTML = services
    .filter((service) => !isTarotService(service.id))
    .map((service) => `
      <button class="service-button" data-open="input" data-service="${service.id}" type="button">
        <span class="menu-icon">${serviceIcons[service.id] || serviceIcons.tarot}</span>
        <strong>${service.label}</strong>
        <em>${service.tone}</em>
      </button>
    `)
    .join("");
}

function setService(serviceId) {
  currentService = services.some((service) => service.id === serviceId) ? serviceId : "today";
  const service = services.find((item) => item.id === currentService);
  document.body.dataset.selectedService = currentService;
  $("#result-title").textContent = service?.title || "운세 결과";
  const entryTitle = $(".entry-header strong");
  if (entryTitle) entryTitle.textContent = `${service?.title || "운세"} 정보 입력`;
  const startTitle = $("#entry-start-sheet h2");
  if (startTitle) startTitle.textContent = `${service?.title || "운세"}를 시작할까요?`;
  const startCopy = $("#entry-start-sheet p");
  if (startCopy) startCopy.innerHTML = `${service?.heading || "나에게 맞는 운세를 확인해요."}<br />${service?.copy || "생년월일을 입력하면 맞춤 결과를 보여드려요."}`;
}

function showSheet(sheetId) {
  const sheet = document.getElementById(sheetId);
  if (!sheet) return;
  sheet.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("open"));
}

function hideSheet(sheetId) {
  const sheet = document.getElementById(sheetId);
  if (!sheet) return;
  sheet.classList.remove("open");
  setTimeout(() => { sheet.hidden = true; }, 180);
}

function genderKo(value) {
  return value === "Nam" ? "남자" : "여자";
}

function normalizeDateInput(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length === 8) return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return "1995-06-27";
}

function displayDateInput(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 4) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 4)}.${digits.slice(4)}`;
  return `${digits.slice(0, 4)}.${digits.slice(4, 6)}.${digits.slice(6)}`;
}

function normalizeTimeInput(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length === 4) {
    const hour = clamp(Number(digits.slice(0, 2)), 0, 23).toString().padStart(2, "0");
    const minute = clamp(Number(digits.slice(2, 4)), 0, 59).toString().padStart(2, "0");
    return `${hour}:${minute}`;
  }
  if (/^\d{2}:\d{2}$/.test(value)) return value;
  return "09:30";
}

function displayTimeInput(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}:${digits.slice(2)}`;
}

function getEntryProfile() {
  const unknownTime = $("#unknown-time")?.checked;
  return {
    name: $("#name").value.trim() || "당신",
    date: normalizeDateInput($("#birth-date").value),
    time: unknownTime ? "00:00" : normalizeTimeInput($("#birth-time").value),
    gender: $("#gender").value || "Nam",
    unknownTime,
  };
}

function updateEntryReview() {
  const profile = getEntryProfile();
  $("#entry-name-display").textContent = profile.name || "당신";
  $("#review-name").textContent = profile.name;
  $("#review-gender").textContent = genderKo(profile.gender);
  $("#review-date").textContent = formatDate(profile.date);
  $("#review-time").textContent = profile.unknownTime ? "시간 모름" : profile.time;
}

function validateEntryStep() {
  const button = $("#entry-next-button");
  if (!button) return false;
  const name = $("#name").value.trim();
  const dateDigits = $("#birth-date").value.replace(/\D/g, "");
  const timeDigits = $("#birth-time").value.replace(/\D/g, "");
  const date = dateDigits.length === 8;
  const time = $("#unknown-time")?.checked || timeDigits.length === 4;
  const labels = {
    1: "다음",
    2: "다음",
    3: "다음",
    4: "입력완료",
  };
  let valid = true;
  let message = labels[entryStep] || "다음";
  if (entryStep === 1 && !name) {
    valid = false;
    message = "정확한 이름을 입력해 주세요.";
  }
  if (entryStep === 3 && (!date || !time)) {
    valid = false;
    message = "생년월일과 시간을 입력해 주세요.";
  }
  button.disabled = !valid;
  button.textContent = message;
  return valid;
}

function setEntryStep(step) {
  entryStep = clamp(step, 1, 4);
  $$(".entry-step").forEach((item) => item.classList.toggle("active", Number(item.dataset.entryStep) === entryStep));
  updateEntryReview();
  validateEntryStep();
}

function openInputFlow() {
  openView("input");
  setEntryStep(1);
  setTimeout(() => $("#name")?.focus(), 120);
}

function finishEntryFlow() {
  const profile = getEntryProfile();
  currentReading = makeReading(profile);
  localStorage.setItem("tuvi:last-profile", JSON.stringify(profile));
  showAnalysis(profile, currentReading);
}

function showAnalysis(profile, reading) {
  window.clearTimeout(analysisTimer);
  window.clearInterval(analysisProgressTimer);

  const name = profile.name || "토댕이";
  const service = services.find((item) => item.id === currentService);
  const count = 720000 + mod(reading.seed * 137, 98000);
  let progress = 92;

  const analysisTitle = $(".analysis-view > h1");
  if (analysisTitle) analysisTitle.innerHTML = `<span id="analysis-name">${name}</span>님의 ${service?.title || "운세"}를 분석하고 있어요!`;
  $("#analysis-count").textContent = count.toLocaleString("ko-KR");
  $("#analysis-progress-text").textContent = progress;
  $("#analysis-progress-bar").style.setProperty("--analysis-progress", `${progress}%`);

  openView("analysis");
  analysisProgressTimer = window.setInterval(() => {
    progress = Math.min(100, progress + 2);
    $("#analysis-progress-text").textContent = progress;
    $("#analysis-progress-bar").style.setProperty("--analysis-progress", `${progress}%`);
    if (progress >= 100) window.clearInterval(analysisProgressTimer);
  }, 260);

  analysisTimer = window.setTimeout(() => {
    window.clearInterval(analysisProgressTimer);
    $("#analysis-progress-text").textContent = "100";
    $("#analysis-progress-bar").style.setProperty("--analysis-progress", "100%");
    if (currentReading) {
      try {
        renderResult(currentReading);
      } catch (error) {
        console.error("Result render failed", error);
      }
    }
    openView("result");
  }, 1900);
}

function openView(viewId) {
  document.body.dataset.activeView = viewId;
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".bottom-nav button").forEach((button) => {
    const isServiceView = viewId === "input" || viewId === "result";
    const isNavTarget = button.dataset.nav && button.dataset.nav === activeNav;
    const isMatchingService = isServiceView && button.dataset.service && button.dataset.service === currentService;
    const isMatchingView = button.dataset.open === viewId && (!button.dataset.service || button.dataset.service === currentService);
    button.classList.toggle("active", Boolean(isNavTarget || isMatchingService || isMatchingView));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open]");
    if (!trigger) return;
    event.preventDefault();
    if (trigger.dataset.nav) {
      activeNav = trigger.dataset.nav;
    } else if (trigger.dataset.service) {
      activeNav = isTarotService(trigger.dataset.service) ? "tarot" : "year";
    }

    if (trigger.dataset.service) setService(trigger.dataset.service);
    if (trigger.dataset.open === "input" && !trigger.dataset.skipStart) {
      showSheet("entry-start-sheet");
      return;
    }
    openView(trigger.dataset.open);
    if (trigger.dataset.scrollTo) {
      requestAnimationFrame(() => {
        document.getElementById(trigger.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
}

function bindTodayFortuneTabs() {
  const root = $(".today-fortune-result");
  const buttons = $$(".today-fortune-tabs button");
  if (!root || buttons.length === 0) return;

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      buttons.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === index));
      root.classList.toggle("zodiac-active", index === 1);
      root.classList.toggle("star-active", index === 2);
    });
  });
}

function bindRewardActions() {
  $(".reward-button")?.addEventListener("click", (event) => {
    const count = Number(localStorage.getItem("tuvi:pouch-count") || "0") + 1;
    localStorage.setItem("tuvi:pouch-count", String(count));
    event.currentTarget.textContent = `복주머니 ${count}개`;
  });

  $(".detail-unlock-card button")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "상세 확인 완료";
    event.currentTarget.disabled = true;
  });
}

function dailyTarotSeed() {
  const today = new Date();
  return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

function getDailyTarotChoices() {
  const deck = realDailyTarotCards;
  const start = mod(dailyTarotSeed() + tarotShuffleOffset * 7, deck.length);
  const steps = [0, 7, 15];
  return steps.map((step) => deck[mod(start + step, deck.length)]);
}

function resetDrawCards() {
  $$(".draw-card").forEach((button) => {
    button.classList.remove("selected", "revealed");
    button.setAttribute("aria-pressed", "false");
    const face = button.querySelector("span");
    if (face) face.textContent = "";
    button.style.backgroundImage = "";
    button.style.backgroundSize = "";
    button.style.backgroundPosition = "";
  });
}

function drawDailyTarot(cardIndex = 0) {
  const choices = getDailyTarotChoices();
  const card = choices[clamp(Number(cardIndex), 0, choices.length - 1)] || choices[0];
  const result = $("#tarot-draw-result");
  if (!result) return;

  resetDrawCards();
  $$(".draw-card").forEach((button) => {
    const isSelected = button.dataset.cardIndex === String(cardIndex);
    button.classList.toggle("selected", isSelected);
    button.classList.toggle("revealed", isSelected);
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    const face = button.querySelector("span");
    if (face) face.textContent = isSelected ? "" : "";
    button.style.backgroundImage = isSelected ? `url("${card.image}")` : "";
    button.style.backgroundSize = isSelected ? "cover" : "";
    button.style.backgroundPosition = isSelected ? "center" : "";
  });
  $("#drawn-card-symbol").textContent = card.symbol;
  const image = $("#drawn-card-image");
  if (image) {
    image.src = card.image;
    image.alt = `${card.title} 타로 카드`;
  }
  $("#drawn-card-title").textContent = card.title;
  $("#drawn-card-message").textContent = card.message;
  result.hidden = false;
  requestAnimationFrame(() => result.scrollIntoView({ behavior: "smooth", block: "nearest" }));
  localStorage.setItem("tuvi:daily-tarot", JSON.stringify({ card, choices: choices.map((item) => item.title), savedAt: Date.now() }));
}

function bindDailyTarotDraw() {
  $$(".draw-card").forEach((button) => {
    button.addEventListener("click", () => drawDailyTarot(button.dataset.cardIndex));
  });

  $("#shuffle-tarot-button")?.addEventListener("click", () => {
    tarotShuffleOffset += 1;
    $("#tarot-draw-result").hidden = true;
    $$(".draw-card").forEach((button, index) => {
      resetDrawCards();
      button.style.transform = index === 1 ? "translateY(-12px) rotate(0deg)" : `rotate(${index === 0 ? -12 : 12}deg)`;
    });
    window.setTimeout(() => {
      $$(".draw-card").forEach((button) => {
        button.style.transform = "";
      });
    }, 220);
  });

  $(".unlock-three-card")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "3장 배열 준비 완료";
    event.currentTarget.disabled = true;
  });
}

function formatDate(dateValue) {
  return dateValue.replaceAll("-", ".");
}

function formatBirthTime(timeValue) {
  const [hour, minute] = timeValue.split(":").map(Number);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return timeValue;
  return `${hour}시 ${minute.toString().padStart(2, "0")}분`;
}

function getPillarOrder(pillars) {
  return [["시주", pillars.hour], ["일주", pillars.day], ["월주", pillars.month], ["년주", pillars.year]];
}

function pickServiceText(list, seed, offset = 0) {
  return list[mod(seed + offset, list.length)];
}

function getServiceAnalysisProfile(serviceId) {
  return serviceAnalysisProfiles[serviceId] || serviceAnalysisProfiles.today;
}

function computeServiceMetrics(reading, profile) {
  const valueList = Object.values(reading.values);
  const high = Math.max(...valueList);
  const low = Math.min(...valueList);
  const balance = clamp(100 - (high - low), 35, 98);
  const dayPower = reading.values[reading.dayMaster.key] || 50;
  const dominantPower = reading.values[reading.dominant.key] || 50;
  const weakPower = reading.values[reading.weak.key] || 50;
  const serviceBias = currentService.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const weights = profile.weights || [0.72, 0.72, 0.72];
  const bases = [
    48 + mod(reading.seed * 7 + serviceBias + dominantPower, 47),
    48 + mod(reading.seed * 5 + serviceBias + weakPower * 2, 47),
    48 + mod(reading.seed * 3 + serviceBias + Math.round(reading.strength), 47),
  ];

  return bases.map((base, index) => {
    const anchor = index === 0 ? balance : index === 1 ? dayPower : reading.strength;
    const weight = weights[index] ?? 0.72;
    return clamp(Math.round(base * weight + anchor * (1 - weight)), 42, 98);
  });
}

const paidReportProfiles = {
  secret: {
    kicker: "TOJEONG PREMIUM",
    title: "토정비결 월운 심층 리포트",
    theme: "월별 길흉",
    window: "초반 정리",
    key: "속도 조절",
    lead: "토정비결은 올해 전체를 한 덩어리로 보지 않고, 달마다 들어오는 기회와 피해야 할 무리수를 나눠 읽는 분석입니다.",
    overviewTitle: "올해 흐름",
    overview: [
      "올해는 좋은 운이 들어와도 한 번에 크게 쓰기보다 작은 선택을 누적할수록 결과가 안정됩니다. 특히 사람, 돈, 약속이 동시에 얽히는 순간에는 빠른 판단보다 조건을 다시 확인하는 태도가 운을 지켜줍니다.",
      "월운의 핵심은 기회가 보이는 시기와 쉬어야 하는 시기를 구분하는 데 있습니다. 무리하게 확장하는 달에는 손실이 커질 수 있고, 조용히 준비하는 달에는 눈에 보이지 않는 기반이 만들어집니다.",
    ],
    opportunityTitle: "가장 좋아지는 부분",
    opportunity: [
      "정보를 모으고 방향을 정리하는 능력이 강해집니다. 주변에서 흘러나오는 말 중에서도 실제로 도움이 되는 단서를 잘 골라낼 수 있어, 계약이나 투자, 이직 준비처럼 판단력이 필요한 일에 유리합니다.",
      "평소 미뤄둔 정리, 문서화, 관계 회복에도 길한 흐름이 있습니다. 한 번에 극적인 결과를 만들기보다 잃어버린 리듬을 되찾는 쪽에서 운이 열립니다.",
    ],
    cautionTitle: "주의해야 할 부분",
    caution: [
      "너무 좋은 제안처럼 보이는 일일수록 책임 범위와 비용을 확인해야 합니다. 올해는 말보다 조건, 분위기보다 기록이 중요합니다.",
      "사람을 믿지 말라는 뜻이 아니라, 믿을 수 있는 구조를 먼저 만들라는 뜻입니다. 작은 확인을 건너뛰면 나중에 설명해야 할 일이 많아질 수 있습니다.",
    ],
    practiceTitle: "월운 활용법",
    practice: "매달 초에는 이번 달 반드시 끝낼 일 하나와 절대 무리하지 않을 일 하나를 함께 정하세요. 이 두 가지 기준만 있어도 토정비결의 흐름을 실제 생활에 적용하기 쉬워집니다.",
    checklist: ["돈이 오가는 약속은 문자나 문서로 남기기", "새 제안은 하루 이상 시간을 두고 다시 보기", "한 달 목표를 3개 이하로 줄여 실행력 높이기"],
  },
  traditional: {
    kicker: "CLASSIC SAJU",
    title: "정통사주 원국 정밀 리포트",
    theme: "타고난 구조",
    window: "장기 흐름",
    key: "균형 보완",
    lead: "정통사주는 오늘의 기분보다 태어난 사주 원국의 구조를 먼저 봅니다. 강한 기운, 부족한 기운, 반복되는 선택 패턴을 분리해 해석합니다.",
    overviewTitle: "기질과 구조",
    overview: [
      "지금 사주의 중심은 가진 힘을 더 키우는 것보다 치우친 부분을 다듬는 데 있습니다. 강점은 이미 빠르게 드러나지만, 약한 부분을 방치하면 좋은 기회 앞에서 체력이나 관계의 부담이 먼저 커질 수 있습니다.",
      "원국의 균형을 보면 타고난 추진력은 있으나 모든 일을 혼자 떠안으면 결과가 늦어지는 흐름입니다. 역할을 나누고 반복 가능한 생활 리듬을 만들 때 운의 밀도가 올라갑니다.",
    ],
    opportunityTitle: "타고난 장점",
    opportunity: [
      "문제의 핵심을 빠르게 파악하고 실용적인 선택으로 바꾸는 힘이 있습니다. 막연한 이상보다 당장 움직일 수 있는 방법을 찾는 능력이 강합니다.",
      "사람들에게 신뢰를 주는 방식은 화려한 표현보다 꾸준한 결과입니다. 시간이 지날수록 당신의 성실함이 평가로 돌아오는 사주입니다.",
    ],
    cautionTitle: "반복되는 약점",
    caution: [
      "마음이 급해질 때 설명을 생략하거나 감정을 눌러두는 패턴이 생길 수 있습니다. 처음에는 효율적으로 보이지만 시간이 지나면 오해가 쌓입니다.",
      "강한 기운이 한쪽으로 몰릴 때는 고집과 집중력이 비슷한 얼굴로 나타납니다. 내가 맞다는 확신이 커질수록 주변의 신호를 한 번 더 확인해야 합니다.",
    ],
    practiceTitle: "개운 포인트",
    practice: "부족한 기운을 보완하는 가장 현실적인 방법은 생활 루틴입니다. 잠, 식사, 이동, 정리처럼 반복되는 영역을 안정시키면 사주의 균형도 함께 살아납니다.",
    checklist: ["이번 주 반복할 루틴 하나 정하기", "중요한 대화는 결론보다 배경부터 설명하기", "혼자 처리할 일과 맡길 일을 분리하기"],
  },
  tomorrow: {
    kicker: "TOMORROW FLOW",
    title: "내일의 운세 선행 리포트",
    theme: "사전 준비",
    window: "내일 오전",
    key: "첫 행동",
    lead: "내일의 운세는 미리 준비한 사람에게 더 크게 작용합니다. 하루 전 정리한 기준이 다음 날 실수와 감정 소모를 줄여줍니다.",
    overviewTitle: "내일의 흐름",
    overview: [
      "내일은 시작의 질이 하루 전체의 분위기를 좌우합니다. 아침에 급하게 움직이면 사소한 변수가 이어질 수 있으니, 오늘 밤에 준비물을 확인하고 첫 일정을 단순하게 만들어두는 것이 좋습니다.",
      "주변의 부탁이나 갑작스러운 변경이 들어올 수 있지만, 우선순위를 정해두면 흔들림이 줄어듭니다. 내일의 운은 즉흥성보다 사전 정리에 반응합니다.",
    ],
    opportunityTitle: "유리한 구간",
    opportunity: [
      "오전에는 정리와 확인, 오후에는 실행과 연락에 좋습니다. 특히 미뤄둔 답장이나 작은 결정을 처리하면 다음 흐름이 부드러워집니다.",
      "이미 알고 있던 문제의 해결 실마리가 보일 수 있습니다. 새로운 방법을 찾기보다 기존 선택지 중 가장 덜 복잡한 것을 고르는 쪽이 좋습니다.",
    ],
    cautionTitle: "변수 관리",
    caution: [
      "남의 속도에 끌려가면 내 계획이 쉽게 흐트러질 수 있습니다. 부탁을 받더라도 바로 승낙하기보다 가능한 시간대를 먼저 제안하세요.",
      "감정적으로 피곤한 상태에서 내린 결정은 후회가 남기 쉽습니다. 중요한 말은 잠시 멈춘 뒤 다시 전달하는 편이 유리합니다.",
    ],
    practiceTitle: "오늘 밤 준비",
    practice: "내일 반드시 해야 할 일을 3개만 적고, 가장 먼저 끝낼 하나를 표시하세요. 내일 운을 실제로 바꾸는 것은 거창한 계획보다 첫 행동의 선명함입니다.",
    checklist: ["내일 첫 일정에 필요한 물건 미리 챙기기", "아침에 볼 체크리스트 3개 작성하기", "중요한 답장은 감정이 가라앉은 뒤 보내기"],
  },
  special: {
    kicker: "SPECIAL DATE",
    title: "지정일 운세 이벤트 리포트",
    theme: "중요한 날",
    window: "당일 전후",
    key: "변수 차단",
    lead: "지정일 운세는 특정 날짜에 중요한 약속, 시험, 계약, 만남이 있을 때 그날의 압력과 기회가 어디서 생기는지 보는 분석입니다.",
    overviewTitle: "그날의 결",
    overview: [
      "그날은 준비한 만큼 결과가 정직하게 드러나는 흐름입니다. 즉흥적으로 밀어붙이는 힘보다 사전에 정리한 자료, 말의 순서, 이동 동선이 실제 성과를 좌우합니다.",
      "운의 압력은 긴장감으로 나타날 수 있습니다. 하지만 긴장이 나쁜 것만은 아닙니다. 집중력을 올려주기 때문에 기준만 분명하면 오히려 평소보다 좋은 결과를 만들 수 있습니다.",
    ],
    opportunityTitle: "성공 가능성이 높은 부분",
    opportunity: [
      "발표, 면접, 계약, 고백처럼 나를 보여줘야 하는 상황에서 준비한 말이 힘을 얻습니다. 특히 짧고 분명한 표현이 길게 설명하는 것보다 효과적입니다.",
      "상대의 반응을 세밀하게 읽을 수 있는 날입니다. 분위기가 바뀌는 순간을 잘 포착하면 대화의 방향을 유리하게 조정할 수 있습니다.",
    ],
    cautionTitle: "흔들리는 지점",
    caution: [
      "시간 압박이 생기면 실수가 늘어납니다. 이동, 문서, 준비물, 결제처럼 기본적인 부분에서 변수를 줄이는 것이 가장 중요합니다.",
      "기대가 커질수록 작은 반응을 과하게 해석할 수 있습니다. 당일에는 결과를 단정하기보다 다음 약속이나 후속 행동까지 확보하는 데 집중하세요.",
    ],
    practiceTitle: "당일 운영법",
    practice: "그날의 운을 높이는 핵심은 여유 시간입니다. 중요한 일정 앞뒤로 30분씩 비워두면 갑작스러운 변수에도 흐름을 잃지 않습니다.",
    checklist: ["일정 전날 준비물과 장소 확인하기", "당일 첫 문장은 짧게 준비하기", "결과보다 다음 단계 약속을 남기기"],
  },
  face: {
    kicker: "FACE READING",
    title: "관상 인상운 리포트",
    theme: "첫인상",
    window: "첫 만남",
    key: "표정 온도",
    lead: "관상운은 얼굴 자체를 단정하는 것이 아니라, 현재의 표정과 태도가 사람들에게 어떤 신호로 읽히는지 분석합니다.",
    overviewTitle: "현재 인상 흐름",
    overview: [
      "지금은 강한 존재감보다 편안한 신뢰감이 더 좋은 결과를 만듭니다. 말이 많지 않아도 표정과 시선이 안정되면 상대는 당신을 더 믿고 싶어집니다.",
      "관상운에서 중요한 것은 고정된 얼굴보다 그날의 기세입니다. 피로가 쌓이면 차갑게 보일 수 있으니, 중요한 만남 전에는 표정의 긴장을 풀어주는 것이 필요합니다.",
    ],
    opportunityTitle: "매력이 살아나는 부분",
    opportunity: [
      "차분하게 듣고 핵심만 말할 때 호감도가 올라갑니다. 과하게 꾸미거나 설명하기보다 단정한 태도와 정확한 반응이 장점으로 작용합니다.",
      "처음에는 조용해 보여도 가까워질수록 개성이 드러나는 타입입니다. 상대가 질문할 여지를 남기는 방식이 인연을 이어줍니다.",
    ],
    cautionTitle: "오해받기 쉬운 부분",
    caution: [
      "생각이 많을 때 표정이 굳어 보일 수 있습니다. 본인은 집중하는 중이어도 상대는 거리감으로 받아들일 수 있습니다.",
      "짧은 답변이 반복되면 관심이 없다는 신호로 해석될 수 있으니, 중요한 자리에서는 한 문장 정도 감정을 덧붙이는 것이 좋습니다.",
    ],
    practiceTitle: "인상 개운법",
    practice: "첫 만남 전에는 표정, 목소리, 첫 질문만 정리해도 충분합니다. 작은 온도 조절이 대인운을 크게 바꿉니다.",
    checklist: ["첫 인사는 천천히 또렷하게 하기", "답변 끝에 감정 한마디 덧붙이기", "중요한 만남 전 5분간 얼굴 긴장 풀기"],
  },
  psychology: {
    kicker: "MIND REPORT",
    title: "심리 사주 패턴 리포트",
    theme: "마음 패턴",
    window: "감정 전환",
    key: "표현 정리",
    lead: "심리풀이는 사주의 기운이 마음의 반응으로 어떻게 나타나는지 봅니다. 왜 같은 상황에서 비슷한 고민이 반복되는지 해석합니다.",
    overviewTitle: "마음의 기본 반응",
    overview: [
      "겉으로는 괜찮아 보여도 속으로는 많은 계산과 배려가 동시에 움직이는 흐름입니다. 그래서 중요한 관계일수록 쉽게 피곤해질 수 있습니다.",
      "지금 필요한 것은 더 참는 힘이 아니라 감정을 알아차리고 적절한 언어로 바꾸는 힘입니다. 마음을 표현하면 약해지는 것이 아니라 관계의 구조가 분명해집니다.",
    ],
    opportunityTitle: "회복되는 부분",
    opportunity: [
      "자기 마음을 객관적으로 바라보는 능력이 살아납니다. 감정에 휩쓸리기보다 왜 이런 반응이 나왔는지 정리하면 다음 선택이 좋아집니다.",
      "혼자 있는 시간을 잘 쓰면 집중력과 직감이 빠르게 회복됩니다. 사람을 피하는 시간이 아니라 마음을 재정렬하는 시간이 필요합니다.",
    ],
    cautionTitle: "마음이 지치는 지점",
    caution: [
      "상대의 기분까지 책임지려 하면 쉽게 소진됩니다. 배려와 책임을 구분해야 감정 운이 안정됩니다.",
      "불편한 말을 너무 오래 미루면 어느 순간 차갑게 끊어내고 싶어질 수 있습니다. 작은 불편함은 작을 때 말하는 것이 좋습니다.",
    ],
    practiceTitle: "심리 개운법",
    practice: "오늘 느낀 감정을 세 단어로만 적어보세요. 원인을 길게 분석하기 전에 감정의 이름을 붙이면 마음의 압력이 낮아집니다.",
    checklist: ["오늘 감정 3개 적기", "힘든 부탁은 바로 답하지 않기", "혼자 회복할 시간을 일정에 넣기"],
  },
  couple: {
    kicker: "MATCH PREMIUM",
    title: "궁합 상호작용 리포트",
    theme: "관계 리듬",
    window: "대화 후반",
    key: "기대 조율",
    lead: "궁합은 단순히 잘 맞는다, 안 맞는다로 끝나지 않습니다. 서로의 속도, 말투, 기대 방식이 어디서 맞물리고 어디서 부딪히는지 보는 분석입니다.",
    overviewTitle: "두 사람의 흐름",
    overview: [
      "두 사람은 끌림이 생길 때 속도 차이도 함께 생기기 쉬운 구조입니다. 한쪽은 바로 확인하고 싶고, 다른 한쪽은 시간을 두고 판단하고 싶어 할 수 있습니다.",
      "좋은 궁합은 감정이 뜨거운 순간보다 평소의 생활 방식이 맞을 때 오래갑니다. 대화의 양보다 서로가 편안해지는 방식이 핵심입니다.",
    ],
    opportunityTitle: "관계가 좋아지는 부분",
    opportunity: [
      "서로에게 없는 장점을 자극해주는 힘이 있습니다. 한 사람은 추진력을, 다른 사람은 안정감을 보태면서 현실적인 결과를 만들 수 있습니다.",
      "감정을 직접 확인하는 대화가 잘 맞습니다. 돌려 말하기보다 원하는 것과 어려운 것을 차분히 말하면 오해가 빠르게 풀립니다.",
    ],
    cautionTitle: "갈등이 생기는 부분",
    caution: [
      "서로의 침묵을 다르게 해석할 수 있습니다. 누군가에게는 생각할 시간이고, 누군가에게는 거리감으로 느껴질 수 있습니다.",
      "기대치를 말하지 않고 상대가 알아주길 바라면 서운함이 커집니다. 마음이 깊을수록 기준을 말로 확인해야 합니다.",
    ],
    practiceTitle: "관계 운영법",
    practice: "궁합을 좋게 쓰려면 감정 확인보다 생활 조율이 먼저입니다. 자주 싸우는 주제 하나를 골라 룰을 정하면 관계의 안정감이 크게 올라갑니다.",
    checklist: ["연락 빈도와 답장 기대치 말로 정하기", "서운한 점은 사건 하나만 골라 말하기", "좋았던 행동을 구체적으로 칭찬하기"],
  },
  tarot: {
    kicker: "ONE CARD TAROT",
    title: "오늘의 타로 1장 리포트",
    theme: "직감 메시지",
    window: "지금부터",
    key: "하나의 선택",
    lead: "타로 1장은 복잡한 상황에서 지금 가장 가까운 메시지를 뽑아내는 방식입니다. 오늘 마음이 어디에 반응하는지 선명하게 보여줍니다.",
    overviewTitle: "카드의 메시지",
    overview: [
      "지금은 여러 선택지를 동시에 붙잡기보다 마음이 가장 먼저 반응한 한 가지를 확인해야 합니다. 카드가 말하는 흐름은 정답보다 방향에 가깝습니다.",
      "오늘의 타로는 감정과 현실 사이의 간격을 보여줍니다. 끌리는 선택이 있다면 왜 끌리는지, 불안한 선택이 있다면 무엇을 확인해야 하는지 나눠보세요.",
    ],
    opportunityTitle: "열리는 가능성",
    opportunity: [
      "작은 신호를 잘 읽으면 상황이 예상보다 빨리 정리될 수 있습니다. 특히 대화, 연락, 우연한 제안에서 힌트가 들어옵니다.",
      "내가 이미 알고 있지만 인정하지 않았던 답이 드러나기 쉽습니다. 직감이 반복해서 가리키는 방향을 가볍게 넘기지 마세요.",
    ],
    cautionTitle: "카드가 경고하는 것",
    caution: [
      "불안해서 뽑은 선택은 더 불안한 결과를 만들 수 있습니다. 확인하고 싶은 마음과 실제로 필요한 행동을 구분해야 합니다.",
      "카드의 메시지를 핑계로 무리한 결정을 내리면 흐름이 흐려집니다. 타로는 결정을 대신하는 도구가 아니라 판단을 정리하는 거울입니다.",
    ],
    practiceTitle: "오늘의 카드 활용",
    practice: "카드가 준 키워드를 하루에 한 번만 실천하세요. 큰 결심보다 작은 행동 하나가 오늘의 메시지를 현실로 바꿉니다.",
    checklist: ["오늘 가장 마음에 걸리는 질문 하나 적기", "카드 키워드를 행동 하나로 바꾸기", "밤에 실제로 달라진 감정 확인하기"],
  },
  monthTarot: {
    kicker: "MONTH TAROT",
    title: "이번 달 타로 흐름 리포트",
    theme: "월간 선택",
    window: "중순 이후",
    key: "집중할 일",
    lead: "월간 타로는 이번 달의 큰 분위기와 선택의 우선순위를 봅니다. 무엇을 밀고, 무엇을 잠시 내려놓을지 정리합니다.",
    overviewTitle: "이번 달의 기운",
    overview: [
      "이번 달은 여러 갈래의 관심사 중 하나를 선명하게 고를수록 결과가 좋아집니다. 많은 것을 동시에 잡으면 성과가 흩어질 수 있습니다.",
      "카드는 지금 가장 에너지가 모이는 영역을 보여줍니다. 마음이 반복해서 향하는 곳에 이번 달의 과제가 숨어 있습니다.",
    ],
    opportunityTitle: "성과가 나는 부분",
    opportunity: [
      "중순 이후부터 준비해둔 일이 눈에 보이기 시작합니다. 특히 공부, 업무, 금전 관리처럼 반복이 필요한 영역에서 안정감이 생깁니다.",
      "이전에는 모호했던 사람의 태도나 상황의 방향이 조금 더 분명해질 수 있습니다.",
    ],
    cautionTitle: "흐름을 흐리는 것",
    caution: [
      "비교가 많아지면 선택이 늦어집니다. 남의 속도보다 이번 달 내 기준이 무엇인지 먼저 정해야 합니다.",
      "기분에 따라 계획을 자주 바꾸면 카드가 주는 좋은 흐름을 놓칠 수 있습니다.",
    ],
    practiceTitle: "월간 운영법",
    practice: "이번 달에는 하나의 대표 목표를 정하고 주마다 작은 결과를 확인하세요. 월간 운은 꾸준히 확인할수록 선명해집니다.",
    checklist: ["이번 달 핵심 목표 하나 정하기", "매주 같은 요일에 진행도 확인하기", "새로운 일보다 마무리할 일 우선하기"],
  },
  yearTarot: {
    kicker: "YEAR TAROT",
    title: "2026 타로 연간 리포트",
    theme: "연간 전환",
    window: "하반기 확장",
    key: "큰 방향",
    lead: "연간 타로는 한 해를 관통하는 상징과 전환점을 봅니다. 올해 어떤 선택이 오래 남는 결과로 이어지는지 읽습니다.",
    overviewTitle: "2026년의 큰 메시지",
    overview: [
      "올해는 익숙한 방식만 반복하기보다 내 삶의 기준을 다시 세우는 흐름입니다. 변화 자체보다 어떤 기준으로 변할 것인지가 중요합니다.",
      "연간 타로는 급한 성과보다 방향의 정렬을 강조합니다. 상반기에는 정리, 하반기에는 선택과 확장이 강하게 들어옵니다.",
    ],
    opportunityTitle: "확장되는 영역",
    opportunity: [
      "오래 준비한 분야에서 인정받거나 새로운 역할을 맡을 가능성이 있습니다. 특히 책임이 커지는 일이 운을 넓혀줍니다.",
      "관계에서도 얕은 인연보다 실제로 도움이 되는 사람과의 연결이 강해집니다.",
    ],
    cautionTitle: "연간 주의점",
    caution: [
      "올해는 무리한 약속이 부담으로 돌아오기 쉽습니다. 해낼 수 있는 일과 보여주고 싶은 일을 구분해야 합니다.",
      "변화가 필요하다는 이유만으로 모든 것을 갈아엎으면 중심이 흔들릴 수 있습니다.",
    ],
    practiceTitle: "올해의 운영법",
    practice: "올해는 목표를 크게 잡되 실행 단위를 작게 나눠야 합니다. 3개월 단위로 점검하면 운의 흐름을 가장 잘 탈 수 있습니다.",
    checklist: ["올해 핵심 목표 1개와 보조 목표 2개 정하기", "3개월마다 방향 점검하기", "책임질 수 없는 약속은 줄이기"],
  },
  loveTarot: {
    kicker: "LOVE TAROT",
    title: "연애 타로 감정 리포트",
    theme: "마음의 거리",
    window: "대화 직후",
    key: "진심 확인",
    lead: "연애 타로는 상대의 마음을 단정하기보다 두 사람 사이의 온도, 기대, 불안을 함께 봅니다.",
    overviewTitle: "연애 흐름",
    overview: [
      "지금의 관계는 작은 신호에 감정이 크게 움직이기 쉬운 흐름입니다. 좋아하는 마음이 커질수록 확인하고 싶은 욕구도 강해집니다.",
      "카드는 성급한 결론보다 서로의 속도를 맞추는 대화를 권합니다. 마음이 있다면 표현은 필요하지만, 압박처럼 느껴지지 않게 온도를 조절해야 합니다.",
    ],
    opportunityTitle: "가까워지는 부분",
    opportunity: [
      "진심을 짧고 분명하게 전하면 관계의 분위기가 좋아질 수 있습니다. 장황한 설명보다 한 문장의 솔직함이 더 효과적입니다.",
      "함께 웃거나 편하게 시간을 보내는 장면에서 호감이 살아납니다. 무거운 확인보다 편안한 접점이 중요합니다.",
    ],
    cautionTitle: "조심할 감정",
    caution: [
      "상대의 반응을 과하게 해석하면 스스로 불안이 커집니다. 답장 속도와 마음의 크기를 바로 연결하지 마세요.",
      "질투나 서운함을 숨기다가 한 번에 터뜨리면 관계가 부담스러워질 수 있습니다.",
    ],
    practiceTitle: "연애 조언",
    practice: "상대에게 원하는 것을 말할 때는 요구보다 느낌으로 시작하세요. 관계의 문을 여는 말은 부드러울수록 오래 남습니다.",
    checklist: ["확인 질문은 하나만 하기", "상대가 편하게 답할 여지 남기기", "서운함은 사건 하나로 좁혀 말하기"],
  },
  reunionTarot: {
    kicker: "REUNION TAROT",
    title: "재회와 짝사랑 타로 리포트",
    theme: "다시 닿는 마음",
    window: "기다림 이후",
    key: "거리 조절",
    lead: "재회와 짝사랑 타로는 연락 가능성만 보지 않습니다. 다시 닿았을 때 관계가 건강하게 이어질 수 있는 조건을 함께 봅니다.",
    overviewTitle: "현재 거리",
    overview: [
      "지금은 마음이 남아 있어도 바로 밀어붙이면 상대가 부담을 느낄 수 있는 흐름입니다. 기다림과 표현 사이의 간격을 조절해야 합니다.",
      "재회운은 그리움만으로 움직이지 않습니다. 이전에 반복된 문제를 다르게 다룰 준비가 되어 있을 때 다시 연결될 가능성이 커집니다.",
    ],
    opportunityTitle: "연결 가능성",
    opportunity: [
      "부드러운 안부나 가벼운 대화에서 다시 흐름이 열릴 수 있습니다. 무거운 감정 고백보다 편안한 접촉이 유리합니다.",
      "상대도 완전히 닫힌 상태는 아닐 수 있습니다. 다만 확인하려는 압박이 강해지면 다시 멀어질 수 있습니다.",
    ],
    cautionTitle: "반복하면 안 되는 것",
    caution: [
      "지난 상처를 해결하지 않은 채 다시 시작하면 같은 이유로 흔들릴 수 있습니다.",
      "상대의 반응이 늦다고 해서 감정적인 메시지를 연속으로 보내는 것은 피해야 합니다.",
    ],
    practiceTitle: "재회 조언",
    practice: "연락을 한다면 목적을 하나로 줄이세요. 사과인지, 안부인지, 다시 대화하고 싶은 것인지 분명해야 상대도 편하게 반응합니다.",
    checklist: ["연락 전 메시지를 한 번 덜어내기", "과거 문제를 반복하지 않을 기준 정하기", "답이 늦어도 추가 메시지 보내지 않기"],
  },
  moneyTarot: {
    kicker: "MONEY TAROT",
    title: "재물 타로 리포트",
    theme: "돈의 흐름",
    window: "지출 전",
    key: "보존과 선별",
    lead: "재물운은 돈이 들어오는지만 보지 않습니다. 새는 돈, 묶이는 돈, 키울 수 있는 돈을 나누어 읽어야 실제 도움이 됩니다.",
    overviewTitle: "재물 흐름",
    overview: [
      "지금의 돈운은 큰 한 방보다 관리의 정확도에 반응합니다. 수입이 늘어도 지출 구조가 흐트러지면 체감 운은 약해질 수 있습니다.",
      "카드는 새로운 투자보다 현금 흐름과 반복 지출 점검을 먼저 권합니다. 돈을 벌기 전 돈이 새는 구멍을 막으면 재물운이 빠르게 안정됩니다.",
    ],
    opportunityTitle: "돈이 들어오는 부분",
    opportunity: [
      "작은 부수입, 정리한 물건, 미뤄둔 정산처럼 이미 주변에 있던 돈이 들어올 가능성이 있습니다.",
      "업무나 기술을 통해 장기적으로 돈이 되는 기반을 만들기 좋습니다. 단기 수익보다 실력 축적이 더 큰 운으로 이어집니다.",
    ],
    cautionTitle: "돈이 새는 부분",
    caution: [
      "기분 지출과 충동 결제가 늘어날 수 있습니다. 특히 피곤할 때 하는 소비는 만족보다 후회가 남기 쉽습니다.",
      "남의 말만 듣고 움직이는 투자는 피해야 합니다. 이해하지 못한 돈은 운이 아니라 부담이 됩니다.",
    ],
    practiceTitle: "재물 개운법",
    practice: "이번 주에는 수입을 늘리기보다 지출을 분류하세요. 어디서 새는지 알면 돈운은 바로 체감되기 시작합니다.",
    checklist: ["구독과 자동결제 확인하기", "큰 결제는 하루 뒤 다시 판단하기", "돈이 되는 기술 하나에 시간 투자하기"],
  },
  careerTarot: {
    kicker: "CAREER TAROT",
    title: "직업과 학업 타로 리포트",
    theme: "성과의 방향",
    window: "준비 후반",
    key: "증명 가능한 결과",
    lead: "직업운과 학업운은 가능성보다 실제로 보여줄 수 있는 결과를 중심으로 읽어야 합니다.",
    overviewTitle: "일과 공부의 흐름",
    overview: [
      "지금은 재능보다 정리된 결과물이 더 크게 평가받는 시기입니다. 잘하고 있다는 느낌보다 보여줄 수 있는 자료, 기록, 성과가 필요합니다.",
      "카드는 방향 전환보다 현재 하고 있는 일을 더 선명한 형태로 완성하라고 말합니다. 작은 완성물이 다음 기회를 불러옵니다.",
    ],
    opportunityTitle: "성과가 나는 부분",
    opportunity: [
      "발표, 포트폴리오, 시험 준비, 면접처럼 나의 역량을 증명하는 일에 길한 흐름이 있습니다.",
      "도와주는 사람이나 참고할 자료가 들어올 수 있습니다. 혼자 해결하려 하지 말고 필요한 정보는 적극적으로 찾아야 합니다.",
    ],
    cautionTitle: "막히는 부분",
    caution: [
      "완벽하게 준비하려다 시작이 늦어질 수 있습니다. 일정 수준까지 만들고 피드백을 받는 편이 더 유리합니다.",
      "피로가 누적되면 집중력이 떨어지고 작은 실수가 늘어납니다. 공부와 일 모두 회복 시간을 계획에 포함해야 합니다.",
    ],
    practiceTitle: "성과 조언",
    practice: "이번 운을 살리려면 오늘 결과물 하나를 작게라도 만들어야 합니다. 기록으로 남는 것이 운을 현실로 바꿉니다.",
    checklist: ["오늘 완성할 작은 결과물 정하기", "피드백 받을 사람 한 명 정하기", "집중 시간과 쉬는 시간을 함께 계획하기"],
  },
  etcTarot: {
    kicker: "QUESTION TAROT",
    title: "질문 타로 종합 리포트",
    theme: "선택의 답",
    window: "결정 직전",
    key: "질문 정리",
    lead: "그 외 타로는 특정 주제보다 지금 마음을 가장 붙잡는 질문의 핵심을 읽습니다.",
    overviewTitle: "질문의 본질",
    overview: [
      "지금 고민은 선택지가 부족해서가 아니라 어떤 기준으로 고를지 정리되지 않아 생긴 흐름입니다. 질문을 좁히면 답도 빨라집니다.",
      "카드는 지금 당장 완벽한 결론을 내리기보다 내가 감당할 수 있는 선택을 고르라고 말합니다. 오래 설명해야 하는 선택보다 마음이 단순해지는 쪽이 유리합니다.",
    ],
    opportunityTitle: "답이 보이는 부분",
    opportunity: [
      "이미 알고 있던 정보 중 하나가 새롭게 보일 수 있습니다. 새로운 조언보다 기존 단서를 다시 보는 것이 좋습니다.",
      "중립적인 사람과 대화하면 생각이 정리됩니다. 감정적으로 얽힌 사람보다 차분히 들어줄 수 있는 사람이 도움이 됩니다.",
    ],
    cautionTitle: "흐려지는 부분",
    caution: [
      "질문이 너무 넓으면 카드의 메시지도 흐려집니다. 한 번에 인생 전체를 묻기보다 지금 해야 할 선택 하나로 좁히세요.",
      "불안해서 같은 질문을 반복하면 판단력이 더 약해질 수 있습니다.",
    ],
    practiceTitle: "질문 정리법",
    practice: "질문을 '해야 할까 말까'보다 '한다면 무엇을 조심해야 할까'로 바꾸면 훨씬 현실적인 답을 얻을 수 있습니다.",
    checklist: ["질문을 한 문장으로 줄이기", "선택 기준 2개만 정하기", "답을 들은 뒤 바로 할 행동 하나 정하기"],
  },
};

function getPaidReportProfile(serviceId) {
  if (paidReportProfiles[serviceId]) return paidReportProfiles[serviceId];
  if (serviceId.includes("Tarot")) return paidReportProfiles.tarot;
  return paidReportProfiles.traditional;
}

function setTextContent(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function renderPaidReport(reading) {
  const card = $(".paid-report-card");
  if (!card) return;
  if (currentService === "today" || currentService === "year") {
    card.hidden = true;
    card.style.setProperty("display", "none", "important");
    return;
  }

  const profile = getPaidReportProfile(currentService);
  const name = reading.profile.name || "당신";
  const metrics = computeServiceMetrics(reading, getServiceAnalysisProfile(currentService));
  const score = clamp(Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length), 45, 99);
  const dominantName = elementKo[reading.dominant.key] || reading.dominant.vi;
  const weakName = elementKo[reading.weak.key] || reading.weak.vi;
  const serviceName = services.find((item) => item.id === currentService)?.title || "운세";

  card.hidden = false;
  card.style.setProperty("display", "block", "important");
  setTextContent("#paid-report-kicker", profile.kicker);
  setTextContent("#paid-report-score", `${score}점`);
  setTextContent("#paid-report-title", `${name}님의 ${profile.title}`);
  setTextContent("#paid-report-lead", `${profile.lead} 현재 선택한 항목은 '${serviceName}'이며, ${dominantName} 기운이 강하게 작용하고 ${weakName} 기운은 보완이 필요합니다.`);
  setTextContent("#paid-report-theme", profile.theme);
  setTextContent("#paid-report-window", profile.window);
  setTextContent("#paid-report-key", profile.key);
  setTextContent("#paid-report-overview-title", profile.overviewTitle);
  setTextContent("#paid-report-overview-1", profile.overview[0]);
  setTextContent("#paid-report-overview-2", `${profile.overview[1]} 지금 점수는 ${score}점 흐름으로, 무리하게 밀어붙이기보다 운이 붙는 지점을 골라 쓰는 편이 좋습니다.`);
  setTextContent("#paid-report-opportunity-title", profile.opportunityTitle);
  setTextContent("#paid-report-opportunity-1", profile.opportunity[0]);
  setTextContent("#paid-report-opportunity-2", profile.opportunity[1]);
  setTextContent("#paid-report-caution-title", profile.cautionTitle);
  setTextContent("#paid-report-caution-1", profile.caution[0]);
  setTextContent("#paid-report-caution-2", profile.caution[1]);
  setTextContent("#paid-report-practice-title", profile.practiceTitle);
  setTextContent("#paid-report-practice-1", profile.practice);

  const checklist = $("#paid-report-checklist");
  if (checklist) {
    checklist.innerHTML = "";
    profile.checklist.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      checklist.appendChild(li);
    });
  }
}

function renderServiceAnalysis(reading) {
  const card = $(".service-analysis-card");
  if (!card) return;
  if (currentService === "year") {
    card.hidden = true;
    card.style.setProperty("display", "none", "important");
    return;
  }
  card.hidden = false;
  card.style.removeProperty("display");

  const profile = getServiceAnalysisProfile(currentService);
  const metrics = computeServiceMetrics(reading, profile);
  const total = clamp(Math.round(metrics.reduce((sum, value) => sum + value, 0) / metrics.length), 45, 99);
  const metricLabels = profile.metrics || ["핵심운", "주의점", "실행력"];

  $("#service-analysis-kicker").textContent = profile.kicker;
  $("#service-analysis-score").textContent = `${total}점`;
  $("#service-analysis-title").textContent = profile.title;
  $("#service-analysis-summary").textContent = pickServiceText(profile.summary, reading.seed, total);
  $("#service-metric-a-label").textContent = metricLabels[0];
  $("#service-metric-b-label").textContent = metricLabels[1];
  $("#service-metric-c-label").textContent = metricLabels[2];
  $("#service-metric-a").textContent = metrics[0];
  $("#service-metric-b").textContent = metrics[1];
  $("#service-metric-c").textContent = metrics[2];
  $("#service-analysis-focus").textContent = pickServiceText(profile.focus, reading.seed, metrics[0]);
  $("#service-analysis-risk").textContent = pickServiceText(profile.risk, reading.seed, metrics[1]);
  $("#service-analysis-action").textContent = pickServiceText(profile.action, reading.seed, metrics[2]);
}

function renderYearFortuneReport(reading) {
  const root = $(".year-fortune-report");
  if (!root) return;
  if (currentService !== "year") {
    root.hidden = true;
    root.style.setProperty("display", "none", "important");
    return;
  }
  root.hidden = false;
  root.style.setProperty("display", "block", "important");

  const name = reading.profile.name || "당신";
  const score = reading.score;
  const studyTone = score >= 78 ? "올해는 시험운과 학업운, 실력 상승운이 강하게 들어옵니다." : "올해는 빠른 성과보다 기초를 다시 다지는 과정에서 운이 열립니다.";
  const relationTone = reading.strength >= 65 ? "사람들의 인정이 따라오지만 기대가 커지는 만큼 감정 소모도 함께 늘 수 있습니다." : "관계에서는 서두르기보다 천천히 신뢰를 쌓을수록 좋은 흐름이 생깁니다.";
  const cautionTone = reading.weak.key === "water" ? "감정이 말라붙거나 무기력해지는 순간을 조심해야 합니다." : "마음이 과하게 예민해져 작은 일에도 크게 흔들릴 수 있습니다.";

  $("#year-total-copy-1").textContent = `${name}님은 올해 감정 조절과 꾸준함이 가장 중요한 해입니다. 기분이 좋을 때는 크게 움직이고 싶어지지만, 갑작스러운 변화보다 정해둔 루틴을 지키는 쪽에서 더 좋은 결과가 생깁니다.`;
  $("#year-total-copy-2").textContent = `${studyTone} 공부를 시작하거나 원하던 기술을 배우는 등 성장하기 위한 노력을 한다면 연말로 갈수록 분명한 보상을 얻을 수 있습니다.`;
  $("#year-total-copy-3").textContent = `${relationTone} 속마음을 혼자 오래 담아두기보다 필요한 순간에는 솔직하게 표현하는 것이 좋습니다.`;
  $("#year-total-copy-4").textContent = "전반적으로 올해는 연초에 세운 꿈을 연말까지 그대로 끌고 가기는 쉽지 않지만, 중간에 계획을 조정하면서도 포기하지 않는다면 원하는 목표에 가까운 열매를 맺게 됩니다.";
  $("#year-total-copy-5").textContent = "올해는 초반보다 중반 이후에 운의 색이 더 분명해집니다. 처음에는 확신이 부족해도 한 방향을 꾸준히 유지하면 주변의 평가와 실제 결과가 함께 따라오기 시작합니다.";
  $("#year-total-copy-6").textContent = "재물, 관계, 일 모두에서 갑작스러운 반전보다 작고 확실한 이익을 쌓는 방식이 좋습니다. 무리하게 큰 판을 벌이기보다 이미 가지고 있는 것을 다듬을수록 운이 안정됩니다.";
  $("#year-best-copy-1").textContent = "가장 좋은 것은 배움, 시험, 자격, 승진처럼 내가 가진 능력을 증명하는 일입니다. 스스로 목표를 세우고 그 목표를 이루기 위해 시간을 쓰면 주변의 평가도 함께 좋아집니다.";
  $("#year-best-copy-2").textContent = "특히 머리를 쓰는 일과 꾸준한 노력이 필요한 일에서 두각을 드러내기 쉽습니다. 올해 얻는 작은 성과는 다음 해의 더 큰 기회로 이어질 수 있습니다.";
  $("#year-best-copy-3").textContent = "문서, 공부, 발표, 기획, 정리처럼 집중력이 필요한 영역에서 좋은 운이 들어옵니다. 올해 시작한 배움은 당장보다 시간이 지난 뒤 더 큰 무기가 됩니다.";
  $("#year-caution-copy-1").textContent = `${cautionTone} 스트레스가 쌓이면 아무것도 하기 싫어지거나 사람을 피하고 싶은 마음이 커질 수 있으니, 컨디션 관리가 올해의 핵심입니다.`;
  $("#year-caution-copy-2").textContent = "사람 관계에서는 괜한 오해나 거리감이 생기지 않도록 말의 온도를 조절해야 합니다. 감정적으로 몰입하기보다 현실적으로 지금 해야 할 일에 집중하는 것이 좋습니다.";
  $("#year-caution-copy-3").textContent = "아직 일어나지 않은 일을 미리 걱정해 판단을 흐리지 않는 것이 중요합니다. 감정과 사실을 분리해서 보면 올해의 불안은 훨씬 다루기 쉬워집니다.";
  $("#year-month-copy-1").textContent = "연초에는 준비와 정리의 기운이 강합니다. 새로운 일을 시작하더라도 바로 성과를 보려 하기보다 기준을 세우고 생활과 일의 리듬을 먼저 안정시키는 것이 좋습니다.";
  $("#year-month-copy-2").textContent = "중반에는 사람과 기회가 함께 들어오는 흐름입니다. 다만 모든 제안을 받아들이면 피로가 쌓일 수 있으니, 내 목표와 연결되는 일만 선택해야 합니다.";
  $("#year-month-copy-3").textContent = "연말에는 그동안 쌓아둔 결과를 확인하는 시기입니다. 큰 결실이 한 번에 오지 않더라도, 내가 유지한 습관과 선택이 다음 해의 운을 결정하는 기반이 됩니다.";
  $("#year-advice-copy").textContent = "올해는 쓸데없는 생각이 많아지기 쉬운 시기입니다. 혼자만의 상상에 오래 빠지기보다, 계획을 작게 나누고 바로 실행할 수 있는 일부터 처리하세요. 꿈은 크게 가져도 좋지만, 현실적인 순서가 없으면 오히려 나를 지치게 만들 수 있습니다.";
  $("#year-share-count").textContent = (2040000 + mod(reading.seed * 97, 68000)).toLocaleString("ko-KR");
}

function renderResult(reading) {
  const { profile, pillars, values, dominant, weak, dayMaster } = reading;
  const isTodayResult = currentService === "today";
  const isYearResult = currentService === "year";
  const service = services.find((item) => item.id === currentService);
  const animal = pillars.day.branch.animal;
  const animalName = animalKo[animal] || animal;
  const dayStemKo = elementKo[dayMaster.key] || dayMaster.vi;
  const godKo = tenGodKo[mod(reading.seed + currentService.length, tenGodKo.length)];
  const resultView = $("#result");
  resultView.classList.toggle("today-result-view", isTodayResult);
  resultView.classList.toggle("year-result-view", isYearResult);
  resultView.dataset.service = currentService;
  $("#profile-name").textContent = profile.name;
  $("#profile-gender").textContent = genderKo(profile.gender);
  $("#profile-meta").textContent = `${formatDate(profile.date)} (양력) · ${profile.unknownTime ? "시간 모름" : formatBirthTime(profile.time)}`;
  $("#result-title").textContent = service?.title || "운세 결과";
  $("#main-element").textContent = dayMaster.symbol;
  $("#main-element-name").textContent = dayStemKo;
  $("#main-animal").textContent = animalEmoji[animal] || "✦";
  $("#main-animal-name").textContent = `노란 ${animalName}`;
  $("#main-god").textContent = godKo.slice(0, 2);
  $("#main-god-name").textContent = godKo;
  $("#manse-name").textContent = profile.name;
  $("#manse-animal").textContent = animalEmoji[animal] || "✦";
  $("#manse-type").textContent = `${pillars.day.stem.vi}${pillars.day.branch.vi} (${dayStemKo} ${animalName})`;
  $("#manse-gender").textContent = genderKo(profile.gender);
  $("#manse-solar-date").textContent = `${formatDate(profile.date)} (${profile.unknownTime ? "시간 모름" : profile.time})`;
  $("#manse-lunar-date").textContent = `${formatDate(profile.date).replace(/(\d{4})\.(\d{2})\.(\d{2})/, "$1.05.30")} (평달)`;
  $("#manse-season-date").textContent = `${profile.date.slice(0, 4)}.06.06 (12:43)`;
  $("#big-luck-number").textContent = `${mod(reading.seed, 8) + 1} 순행`;
  renderPillars(pillars, "#result-pillar-grid");
  renderPillars(pillars, "#pillar-grid");
  renderMiniTable(reading, "#result-mini-table");
  renderMiniTable(reading, "#mini-table");
  renderRelation(reading);
  renderElements(values, dominant, weak);
  renderStrength(reading);
  renderLuck(reading);
  renderServiceAnalysis(reading);
  renderPaidReport(reading);
  renderYearFortuneReport(reading);
  renderTodayFortune(reading);
  const yearReport = $(".year-fortune-report");
  const serviceCard = $(".service-analysis-card");
  const paidReport = $(".paid-report-card");
  if (yearReport) {
    yearReport.hidden = !isYearResult;
    yearReport.style.setProperty("display", isYearResult ? "block" : "none", "important");
  }
  if (serviceCard) {
    serviceCard.hidden = isYearResult;
    serviceCard.style.setProperty("display", isYearResult || isTodayResult ? "none" : "block", "important");
  }
  if (paidReport) {
    paidReport.hidden = isYearResult || isTodayResult;
    paidReport.style.setProperty("display", isYearResult || isTodayResult ? "none" : "block", "important");
  }
  localStorage.setItem("tuvi:last-reading", JSON.stringify({ profile, currentService, savedAt: Date.now(), version: VERSION }));
}

function renderTodayFortune(reading) {
  const chart = $("#today-radar-chart");
  if (!chart) return;
  const todayRoot = $(".today-fortune-result");
  if (todayRoot) {
    todayRoot.classList.remove("zodiac-active", "star-active");
    $$(".today-fortune-tabs button").forEach((button, index) => button.classList.toggle("active", index === 0));
  }

  const copies = [
    "기동력과 순발력을 발휘해야 하는 하루입니다.",
    "차분한 판단이 좋은 기회를 불러오는 하루입니다.",
    "말보다 행동이 운을 끌어올리는 하루입니다.",
    "작은 약속을 지키는 태도가 신뢰를 만듭니다.",
  ];
  const score = 82 + mod(reading.seed, 13);
  const values = [
    score,
    72 + mod(reading.seed * 3, 18),
    58 + mod(reading.seed * 5, 24),
    66 + mod(reading.seed * 7, 22),
    54 + mod(reading.seed * 11, 23),
    60 + mod(reading.seed * 13, 25),
  ];
  const center = 160;
  const radius = 118;
  const angles = [-90, -30, 30, 90, 150, 210];
  const point = (angle, value = 100) => {
    const radians = angle * Math.PI / 180;
    const distance = radius * value / 100;
    return `${(center + Math.cos(radians) * distance).toFixed(1)},${(center + Math.sin(radians) * distance).toFixed(1)}`;
  };
  const rings = [20, 40, 60, 80, 100].map((value) =>
    `<polygon points="${angles.map((angle) => point(angle, value)).join(" ")}" fill="none" stroke="#dce5f2" stroke-width="1.45"></polygon>`
  ).join("");
  const spokes = angles.map((angle) => `<line x1="${center}" y1="${center}" x2="${point(angle).split(",")[0]}" y2="${point(angle).split(",")[1]}" stroke="#e7edf6" stroke-width="1.05"></line>`).join("");
  const pointMarks = angles.map((angle, index) => {
    const [cx, cy] = point(angle, values[index]).split(",");
    return `<circle cx="${cx}" cy="${cy}" r="4.3" fill="#fff" stroke="#18dce5" stroke-width="2.8"></circle>`;
  }).join("");
  const polygon = angles.map((angle, index) => point(angle, values[index])).join(" ");
  const cssPolygon = angles.map((angle, index) => {
    const radians = angle * Math.PI / 180;
    const distance = 48 * values[index] / 100;
    return `${(50 + Math.cos(radians) * distance).toFixed(1)}% ${(50 + Math.sin(radians) * distance).toFixed(1)}%`;
  }).join(", ");

  $("#today-score-number").textContent = score;
  $("#today-score-copy").textContent = copies[mod(reading.seed, copies.length)];
  renderAnalysisReport(reading, score);
  renderTodayDetails(reading, values);
  renderZodiacFortune(reading);
  chart.querySelector(".radar-grid").innerHTML = `${rings}${spokes}`;
  chart.querySelector(".radar-points").innerHTML = pointMarks;
  chart.querySelector(".radar-fill").setAttribute("points", polygon);
  chart.querySelector(".radar-fill").setAttribute("fill", "rgba(58, 229, 235, 0.58)");
  chart.querySelector(".radar-fill").removeAttribute("stroke");
  chart.querySelector(".radar-fill").removeAttribute("stroke-width");
  chart.querySelector(".radar-line").setAttribute("points", polygon);
  chart.querySelector(".radar-line").setAttribute("fill", "none");
  chart.querySelector(".radar-line").setAttribute("stroke", "#18dce5");
  chart.querySelector(".radar-line").setAttribute("stroke-width", "4.2");
  chart.querySelector(".radar-line").setAttribute("stroke-linejoin", "round");
  $("#today-radar-fallback")?.style.setProperty("--radar-shape", `polygon(${cssPolygon})`);
}

function renderAnalysisReport(reading, score) {
  const profileName = reading.profile.name || "당신";
  const summaries = [
    `${profileName}님은 오늘 빠른 결정보다 우선순위를 정리하는 힘이 더 크게 작용합니다. 주변의 말에 휘둘리기보다 내가 해야 할 일을 하나씩 끝내면 오후부터 운의 흐름이 안정됩니다.`,
    `${profileName}님에게 오늘은 관계와 일의 균형을 맞추는 날입니다. 무리하게 앞서가기보다 상대의 반응을 확인하면서 움직이면 좋은 기회가 생깁니다.`,
    `${profileName}님은 오늘 작은 약속과 시간 관리에서 운이 열립니다. 해야 할 일을 미루지 않고 정리하면 재물운과 신뢰운이 함께 올라갑니다.`,
  ];
  const keys = [
    "작게 시작하고 확실하게 마무리하세요.",
    "먼저 설명하기보다 한 번 더 확인하세요.",
    "지출과 말을 줄이면 운이 안정됩니다.",
  ];
  const cautions = [
    "감정적으로 바로 답하거나 약속을 늘리는 일은 피하는 편이 좋습니다.",
    "상대의 말만 믿고 큰 결정을 내리면 흐름이 흔들릴 수 있습니다.",
    "조급함 때문에 이미 좋은 선택을 바꾸지 않도록 주의하세요.",
  ];
  const actions = [
    "중요한 연락은 오후에 하고, 돈이 나가는 결정은 한 번 더 확인하세요.",
    "오늘은 새 일을 벌이기보다 이미 시작한 일을 마무리하는 편이 좋습니다.",
    "짧은 산책이나 주변 정리가 생각의 흐름을 맑게 해 줄 수 있습니다.",
  ];

  $("#report-name").textContent = profileName;
  $("#report-score-pill").textContent = `오늘 운세 ${score}점`;
  $("#report-summary").textContent = summaries[mod(reading.seed + score, summaries.length)];
  $("#report-key").textContent = keys[mod(reading.seed, keys.length)];
  $("#report-caution").textContent = cautions[mod(reading.seed + 1, cautions.length)];
  $("#report-action").textContent = actions[mod(reading.seed + 2, actions.length)];
}

function renderTodayDetails(reading, scores) {
  const colors = [
    ["노랑", "#fff84a"],
    ["하늘색", "#55e7ec"],
    ["분홍", "#ff8ab7"],
    ["초록", "#8de35f"],
  ];
  const times = ["오전 9시", "오후 1시", "오후 3시", "저녁 8시"];
  const directions = ["동쪽", "남쪽", "서쪽", "북동쪽"];
  const detailSets = [
    [
      "오늘은 빠르게 움직이기보다 우선순위를 정리할수록 운이 좋아집니다.",
      "작은 지출을 줄이고 이미 가진 자원을 점검하면 좋은 흐름이 생깁니다.",
      "표현은 짧고 분명하게, 상대의 반응은 천천히 살피는 편이 좋습니다.",
    ],
    [
      "오전에 잡은 계획이 하루 전체의 흐름을 안정시켜 줍니다.",
      "충동구매보다 비교와 확인이 돈을 지켜주는 날입니다.",
      "먼저 다가가기보다 대화의 온도를 맞추면 관계운이 좋아집니다.",
    ],
    [
      "새로운 일을 벌이기보다 밀린 일을 끝내는 쪽에 운이 붙습니다.",
      "작은 수익보다 손실을 막는 판단이 더 중요합니다.",
      "솔직함은 좋지만 감정을 한 번 정리한 뒤 말하는 편이 좋습니다.",
    ],
  ];
  const picked = detailSets[mod(reading.seed, detailSets.length)];
  const [colorName, colorValue] = colors[mod(reading.seed, colors.length)];

  $("#detail-total").textContent = picked[0];
  $("#detail-money").textContent = picked[1];
  $("#detail-love").textContent = picked[2];
  $("#lucky-color").textContent = colorName;
  $("#lucky-color-chip").style.setProperty("--lucky-color-value", colorValue);
  $("#lucky-time").textContent = times[mod(scores[1] + reading.seed, times.length)];
  $("#lucky-direction").textContent = directions[mod(scores[2] + reading.seed, directions.length)];
}

function renderZodiacFortune(reading) {
  const zodiacTitle = $("#zodiac-title");
  if (!zodiacTitle) return;

  const birthYear = Number(reading.profile.date.slice(0, 4)) || 1995;
  const zodiacList = [
    ["원숭이띠", "申"], ["닭띠", "酉"], ["개띠", "戌"], ["돼지띠", "亥"],
    ["쥐띠", "子"], ["소띠", "丑"], ["호랑이띠", "寅"], ["토끼띠", "卯"],
    ["용띠", "辰"], ["뱀띠", "巳"], ["말띠", "午"], ["양띠", "未"],
  ];
  const [name, hanja] = zodiacList[mod(birthYear, 12)];
  const summaries = [
    "능력이 부족하니 알찬 결실을 거두기가 만무한 실정이다.",
    "마음이 앞서면 흐름이 흩어지니 한 박자 늦추는 것이 좋다.",
    "익숙한 길에서 의외의 답을 찾게 되는 날이다.",
    "큰 욕심보다 작은 약속을 지키는 편이 유리하다.",
  ];
  const headlines = [
    "지혜가 특출하다 하여도 이를 인정해주는 사람이 없으니 그 빛을 바랄 수가 없다",
    "먼저 움직이기보다 주변의 말과 흐름을 살펴야 실수를 줄일 수 있다",
    "좋은 뜻으로 시작한 일도 확인 없이 밀어붙이면 부담으로 돌아올 수 있다",
    "작은 성과를 가볍게 여기지 않아야 다음 기회가 열린다",
  ];
  const bodies = [
    "오늘은 남의 말에 귀를 기울여야 합니다. 당신이 내리는 선택은 그 어느 것도 도움이 되지 못할 수 있습니다. 물론 돌아가는 길을 선택해도 무방하다면 할 말은 없습니다.",
    "주변의 반응을 살피며 차분히 움직이면 손해를 피할 수 있습니다. 급하게 결론을 내리기보다 시간을 두고 확인하는 태도가 필요합니다.",
    "눈앞의 이익보다 관계의 균형을 먼저 생각해야 합니다. 한 번 더 묻고 확인하는 습관이 오늘의 운을 안정시켜 줍니다.",
    "무리하게 앞서 나가기보다 이미 갖춘 것을 정리하는 날입니다. 작은 일부터 마무리하면 오후로 갈수록 흐름이 편안해집니다.",
  ];

  zodiacTitle.textContent = `${name} 해(${hanja})`;
  $("#zodiac-summary").textContent = summaries[mod(reading.seed, summaries.length)];
  $("#zodiac-year").textContent = `${String(birthYear).slice(2)}년생`;
  $("#zodiac-headline").textContent = headlines[mod(reading.seed + 1, headlines.length)];
  $("#zodiac-body").textContent = bodies[mod(reading.seed + 2, bodies.length)];
}

function renderPillars(pillars, selector = "#pillar-grid") {
  const target = $(selector);
  if (!target) return;
  const order = getPillarOrder(pillars);
  target.innerHTML = order.map(([label, pillar], index) => `
    <article>
      <span>${label}</span>
      <strong>${tenGodKo[mod(index + pillar.stem.han.charCodeAt(0), tenGodKo.length)]}</strong>
      <div class="tile ${pillar.stem.element}"><b>${pillar.stem.han}</b><small>${pillar.stem.vi}</small></div>
      <div class="tile ${pillar.branch.element}"><b>${pillar.branch.han}</b><small>${pillar.branch.vi}</small></div>
      <em>${tenGodKo[mod(index + pillar.branch.han.charCodeAt(0), tenGodKo.length)]}</em>
    </article>
  `).join("");
}

function renderMiniTable(reading, selector = "#mini-table") {
  const target = $(selector);
  if (!target) return;
  const rows = [
    ["십성", (index) => tenGodKo[mod(reading.seed + index * 2, tenGodKo.length)]],
    ["지장간", (index) => tenGodKo[mod(reading.seed + index * 3, tenGodKo.length)]],
    ["12운성", (index) => seasonalKo[mod(reading.seed + index * 3, seasonalKo.length)]],
    ["12신살", (index) => salKo[mod(reading.seed + index * 5, salKo.length)]],
    ["공망", (index) => (index % 2 === 0 ? "[일]공망" : "-")],
  ];
  target.innerHTML = rows.map(([label, getter]) => `
    <div class="mini-row">
      <b>${label}</b>
      ${[0, 1, 2, 3].map((index) => `<span>${getter(index)}</span>`).join("")}
    </div>
  `).join("");
}

function renderRelation(reading) {
  const order = getPillarOrder(reading.pillars);
  $("#relation-diagram").innerHTML = order.map(([label, pillar], index) => `
    <article>
      <span>${label.replace("주", "간")}</span>
      <div class="tile ${pillar.stem.element}"><b>${pillar.stem.han}</b></div>
      <div class="tile ${pillar.branch.element}"><b>${pillar.branch.han}</b></div>
      <em>${index === 0 ? "축오해" : index === 1 ? "축오원진" : index === 2 ? "해축반합" : ""}</em>
    </article>
  `).join("");

  $("#salsin-table").innerHTML = `
    <div><b>천간</b>${order.map(([, pillar]) => `<span>${pillar.stem.han}</span>`).join("")}</div>
    <div><b>신살/길성</b>${[0, 1, 2, 3].map((index) => `<span>${salKo[mod(reading.seed + index * 4, salKo.length)]}</span>`).join("")}</div>
    <div><b>지지</b>${order.map(([, pillar]) => `<span>${pillar.branch.han}</span>`).join("")}</div>
    <div><b>신살/길성</b>${[0, 1, 2, 3].map((index) => `<span>${salKo[mod(reading.seed + index * 6, salKo.length)]}</span>`).join("")}</div>
  `;
}

function renderElements(values, dominant, weak) {
  $("#five-orbit").innerHTML = elements.map((element) => `
    <article class="${element.key}">
      <strong>${values[element.key]}%</strong>
      <span>${element.symbol}</span>
    </article>
  `).join("");

  $("#element-list").innerHTML = elements.map((element) => {
    const status = element.key === weak.key ? "부족" : element.key === dominant.key ? "과다" : "적정";
    return `
      <article>
        <b class="element-badge ${element.key}">${element.symbol}</b>
        <div><strong>${elementKo[element.key]}(${elementRoleKo[element.key]}) <span class="${status === "부족" ? "dark" : ""}">${status}</span></strong></div>
        <em>${tenGodKo[mod(values[element.key], tenGodKo.length)]} ${values[element.key]}%</em>
      </article>
    `;
  }).join("");
}

function renderStrength(reading) {
  $("#strength-gauge").style.setProperty("--strength", `${reading.strength}%`);
  $("#strength-score").textContent = reading.strength;
  $("#strength-label").textContent = reading.strength >= 61 ? "신강한 사주입니다." : reading.strength >= 40 ? "중화에 가까운 사주입니다." : "신약한 사주입니다.";
  $("#strength-copy").textContent = reading.strength >= 60
    ? "버티는 힘이 강하지만 혼자 감당하려는 경향이 있습니다. 중요한 선택은 기준을 적고 천천히 확인하세요."
    : "환경의 영향을 크게 받는 편입니다. 피로가 쌓이면 판단이 흐려지니 휴식과 루틴을 먼저 챙기세요.";
}

function renderLuck(reading) {
  renderLuckStrip("#decade-strip", 6, 10, reading.seed + 27, "tuổi");
  renderLuckStrip("#year-strip", 6, 1, reading.seed + 2026, "năm");
  renderLuckStrip("#month-strip", 6, 1, reading.seed + 5, "tháng");
}

function renderLuckStrip(selector, count, step, start, suffix) {
  const items = Array.from({ length: count }, (_, index) => {
    const pillar = pillarFromIndex(start - index * step);
    const label = suffix === "tuổi" ? `${57 - index * 10}` : suffix === "tháng" ? `${7 - index}` : `${2028 - index}`;
    return { pillar, label };
  });
  $(selector).innerHTML = items.map(({ pillar, label }, index) => `
    <article class="${index === 2 ? "selected" : ""}">
      <span>${label}</span>
      <div class="tile ${pillar.stem.element}"><b>${pillar.stem.han}</b><small>${pillar.stem.vi}</small></div>
      <div class="tile ${pillar.branch.element}"><b>${pillar.branch.han}</b><small>${pillar.branch.vi}</small></div>
    </article>
  `).join("");
}

function bindForm() {
  $("#birth-form").addEventListener("submit", (event) => {
    event.preventDefault();
  });

  $("#entry-next-button")?.addEventListener("click", () => {
    if (!validateEntryStep()) return;
    if (entryStep < 4) {
      setEntryStep(entryStep + 1);
      return;
    }
    showSheet("terms-sheet");
  });

  $("#entry-back-button")?.addEventListener("click", () => {
    if (entryStep > 1) {
      setEntryStep(entryStep - 1);
      return;
    }
    openView("home");
  });

  $("#birth-date")?.addEventListener("input", (event) => {
    event.target.value = displayDateInput(event.target.value);
    updateEntryReview();
    validateEntryStep();
  });

  $("#birth-time")?.addEventListener("input", (event) => {
    event.target.value = displayTimeInput(event.target.value);
    updateEntryReview();
    validateEntryStep();
  });

  ["name"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", () => {
      updateEntryReview();
      validateEntryStep();
    });
  });

  $$(".clear-field").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.clearTarget);
      if (!target) return;
      target.value = "";
      target.focus();
      updateEntryReview();
      validateEntryStep();
    });
  });

  $$(".gender-choice button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".gender-choice button").forEach((item) => item.classList.toggle("active", item === button));
      $("#gender").value = button.dataset.genderValue || "Nam";
      updateEntryReview();
      validateEntryStep();
    });
  });

  $("#unknown-time")?.addEventListener("change", (event) => {
    $("#birth-time").disabled = event.target.checked;
    validateEntryStep();
  });

  $$(".calendar-toggle button:not([disabled])").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".calendar-toggle button").forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  $("#start-entry-flow")?.addEventListener("click", () => {
    hideSheet("entry-start-sheet");
    openInputFlow();
  });

  $("#agree-start-button")?.addEventListener("click", () => {
    hideSheet("terms-sheet");
    showSheet("sns-sheet");
  });

  const continueFromSns = () => {
    hideSheet("sns-sheet");
    finishEntryFlow();
  };
  window.tuviContinueFromSns = continueFromSns;

  $("#skip-sns-button")?.addEventListener("click", continueFromSns);

  $("#sns-sheet")?.addEventListener("click", (event) => {
    const snsAction = event.target.closest("[data-sns-login], [data-sns-skip]");
    if (!snsAction) return;
    event.preventDefault();
    continueFromSns();
  });

  $$("[data-close-sheet]").forEach((button) => {
    button.addEventListener("click", () => hideSheet(button.dataset.closeSheet));
  });

  setEntryStep(1);
}

function bindShare() {
  $("#share-button").addEventListener("click", async () => {
    if (!currentReading) return;
    const text = `Tôi vừa xem vận khí trên tuvi.life: ${currentReading.headline} (${currentReading.score}/100)`;
    const service = services.find((item) => item.id === currentService);
    const shareText = `오늘 ${service?.title || "운세"} 결과: ${currentReading.headline} (${currentReading.score}/100)`;
    try {
      await navigator.clipboard.writeText(shareText);
      $("#share-button").textContent = "✓";
      setTimeout(() => { $("#share-button").textContent = "↗"; }, 1200);
    } catch {
      alert(shareText);
    }
  });

  $("#year-share-button")?.addEventListener("click", async () => {
    const text = currentReading
      ? `나의 신년운세 결과: ${currentReading.headline} (${currentReading.score}/100)`
      : "나의 신년운세를 확인해보세요!";
    try {
      await navigator.clipboard.writeText(text);
      $("#year-share-button").textContent = "복사됨";
      setTimeout(() => { $("#year-share-button").textContent = "공유하기"; }, 1200);
    } catch {
      alert(text);
    }
  });
}

function bindPromoCarousel() {
  const track = $("#promo-track");
  const dots = $$(".promo-dot");
  if (!track || dots.length === 0) return;

  let userTouched = false;
  let autoTimer = null;

  const setActive = (index) => {
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
  };

  const currentIndex = () => {
    const width = track.clientWidth || 1;
    return clamp(Math.round(track.scrollLeft / width), 0, dots.length - 1);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      userTouched = true;
      track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
      setActive(index);
    });
  });

  track.addEventListener("scroll", () => {
    window.requestAnimationFrame(() => setActive(currentIndex()));
  }, { passive: true });

  track.addEventListener("pointerdown", () => {
    userTouched = true;
  }, { passive: true });

  autoTimer = window.setInterval(() => {
    if (userTouched || document.hidden) return;
    const next = (currentIndex() + 1) % dots.length;
    track.scrollTo({ left: track.clientWidth * next, behavior: "smooth" });
    setActive(next);
  }, 4200);

  window.addEventListener("beforeunload", () => window.clearInterval(autoTimer));
}

function seedHomeScore() {
  const today = new Date();
  const seed = today.getFullYear() * 17 + (today.getMonth() + 1) * 11 + today.getDate();
  const score = 64 + (seed % 28);
  $("#home-score").textContent = score;
  $("#portal-score").textContent = score;
  $(".hero-ring").style.setProperty("--score", score);
  $(".hero-ring strong").textContent = score;
}

function boot() {
  if (window.__tuviBooted) return;
  window.__tuviBooted = true;
  renderServices();
  bindNavigation();
  bindTodayFortuneTabs();
  bindRewardActions();
  bindDailyTarotDraw();
  bindForm();
  bindShare();
  bindPromoCarousel();
  seedHomeScore();
  setService("today");
}

boot();
