function createDemoReport(body = {}) {
  const product = body.product || {};
  const profile = body.profile || {};
  const reading = body.reading || {};
  const name = profile.name || "Bạn";
  const productTitle = product.title || "Phân tích chuyên sâu";
  const focus = product.focus || "tình duyên, tài lộc, công việc và từng tháng";
  const dominant = reading.dominant || "Thổ";
  const weak = reading.weak || "Thủy";
  const score = reading.score || 78;

  return {
    heroTitle: `${productTitle}: ${name}, đây là bản đọc theo đúng chủ đề bạn đã chọn.`,
    heroBody: `Trọng tâm của gói này là ${focus}. ${dominant} nổi bật, còn ${weak} là vùng cần bù, nên báo cáo sẽ đi vào hướng riêng thay vì đọc chung chung.`,
    summary: {
      title: `${name} có khí chất đi chậm nhưng quan sát rất sâu.`,
      body: `Bản này tập trung vào ${focus}. Khi ${dominant} mạnh, bạn dễ giữ được nhịp và tiêu chuẩn; khi ${weak} yếu, bạn cần tránh quyết định lúc mệt hoặc bị cảm xúc kéo đi quá nhanh.`,
    },
    love: {
      title: "Tình duyên cần sự an tâm hơn là cảm giác hồi hộp nhất thời.",
      body: "Bạn không hợp với kiểu quan hệ khiến mình phải đoán quá nhiều. Người phù hợp là người giữ lời, xuất hiện đều và không làm bạn phải tự nghi ngờ.",
      deepTitle: "Mẫu tình yêu lặp lại nằm ở tốc độ mở lòng và cách bạn rút lui.",
      deepBody: "Bạn thường không yêu hời hợt. Khi thích một người, bạn để ý cách họ nhắn tin, giữ hẹn, xin lỗi và xuất hiện sau những lúc không vui. Vì vậy, chỉ một tín hiệu mơ hồ cũng có thể khiến bạn bắt đầu tự bảo vệ mình. Năm 2026 không nên chạy theo người làm bạn hồi hộp nhưng bất an. Điều cần nhìn là tiêu chuẩn an toàn: người đó có rõ ràng không, có nhất quán không, có biết sửa khi làm bạn buồn không. Nếu muốn yêu tốt hơn, hãy nói nhu cầu sớm bằng câu ngắn thay vì im lặng đến khi lòng đã xa.",
    },
    money: {
      title: `Tài lộc ở mức ${score}%, tốt hơn khi bạn giữ được tiền thay vì chỉ kiếm thêm.`,
      body: "Dòng tiền mở qua quan hệ, thông tin và giá trị cá nhân. Nhưng tiền cũng dễ hao vì nể nang, chi nhỏ lặp lại hoặc quyết định nhanh khi cảm xúc lên cao.",
      deepTitle: "Tiền đến qua người, nhưng cũng dễ ra đi vì người.",
      deepBody: "Tài lộc của bạn không phải kiểu ngồi yên rồi có một khoản lớn rơi xuống. Nó giống một dòng nước cần được dẫn đúng kênh: cơ hội đến từ người quen, hợp tác, lời giới thiệu, nội dung bạn tạo ra hoặc năng lực bạn biết trình bày rõ. Điểm cần chú ý là các khoản chi vì quan hệ: trả thay, cho mượn, mua vì nể, quà cáp, hoặc những khoản tự động nhỏ tưởng không đáng kể. Nếu muốn vận tiền ổn hơn, hãy ghi lại dòng tiền, đặt giới hạn cho việc giúp người khác và kiểm tra chi phí định kỳ mỗi tháng.",
    },
    career: {
      title: "Công việc mở ra khi bạn biến năng lực thành bằng chứng nhìn thấy được.",
      body: "Bạn hợp với môi trường có tiêu chuẩn, cấu trúc và chiều sâu. Càng trình bày rõ kết quả, vận công việc càng sáng.",
      deepTitle: "Năm 2026 không thưởng cho việc âm thầm chịu đựng.",
      deepBody: "Bạn có thể làm tốt trong các vai trò cần phân tích, vận hành, tư vấn, giáo dục, chăm sóc khách hàng cao cấp, nội dung chuyên môn hoặc sản phẩm dài hạn. Nhưng nếu chỉ im lặng làm tốt, người khác có thể không thấy hết giá trị của bạn. Năm 2026 cần một cách thể hiện mới: ghi lại kết quả, số liệu, phản hồi, màn hình, quy trình cải tiến và câu chuyện trước sau. Nếu muốn đổi việc, đừng rời đi khi đã kiệt sức. Hãy chuẩn bị hồ sơ từ sớm và định vị mình bằng vấn đề bạn giải quyết được.",
    },
    personality: {
      title: "Bạn không khó hiểu, bạn chỉ không trao cảm xúc cho sai người.",
      body: "Điểm mạnh là quan sát sâu và giữ lời. Điểm hao năng lượng là im lặng quá lâu khiến người khác tưởng bạn không sao.",
      deepTitle: "Bạn cần học cách nói tiêu chuẩn trước khi lòng đóng lại.",
      deepBody: "Bạn thường xử lý cảm xúc một mình trước khi nói ra. Điều này khiến bạn trông chín chắn, nhưng cũng làm người khác khó biết bạn đang thật sự cần gì. Khi một chuyện lặp lại nhiều lần, bạn không bùng nổ ngay mà lặng lẽ lùi lại, và khi đã lùi đủ xa thì rất khó mở lại như cũ. Tính cách này không xấu, vì nó giúp bạn không tiêu hao năng lượng vào những quan hệ hời hợt. Nhưng để vận quan hệ tốt hơn, bạn cần nói nhu cầu bằng câu cụ thể và nói sớm hơn.",
    },
    monthly: {
      title: "Nửa cuối năm đi theo nhịp chỉnh lại, hồi phục rồi chọn hướng mới.",
      body: "Có tháng để đi nhanh, có tháng để hồi sức. Nếu biết đúng nhịp, vận tốt không chỉ là may mắn mà trở thành chiến lược sống.",
      deepTitle: "Không phải tháng nào cũng cần bứt phá.",
      deepBody: "Tháng 6 hợp dọn các khoản chi nhỏ và việc làm mình hao tâm. Tháng 7 đưa tới một tình huống về quan hệ hoặc công việc khiến bạn phải nói rõ tiêu chuẩn. Tháng 8 nên hồi phục, ngủ đủ và giảm giao tiếp thừa. Tháng 9 có tín hiệu mới về công việc, thu nhập hoặc một người khiến bạn nhìn lại cách mình chọn. Tháng 10 phù hợp thử nghiệm nhỏ. Tháng 11 là tháng kiểm chứng kết quả, còn tháng 12 nên chốt điều đáng giữ và bỏ bớt điều làm bạn hao năng lượng.",
    },
  };
}

