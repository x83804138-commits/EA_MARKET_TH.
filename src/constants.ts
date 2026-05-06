import { EAPackage, PackageId } from './types';

export const EA_PACKAGES: EAPackage[] = [
  {
    id: PackageId.BASIC,
    name: 'XAUUSD Basic',
    category: 'XAUUSD',
    tradingAssets: 'Basic',
    price: 5000,
    capitalRange: 'ทุน 100$ - 500$',
    description: 'เหมาะสำหรับผู้เริ่มต้น ทดลองใช้ระบบ AI อัจฉริยะที่ช่วยคัดกรองจุดเข้าเทรดทองคำที่มีประสิทธิภาพสูง',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=D&theme=dark',
    userCount: 120,
    performanceSummary: 'Win Rate 68% | Avg. Monthly Profit 5-10%',
    recommendation: 'เหมาะสำหรับผู้ที่ต้องการเริ่มต้นทดลองใช้งานด้วยงบประมาณหลักพัน เน้นการเรียนรู้ระบบ AI พื้นฐานและการรักษาวินัยในการเทรดทองคำ',
    status: 'active',
    stats: {
      dailyWinRate: '65%',
      weeklyWinRate: '67%',
      monthlyWinRate: '68%',
      globalRank: 4,
      totalActiveUsers: 1250
    },
    features: ['รองรับ 1 บัญชีเทรด', 'ระบบบริหารความเสี่ยงพื้นฐาน', 'Support ผ่าน Line'],
    reviews: [
      { userName: 'K. Somchai', comment: 'ใช้งานง่ายมากครับ เหมาะสำหรับมือใหม่จริงๆ', rating: 5, date: '2026-04-15' }
    ]
  },
  {
    id: PackageId.STANDARD,
    name: 'XAUUSD Standard',
    category: 'XAUUSD',
    tradingAssets: 'Standard',
    price: 10000,
    capitalRange: 'ทุน 500$ - 1,000$',
    description: 'ขยับความมั่นคงขึ้นอีกระดับ พร้อมประสิทธิภาพที่เพิ่มขึ้นด้วยระบบ Trailing Stop แบบ Multi-layer สำหรับทองคำ',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=D&theme=dark',
    userCount: 250,
    performanceSummary: 'Win Rate 72% | Avg. Monthly Profit 8-15%',
    recommendation: 'แนะนำสำหรับนักลงทุนที่ต้องการความมั่นคงเพิ่มขึ้น ระบบ Trailing Stop จะช่วยปกป้องกำไรของคุณในช่วงที่ตลาดผันผวนได้เป็นอย่างดี',
    status: 'active',
    features: ['รองรับ 2 บัญชีเทรด', 'ระบบ Trailing Stop', 'อัพเดทข่าวสารตลาด Real-time'],
    reviews: [
      { userName: 'K. Anan', comment: 'กำไรสม่ำเสมอดีครับ ระบบ Trailing ช่วยเก็บกำไรได้ดีมาก', rating: 4, date: '2026-04-20' }
    ]
  },
  {
    id: PackageId.PRO,
    name: 'XAGUSD Pro',
    category: 'XAGUSD',
    tradingAssets: 'Pro',
    price: 15000,
    capitalRange: 'ทุน 1,000$ - 2,500$',
    description: 'สำหรับมืออาชีพที่มองหาผลตอบแทนจากโลหะเงิน พร้อมระบบวิเคราะห์แนวโน้มล่วงหน้า',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=OANDA:XAGUSD&interval=D&theme=dark',
    userCount: 480, // High user count to make it recommended
    performanceSummary: 'Win Rate 78% | Avg. Monthly Profit 12-20%',
    recommendation: 'ตัวเลือกยอดนิยมสำหรับสายเทรดโลหะเงิน Pro Performance ให้ผลตอบแทนคุ้มค่าความเสี่ยง พร้อมระบบวิเคราะห์แนวโน้มที่แม่นยำสูง',
    status: 'active',
    stats: {
      dailyWinRate: '75%',
      weeklyWinRate: '76%',
      monthlyWinRate: '78%',
      globalRank: 1,
      totalActiveUsers: 4850
    },
    features: ['ไม่จำกัดบัญชีเทรด', 'ระบบ Multi-Currency', 'Dedicated Support 24/5'],
    reviews: [
      { userName: 'K. Wichai', comment: 'สุดยอดครับ พอร์ตโตขึ้นเรื่อยๆ แบบไม่ต้องเฝ้าจอเลย', rating: 5, date: '2026-04-25' }
    ]
  },
  {
    id: PackageId.VIP,
    name: 'XAGUSD VIP',
    category: 'XAGUSD',
    tradingAssets: 'VIP',
    price: 20000,
    capitalRange: 'ทุน 3,000$ - 4,500$',
    description: 'ฟีเจอร์ระดับสูง ปรับแต่งได้ตามใจชอบ พร้อมระบบ Hedging สำหรับคู่ XAGUSD',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=OANDA:XAGUSD&interval=D&theme=dark',
    userCount: 150,
    performanceSummary: 'Win Rate 82% | Avg. Monthly Profit 15-25%',
    recommendation: 'เหมาะกับนักลงทุนมืออาชีพที่เข้าใจกลยุทธ์ Hedging ระบบนี้จะช่วยล็อกกำไรและลดความเสี่ยงจากการสวิงของราคาสินทรัพย์ได้สูงสุด',
    status: 'active',
    features: ['ระบบ Hedging ขั้นสูง', 'ปรับแต่ง Algorithm ได้เอง', 'VIP Signal Group'],
    reviews: [
      { userName: 'K. Nattapon', comment: 'ระบบ Hedging ทำงานได้ยอดเยี่ยมมากครับ ช่วงข่าวแรงๆ เอาอยู่', rating: 5, date: '2026-04-28' }
    ]
  },
  {
    id: PackageId.VVIP,
    name: 'BTCUSD VVIP',
    category: 'BTCUSD',
    tradingAssets: 'VVIP',
    price: 30000,
    capitalRange: 'ทุน 5,000$ - 10,000$',
    description: 'ระบบเทรดคริปโตเคอเรนซีระดับพรีเมียมและความปลอดภัยสูงสุด พร้อม Personal Consultant',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=D&theme=dark',
    userCount: 85,
    performanceSummary: 'Win Rate 85% | Avg. Monthly Profit 20-30%',
    recommendation: 'แพ็คเกจสำหรับนักลงทุนรายใหญ่ที่ต้องการความดูแลเป็นพิเศษด้วย Personal Consultant และ VPS ความเร็วสูงเพื่อความต่อเนื่องในการเทรดคริปโต',
    status: 'active',
    features: ['Personal Consultant', 'Private VPS 1 ปี', 'อัลกอริทึมเวอร์ชันพิเศษ'],
    reviews: [
      { userName: 'K. Sarit', comment: 'คุ้มค่ามากครับ มีผู้เชี่ยวชาญช่วยแนะนำตลอด อุ่นใจมาก', rating: 5, date: '2026-04-29' }
    ]
  },
  {
    id: PackageId.VVVIP,
    name: 'BTCUSD VVVIP',
    category: 'BTCUSD',
    tradingAssets: 'VVVIP',
    price: 50000,
    capitalRange: 'ทุน 15,000$ ขึ้นไป',
    description: 'สูงสุดของระบบเทรด Bitcoin อัตโนมัติ สำหรับพอร์ตขนาดใหญ่ พร้อมการรับประกันเงินทุน',
    videoUrl: 'https://www.tradingview.com/widgetembed/?symbol=BINANCE:BTCUSDT&interval=D&theme=dark',
    userCount: 30,
    performanceSummary: 'Win Rate 88% | Avg. Monthly Profit 25%+',
    recommendation: 'สุดยอดระบบเทรดที่เรามี ออกแบบมาเพื่อพอร์ตระดับสถาบันหรือผู้ที่ต้องการ Custom Strategy เฉพาะตัว พร้อมการการันตีความปลอดภัยของเงินทุน',
    status: 'active',
    stats: {
      dailyWinRate: '85%',
      weeklyWinRate: '86%',
      monthlyWinRate: '88%',
      globalRank: 6,
      totalActiveUsers: 450
    },
    features: ['Custom Algorithm โดยนักพัฒนา', 'ประกันเงินทุนสูงสุด 10%', 'สิทธิพิเศษงานสัมมนารายปี'],
    reviews: [
      { userName: 'Admin J.', comment: 'ระบบที่ดีที่สุดสำหรับพอร์ตใหญ่ เสถียรและปลอดภัยที่สุด', rating: 5, date: '2026-04-30' }
    ]
  }
];

export const THAI_BANKS = [
  { id: 'kbank', name: 'กสิกรไทย', color: '#138B2E', shortName: 'K-Bank' },
  { id: 'scb', name: 'ไทยพาณิชย์', color: '#4E2E7F', shortName: 'SCB' },
  { id: 'bbl', name: 'กรุงเทพ', color: '#1E4598', shortName: 'BBL' },
  { id: 'ktb', name: 'กรุงไทย', color: '#00AEEF', shortName: 'KTB' },
  { id: 'bay', name: 'กรุงศรีอยุธยา', color: '#FEC43B', shortName: 'Krungsri' },
  { id: 'ttb', name: 'ทีทีบี', color: '#002D63', shortName: 'ttb' },
  { id: 'gsb', name: 'ออมสิน', color: '#EB198D', shortName: 'GSB' },
  { id: 'baac', name: 'ธ.ก.ส.', color: '#008542', shortName: 'BAAC' },
  { id: 'uob', name: 'ยูโอบี', color: '#00366D', shortName: 'UOB' }
];
