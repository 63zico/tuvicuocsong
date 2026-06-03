import KoreanLunarCalendar from "./node_modules/korean-lunar-calendar/dist/esm/korean-lunar-calendar.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const VERSION = "korean-free-beta-5";

const services = {
  today: {
    label: "오늘운세",
    title: "오늘운세",
    tone: "매일 무료",
    heading: "오늘 나에게 필요한 운의 힌트",
    copy: "총운, 연애, 재물, 일, 건강 흐름을 무료로 확인하세요.",
  },
  tarot: {
    label: "타로",
    title: "타로",
    tone: "원카드",
    heading: "오늘 마음에 가까운 카드 한 장",
    copy: "지금 필요한 선택과 감정의 방향을 카드로 확인하세요.",
  },
  couple: {
    label: "궁합",
    title: "궁합",
    tone: "관계 흐름",
    heading: "두 사람의 끌림과 조심할 지점",
    copy: "서로 맞는 부분과 부딪히는 부분을 현실적인 조언으로 정리합니다.",
  },
  year: {
    label: "신년운세",
    title: "신년운세",
    tone: "2026 흐름",
    heading: "올해의 큰 흐름과 기회",
    copy: "좋아지는 부분, 조심할 부분, 월별 흐름을 길게 풀이합니다.",
  },
};

