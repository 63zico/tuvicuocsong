import KoreanLunarCalendar from "./node_modules/korean-lunar-calendar/dist/esm/korean-lunar-calendar.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const VERSION = "vi-ui-polish-2";

const services = {
  today: {
    label: "Vận hôm nay",
    title: "Vận hôm nay",
    tone: "Miễn phí mỗi ngày",
    heading: "Gợi ý vận may bạn cần trong hôm nay",
    copy: "Xem nhanh tổng vận, tình duyên, tiền bạc, công việc và sức khỏe.",
  },
  tarot: {
    label: "Tarot",
    title: "Tarot 1 lá",
    tone: "Một lá mỗi ngày",
    heading: "Chọn một lá bài gần nhất với cảm xúc của bạn",
    copy: "Nhận thông điệp ngắn về lựa chọn, cảm xúc và hướng đi hiện tại.",
  },
  couple: {
    label: "Tình duyên",
    title: "Tình duyên",
    tone: "Nhịp quan hệ",
    heading: "Điểm hòa hợp và điều nên tránh giữa hai người",
    copy: "Tóm tắt cách hai người kết nối, dễ hiểu lầm và nên ứng xử ra sao.",
  },
  year: {
    label: "Vận năm 2026",
    title: "Vận năm 2026",
    tone: "Xu hướng cả năm",
    heading: "Dòng vận lớn, cơ hội và điểm cần giữ trong năm",
    copy: "Luận giải điểm thuận lợi, điều cần cẩn thận và nhịp vận theo từng giai đoạn.",
  },
};

const resultProfiles = {
  today: {
    keyword: "Vận sắp xếp",
    heading: "Báo cáo vận hôm nay miễn phí",
    lines: [
      "Hôm nay vận khí mở ra khi bạn hoàn thành trước một việc quan trọng nhất.",
      "Tiền bạc và lời hứa nên được kiểm tra lại trước khi quyết định.",
      "Trong các mối quan hệ, nói ngắn gọn và rõ ý sẽ tốt hơn giải thích dài.",
    ],
    scoreCopy: "Một vài việc nhỏ được sắp xếp gọn sẽ giúp cả ngày ổn định hơn.",
    summary: {
      love: ["Dễ nói chuyện hơn", "Thẳng thắn nhưng mềm mỏng sẽ làm không khí dịu lại."],
      money: ["Kiểm tra chi tiêu", "So sánh và xác nhận sẽ giữ tiền tốt hơn mua theo cảm xúc."],
      work: ["Ưu tiên hoàn tất", "Kết thúc việc còn dang dở giúp bạn được đánh giá chắc hơn."],
      health: ["Ổn định nhịp sống", "Ngủ, ăn và di chuyển đúng giờ giúp năng lượng đều hơn."],
    },
    detail: [
      "Tổng vận hôm nay thiên về ổn định. Đây không phải ngày bùng nổ bất ngờ, mà là ngày bạn lấy lại nhịp, gom lại việc rối và từ đó mở ra cơ hội. Việc quan trọng nên chia nhỏ vào buổi sáng, đến chiều cứ theo thứ tự đã định mà xử lý.",
      "Vận tình cảm phụ thuộc nhiều vào nhiệt độ của lời nói. Đừng chờ người khác tự đoán hết tâm ý của bạn; hãy nói điều mình muốn bằng câu ngắn, rõ và nhẹ. Nếu đang bực hoặc lo, chậm lại một nhịp trước khi trả lời.",
      "Vận tiền bạc mạnh ở khả năng giữ tiền. Hôm nay lợi hơn khi chặn các khoản rò rỉ thay vì tìm một khoản lời lớn. Kiểm tra thanh toán tự động, chi phí lặp lại và những món muốn mua gấp sẽ biến vận tiền thành lợi ích thật.",
      "Vận công việc đến từ sự hoàn tất. Việc có kết quả để lại quan trọng hơn tốc độ trình diễn. Trả lời tin nhắn, gửi báo cáo, chốt lịch và hoàn thiện tài liệu sẽ kéo theo vận tín nhiệm.",
      "Vận sức khỏe nghiêng về hồi phục. Nếu bỏ qua tín hiệu mệt, sự tập trung sẽ giảm nhanh. Chỉ cần đi bộ ngắn, uống đủ nước và giữ giờ ăn ổn định, trạng thái cơ thể sẽ dễ chịu hơn.",
    ],
  },
  tarot: {
    keyword: "Vận lựa chọn",
    heading: "Báo cáo Tarot miễn phí",
    lines: [
      "Lúc này đừng vội kết luận; hãy nhìn rõ vì sao lòng mình nghiêng về lựa chọn đó.",
      "Lá bài khuyên bạn quan sát thêm một lần trước khi đưa ra quyết định.",
      "Câu trả lời hôm nay đến từ một hành động nhỏ nhưng dứt khoát.",
    ],
    scoreCopy: "Trực giác đang hoạt động tốt, nhưng vẫn cần một bước kiểm chứng.",
    summary: {
      love: ["Nhìn hành động", "Hành động lặp lại đáng tin hơn lời nói nhất thời."],
      money: ["Tạm hoãn quyết định", "Khoản chi chưa chắc chắn nên để qua một ngày."],
      work: ["Kiểm tra hướng đi", "Cơ hội mới cần được so với tiêu chuẩn của bạn trước."],
      health: ["Làm dịu tâm trí", "Khi suy nghĩ quá nhiều, hãy vận động nhẹ để xả căng."],
    },
    detail: [
      "Dòng Tarot đang hỏi lại tiêu chuẩn lựa chọn của bạn. Vấn đề kéo dài không phải vì hoàn toàn không có đáp án, mà vì bạn chưa xác định điều gì cần ưu tiên.",
      "Trong tình cảm, hãy nhìn hành động đều đặn hơn một câu nói đẹp. Lời nói ngọt nhưng hành động thất thường vẫn có thể làm bạn bất an.",
      "Về tiền bạc, sự trì hoãn đúng lúc sẽ bảo vệ vận may. Hôm nay nên tránh quyết định liên quan đến số tiền lớn, mua theo cảm xúc hoặc làm theo lời người khác.",
      "Trong công việc, dù có đề xuất mới, hãy xem trước khả năng chịu tải của mình. Cơ hội trông hấp dẫn nhưng lấy quá nhiều thời gian có thể trở thành gánh nặng.",
      "Lá bài hôm nay yêu cầu một bước nhỏ: sắp xếp một cuộc trò chuyện, hoàn tất một việc cần làm, hoặc viết vấn đề ra giấy. Việc đơn giản nhưng rõ ràng sẽ mở đường cho nhịp tiếp theo.",
    ],
  },
  couple: {
    keyword: "Vận cân bằng",
    heading: "Báo cáo tình duyên miễn phí",
    lines: [
      "Hai người có nhịp cảm xúc khác nhau nên dễ hiểu lầm dù vẫn quan tâm nhau.",
      "Điểm giúp quan hệ tốt lên không phải sự kiện lớn, mà là lời nói và lời hứa lặp lại.",
      "Hôm nay nên nói để hiểu tiêu chuẩn của nhau hơn là cố thuyết phục đối phương.",
    ],
    scoreCopy: "Khi hai người điều chỉnh nhịp của nhau, căng thẳng sẽ giảm rõ.",
    summary: {
      love: ["Giữ thiện cảm", "Tạo cuộc trò chuyện thoải mái tốt hơn ép người kia xác nhận."],
      money: ["Thống nhất thực tế", "Chuyện tiền và lịch hẹn nên nói bằng tiêu chuẩn, không bằng cảm xúc."],
      work: ["Rõ vai trò", "Kỳ vọng càng rõ thì càng ít hụt hẫng."],
      health: ["Tránh mệt cảm xúc", "Đừng để chuyện quan hệ kéo tụt năng lượng cả ngày."],
    },
    detail: [
      "Cốt lõi của tình duyên là khả năng duy trì, không chỉ là sự thu hút. Hai người có thiện cảm, nhưng cách biểu đạt khác nhau nên một bên có thể thấy lạnh, bên kia lại thấy áp lực.",
      "Trong dòng tình cảm, hãy giảm nhu cầu kiểm tra phản ứng của đối phương. Thử lòng quá nhiều làm quan hệ mệt. Nên nói nhẹ về cách trò chuyện và tần suất liên lạc mình mong muốn.",
      "Về thực tế, cần thống nhất tiêu chuẩn sớm. Chi phí hẹn hò, giờ giấc, nhịp sinh hoạt nếu mơ hồ quá lâu sẽ dễ biến thành chuyện cảm xúc.",
      "Trong đời sống và công việc, hãy tôn trọng giai đoạn bận rộn của nhau. Tin nhắn ngắn trong ngày mệt không nhất thiết đồng nghĩa với ít tình cảm.",
      "Nếu muốn đi đường dài, hôm nay ưu tiên phục hồi không khí hơn ép ra kết luận. Cần xin lỗi thì nói ngắn, cần cảm ơn thì nói cụ thể.",
    ],
  },
  year: {
    keyword: "Vận nền tảng",
    heading: "Báo cáo vận năm 2026 miễn phí",
    lines: [
      "Năm nay kết quả lớn hơn khi bạn đi bền một hướng thay vì mở quá nhiều hướng.",
      "Nửa đầu năm hợp với sắp xếp và chuẩn bị; nửa cuối năm mạnh về hành động và mở rộng.",
      "Trong quan hệ, tiền bạc và công việc, lựa chọn có tiêu chuẩn sẽ tốt hơn quyết định bốc đồng.",
    ],
    scoreCopy: "Càng xây lại nền tảng, kết quả cuối năm càng rõ.",
    summary: {
      love: ["Tái sắp xếp quan hệ", "Tiêu chuẩn đi đường dài quan trọng hơn cảm xúc nhất thời."],
      money: ["Tích lũy đều", "Dọn chi phí cố định và lặp lại khoản lợi nhỏ tốt hơn tìm cú lớn."],
      work: ["Chứng minh năng lực", "Hồ sơ, kỹ năng, chứng chỉ, sản phẩm rõ ràng sẽ có lợi."],
      health: ["Nhịp sống bền", "Cần thói quen hồi phục duy trì được lâu hơn thay đổi quá mạnh."],
    },
    detail: [
      "Tổng vận năm nay là vận xây nền. Quan trọng không phải mở rộng ngay lập tức, mà là chọn một hướng có thể theo lâu dài và biến nó thành cấu trúc lặp lại được. Đầu năm có thể chậm, nhưng càng về cuối năm kết quả càng rõ.",
      "Trong tình cảm và quan hệ, sự ổn định quan trọng hơn độ mạnh của cảm xúc. Dù có rung động, nếu nhịp sống, cách nói chuyện và lời hứa không hợp, mệt mỏi sẽ tích tụ. Năm nay mối quan hệ làm bạn bình tĩnh sẽ tốt hơn mối quan hệ làm bạn bất an.",
      "Vận tiền bắt đầu từ quản lý chứ không phải lợi nhanh. Chỉ cần giảm chi tiêu bốc đồng và chi phí cố định không cần thiết, cảm giác tài chính đã khác. Nếu đầu tư, nên kiểm chứng nhỏ trong phạm vi mình hiểu.",
      "Vận công việc nghiêng về chứng minh năng lực. Kết quả, ghi chép, hồ sơ, chứng chỉ và sản phẩm cụ thể có sức nặng hơn lời nói. Nửa đầu năm học và sắp xếp, nửa cuối năm đưa ra bên ngoài sẽ hợp vận.",
      "Sức khỏe chịu ảnh hưởng lớn từ nhịp sinh hoạt. Khi ngủ, ăn và vận động thất thường, cảm xúc cũng dễ lên xuống. Cách mở vận năm nay là tạo nhịp hồi phục có thể duy trì, không ép cơ thể quá mạnh.",
    ],
  },
};