function buildPrompt(body = {}) {
  const product = body.product || {};
  const profile = body.profile || {};
  const reading = body.reading || {};
  return `Bạn là người viết báo cáo tử vi cảm xúc cao cấp cho phụ nữ Việt Nam 20-35 tuổi.
Hãy viết hoàn toàn bằng tiếng Việt, không dùng markdown, không hù dọa, không hứa chắc tương lai.

Gói đã chọn: ${product.title || "Phân tích chuyên sâu"}
Trọng tâm gói: ${product.focus || "phân tích sâu toàn diện"}
Tên: ${profile.name || "Bạn"}
Ngày sinh: ${profile.birthDate || ""}
Giờ sinh: ${profile.birthTime || ""}
Giới tính: ${profile.gender || ""}
Tứ trụ: năm ${reading.pillars?.year || ""}, tháng ${reading.pillars?.month || ""}, ngày ${reading.pillars?.day || ""}, giờ ${reading.pillars?.hour || ""}
Nhật chủ: ${reading.dayMaster || ""}
Ngũ hành mạnh: ${reading.dominant || ""}
Ngũ hành yếu: ${reading.weak || ""}
Kiểu tính cách: ${reading.typeName || ""}
Điểm: tình duyên ${reading.loveScore || ""}, tài lộc ${reading.moneyScore || ""}, công việc ${reading.careerScore || ""}, tự hiểu ${reading.personalityScore || ""}

Quy tắc:
- Báo cáo phải khác nhau theo gói đã chọn.
- Nếu là tình duyên, 70% nội dung xoay quanh tình duyên.
- Nếu là tài lộc, 70% nội dung xoay quanh tiền bạc cá nhân, chi tiêu, hợp đồng, cho mượn, dòng tiền.
- Nếu là công việc, 70% nội dung xoay quanh vai trò, hồ sơ, đổi việc, portfolio.
- 30 giây đầu phải có một câu khiến người đọc thấy "đúng là mình", nhưng không được hù dọa.
- Luôn nhắc ít nhất 3 dữ kiện cá nhân từ đầu vào: nhật chủ, ngũ hành mạnh/yếu, điểm tình duyên/tài lộc/công việc/tự hiểu, hoặc trụ năm/tháng/ngày/giờ.
- Mỗi phần phải có cấu trúc: nhận diện mẫu lặp lại, vì sao mẫu đó xảy ra, nó ảnh hưởng gì trong đời thật, nên làm gì trong 7-30 ngày tới.
- Không dùng lời khuyên rẻ tiền như "hãy tiết kiệm", "hãy cố gắng", "hãy suy nghĩ tích cực" nếu không giải thích bằng tình huống cụ thể.
- Không nhắc tới việc bán sản phẩm, giá tiền, app, AI, hệ thống, prompt, báo cáo mẫu hoặc người viết.
- Với gói rẻ, nội dung vẫn phải có giá trị nhưng tập trung hẹp. Với gói đắt, nội dung phải rộng hơn, có nhiều lớp và nhiều mốc thời gian hơn.
- Giọng văn phải giống một ứng dụng chữa lành cao cấp: sâu, mềm, rõ, không phán xét, không mê tín cực đoan.
- body mỗi phần 2-3 câu.
- deepBody mỗi phần tối thiểu 420 từ, cụ thể và có lời khuyên hành động.

Chỉ trả về JSON hợp lệ:
{
  "heroTitle": "câu",
  "heroBody": "câu",
  "summary": {"title": "câu", "body": "đoạn"},
  "love": {"title": "câu", "body": "đoạn", "deepTitle": "câu", "deepBody": "đoạn dài"},
  "money": {"title": "câu", "body": "đoạn", "deepTitle": "câu", "deepBody": "đoạn dài"},
  "career": {"title": "câu", "body": "đoạn", "deepTitle": "câu", "deepBody": "đoạn dài"},
  "personality": {"title": "câu", "body": "đoạn", "deepTitle": "câu", "deepBody": "đoạn dài"},
  "monthly": {"title": "câu", "body": "đoạn", "deepTitle": "câu", "deepBody": "đoạn dài"}
}`;
}

function extractOutputText(payload) {
  if (payload.output_text) return payload.output_text;
  return (payload.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("\n");
}

function parseJson(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) throw new Error("Report JSON not found");
  return JSON.parse(text.slice(start, end + 1));
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};
  if (!process.env.OPENAI_API_KEY) {
    return res.status(200).json({ report: createDemoReport(body), source: "demo" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        input: buildPrompt(body),
        max_output_tokens: 6500,
      }),
    });

    if (!response.ok) throw new Error(await response.text());
    const payload = await response.json();
    return res.status(200).json({ report: parseJson(extractOutputText(payload)), source: "openai" });
  } catch (error) {
    return res.status(200).json({
      report: createDemoReport(body),
      source: "demo-fallback",
      warning: error.message,
    });
  }
};