const resultProfiles = {
  today: {
    keyword: "정리운",
    heading: "오늘 운세 무료 리포트",
    lines: [
      "오늘은 가장 중요한 일 하나를 먼저 끝낼 때 운이 열립니다.",
      "돈과 약속은 즉흥적으로 결정하지 말고 한 번 더 확인하세요.",
      "관계에서는 길게 설명하기보다 짧고 분명하게 말하는 편이 좋습니다.",
    ],
    scoreCopy: "작은 정리와 마무리가 하루 전체의 운을 안정시키는 날입니다.",
    summary: {
      love: ["대화운 상승", "솔직하지만 부드럽게 말하면 관계의 긴장이 풀립니다."],
      money: ["지출 점검", "충동구매보다 비교와 확인이 돈을 지켜줍니다."],
      work: ["마무리 우선", "새 일을 벌이기보다 밀린 일을 끝내면 평가가 좋아집니다."],
      health: ["리듬 회복", "수면, 식사, 이동 시간을 일정하게 잡는 것이 좋습니다."],
    },
    detail: [
      "총운은 안정형입니다. 오늘은 운이 크게 폭발하는 날이라기보다 내가 흐트러뜨린 리듬을 다시 정리하면서 기회가 살아나는 날입니다. 중요한 일은 오전에 목록으로 나누고, 오후에는 이미 정한 순서대로 처리하세요.",
      "연애운은 표현의 온도에 달려 있습니다. 상대가 내 마음을 알아주길 기다리기보다 원하는 바를 짧게 말하는 것이 좋습니다. 감정이 올라온 상태에서 바로 답하면 말의 강도가 세질 수 있으니 한 박자 늦추세요.",
      "재물운은 지키는 운이 강합니다. 큰 수익보다 새는 돈을 막는 쪽이 더 유리합니다. 자동결제, 반복 지출, 급한 구매를 점검하면 오늘의 재물운을 현실적인 이득으로 바꿀 수 있습니다.",
      "일운은 마감과 정리에서 올라옵니다. 보여주기식 속도보다 결과물이 남는 행동이 중요합니다. 답장, 보고, 문서, 일정처럼 미뤄둔 것을 처리하면 신뢰운이 함께 좋아집니다.",
      "건강운은 무리보다 회복입니다. 몸이 보내는 피로 신호를 무시하면 집중력이 떨어질 수 있습니다. 짧은 산책, 물 섭취, 식사 시간을 맞추는 정도만 해도 컨디션이 안정됩니다.",
    ],
  },
  tarot: {
    keyword: "선택운",
    heading: "타로 무료 리포트",
    lines: [
      "지금은 결과를 단정하기보다 마음이 끌리는 선택의 이유를 확인해야 합니다.",
      "카드는 빠른 결론보다 한 번 더 관찰하고 묻는 태도를 권합니다.",
      "오늘의 답은 거창한 변화보다 작지만 분명한 행동에서 나옵니다.",
    ],
    scoreCopy: "직감은 살아 있지만 확인 과정이 함께 필요합니다.",
    summary: {
      love: ["감정 확인", "상대의 말보다 반복되는 행동을 보는 것이 좋습니다."],
      money: ["선택 보류", "확신이 없는 지출과 투자는 하루 미루는 편이 안전합니다."],
      work: ["방향 점검", "새 기회가 들어와도 내 기준과 맞는지 먼저 확인하세요."],
      health: ["마음 안정", "생각이 많아질수록 몸을 움직여 긴장을 푸는 것이 좋습니다."],
    },
    detail: [
      "타로 흐름은 선택의 기준을 다시 묻고 있습니다. 지금 고민이 길어진 이유는 답이 없어서가 아니라 내가 무엇을 우선해야 하는지 아직 정리되지 않았기 때문입니다.",
      "연애에서는 상대의 한마디보다 일정하게 반복되는 행동을 보세요. 좋은 말이 많아도 행동이 불안정하면 마음이 흔들릴 수 있습니다.",
      "재물에서는 욕심보다 보류가 운을 지킵니다. 오늘은 큰돈이 움직이는 결정, 충동 구매, 남의 말만 듣고 하는 선택을 피하는 편이 좋습니다.",
      "일에서는 새로운 제안이 들어오더라도 내가 감당할 수 있는 범위를 먼저 보세요. 좋아 보이는 기회가 실제로 내 시간을 너무 많이 빼앗는다면 장기적으로는 부담이 됩니다.",
      "오늘의 카드는 작은 행동을 요구합니다. 연락 하나 정리하기, 해야 할 일 하나 끝내기, 고민을 글로 적기처럼 간단하지만 확실한 행동이 다음 흐름을 열어줍니다.",
    ],
  },
  couple: {
    keyword: "균형운",
    heading: "궁합 무료 리포트",
    lines: [
      "두 사람은 감정의 속도가 달라 같은 마음이어도 표현에서 오해가 생기기 쉽습니다.",
      "관계가 좋아지는 포인트는 큰 이벤트보다 반복되는 말투와 약속입니다.",
      "오늘은 상대를 설득하기보다 서로의 기준을 확인하는 대화가 유리합니다.",
    ],
    scoreCopy: "서로의 속도를 맞추면 관계의 긴장이 풀리는 흐름입니다.",
    summary: {
      love: ["호감 유지", "감정을 확인하려 들기보다 편안한 대화를 만드는 것이 좋습니다."],
      money: ["현실 조율", "돈과 일정 이야기는 감정이 아니라 기준으로 나누세요."],
      work: ["역할 분리", "서로 기대하는 역할을 명확히 하면 서운함이 줄어듭니다."],
      health: ["감정 피로", "관계 고민이 컨디션으로 이어지지 않게 휴식 시간을 확보하세요."],
    },
    detail: [
      "궁합의 핵심은 끌림보다 유지력입니다. 두 사람 사이에는 호감과 관심이 있지만 표현 속도가 달라 상대가 차갑게 느껴지거나 부담스럽게 느껴질 수 있습니다.",
      "연애 흐름에서는 확인 욕구를 줄이는 것이 중요합니다. 상대의 반응을 계속 시험하면 관계가 피곤해집니다. 대신 내가 원하는 대화 방식과 연락 빈도를 부드럽게 말하는 편이 좋습니다.",
      "재물과 현실 문제에서는 기준을 먼저 맞춰야 합니다. 데이트 비용, 약속 시간, 생활 리듬처럼 작은 현실 문제가 반복되면 감정 문제처럼 커질 수 있으니 초기에 정리하세요.",
      "일과 생활의 균형에서는 서로의 바쁜 시기를 존중해야 합니다. 한쪽이 지친 날에는 답이 짧아질 수 있으니 감정의 깊이와 메시지 길이를 동일하게 보지 않는 것이 좋습니다.",
      "관계를 오래 가져가려면 오늘은 결론보다 분위기를 회복하는 쪽이 유리합니다. 사과가 필요하다면 짧게, 고마움은 구체적으로 표현하세요.",
    ],
  },
  year: {
    keyword: "기반운",
    heading: "신년운세 무료 리포트",
    lines: [
      "올해는 방향을 넓히기보다 하나의 흐름을 오래 가져갈수록 성과가 커지는 운입니다.",
      "상반기는 정리와 준비, 하반기는 실행과 확장의 기운이 강해집니다.",
      "관계, 돈, 일에서 모두 즉흥적인 선택보다 기준을 세운 선택이 유리합니다.",
    ],
    scoreCopy: "올해는 기반을 다시 잡을수록 연말의 결과가 커지는 흐름입니다.",
    summary: {
      love: ["관계 재정비", "감정만 앞세우기보다 오래 맞춰갈 수 있는 기준이 중요합니다."],
      money: ["누적 수익", "큰 한 방보다 고정지출 정리와 작은 수익의 반복이 좋습니다."],
      work: ["역량 증명", "자격, 문서, 발표, 포트폴리오처럼 증거가 남는 일이 유리합니다."],
      health: ["생활 리듬", "무리한 변화보다 오래 유지 가능한 회복 루틴이 필요합니다."],
    },
    detail: [
      "올해의 총운은 기반을 다지는 운입니다. 당장 판을 크게 키우는 것보다 오래 가져갈 방향을 고르고, 그 방향을 반복 가능한 구조로 만드는 것이 중요합니다. 연초에는 답답해도 연말로 갈수록 성과가 분명해지는 흐름입니다.",
      "연애와 관계에서는 감정의 크기보다 안정감이 중요합니다. 마음이 가는 사람이라도 생활 리듬, 말투, 약속 방식이 맞지 않으면 피로가 쌓일 수 있습니다. 올해는 나를 불안하게 만드는 관계보다 나를 차분하게 만드는 관계가 길합니다.",
      "재물운은 빠른 수익보다 관리에서 시작됩니다. 충동 지출과 불필요한 고정비를 줄이는 것만으로도 체감이 달라질 수 있습니다. 투자를 하더라도 내가 이해하는 범위 안에서 작게 검증하는 방식이 유리합니다.",
      "일운은 실력을 증명하는 쪽으로 흐릅니다. 말로 설득하는 것보다 결과물, 기록, 포트폴리오, 자격처럼 보여줄 수 있는 증거가 힘을 가집니다. 상반기에는 배우고 정리하고, 하반기에는 외부에 보여주는 전략이 좋습니다.",
      "건강운은 생활 패턴의 영향을 크게 받습니다. 수면과 식사, 운동 루틴이 흔들리면 마음의 기복도 커질 수 있습니다. 올해는 몸을 강하게 밀어붙이는 것보다 회복 가능한 리듬을 만드는 것이 개운법입니다.",
    ],
  },
};