const tarotCards = [
  {
    title: "The Sun",
    image: "assets/tarot/sun.jpg",
    message: "Hôm nay càng thành thật và rõ ràng, bạn càng dễ nhận phản hồi tích cực. Đừng giấu quá kỹ điều mình muốn nói.",
  },
  {
    title: "Wheel of Fortune",
    image: "assets/tarot/wheel-of-fortune.jpg",
    message: "Một thay đổi ngoài dự tính có thể xuất hiện. Nếu hướng đi đổi khác, hãy đọc nhịp mới trước khi lo lắng.",
  },
  {
    title: "The Star",
    image: "assets/tarot/star.jpg",
    message: "Đây là vận hồi phục chậm nhưng chắc. Điều cần giữ lúc này không phải kết luận nhanh, mà là một hy vọng đáng tin.",
  },
  {
    title: "Strength",
    image: "assets/tarot/strength.jpg",
    message: "Sức mạnh mềm sẽ hiệu quả hơn cố ép mọi thứ. Khi bạn kiểm soát cảm xúc, kết quả sẽ đi theo.",
  },
];

const zodiacAnimals = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
const timeBranches = [
  { label: "Giờ Tý", copy: "năng lượng suy nghĩ sâu vào ban đêm" },
  { label: "Giờ Sửu", copy: "năng lượng tích lũy chậm mà chắc" },
  { label: "Giờ Dần", copy: "năng lượng chủ động đi trước" },
  { label: "Giờ Mão", copy: "năng lượng nhạy với cảm xúc và quan hệ" },
  { label: "Giờ Thìn", copy: "năng lượng sắp xếp lại cục diện" },
  { label: "Giờ Tỵ", copy: "năng lượng biểu đạt và hành động mạnh" },
  { label: "Giờ Ngọ", copy: "năng lượng dễ được nhìn thấy" },
  { label: "Giờ Mùi", copy: "năng lượng cần cân bằng và điều hòa" },
  { label: "Giờ Thân", copy: "năng lượng phán đoán nhanh" },
  { label: "Giờ Dậu", copy: "năng lượng hoàn tất và chốt kết quả" },
  { label: "Giờ Tuất", copy: "năng lượng trách nhiệm và tiêu chuẩn" },
  { label: "Giờ Hợi", copy: "năng lượng hồi phục và trực giác" },
];
const elementFlows = [
  { label: "Mộc khí", copy: "sức mở đầu và phát triển" },
  { label: "Hỏa khí", copy: "sức biểu đạt và thu hút chú ý" },
  { label: "Thổ khí", copy: "sức giữ ổn định khi mọi thứ dao động" },
  { label: "Kim khí", copy: "sức sắp xếp và đặt tiêu chuẩn" },
  { label: "Thủy khí", copy: "sức quan sát và đọc dòng chảy" },
];
const serviceSignals = {
  today: {
    focus: ["thứ tự ưu tiên", "việc cần hoàn tất", "cách nói chuyện", "khoản tiền rò rỉ", "nhịp cơ thể"],
    caution: ["quyết định bốc đồng", "trì hoãn phản hồi", "bỏ qua khoản chi nhỏ", "nói khi đang cảm xúc", "lịch trình quá tải"],
    action: ["hoàn thành trước một việc quan trọng nhất", "đặt giới hạn chi tiêu trong ngày", "trả lời gọn một tin nhắn còn treo", "dọn xong một việc đã trì hoãn"],
  },
  tarot: {
    focus: ["tiêu chuẩn lựa chọn", "ưu tiên trong lòng", "hành động lặp lại của người kia", "quyết định nên hoãn", "bước đầu nhỏ"],
    caution: ["ép ra kết luận", "chọn chỉ vì lời người khác", "nhắn tin vì bất an", "mua theo cảm xúc", "ám ảnh xác nhận tình cảm"],
    action: ["viết nỗi băn khoăn thành một câu", "rút lựa chọn xuống còn hai phương án", "chọn một việc hôm nay không làm", "thực hiện một thông điệp từ lá bài"],
  },
  couple: {
    focus: ["nhiệt độ liên lạc", "tiêu chuẩn của hai người", "giọng nói lặp lại", "điều chỉnh thực tế", "mệt mỏi cảm xúc"],
    caution: ["đòi xác nhận liên tục", "giữ hụt hẫng trong lòng", "mơ hồ về tiền và lịch", "nói để thử lòng", "giải thích quá dài"],
    action: ["nói ngắn về cách trò chuyện bạn muốn", "chốt rõ một cuộc hẹn", "nói cụ thể một điều biết ơn", "đừng đo tình cảm bằng tốc độ trả lời"],
  },
  year: {
    focus: ["sắp xếp nửa đầu năm", "hành động nửa cuối năm", "quản lý chi phí cố định", "thành quả có bằng chứng", "thói quen bền vững"],
    caution: ["đổi tất cả cùng lúc", "chỉ tăng kế hoạch", "chi tiêu theo tâm trạng", "chiều quan hệ không có tiêu chuẩn", "ép cơ thể quá sức"],
    action: ["giảm mục tiêu năm xuống tối đa ba điều", "chọn một chỉ số để kiểm tra mỗi tháng", "dọn lại chi phí cố định", "ưu tiên việc để lại sản phẩm rõ ràng"],
  },
};

