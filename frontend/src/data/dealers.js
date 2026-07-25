// ============================================================
// PediZone — Bayi / Satış Noktaları (Single Source of Truth)
// ============================================================
// Bu dosya tüm bayi verilerinin TEK kaynağıdır.
// Yeni bayi eklemek/çıkarmak için SADECE bu dosyayı güncelleyin.
// Hem Home.jsx (harita) hem de Dealers.jsx (liste+harita) buradan import eder.
// ============================================================

export const dealers = [
  {
    id: 1,
    name: "Medipodo Podoloji Merkezi",
    city: "Ankara",
    address: "Bağlıca Mah. Mert Cad. No 4/2 3. Noter Karşısı Etimesgut",
    phone: "+90 545 656 9747",
    email: "medipodotr@gmail.com",
    type: "Podoloji Merkezi",
    featured: false,
    lat: 39.8970891,
    lng: 32.648113
  },
  {
    id: 2,
    name: "Podosis Ayak Bakım Merkezi",
    city: "Ankara",
    address: "Atakent Mah 1512 cad, ELVANKENT 104/D, 06796 Etimesgut",
    phone: "+90 543 543 0082",
    type: "Ayak Bakım Merkezi",
    lat: 39.95567,
    lng: 32.61211
  },
  {
    id: 3,
    name: "OrtoMek Ortez-Protez Uygulama Merkezi",
    city: "Ankara",
    address: "Işınlar Mah. Ragıp Tüzün Cad. No 15/B Yenimahalle",
    phone: "+90 534 729 0182",
    email: "info@ortomek.com",
    type: "Ortez-Protez Merkezi",
    lat: 39.9613051,
    lng: 32.81577
  },
  {
    id: 4,
    name: "Anka Eczanesi",
    city: "Ankara",
    address: "Maltepe, Gazi Mustafa Kemal Blv. 47/A, 06570 Çankaya",
    phone: "0312 229 2898",
    type: "Eczane",
    lat: 39.92760183,
    lng: 32.847632
  },
  {
    id: 5,
    name: "Bağlıca Merkez Eczanesi",
    city: "Ankara",
    address: "Yeni Bağlıca Mah. Bağlıca Bulvarı No 48/CA (Total Benzinlik Karşısı)",
    phone: "05396430123",
    type: "Eczane",
    lat: 39.8833,
    lng: 32.6500
  },
  {
    id: 6,
    name: "Damla Eczanesi",
    city: "Antalya",
    address: "Şirinyalı Mah. Tekelioğlu Cad. No18/A Medicalpark Hastanesi Karşısı Lara",
    phone: "0242 324 3491",
    email: "eibisoglu@hotmail.com",
    type: "Eczane",
    lat: 36.8550,
    lng: 30.7800
  },
  {
    id: 7,
    name: "Medpark Konya Tırnak Batması Ayak Sağlığı Merkezi",
    city: "Konya",
    address: "Konevi, Sait Paşa Cd No:9/1-2-3-4, 42040 Meram",
    phone: "0530 511 2442",
    web: "https://www.medparkkonya.com/",
    type: "Ayak Sağlığı Merkezi",
    lat: 37.8667,
    lng: 32.4833
  },
  {
    id: 8,
    name: "Hacer Aslan",
    city: "Kocaeli",
    address: "Alikahya Fatih, Uğur Mumcu Cd., 41310 İzmit/Kocaeli",
    phone: "0507 238 9414",
    type: "Podolog",
    lat: 40.7667,
    lng: 29.9167
  },
  {
    id: 9,
    name: "Yaşare KADER",
    city: "Antalya",
    address: "Hurma, 254. Sk. No:11 / B, 07130 Konyaaltı",
    phone: "0505 215 0028",
    type: "Podolog",
    lat: 36.8833,
    lng: 30.6333
  },
  {
    id: 10,
    name: "Hanife Karataş",
    city: "Bursa",
    address: "Orhaniye, D200 125-126, 16400 İnegöl",
    phone: "0542 617 9865",
    type: "Podolog",
    lat: 40.0833,
    lng: 29.5167
  },
  {
    id: 11,
    name: "Podolara El ve Ayak Bakım Merkezi",
    city: "Bitlis",
    address: "Halk Bankası Karşısı, Saray, Cumhuriyet Cd. Kat: 2 No: 2, 13200 Tatvan/Bitlis",
    phone: "05427180713",
    web: "https://podolara.com/",
    type: "Ayak Bakım Merkezi",
    lat: 38.5000,
    lng: 42.2833
  },
  {
    id: 12,
    name: "Kıvanç Eczanesi",
    city: "Niğde",
    address: "Ahmet Kuddusi, Doğan Baran Cd. No: 72/A, 51700 Bor/Niğde",
    phone: "03883130201",
    type: "Eczane",
    lat: 37.8833,
    lng: 34.5500
  },
  {
    id: 13,
    name: "Podolog Gamze Betül Başaran",
    city: "Tokat",
    address: "Pazar Mah. Kayra Sok. Turhal",
    phone: "0552 873 1407",
    email: "gamzebetulb@gmail.com",
    type: "Podolog",
    lat: 40.385326,
    lng: 36.0729861
  },
  {
    id: 14,
    name: "Nefes Güzellik ve Ayak Bakım Salonu",
    city: "Tokat",
    address: "Bağlar Mahallesi Şht. Jan. Uzm. Çvş Abuzer Doğan Blv, 60600 Niksar/Tokat",
    phone: "05433069777",
    type: "Ayak Bakım Merkezi",
    lat: 40.5859317,
    lng: 36.9398934
  },
  {
    id: 15,
    name: "Fakülte Eczanesi",
    city: "Ankara",
    address: "Mamak Caddesi No:19/A Dikimevi / Mamak / Ankara – Ankara Üniversitesi Tıp Fakültesi Cebeci Kalp Merkezi yanı",
    phone: "0312 362 0427",
    type: "Eczane",
    lat: 39.93467715044467,
    lng: 32.88174323980081
  },
  {
    id: 16,
    name: "Sağlık Teknikeri Sabahat Filiz",
    city: "Osmaniye",
    address: "İrfanlı Mahallesi, Düziçi / Osmaniye",
    phone: "05354947963",
    type: "Sağlık Teknikeri",
    lat: 37.25552503,
    lng: 36.4632188
  },
  {
  id: 17,
  name: "Ali İren Eczanesi",
  city: "Osmaniye",
  address: "İrfanlı Mahallesi, A. Lütfi Dağlar Bulvarı No:12/B, Devlet Hastanesi Acil karşısı, Düziçi / Osmaniye",
  phone: "0328 876 1876",
  type: "Eczane",
  lat: 37.2578488401,
  lng: 36.45526899876
},
{
  id: 18,
  name: "Hatice Yılmaz MYK Sınav Değerlendiricisi",
  city: "Hatay",
  address: "Haraparası, Tayfur Sökmen Cd, Erdam İşhanı No:74/102, 31000 Antakya / Hatay",
  phone: "0537 483 1183",
  web: "https://www.instagram.com/haticeyilmazcomtr/",
  type: "MYK Sınav Değerlendiricisi",
  lat: 36.20460409735047,
  lng: 36.16036209564135
},
{
  id: 19,
  name: "Podopenah El ve Ayak Bakım Merkezi",
  city: "Ankara",
  address: "Eryaman Mahallesi 269. Sokak No:4/A İç Kapı No:13 (Rada Life, Eryaman 5 Metro Çıkışı) Etimesgut / Ankara",
  phone: "0505 442 4412",
  email: "info@podopenah.com",
  type: "Ayak Bakım Merkezi",
  lat: 39.979036596,
  lng: 32.626206486
},
{
  id: 20,
  name: "Podolog Pelin Yarbı",
  city: "Yalova",
  address: "Bağlarbaşı Mahallesi Kınalı Sokak No:1 Daire:22, Yalova / Merkez",
  phone: "0507 665 5570",
  email: "podologpelinyarbi@gmail.com",
  web: "https://yalovaayaksagligi.com/",
  type: "Özel Sağlık Hizmet Birimi",
  lat: 40.634544941,
  lng: 29.268377812
},
];

export default dealers;