const tarotCards = [
  {
    title: "The Sun",
    image: "assets/tarot/sun.jpg",
    message: "오늘은 솔직하게 움직일수록 좋은 반응을 얻습니다. 숨기기보다 밝게 드러내는 쪽이 유리합니다.",
  },
  {
    title: "Wheel of Fortune",
    image: "assets/tarot/wheel-of-fortune.jpg",
    message: "예상 밖의 변화가 들어올 수 있습니다. 방향이 바뀌어도 겁먹지 말고 흐름을 읽어보세요.",
  },
  {
    title: "The Star",
    image: "assets/tarot/star.jpg",
    message: "느리지만 회복되는 운입니다. 지금은 급한 결론보다 믿을 만한 희망을 지키는 것이 좋습니다.",
  },
  {
    title: "Strength",
    image: "assets/tarot/strength.jpg",
    message: "밀어붙이는 힘보다 부드럽게 버티는 힘이 강합니다. 감정을 다스리면 결과가 따라옵니다.",
  },
];

const zodiacAnimals = ["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"];
const timeBranches = [
  { label: "자시", copy: "밤에 생각이 깊어지는 기운" },
  { label: "축시", copy: "천천히 쌓아가는 기운" },
  { label: "인시", copy: "먼저 움직이는 기운" },
  { label: "묘시", copy: "관계와 감각이 예민한 기운" },
  { label: "진시", copy: "판을 정리하는 기운" },
  { label: "사시", copy: "표현과 실행이 강한 기운" },
  { label: "오시", copy: "드러나는 성과가 강한 기운" },
  { label: "미시", copy: "균형과 조율이 필요한 기운" },
  { label: "신시", copy: "판단과 계산이 빠른 기운" },
  { label: "유시", copy: "마무리와 결과가 강한 기운" },
  { label: "술시", copy: "책임과 기준이 강한 기운" },
  { label: "해시", copy: "회복과 직감이 살아나는 기운" },
];
const elementFlows = [
  { label: "목기운", copy: "새로 시작하고 뻗어나가는 힘" },
  { label: "화기운", copy: "표현하고 주목받는 힘" },
  { label: "토기운", copy: "흔들린 것을 붙잡는 힘" },
  { label: "금기운", copy: "정리하고 기준을 세우는 힘" },
  { label: "수기운", copy: "관찰하고 흐름을 읽는 힘" },
];
const serviceSignals = {
  today: {
    focus: ["우선순위", "마무리", "대화 온도", "돈의 새는 구멍", "몸의 리듬"],
    caution: ["즉흥 결정", "답장 미루기", "작은 지출 방치", "감정적인 말", "무리한 일정"],
    action: ["가장 중요한 일 하나를 먼저 끝내기", "오늘 쓸 돈의 상한선을 정하기", "답장 하나를 짧게 마무리하기", "미뤄둔 정리 하나 처리하기"],
  },
  tarot: {
    focus: ["선택의 기준", "마음의 우선순위", "상대의 반복 행동", "보류할 결정", "작은 첫 행동"],
    caution: ["결론 재촉", "남의 말만 듣는 선택", "불안해서 보내는 연락", "충동 구매", "감정 확인 집착"],
    action: ["고민을 한 문장으로 적기", "선택지를 두 개로 줄이기", "오늘 하지 않을 일을 정하기", "카드 메시지 하나만 실행하기"],
  },
  couple: {
    focus: ["연락 온도", "서로의 기준", "말투의 반복", "현실 조율", "감정 피로"],
    caution: ["확인 요구", "서운함을 쌓아두기", "돈과 일정의 애매함", "상대를 시험하는 말", "긴 설명"],
    action: ["원하는 대화 방식을 짧게 말하기", "약속 하나를 구체적으로 정하기", "고마운 점 하나를 표현하기", "답장 속도로 마음을 판단하지 않기"],
  },
  year: {
    focus: ["상반기 정리", "하반기 실행", "고정비 관리", "증거가 남는 성과", "지속 가능한 루틴"],
    caution: ["한 번에 모든 것을 바꾸기", "계획만 늘리기", "기분에 따른 지출", "관계의 기준 없이 맞춰주기", "몸을 밀어붙이기"],
    action: ["올해 목표를 세 개 이하로 줄이기", "매달 확인할 지표 하나 정하기", "고정 지출을 한 번 정리하기", "결과물이 남는 일을 먼저 잡기"],
  },
};