let currentService = "today";
let currentReading = null;
let pendingSaveRecord = null;
let entryStep = 1;
let analysisTimer = null;
let analysisProgressTimer = null;
let tarotOffset = 0;
let analyticsReady = false;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function mod(value, length) {
  return ((value % length) + length) % length;
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function seedFromProfile(profile, serviceId = currentService) {
  const raw = [
    profile.name,
    profile.inputDate || profile.date,
    profile.date,
    profile.time,
    profile.gender,
    profile.calendar,
    profile.lunarIntercalation ? "leap" : "plain",
    serviceId,
    todayKey(),
  ].join("|");
  let hash = 0;
  for (let index = 0; index < raw.length; index += 1) {
    hash = (hash * 31 + raw.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function formatDate(value) {
  const normalized = normalizeDateInput(value);
  return normalized.replaceAll("-", ".");
}

function normalizeDateInput(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length === 8) return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return "1995-06-27";
}

function getDateParts(value) {
  const source = String(value || "");
  const digits = source.replace(/\D/g, "").slice(0, 8);
  const normalized =
    digits.length === 8
      ? `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`
      : /^\d{4}-\d{2}-\d{2}$/.test(source)
        ? source
        : "";
  if (!normalized) return null;
  return {
    normalized,
    year: Number(normalized.slice(0, 4)),
    month: Number(normalized.slice(5, 7)),
    day: Number(normalized.slice(8, 10)),
  };
}

function isValidSolarDate(value) {
  const parts = getDateParts(value);
  if (!parts || parts.year < 1900) return false;
  const date = new Date(parts.year, parts.month - 1, parts.day);
  const now = new Date();
  return (
    date.getFullYear() === parts.year &&
    date.getMonth() === parts.month - 1 &&
    date.getDate() === parts.day &&
    date.getTime() <= new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  );
}

function convertLunarToSolar(value, intercalation = false) {
  const parts = getDateParts(value);
  if (!parts) return "";
  const calendar = new KoreanLunarCalendar();
  const converted = calendar.setLunarDate(parts.year, parts.month, parts.day, Boolean(intercalation));
  if (!converted) return "";
  const solar = calendar.getSolarCalendar();
  return `${String(solar.year).padStart(4, "0")}-${String(solar.month).padStart(2, "0")}-${String(solar.day).padStart(2, "0")}`;
}

function resolveBirthDate(inputDate, calendarType, intercalation = false) {
  if (!inputDate) {
    return { analysisDate: "1995-06-27", valid: false, converted: false };
  }
  if (calendarType !== "lunar") {
    return {
      analysisDate: inputDate,
      valid: isValidSolarDate(inputDate),
      converted: false,
    };
  }
  const solarDate = convertLunarToSolar(inputDate, intercalation);
  return {
    analysisDate: solarDate || "1995-06-27",
    valid: Boolean(solarDate) && isValidSolarDate(solarDate),
    converted: Boolean(solarDate),
  };
}

function formatOptionalDate(value) {
  return value ? formatDate(value) : "-";
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

function genderLabel(value) {
  return value === "female" || value === "Nữ" ? "Nữ" : "Nam";
}

function calendarLabel(value, intercalation = false) {
  if (value !== "lunar") return "Dương lịch";
  return intercalation ? "Âm lịch, tháng nhuận" : "Âm lịch";
}

function objectParticle(text) {
  return text ? "" : "";
}

function getEntryProfile() {
  const unknownTime = $("#unknown-time")?.checked;
  const calendar = $("#calendar-type")?.value || "solar";
  const rawDate = $("#birth-date")?.value || "";
  const dateDigits = rawDate.replace(/\D/g, "").slice(0, 8);
  const inputDate = dateDigits.length === 8 ? normalizeDateInput(rawDate) : "";
  const lunarIntercalation = calendar === "lunar" && Boolean($("#lunar-leap-month")?.checked);
  const resolvedDate = resolveBirthDate(inputDate, calendar, lunarIntercalation);
  return {
    name: $("#name")?.value.trim() || "bạn",
    inputDate,
    date: resolvedDate.analysisDate,
    time: unknownTime ? "00:00" : normalizeTimeInput($("#birth-time")?.value),
    gender: $("#gender")?.value || "male",
    calendar,
    lunarIntercalation,
    dateConverted: resolvedDate.converted,
    dateValid: dateDigits.length === 8 && resolvedDate.valid,
    unknownTime,
  };
}

function makeReading(profile) {
  const seed = seedFromProfile(profile);
  const score = clamp(68 + mod(seed, 29), 62, 96);
  return {
    profile,
    seed,
    score,
    serviceId: currentService,
    savedAt: Date.now(),
    version: VERSION,
  };
}

function pickBySeed(list, seed, offset = 0) {
  if (!Array.isArray(list) || !list.length) return "";
  return list[mod(seed + offset * 17, list.length)];
}

function getTimeBranch(profile) {
  if (profile.unknownTime) return { label: "Chưa rõ giờ sinh", copy: "khi chưa rõ giờ sinh, phần luận giải sẽ nhìn dòng vận theo phạm vi rộng hơn" };
  const hour = Number(String(profile.time || "00:00").slice(0, 2));
  const index = hour === 23 ? 0 : Math.floor((hour + 1) / 2) % 12;
  return timeBranches[index] || timeBranches[0];
}

function getBirthSeason(month) {
  if ([3, 4, 5].includes(month)) return "khí mở rộng của mùa xuân";
  if ([6, 7, 8].includes(month)) return "khí biểu đạt của mùa hè";
  if ([9, 10, 11].includes(month)) return "khí sắp xếp của mùa thu";
  return "khí tập trung của mùa đông";
}

function getPersonalContext(reading, template) {
  const date = normalizeDateInput(reading.profile.date);
  const year = Number(date.slice(0, 4)) || 1995;
  const month = Number(date.slice(5, 7)) || 1;
  const zodiac = zodiacAnimals[mod(year - 4, zodiacAnimals.length)];
  const branch = getTimeBranch(reading.profile);
  const element = elementFlows[mod(reading.seed, elementFlows.length)];
  const signals = serviceSignals[currentService] || serviceSignals.today;
  const focus = pickBySeed(signals.focus, reading.seed, 1);
  const caution = pickBySeed(signals.caution, reading.seed, 2);
  const action = pickBySeed(signals.action, reading.seed, 3);
  const secondAction = pickBySeed(signals.action.filter((item) => item !== action), reading.seed, 4) || action;
  const season = getBirthSeason(month);

  return {
    zodiac,
    branch,
    element,
    season,
    focus,
    caution,
    action,
    secondAction,
    keyword: `${template.keyword} · ${focus}`,
    heading: `Tuổi ${zodiac} và dòng ${focus}`,
  };
}

function buildPersonalLines(name, context) {
  return [
    `${name}, tuổi ${context.zodiac} kết hợp với ${context.season} và ${context.element.label}, nên hôm nay vận khí chuyển động mạnh nhất ở phần ${context.focus}.`,
    `Theo ${context.branch.label}, ${context.branch.copy} đang nổi lên; bạn nên cẩn thận với ${context.caution}.`,
    `Việc nên làm ngay hôm nay là ${context.action}. Hành động càng nhỏ và rõ, dòng vận chi tiết càng ổn định.`,
  ];
}

function buildDetailSections(template, context, name) {
  return template.detail.map((text, index) => {
    const prefix = [
      `Tổng vận của ${name} nên được nhìn từ điểm giao giữa tuổi ${context.zodiac} và ${context.element.label}.`,
      `Trong tình cảm và quan hệ, ${context.branch.copy} ảnh hưởng đến cách nói và tốc độ phản hồi.`,
      `Dòng tiền mở ra trước khi bạn giảm được ${context.caution}.`,
      `Trong công việc và học tập, điều quan trọng là biến ${context.focus} thành kết quả cụ thể.`,
      `Với sức khỏe, điểm chính là giữ ưu điểm của ${context.season} không biến thành quá sức.`,
    ][index] || "";
    return `${prefix} ${text}`;
  });
}

function getAnalyticsId() {
  const metaId = document.querySelector('meta[name="ga4-measurement-id"]')?.content.trim() || "";
  return window.TODAY_FORTUNE_GA_ID || window.TODAY_FORTUNE_CONFIG?.gaMeasurementId || metaId;
}

function sanitizeMetricPayload(payload = {}) {
  const blockedKeys = new Set(["name", "date", "birthDate", "inputDate", "analysisDate", "time", "rawDate"]);
  return Object.entries(payload).reduce((safePayload, [key, value]) => {
    if (blockedKeys.has(key)) return safePayload;
    if (value === undefined || value === null) return safePayload;
    if (typeof value === "number" || typeof value === "boolean") {
      safePayload[key] = value;
      return safePayload;
    }
    safePayload[key] = String(value).slice(0, 100);
    return safePayload;
  }, {});
}

function initAnalytics() {
  if (analyticsReady) return true;
  const measurementId = getAnalyticsId();
  if (!measurementId) return false;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  if (!document.querySelector(`script[data-ga4-id="${measurementId}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.ga4Id = measurementId;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  analyticsReady = true;
  return true;
}

function sendAnalyticsEvent(name, payload = {}) {
  if (!initAnalytics() || typeof window.gtag !== "function") return;
  const params = {
    app_version: VERSION,
    service: currentService,
    active_view: document.body.dataset.activeView || "home",
    ...sanitizeMetricPayload(payload),
  };
  window.gtag("event", name, params);
}

function trackMetric(name, payload = {}) {
  const eventPayload = { service: currentService, ...payload };
  try {
    const key = "today-fortune:metrics-v1";
    const metrics = JSON.parse(localStorage.getItem(key) || "{}");
    const day = todayKey();
    const today = metrics[day] || {};
    const current = today[name] || { count: 0, items: [] };
    current.count += 1;
    current.items = [{ at: Date.now(), ...sanitizeMetricPayload(eventPayload) }, ...(current.items || [])].slice(0, 20);
    metrics[day] = { ...today, [name]: current };
    localStorage.setItem(key, JSON.stringify(metrics));
  } catch {
    // Analytics stored locally must never block the reading flow.
  }
  sendAnalyticsEvent(name, eventPayload);
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
  window.setTimeout(() => {
    sheet.hidden = true;
  }, 180);
}

function openView(viewId) {
  document.body.dataset.activeView = viewId;
  $$(".view").forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });
  $$(".bottom-nav button").forEach((button) => {
    const nav = button.dataset.nav;
    const serviceViews = new Set(["input", "analysis", "result", "year-info"]);
    const isActive =
      (viewId === "home" && nav === "home") ||
      (viewId === "tarot" && nav === "tarot") ||
      (serviceViews.has(viewId) && button.dataset.service === currentService);
    button.classList.toggle("active", Boolean(isActive));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  trackMetric("screen_view", {
    screen_name: viewId,
    page_path: `/${viewId}`,
  });
}

function setService(serviceId) {
  currentService = services[serviceId] ? serviceId : "today";
  const service = services[currentService];
  setText("#result-title", service.title);
  setText(".entry-header strong", `Nhập thông tin`);
  setText("#entry-start-sheet h2", `Bắt đầu ${service.title}?`);
  const startCopy = $("#entry-start-sheet p");
  if (startCopy) startCopy.innerHTML = `${service.heading}<br />${service.copy}`;
}

function syncCalendarUi(profile = getEntryProfile()) {
  const lunarExtra = $("#lunar-extra");
  const helper = $("#calendar-helper");
  if (lunarExtra) lunarExtra.hidden = profile.calendar !== "lunar";
  if (!helper) return;
  if (profile.calendar !== "lunar") {
    helper.textContent = "Luận giải theo ngày sinh dương lịch";
    return;
  }
  helper.textContent = profile.dateValid
    ? `Đã đổi sang dương lịch ${formatDate(profile.date)} để luận giải`
    : "Vui lòng kiểm tra ngày âm lịch và tháng nhuận";
}

function updateEntryReview() {
  const profile = getEntryProfile();
  syncCalendarUi(profile);
  setText("#entry-name-display", profile.name);
  setText("#review-name", profile.name);
  setText("#review-gender", genderLabel(profile.gender));
  setText("#review-date", formatOptionalDate(profile.inputDate || profile.date));
  setText("#review-calendar", calendarLabel(profile.calendar, profile.lunarIntercalation));
  setText(
    "#review-solar-date",
    profile.calendar === "lunar"
      ? profile.dateValid
        ? `${formatDate(profile.date)} dương lịch`
        : "Không thể đổi ngày âm lịch này"
      : `${formatOptionalDate(profile.date)} theo dương lịch`,
  );
  setText("#review-time", profile.unknownTime ? "Không rõ giờ sinh" : profile.time);
}

function validateEntryStep() {
  const button = $("#entry-next-button");
  if (!button) return false;
  const name = $("#name")?.value.trim();
  const profile = getEntryProfile();
  const dateDigits = $("#birth-date")?.value.replace(/\D/g, "") || "";
  const timeDigits = $("#birth-time")?.value.replace(/\D/g, "") || "";
  const dateReady = dateDigits.length === 8;
  const timeReady = $("#unknown-time")?.checked || timeDigits.length === 4;
  let valid = true;
  let message = entryStep === 4 ? "Xem kết quả" : "Tiếp tục";

  if (entryStep === 1 && !name) {
    valid = false;
    message = "Nhập tên của bạn";
  }
  if (entryStep === 3) {
    if (!dateReady) {
      valid = false;
      message = "Nhập ngày sinh đủ 8 số";
    } else if (!profile.dateValid) {
      valid = false;
      message = profile.calendar === "lunar" ? "Kiểm tra ngày âm lịch và tháng nhuận" : "Kiểm tra lại ngày sinh";
    } else if (!timeReady) {
      valid = false;
      message = "Nhập giờ sinh hoặc chọn không rõ giờ";
    }
  }

  button.disabled = !valid;
  button.textContent = message;
  return valid;
}

function setEntryStep(step) {
  entryStep = clamp(step, 1, 4);
  $$(".entry-step").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.entryStep) === entryStep);
  });
  updateEntryReview();
  validateEntryStep();
}

function openInputFlow() {
  openView("input");
  setEntryStep(1);
  trackMetric("input_flow_start", { entry_service: currentService });
  window.setTimeout(() => $("#name")?.focus(), 120);
}

function finishEntryFlow() {
  const profile = getEntryProfile();
  trackMetric("analysis_start", {
    calendar: profile.calendar,
    lunar_intercalation: Boolean(profile.lunarIntercalation),
    unknown_time: Boolean(profile.unknownTime),
  });
  currentReading = makeReading(profile);
  localStorage.setItem("today-fortune:last-profile", JSON.stringify(profile));
  showAnalysis(profile);
}

function showAnalysis(profile) {
  window.clearTimeout(analysisTimer);
  window.clearInterval(analysisProgressTimer);

  const service = services[currentService] || services.today;
  const count = 720000 + mod(currentReading.seed * 137, 98000);
  let progress = 92;

  const title = $(".analysis-view > h1");
  if (title) title.innerHTML = `Đang luận giải ${service.title} cho <span id="analysis-name">${profile.name}</span>!`;
  setText("#analysis-count", count.toLocaleString("vi-VN"));
  setText("#analysis-progress-text", String(progress));
  $("#analysis-progress-bar")?.style.setProperty("--analysis-progress", `${progress}%`);
  openView("analysis");

  analysisProgressTimer = window.setInterval(() => {
    progress = Math.min(100, progress + 2);
    setText("#analysis-progress-text", String(progress));
    $("#analysis-progress-bar")?.style.setProperty("--analysis-progress", `${progress}%`);
    if (progress >= 100) window.clearInterval(analysisProgressTimer);
  }, 180);

  analysisTimer = window.setTimeout(() => {
    window.clearInterval(analysisProgressTimer);
    setText("#analysis-progress-text", "100");
    $("#analysis-progress-bar")?.style.setProperty("--analysis-progress", "100%");
    renderResult(currentReading);
    openView("result");
  }, 1350);
}

function getResultProfile() {
  return resultProfiles[currentService] || resultProfiles.today;
}

function renderResult(reading) {
  const result = $("#result");
  const service = services[currentService] || services.today;
  const profile = getResultProfile();
  const context = getPersonalContext(reading, profile);
  const score = clamp(reading.score + (currentService === "year" ? 2 : 0), 62, 96);
  const name = reading.profile.name || "bạn";
  const lines = buildPersonalLines(name, context);
  const detailSections = buildDetailSections(profile, context, name);

  if (result) {
    result.dataset.service = currentService;
    result.classList.add("free-beta-result");
    result.classList.toggle("today-result-view", currentService === "today");
    result.classList.toggle("year-result-view", currentService === "year");
  }

  setText("#result-title", service.title);
  setText("#free-result-kicker", `3 điểm chính của ${service.title}`);
  setText("#free-result-heading", context.heading);
  const list = $("#free-three-lines");
  if (list) list.innerHTML = lines.map((line) => `<li>${line}</li>`).join("");
  setText("#personal-zodiac", `Tuổi ${context.zodiac}`);
  setText("#personal-time", context.branch.label);
  setText("#personal-element", context.element.label);
  setText("#personal-focus", context.focus);
  setText("#free-score-number", String(score));
  setText("#free-score-copy", `Điểm ${context.focus} đang cao. ${profile.scoreCopy}`);
  setText("#free-love-title", profile.summary.love[0]);
  setText("#free-love-copy", profile.summary.love[1]);
  setText("#free-money-title", profile.summary.money[0]);
  setText("#free-money-copy", profile.summary.money[1]);
  setText("#free-work-title", profile.summary.work[0]);
  setText("#free-work-copy", profile.summary.work[1]);
  setText("#free-health-title", profile.summary.health[0]);
  setText("#free-health-copy", profile.summary.health[1]);
  setText("#action-primary", context.action);
  setText("#action-caution", context.caution);
  setText("#action-revisit", `Ngày mai hãy xem lại phần ${context.secondAction} để thấy sự thay đổi rõ hơn.`);

  ["#free-detail-total", "#free-detail-love", "#free-detail-money", "#free-detail-work", "#free-detail-health"].forEach((selector, index) => {
    setText(selector, detailSections[index]);
  });
  setText("#share-card-service", service.title);
  setText("#share-card-score", String(score));
  setText("#share-card-keyword", context.keyword);
  setText("#share-card-advice", lines[0]);
  resetDetailLock();
  mountAdSlots();
  pendingSaveRecord = {
    serviceId: currentService,
    service: service.title,
    score,
    keyword: context.keyword,
    focus: context.focus,
    action: context.action,
    name,
    calendar: reading.profile.calendar,
    calendarLabel: calendarLabel(reading.profile.calendar, reading.profile.lunarIntercalation),
    birthDate: reading.profile.inputDate || reading.profile.date,
    analysisDate: reading.profile.date,
    lunarIntercalation: Boolean(reading.profile.lunarIntercalation),
    date: todayKey(),
    savedAt: Date.now(),
    version: VERSION,
  };
  resetSavePrompt();
  trackMetric("result_complete", { score, keyword: context.keyword });
}

function resetDetailLock() {
  $("#free-detail-lock")?.classList.remove("unlocked");
  const preview = $("#locked-detail-preview");
  const body = $("#free-detail-body");
  const button = $("#ad-unlock-button");
  const note = $("#ad-unlock-note");
  if (preview) preview.hidden = false;
  if (body) body.hidden = true;
  if (button) {
    button.disabled = false;
    button.textContent = "Xem quảng cáo để mở luận giải chi tiết";
  }
  if (note) note.textContent = "Nếu quảng cáo chưa tải được, phần chi tiết sẽ tự mở miễn phí sau ít giây.";
}

function unlockDetail(noteText) {
  $("#free-detail-lock")?.classList.add("unlocked");
  const preview = $("#locked-detail-preview");
  const body = $("#free-detail-body");
  const button = $("#ad-unlock-button");
  const note = $("#ad-unlock-note");
  if (preview) preview.hidden = true;
  if (body) body.hidden = false;
  if (button) {
    button.disabled = true;
    button.textContent = "Đã mở luận giải chi tiết";
  }
  if (note) note.textContent = noteText;
}

function getAdsenseClient() {
  return window.TODAY_FORTUNE_ADSENSE_CLIENT || window.TODAY_FORTUNE_CONFIG?.adsenseClient || "";
}

function getAdsenseSlots() {
  return window.TODAY_FORTUNE_ADSENSE_SLOTS || window.TODAY_FORTUNE_CONFIG?.adsenseSlots || {};
}

function ensureAdsenseScript(client) {
  if (!client) return false;
  if (document.querySelector(`script[data-adsense-client="${client}"]`)) return true;
  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(client)}`;
  script.dataset.adsenseClient = client;
  document.head.appendChild(script);
  return true;
}

function mountAdSlots() {
  const client = getAdsenseClient();
  const slots = getAdsenseSlots();
  const hasClient = ensureAdsenseScript(client);
  $$(".free-ad-slot").forEach((slot) => {
    const name = slot.dataset.adSlot || "result";
    const adSlot = slots[name] || "";
    if (hasClient && adSlot) {
      slot.innerHTML = `<ins class="adsbygoogle" style="display:block;width:100%;height:100%;" data-ad-client="${client}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        trackMetric("ad_slot_requested", { ad_slot_name: name });
      } catch {
        slot.innerHTML = adPlaceholder(name, "Không tải được quảng cáo");
        trackMetric("ad_slot_failed", { ad_slot_name: name });
      }
      return;
    }
    slot.innerHTML = adPlaceholder(name, "Khu vực quảng cáo");
  });
}

function adPlaceholder(name, title) {
  const label = name === "result-middle" ? "Vị trí giữa kết quả" : "Vị trí cuối kết quả";
  return `<div class="ad-placeholder"><strong>${title}</strong><span>${label}</span><small>Bạn vẫn có thể đọc kết quả trong lúc quảng cáo đang được chuẩn bị.</small></div>`;
}

function updateAttendanceCard() {
  const button = $("#attendance-button");
  const copy = $("#attendance-copy");
  if (!button || !copy) return;
  const attended = localStorage.getItem(`today-fortune:attendance:${todayKey()}`) === "done";
  button.disabled = attended;
  button.textContent = attended ? "Đã điểm danh" : "Điểm danh";
  copy.textContent = attended ? "Hôm nay đã được lưu. Ngày mai quay lại để so sánh." : "Điểm danh hôm nay để có lý do quay lại ngày mai.";
}

function updateHomeMemory() {
  const title = $("#last-reading-title");
  const copy = $("#last-reading-copy");
  const badge = $("#last-reading-badge");
  if (!title || !copy || !badge) return;
  try {
    const last = JSON.parse(localStorage.getItem("today-fortune:last-reading") || "null");
    if (!last) {
      badge.textContent = "Chưa có lịch sử";
      title.textContent = "Bạn chưa lưu kết quả nào";
      copy.textContent = "Sau khi xem kết quả, hãy lưu lại để ngày mai so sánh dòng vận.";
      return;
    }
    badge.textContent = `${last.score} điểm`;
    title.textContent = `${last.title || "Vận may"} gần nhất · ${last.keyword || "Vận hôm nay"}`;
    copy.textContent = `Điểm chính là ${last.focus || "dòng vận hôm nay"}. Ngày mai bạn có thể so sánh xem vận khí đã đổi thế nào.`;
  } catch {
    title.textContent = "Chưa tải được lịch sử gần nhất";
    copy.textContent = "Xem lại vận hôm nay để tạo bản ghi mới.";
  }
}

function resetSavePrompt() {
  const button = $("#save-reading-record");
  if (button) {
    button.disabled = false;
    button.textContent = "Lưu kết quả hôm nay";
  }
  setText("#history-copy", "Không cần đăng nhập. Kết quả chỉ lưu trên thiết bị này.");
}

function saveHistory(item) {
  const history = JSON.parse(localStorage.getItem("today-fortune:history") || "[]");
  const next = [item, ...history.filter((entry) => entry.date !== item.date || entry.service !== item.service)].slice(0, 14);
  localStorage.setItem("today-fortune:history", JSON.stringify(next));
  localStorage.setItem("today-fortune:last-reading", JSON.stringify({ ...item, title: item.service }));
  setText("#history-copy", `Kết quả ${item.service} đã được lưu trên thiết bị này. Đang giữ ${next.length} bản ghi gần nhất.`);
  updateHomeMemory();
  trackMetric("reading_saved", { score: item.score, keyword: item.keyword });
}

function saveCurrentReadingRecord() {
  if (!pendingSaveRecord) return;
  saveHistory(pendingSaveRecord);
  const button = $("#save-reading-record");
  if (button) {
    button.disabled = true;
    button.textContent = "Đã lưu";
  }
}

function createShareCard() {
  if (!currentReading) return null;
  const canvas = $("#share-card-canvas");
  if (!canvas) return null;
  const ctx = canvas.getContext("2d");
  const service = services[currentService] || services.today;
  const profile = getResultProfile();
  const score = $("#share-card-score")?.textContent || String(currentReading.score);
  const advice = $("#share-card-advice")?.textContent || profile.lines[0];
  const keyword = $("#share-card-keyword")?.textContent || profile.keyword;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#171621");
  gradient.addColorStop(1, "#2a263b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff43f";
  ctx.beginPath();
  ctx.arc(710, 160, 86, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "700 42px sans-serif";
  ctx.fillText(service.title, 70, 125);
  ctx.font = "900 180px sans-serif";
  ctx.fillText(`${score} điểm`, 70, 355);
  ctx.fillStyle = "#fff43f";
  ctx.font = "900 58px sans-serif";
  ctx.fillText(keyword, 74, 470);
  ctx.fillStyle = "rgba(255,255,255,0.86)";
  drawWrappedText(ctx, advice, 74, 570, 740, 54);
  ctx.fillStyle = "rgba(255,255,255,0.64)";
  ctx.font = "800 34px sans-serif";
  ctx.fillText("Life Tarot · Xem vận may miễn phí", 70, 1090);
  canvas.hidden = false;
  trackMetric("share_card_created", { score, keyword });
  return canvas;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  ctx.font = "800 42px sans-serif";
  const words = String(text).split(" ");
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      line = word;
    } else {
      line = test;
    }
  });
  if (line) ctx.fillText(line, x, y);
}

function saveShareCard() {
  const canvas = createShareCard();
  if (!canvas) return;
  const link = document.createElement("a");
  link.download = `today-fortune-${todayKey()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  trackMetric("share_card_saved");
}

function drawTarot(cardIndex = 0) {
  const card = tarotCards[mod(Number(cardIndex) + tarotOffset, tarotCards.length)];
  const result = $("#tarot-draw-result");
  const image = $("#drawn-card-image");
  if (image) image.src = card.image;
  setText("#drawn-card-title", card.title);
  setText("#drawn-card-message", card.message);
  if (result) result.hidden = false;
  $$(".draw-card").forEach((button) => button.classList.remove("selected"));
  $$(".draw-card")[Number(cardIndex)]?.classList.add("selected");
  trackMetric("tarot_card_drawn", {
    card_index: Number(cardIndex),
    card_title: card.title,
  });
}

function seedHomeScore() {
  setText("#home-score", "Free");
  setText("#portal-preview-label", "Xem vận hôm nay miễn phí");
  $(".hero-ring")?.style.setProperty("--score", "100");
  setText(".hero-ring strong", "Free");
}

function ensureHomeBlocks() {
  const dailyPortal = $(".daily-portal");
  if (!dailyPortal || $(".attendance-card")) return;
  const attendance = document.createElement("section");
  attendance.className = "attendance-card";
  attendance.innerHTML = `<div><strong>Điểm danh hôm nay</strong><span id="attendance-copy">Điểm danh hôm nay để ngày mai quay lại so sánh vận khí.</span></div><button id="attendance-button" type="button">Điểm danh</button>`;
  dailyPortal.after(attendance);
  const memory = document.createElement("section");
  memory.className = "last-reading-card";
  memory.innerHTML = `
    <div>
      <span id="last-reading-badge">Chưa có lịch sử</span>
      <strong id="last-reading-title">Bạn chưa lưu kết quả nào</strong>
      <p id="last-reading-copy">Sau khi xem kết quả, hãy lưu lại để ngày mai so sánh dòng vận.</p>
    </div>
    <button data-open="input" data-service="today" type="button">Xem vận hôm nay</button>
  `;
  attendance.after(memory);
  const legal = document.createElement("nav");
  legal.className = "legal-links";
  legal.setAttribute("aria-label", "Chính sách dịch vụ");
  legal.innerHTML = `<a href="PRIVACY.md" target="_blank" rel="noreferrer">Quyền riêng tư</a><a href="TERMS.md" target="_blank" rel="noreferrer">Điều khoản</a><a href="CONTACT.md" target="_blank" rel="noreferrer">Liên hệ</a>`;
  memory.after(legal);
}

function applyStaticCopy() {
  document.body.classList.add("free-beta");
  document.title = "Life Tarot - Xem vận may miễn phí";
  document.documentElement.lang = "vi";
  setText(".brand strong", "Life Tarot");
  setText(".hero-section .eyebrow", "Xem vận may miễn phí mỗi ngày");
  setText(".hero-section h1", "Xem vận hôm nay miễn phí");
  setText(".hero-section p", "Nhập ngày sinh để xem nhanh tổng vận, tình duyên, tiền bạc, công việc và sức khỏe trong hôm nay.");
  setText(".primary-button", "Xem vận hôm nay miễn phí");
  setText(".portal-head span", "Miễn phí");
  setText(".portal-head h2", "Xem vận hôm nay");
  setText(".portal-head p", "Trước mắt chỉ tập trung vào Vận hôm nay, Tarot, Tình duyên và Vận năm 2026.");
  setText(".portal-main-card span", "Xem nhanh dòng vận");
  setText("#portal-preview-label", "Vận hôm nay miễn phí");
  setText(".portal-main-card p", "Điểm cá nhân chỉ được tính sau khi bạn nhập ngày sinh.");
  setText(".portal-main-card button", "Xem miễn phí");
  setText(".portal-reward-row strong", "Lưu kết quả hôm nay để ngày mai so sánh dòng vận");
  setText(".portal-reward-row button", "Xem vận hôm nay");

  const quickGrid = $(".portal-quick-grid");
  if (quickGrid) {
    quickGrid.innerHTML = `
      <button data-open="input" data-service="today" type="button"><i class="portal-icon portal-sun"></i><strong>Vận hôm nay</strong><span>Miễn phí</span></button>
      <button data-open="tarot" data-nav="tarot" data-scroll-to="daily-tarot-draw" type="button"><i class="portal-icon portal-card"></i><strong>Tarot</strong><span>1 lá</span></button>
      <button data-open="input" data-service="couple" type="button"><i class="portal-icon portal-heart"></i><strong>Tình duyên</strong><span>Nhịp quan hệ</span></button>
      <button data-open="year-info" data-service="year" type="button"><i class="portal-icon portal-moon"></i><strong>Vận 2026</strong><span>Cả năm</span></button>
    `;
    quickGrid.querySelector('[data-service="today"] strong').textContent = "Vận hôm nay";
    quickGrid.querySelector('[data-service="today"] span').textContent = "Miễn phí";
  }

  const bottomNav = $(".bottom-nav");
  if (bottomNav) {
    bottomNav.innerHTML = `
      <button class="active" data-open="home" data-nav="home" type="button"><span class="nav-icon nav-home" aria-hidden="true"></span><b>Trang chủ</b></button>
      <button data-open="input" data-service="today" data-nav="today" type="button"><span class="nav-icon nav-today" aria-hidden="true"></span><b>Hôm nay</b></button>
      <button data-open="tarot" data-nav="tarot" type="button"><span class="nav-icon nav-tarot" aria-hidden="true"></span><b>Tarot</b></button>
      <button data-open="year-info" data-service="year" data-nav="year" type="button"><span class="nav-icon nav-year" aria-hidden="true"></span><b>Vận năm</b></button>
    `;
  }

  ensureHomeBlocks();
  updateAttendanceCard();
  updateHomeMemory();
  mountAdSlots();
}

function bindNavigation() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open]");
    if (!trigger) return;
    event.preventDefault();
    trackMetric("navigation_click", {
      target_view: trigger.dataset.open,
      target_service: trigger.dataset.service || "",
      nav_area: trigger.dataset.nav || "",
      label: trigger.textContent.trim().replace(/\s+/g, " ").slice(0, 60),
    });
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

function bindForm() {
  $("#birth-form")?.addEventListener("submit", (event) => event.preventDefault());
  $("#entry-next-button")?.addEventListener("click", () => {
    if (!validateEntryStep()) return;
    trackMetric("entry_step_complete", {
      entry_step: entryStep,
      next_step: entryStep < 4 ? entryStep + 1 : "terms",
    });
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
  $("#name")?.addEventListener("input", () => {
    updateEntryReview();
    validateEntryStep();
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
      $$(".gender-choice button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const gender = $("#gender");
      if (gender) gender.value = button.dataset.genderValue || "male";
      updateEntryReview();
    });
  });
  $$(".calendar-toggle button").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".calendar-toggle button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const calendar = $("#calendar-type");
      if (calendar) calendar.value = button.dataset.calendarValue || "solar";
      const lunarLeap = $("#lunar-leap-month");
      if (lunarLeap && calendar?.value !== "lunar") lunarLeap.checked = false;
      updateEntryReview();
      validateEntryStep();
    });
  });
  $("#lunar-leap-month")?.addEventListener("change", () => {
    updateEntryReview();
    validateEntryStep();
  });
  $("#unknown-time")?.addEventListener("change", (event) => {
    const input = $("#birth-time");
    if (input) input.disabled = event.target.checked;
    validateEntryStep();
    updateEntryReview();
  });
  $("#start-entry-flow")?.addEventListener("click", () => {
    trackMetric("start_sheet_continue", { entry_service: currentService });
    hideSheet("entry-start-sheet");
    openInputFlow();
  });
  $("#agree-start-button")?.addEventListener("click", () => {
    trackMetric("terms_agreed", { entry_service: currentService });
    hideSheet("terms-sheet");
    finishEntryFlow();
  });
  $("[data-sns-skip]")?.addEventListener("click", () => {
    trackMetric("sns_skipped", { entry_service: currentService });
    hideSheet("sns-sheet");
    finishEntryFlow();
  });
  $$("[data-close-sheet]").forEach((button) => {
    button.addEventListener("click", () => hideSheet(button.dataset.closeSheet));
  });
  setEntryStep(1);
}

function bindActions() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("#attendance-button")) {
      localStorage.setItem(`today-fortune:attendance:${todayKey()}`, "done");
      updateAttendanceCard();
      updateHomeMemory();
      trackMetric("attendance_done");
    }
    if (event.target.closest("#save-reading-record")) {
      saveCurrentReadingRecord();
    }
  });
  $("#ad-unlock-button")?.addEventListener("click", () => {
    const button = $("#ad-unlock-button");
    if (!button || button.disabled) return;
    button.disabled = true;
    button.textContent = "Đang kiểm tra quảng cáo...";
    trackMetric("detail_unlock_click");
    window.setTimeout(() => {
      unlockDetail("Quảng cáo chưa tải xong nên phần chi tiết đã được mở miễn phí.");
      updateHomeMemory();
      trackMetric("detail_unlocked");
    }, 850);
  });
  $("#make-share-card")?.addEventListener("click", createShareCard);
  $("#save-share-card")?.addEventListener("click", saveShareCard);
  $("#share-button")?.addEventListener("click", async () => {
    if (!currentReading) return;
    const service = services[currentService] || services.today;
    const text = `Tôi vừa xem ${service.title} trên Life Tarot. Điểm ${$("#share-card-score")?.textContent || currentReading.score}, từ khóa ${$("#share-card-keyword")?.textContent || "Vận hôm nay"}.`;
    try {
      await navigator.clipboard.writeText(text);
      setText("#share-button", "✓");
      window.setTimeout(() => setText("#share-button", "↗"), 1200);
      trackMetric("share_text_copied");
    } catch {
      alert(text);
    }
  });
  $$(".draw-card").forEach((button) => {
    button.addEventListener("click", () => drawTarot(button.dataset.cardIndex));
  });
  $("#shuffle-tarot-button")?.addEventListener("click", () => {
    tarotOffset = mod(tarotOffset + 1, tarotCards.length);
    $("#tarot-draw-result")?.setAttribute("hidden", "");
    $$(".draw-card").forEach((button) => button.classList.remove("selected"));
    trackMetric("tarot_shuffle");
  });
}

function boot() {
  if (window.__tuviBooted) return;
  window.__tuviBooted = true;
  window.tuviContinueFromSns = finishEntryFlow;
  initAnalytics();
  applyStaticCopy();
  bindNavigation();
  bindForm();
  bindActions();
  seedHomeScore();
  setService("today");
  trackMetric("app_boot", { initial_path: window.location.pathname || "/" });
}

boot();