let currentService = "today";
let currentReading = null;
let pendingSaveRecord = null;
let entryStep = 1;
let analysisTimer = null;
let analysisProgressTimer = null;
let tarotOffset = 0;

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

function genderKo(value) {
  return value === "female" || value === "여성" ? "여성" : "남성";
}

function calendarKo(value, intercalation = false) {
  if (value !== "lunar") return "양력";
  return intercalation ? "음력 윤달" : "음력 평달";
}

function objectParticle(text) {
  return text === "궁합" ? "을" : "를";
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
    name: $("#name")?.value.trim() || "당신",
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
  if (profile.unknownTime) return { label: "시간 미입력", copy: "출생시간을 모를 때는 오늘의 흐름을 더 넓게 봅니다." };
  const hour = Number(String(profile.time || "00:00").slice(0, 2));
  const index = hour === 23 ? 0 : Math.floor((hour + 1) / 2) % 12;
  return timeBranches[index] || timeBranches[0];
}

function getBirthSeason(month) {
  if ([3, 4, 5].includes(month)) return "봄의 확장성";
  if ([6, 7, 8].includes(month)) return "여름의 표현력";
  if ([9, 10, 11].includes(month)) return "가을의 정리력";
  return "겨울의 집중력";
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
    heading: `${zodiac}띠 ${focus} 흐름`,
  };
}

function buildPersonalLines(name, context) {
  return [
    `${name}님은 ${context.zodiac}띠의 ${context.season}과 ${context.element.label}이 겹쳐 오늘 ${context.focus}에서 운이 가장 크게 움직입니다.`,
    `${context.branch.label} 기준으로 보면 ${context.branch.copy}이 강해져 ${context.caution}을 조심해야 합니다.`,
    `오늘 바로 할 일은 ${context.action}입니다. 작게 실행할수록 상세 운의 흐름이 더 안정됩니다.`,
  ];
}

function buildDetailSections(template, context, name) {
  return template.detail.map((text, index) => {
    const prefix = [
      `${name}님의 총운은 ${context.zodiac}띠와 ${context.element.label}이 만나는 지점에서 봐야 합니다.`,
      `연애와 관계에서는 ${context.branch.copy}이 말투와 반응 속도에 영향을 줍니다.`,
      `재물 흐름은 ${context.caution}을 줄이는 쪽에서 먼저 열립니다.`,
      `일과 학업에서는 ${context.focus}을 실제 결과물로 남기는 태도가 중요합니다.`,
      `건강운은 ${context.season}의 장점이 무리로 바뀌지 않게 조절하는 것이 핵심입니다.`,
    ][index] || "";
    return `${prefix} ${text}`;
  });
}

function trackMetric(name, payload = {}) {
  try {
    const key = "today-fortune:metrics-v1";
    const metrics = JSON.parse(localStorage.getItem(key) || "{}");
    const day = todayKey();
    const today = metrics[day] || {};
    const current = today[name] || { count: 0, items: [] };
    current.count += 1;
    current.items = [{ at: Date.now(), service: currentService, ...payload }, ...(current.items || [])].slice(0, 20);
    metrics[day] = { ...today, [name]: current };
    localStorage.setItem(key, JSON.stringify(metrics));
  } catch {
    // 로컬 지표 저장 실패는 사용자 흐름을 막지 않습니다.
  }
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
    const isActive = (viewId === "home" && nav === "home") || (viewId === "tarot" && nav === "tarot") || (button.dataset.service === currentService && viewId !== "home");
    button.classList.toggle("active", Boolean(isActive));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setService(serviceId) {
  currentService = services[serviceId] ? serviceId : "today";
  const service = services[currentService];
  setText("#result-title", service.title);
  setText(".entry-header strong", `${service.title} 정보 입력`);
  setText("#entry-start-sheet h2", `${service.title}${objectParticle(service.title)} 시작할까요?`);
  const startCopy = $("#entry-start-sheet p");
  if (startCopy) startCopy.innerHTML = `${service.heading}<br />${service.copy}`;
}

function syncCalendarUi(profile = getEntryProfile()) {
  const lunarExtra = $("#lunar-extra");
  const helper = $("#calendar-helper");
  if (lunarExtra) lunarExtra.hidden = profile.calendar !== "lunar";
  if (!helper) return;
  if (profile.calendar !== "lunar") {
    helper.textContent = "양력 생년월일 기준으로 분석합니다";
    return;
  }
  helper.textContent = profile.dateValid
    ? `양력 ${formatDate(profile.date)}로 변환해 분석합니다`
    : "음력 날짜와 윤달 여부를 확인해 주세요";
}

function updateEntryReview() {
  const profile = getEntryProfile();
  syncCalendarUi(profile);
  setText("#entry-name-display", profile.name);
  setText("#review-name", profile.name);
  setText("#review-gender", genderKo(profile.gender));
  setText("#review-date", formatOptionalDate(profile.inputDate || profile.date));
  setText("#review-calendar", calendarKo(profile.calendar, profile.lunarIntercalation));
  setText(
    "#review-solar-date",
    profile.calendar === "lunar"
      ? profile.dateValid
        ? `${formatDate(profile.date)} 양력 변환`
        : "변환할 수 없는 음력 날짜"
      : `${formatOptionalDate(profile.date)} 양력 기준`,
  );
  setText("#review-time", profile.unknownTime ? "시간 모름" : profile.time);
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
  let message = entryStep === 4 ? "결과 보기" : "다음";

  if (entryStep === 1 && !name) {
    valid = false;
    message = "이름을 입력해 주세요";
  }
  if (entryStep === 3) {
    if (!dateReady) {
      valid = false;
      message = "생년월일 8자리를 입력해 주세요";
    } else if (!profile.dateValid) {
      valid = false;
      message = profile.calendar === "lunar" ? "음력 날짜와 윤달 여부를 확인해 주세요" : "생년월일을 다시 확인해 주세요";
    } else if (!timeReady) {
      valid = false;
      message = "태어난 시간을 입력하거나 시간 모름을 선택해 주세요";
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
  window.setTimeout(() => $("#name")?.focus(), 120);
}

function finishEntryFlow() {
  const profile = getEntryProfile();
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
  if (title) title.innerHTML = `<span id="analysis-name">${profile.name}</span>님의 ${service.title}를 분석하고 있어요!`;
  setText("#analysis-count", count.toLocaleString("ko-KR"));
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
  const name = reading.profile.name || "당신";
  const lines = buildPersonalLines(name, context);
  const detailSections = buildDetailSections(profile, context, name);

  if (result) {
    result.dataset.service = currentService;
    result.classList.add("free-beta-result");
    result.classList.toggle("today-result-view", currentService === "today");
    result.classList.toggle("year-result-view", currentService === "year");
  }

  setText("#result-title", service.title);
  setText("#free-result-kicker", `${service.title} 핵심 3줄`);
  setText("#free-result-heading", context.heading);
  const list = $("#free-three-lines");
  if (list) list.innerHTML = lines.map((line) => `<li>${line}</li>`).join("");
  setText("#personal-zodiac", `${context.zodiac}띠`);
  setText("#personal-time", context.branch.label);
  setText("#personal-element", context.element.label);
  setText("#personal-focus", context.focus);
  setText("#free-score-number", String(score));
  setText("#free-score-copy", `${context.focus} 점수가 높습니다. ${profile.scoreCopy}`);
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
  setText("#action-revisit", `${context.secondAction} 흐름은 내일 다시 보면 차이가 더 잘 보입니다.`);

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
    calendarLabel: calendarKo(reading.profile.calendar, reading.profile.lunarIntercalation),
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
    button.textContent = "광고 보고 상세 풀이 열기";
  }
  if (note) note.textContent = "광고가 로딩되지 않으면 잠시 후 무료로 열립니다.";
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
    button.textContent = "상세 풀이 열림";
  }
  if (note) note.textContent = noteText;
}

function mountAdSlots() {
  $$(".free-ad-slot").forEach((slot) => {
    const name = slot.dataset.adSlot || "result";
    const client = window.TODAY_FORTUNE_ADSENSE_CLIENT || "";
    const adSlot = window.TODAY_FORTUNE_ADSENSE_SLOTS?.[name] || "";
    if (client && adSlot) {
      slot.innerHTML = `<ins class="adsbygoogle" style="display:block;width:100%;height:100%;" data-ad-client="${client}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        slot.innerHTML = adPlaceholder(name, "광고 로딩 실패");
      }
      return;
    }
    slot.innerHTML = adPlaceholder(name, "광고 영역");
  });
}

function adPlaceholder(name, title) {
  const label = name === "result-middle" ? "결과 중간 고정 슬롯" : "결과 하단 고정 슬롯";
  return `<div class="ad-placeholder"><strong>${title}</strong><span>${label}</span><small>광고가 준비되는 동안 결과를 계속 볼 수 있어요.</small></div>`;
}

function updateAttendanceCard() {
  const button = $("#attendance-button");
  const copy = $("#attendance-copy");
  if (!button || !copy) return;
  const attended = localStorage.getItem(`today-fortune:attendance:${todayKey()}`) === "done";
  button.disabled = attended;
  button.textContent = attended ? "체크 완료" : "방문 체크";
  copy.textContent = attended ? "오늘 방문 기록이 남았습니다. 내일 다시 비교해보세요." : "오늘 방문을 체크하면 내일 다시 볼 이유가 생깁니다.";
}

function updateHomeMemory() {
  const title = $("#last-reading-title");
  const copy = $("#last-reading-copy");
  const badge = $("#last-reading-badge");
  if (!title || !copy || !badge) return;
  try {
    const last = JSON.parse(localStorage.getItem("today-fortune:last-reading") || "null");
    if (!last) {
      badge.textContent = "기록 대기";
      title.textContent = "아직 저장된 운세가 없어요";
      copy.textContent = "결과 화면에서 저장을 누르면 최근 기록과 내일 다시 볼 포인트가 남습니다.";
      return;
    }
    badge.textContent = `${last.score}점`;
    title.textContent = `최근 본 ${last.title || "운세"} · ${last.keyword || "오늘운"}`;
    copy.textContent = `핵심 포인트는 ${last.focus || "오늘의 흐름"}입니다. 내일 다시 보면 오늘과 다른 흐름을 비교할 수 있어요.`;
  } catch {
    title.textContent = "최근 기록을 불러오지 못했어요";
    copy.textContent = "오늘 운세를 다시 확인하면 기록이 새로 저장됩니다.";
  }
}

function resetSavePrompt() {
  const button = $("#save-reading-record");
  if (button) {
    button.disabled = false;
    button.textContent = "내 운세 기록 저장하기";
  }
  setText("#history-copy", "회원가입 없이 이 기기에만 저장됩니다. 원하지 않으면 저장하지 않아도 됩니다.");
}

function saveHistory(item) {
  const history = JSON.parse(localStorage.getItem("today-fortune:history") || "[]");
  const next = [item, ...history.filter((entry) => entry.date !== item.date || entry.service !== item.service)].slice(0, 14);
  localStorage.setItem("today-fortune:history", JSON.stringify(next));
  localStorage.setItem("today-fortune:last-reading", JSON.stringify({ ...item, title: item.service }));
  setText("#history-copy", `${item.service} 결과가 이 기기에 저장되었습니다. 최근 ${next.length}개 기록을 보관합니다.`);
  updateHomeMemory();
  trackMetric("reading_saved", { score: item.score, keyword: item.keyword });
}

function saveCurrentReadingRecord() {
  if (!pendingSaveRecord) return;
  saveHistory(pendingSaveRecord);
  const button = $("#save-reading-record");
  if (button) {
    button.disabled = true;
    button.textContent = "저장 완료";
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
  ctx.fillText(`${score}점`, 70, 355);
  ctx.fillStyle = "#fff43f";
  ctx.font = "900 58px sans-serif";
  ctx.fillText(keyword, 74, 470);
  ctx.fillStyle = "rgba(255,255,255,0.86)";
  drawWrappedText(ctx, advice, 74, 570, 740, 54);
  ctx.fillStyle = "rgba(255,255,255,0.64)";
  ctx.font = "800 34px sans-serif";
  ctx.fillText("오늘운세 · 무료 사주 타로", 70, 1090);
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
}

function seedHomeScore() {
  setText("#home-score", "무료");
  setText("#portal-preview-label", "오늘 운세 무료");
  $(".hero-ring")?.style.setProperty("--score", "100");
  setText(".hero-ring strong", "무료");
}

function ensureHomeBlocks() {
  const dailyPortal = $(".daily-portal");
  if (!dailyPortal || $(".attendance-card")) return;
  const attendance = document.createElement("section");
  attendance.className = "attendance-card";
  attendance.innerHTML = `<div><strong>오늘 방문 체크</strong><span id="attendance-copy">오늘 방문을 체크하면 내일 다시 볼 이유가 생깁니다.</span></div><button id="attendance-button" type="button">방문 체크</button>`;
  dailyPortal.after(attendance);
  const memory = document.createElement("section");
  memory.className = "last-reading-card";
  memory.innerHTML = `
    <div>
      <span id="last-reading-badge">기록 대기</span>
      <strong id="last-reading-title">아직 저장된 운세가 없어요</strong>
      <p id="last-reading-copy">결과 화면에서 저장을 누르면 최근 기록과 내일 다시 볼 포인트가 남습니다.</p>
    </div>
    <button data-open="input" data-service="today" type="button">오늘 운세 보기</button>
  `;
  attendance.after(memory);
  const legal = document.createElement("nav");
  legal.className = "legal-links";
  legal.setAttribute("aria-label", "서비스 정책");
  legal.innerHTML = `<a href="PRIVACY.md" target="_blank" rel="noreferrer">개인정보처리방침</a><a href="TERMS.md" target="_blank" rel="noreferrer">이용약관</a><a href="CONTACT.md" target="_blank" rel="noreferrer">문의</a>`;
  memory.after(legal);
}

function applyStaticCopy() {
  document.body.classList.add("free-beta");
  document.title = "오늘운세 - 무료 사주 타로";
  setText(".brand strong", "오늘운세");
  setText(".hero-section .eyebrow", "매일 무료 운세");
  setText(".hero-section h1", "오늘의 운세를 무료로 확인하세요");
  setText(".hero-section p", "생년월일을 입력하면 오늘의 총운, 연애운, 재물운, 일운, 건강운을 간단하게 볼 수 있어요.");
  setText(".primary-button", "오늘 운세 무료 보기");
  setText(".portal-head span", "무료 운세");
  setText(".portal-head h2", "오늘 운세 무료 보기");
  setText(".portal-head p", "오늘운세, 타로, 궁합, 신년운세를 무료로 확인하세요.");
  setText(".portal-main-card span", "오늘의 흐름 미리보기");
  setText("#portal-preview-label", "오늘 운세 무료");
  setText(".portal-main-card p", "개인 점수는 생년월일 입력 후 결과 화면에서 계산됩니다.");
  setText(".portal-main-card button", "오늘 운세 무료 보기");
  setText(".portal-reward-row strong", "오늘의 흐름을 저장하면 내일 운세와 비교할 수 있어요");
  setText(".portal-reward-row button", "오늘 운세 보기");

  const quickGrid = $(".portal-quick-grid");
  if (quickGrid) {
    quickGrid.innerHTML = `
      <button data-open="input" data-service="today" type="button"><i class="portal-icon portal-sun"></i><strong>오늘운세</strong><span>매일 무료</span></button>
      <button data-open="tarot" data-nav="tarot" data-scroll-to="daily-tarot-draw" type="button"><i class="portal-icon portal-card"></i><strong>타로</strong><span>원카드</span></button>
      <button data-open="input" data-service="couple" type="button"><i class="portal-icon portal-heart"></i><strong>궁합</strong><span>관계 흐름</span></button>
      <button data-open="year-info" data-service="year" type="button"><i class="portal-icon portal-moon"></i><strong>신년운세</strong><span>2026 흐름</span></button>
    `;
  }

  const bottomNav = $(".bottom-nav");
  if (bottomNav) {
    bottomNav.innerHTML = `
      <button class="active" data-open="home" data-nav="home" type="button"><span class="nav-icon nav-year" aria-hidden="true"></span><b>홈</b></button>
      <button data-open="input" data-service="today" data-nav="today" type="button"><span class="nav-icon nav-year" aria-hidden="true"></span><b>오늘운세</b></button>
      <button data-open="tarot" data-nav="tarot" type="button"><span class="nav-icon nav-tarot" aria-hidden="true"></span><b>타로</b></button>
      <button data-open="year-info" data-service="year" data-nav="year" type="button"><span class="nav-icon nav-year" aria-hidden="true"></span><b>신년운세</b></button>
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
    hideSheet("entry-start-sheet");
    openInputFlow();
  });
  $("#agree-start-button")?.addEventListener("click", () => {
    hideSheet("terms-sheet");
    finishEntryFlow();
  });
  $("[data-sns-skip]")?.addEventListener("click", () => {
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
    button.textContent = "광고 확인 중...";
    trackMetric("detail_unlock_click");
    window.setTimeout(() => {
      unlockDetail("광고 로딩이 완료되지 않아 상세 풀이를 무료로 열었습니다.");
      updateHomeMemory();
      trackMetric("detail_unlocked");
    }, 850);
  });
  $("#make-share-card")?.addEventListener("click", createShareCard);
  $("#save-share-card")?.addEventListener("click", saveShareCard);
  $("#share-button")?.addEventListener("click", async () => {
    if (!currentReading) return;
    const service = services[currentService] || services.today;
    const text = `오늘운세에서 ${service.title}를 확인했어요. 점수 ${$("#share-card-score")?.textContent || currentReading.score}점, 키워드 ${$("#share-card-keyword")?.textContent || "오늘운"}`;
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
  });
}

function boot() {
  if (window.__tuviBooted) return;
  window.__tuviBooted = true;
  window.tuviContinueFromSns = finishEntryFlow;
  applyStaticCopy();
  bindNavigation();
  bindForm();
  bindActions();
  seedHomeScore();
  setService("today");
}

boot();
