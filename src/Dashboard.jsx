import { useState } from 'react';

// DATA POLA BATIK LENGKAP (Termasuk 4 Motif Ikonik Baru)
const DATAPOLABATIK = [
  {
    id: 'bunga-cina',
    nama: 'Bunga Cina (Chinese Rose)',
    sub: 'The Prosperity Emblem',
    gambar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500',
    deskripsiSingkat: 'Symbolizes beauty, prosperity, and harmonious relationships in Melayu culture.',
    poin: [
      { judul: 'Harmonious Growth', isi: 'Mencerminkan hubungan sosial yang harmonis, toleransi, dan keterbukaan budaya masyarakat Melayu Riau dengan dunia luar.' },
      { judul: 'Prosperity Sprout', isi: 'Kelopak bunga yang mekar melambangkan kemakmuran ekonomi dan kesejahteraan yang diharapkan selalu mengalir bagi pemakainya.' }
    ],
    quote: '"Keindahan budi pekerti tercermin dari bagaimana kita menyambut perbedaan dengan tangan terbuka dan hati yang murni."',
    author: '— Ny. Rina Melati, Contemporary Batik Designer'
  },
  {
    id: 'burung-serindit',
    nama: 'Burung Serindit (Hornbill)',
    sub: 'The Noble Crest',
    gambar: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    deskripsiSingkat: 'Represents nobility, wisdom, and the deep connection between Riau people and nature.',
    poin: [
      { judul: 'Melayu Wisdom', isi: 'Burung Serindit sebagai fauna khas melambangkan kearifan lokal, kesetiaan, serta kepemimpinan yang bijaksana dalam adat Melayu.' },
      { judul: 'Ecological Integrity', isi: 'Goresan sayap dan ekor yang berulang menggambarkan keselarasan mutlak antara manusia Lancang Kuning dengan alam lingkungannya.' }
    ],
    quote: '"Terbang tinggi membawa marwah, hinggap tenang menjaga adat. Begitulah jati diri sejati masyarakat kami."',
    author: '— Pak Tengku Ahmad, Natural Dye Specialist'
  },
  {
    id: 'sulur-tanjung',
    nama: 'Sulur Tanjung (Tanjung Vine)',
    sub: 'The Continuous Scroll',
    gambar: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    deskripsiSingkat: 'Signifies growth, continuity of life, and the intertwining of tradition with modernity.',
    poin: [
      { judul: 'Life Continuity', isi: 'Rangkaian sulur tanaman melingkar yang tak terputus mewakili siklus kehidupan, regenerasi generasi muda, dan kelestarian tradisi.' },
      { judul: 'Adaptive Innovation', isi: 'Pola jalinan tanaman menjalar ini melambangkan keluwesan orang Melayu dalam merangkul modernitas tanpa melupakan akar budaya asli.' }
    ],
    quote: '"Kain yang elok tak sekadar menutup raga, ia mengikat benang masa lalu dengan untaian harapan di masa depan."',
    author: '— Haji M. Yusuf, Master Canting Artisan'
  },
  {
    id: 'pucuk-rebung',
    nama: 'Pucuk Rebung (Bamboo Shoot)',
    sub: 'The Bamboo Shoot Emblem',
    gambar: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    deskripsiSingkat: 'Embodies resilience, new beginnings, and the enduring spirit of the Melayu community.',
    poin: [
      { judul: 'Resilient Pillar', isi: 'Bentuk segitiga menyerupai tunas bambu melambangkan tekad kuat, ketangguhan mental menghadapi badai, dan cita-cita luhur yang tinggi menjulang.' },
      { judul: 'Moral Base', isi: 'Garis fondasi yang kokoh menegaskan pentingnya moral keagamaan dan tata krama kesantunan sebagai pijakan utama melangkah maju.' }
    ],
    quote: '"Rebung melentur mengikuti arah angin namun akarnya tak pernah tercerabut dari tanah asal. Jadilah tangguh namun tetap membumi."',
    author: '— Haji M. Yusuf, Master Canting Artisan'
  }
];

// DATA PRODUK
const DATAPRODUK = [
  { id: 1, nama: 'Batik Tulis Premium Corak Bono', harga: 450000, toko: 'Riau Batik Hub', gambar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500' },
  { id: 2, nama: 'Kain Tenun Siak Corak Bertabur', harga: 650000, toko: 'Tenun Siak Asli', gambar: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
  { id: 3, nama: 'Slayer Batik Riau Kantong Semar', harga: 45000, toko: 'Gerai Melayu', gambar: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500' },
  { id: 4, nama: 'Tanjak Melayu Premium Souvenir', harga: 125000, toko: 'Tanjak Heritage', gambar: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
];

// DATA AGENDA (8 Acara Lengkap)
const DATAAGENDA = [
  { id: 1, jam: '09:00 - 10:00', acara: 'Grand Opening & Tari Persembahan', deskripsi: 'Prosesi sakral pembukaan pameran disusul tarian selamat datang khas Melayu Lancang Kuning.', gambar: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300' },
  { id: 2, jam: '10:00 - 11:30', acara: 'Live Canting Riau Batik Masterclass', deskripsi: 'Menyaksikan dan mempraktikkan langsung teknik goresan malam panas bersama maestro pembatik.', gambar: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300' },
  { id: 3, jam: '11:30 - 13:00', acara: 'Savouring Riau: Kuliner Warisan', deskripsi: 'Sesi istirahat sembari menikmati hidangan kuliner tradisional khas kesultanan Melayu.', gambar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300' },
  { id: 4, jam: '13:00 - 14:30', acara: 'Talkshow: Threads of Melayu Heritage', deskripsi: 'Diskusi panel interaktif mengupas tuntas perjalanan filosofis motif wastra masa lalu.', gambar: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300' },
  { id: 5, jam: '14:30 - 15:30', acara: 'Fashion Runway: Kreasi Wastra Modern', deskripsi: 'Peragaan busana mahakarya desainer lokal dalam mengawinkan pola batik klasik dan tren modern.', gambar: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300' },
  { id: 6, jam: '15:30 - 17:00', acara: 'Kurasi & Penghargaan Desainer Muda', deskripsi: 'Apresiasi dan penilaian terbuka terhadap inovasi rancangan motif baru garapan penerus bangsa.', gambar: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300' },
  { id: 7, jam: '17:00 - 19:00', acara: 'B2B Networking: Pasar Tenun Global', deskripsi: 'Sesi temu bisnis eksklusif untuk menghubungkan pengrajin lokal dengan jajaran kurator industri.', gambar: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=300' },
  { id: 8, jam: '19:00 - 21:00', acara: 'Malam Gala & Sinestesia Musik Gendang', deskripsi: 'Penutupan megah pameran yang dibalut dengan simfoni aransemen musik instrumen Melayu modern.', gambar: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300' },
];

const DATATIKET = [
  { id: 'regular', nama: 'Regular Day Pass', harga: 50000, deskripsi: 'Akses 1 hari eksibisi pameran, area galeri kain, dan pasar digital.' },
  { id: 'vip', nama: 'VIP Pass (Include Workshop)', harga: 150000, deskripsi: 'Akses pameran, prioritas bangku Fashion Runway, & kit eksklusif workshop membatik.' },
];

const DATASPONSOR = [
  { id: 1, nama: 'Kemenparekraf RI', profil: 'Lembaga kementerian yang mendukung penuh kelestarian budaya serta akselerasi ekonomi kreatif nasional.', logo: '🏛️' },
  { id: 2, nama: 'Pesona Indonesia', profil: 'Gerakan pariwisata resmi yang mempromosikan keindahan seni kriya kain nusantara ke kancah dunia.', logo: '🌾' },
  { id: 3, nama: 'Bank Riau Kepri Syariah', profil: 'Mitra finansial utama pembina permodalan digitalisasi jajaran UMKM konveksi daerah Riau.', logo: '💳' },
  { id: 4, nama: 'Lembaga Adat Melayu', profil: 'Pengawal utama nilai kebudayaan kesusastraan serta keaslian pakem filosofi corak tenun Siak.', logo: '🧵' }
];

const DATAMEDIAPARTNER = [
  { id: 1, nama: 'TVRI Stasiun Riau', profil: 'Saluran televisi penyiaran publik regional pelopor dokumenter sejarah kebudayaan Melayu.', logo: '📺' },
  { id: 2, nama: 'RRI Pekanbaru', profil: 'Radio Republik Indonesia sebagai media partner penyiaran warta berkala pameran Wastra.', logo: '📻' },
  { id: 3, nama: 'Riau Pos Media', profil: 'Surat kabar harian terbesar di bumi Lancang Kuning penyebar berita industri kriya lokal.', logo: '📰' },
  { id: 4, nama: 'InfoPKU Portal', profil: 'Media digital informasi urban milenial Pekanbaru jembatan promosi event generasi muda.', logo: '🌐' }
];

function Dashboard() {
  const [keranjang, setKeranjang] = useState([]);
  const [cari, setCari] = useState('');
  const [jumlahTiket, setJumlahTiket] = useState(1);
  const [tiketTerpilih, setTiketTerpilih] = useState(DATATIKET[0]);
  const [polaTerpilih, setPolaTerpilih] = useState(DATAPOLABATIK[0]);

  // State Tambahan untuk Form Registrasi Statis
  const [namaLengkap, setNamaLengkap] = useState('');
  const [emailPengunjung, setEmailPengunjung] = useState('');
  const [noTelepon, setNoTelepon] = useState('');

  const tambahKeKeranjang = (produk) => {
    const itemAda = keranjang.find((item) => item.id === produk.id);
    if (itemAda) {
      setKeranjang(keranjang.map((item) => item.id === produk.id ? { ...item, jumlah: item.jumlah + 1 } : item));
    } else {
      setKeranjang([...keranjang, { ...produk, jumlah: 1 }]);
    }
  };

  const hapusDariKeranjang = (id) => {
    const itemAda = keranjang.find((item) => item.id === id);
    if (!itemAda) return;
    if (itemAda.jumlah === 1) {
      setKeranjang(keranjang.filter((item) => item.id !== id));
    } else {
      setKeranjang(keranjang.map((item) => item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item));
    }
  };

  const produkDifilter = DATAPRODUK.filter((produk) =>
    produk.nama.toLowerCase().includes(cari.toLowerCase())
  );

  const totalHargaBelanja = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0);
  const totalBiayaTiket = jumlahTiket * tiketTerpilih.harga;

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>WastraRiau <span style={{color: '#ffb822'}}>Expo</span></div>
        <div style={styles.navMenu}>
          <a href="#tentang" style={styles.navLink}>Tentang</a>
          <a href="#discover" style={styles.navLink}>Eksplorasi Motif</a>
          <a href="#filosofi" style={styles.navLink}>Filosofi</a>
          <a href="#keunggulan" style={styles.navLink}>Keunggulan</a>
          <a href="#agenda" style={styles.navLink}>Agenda</a>
          <a href="#produk" style={styles.navLink}>Produk</a>
          <a href="#partners" style={styles.navLink}>Mitra Resmi</a>
          <a href="#tiket" style={styles.navLink}>Tiket</a>
        </div>
        <div style={styles.cartIcon}>🛒 {keranjang.length} Produk</div>
      </nav>

      {/* 1. TENTANG KAMI - HERO FULL SCREEN */}
      <section id="tentang" style={styles.heroSectionFullScreen}>
        <div style={styles.videoContainer}>
          <iframe 
            src="https://www.youtube.com/embed/g6m6VvFv6w0?autoplay=1&loop=1&playlist=g6m6VvFv6w0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
            title="Batik Video Background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={styles.videoIframe}
          ></iframe>
        </div>
        <div style={styles.heroOverlay}>
          <span style={styles.heroBadge}>RIAU BATIK EXHIBITION 2026</span>
          <h1 style={styles.heroTitleHuge}>Wastra Riau Expo 2026</h1>
          <p style={styles.heroSubtitleLarge}>Celebrate the Beauty of Riau Batik Heritage</p>
          <p style={styles.heroThemeText}>Theme: Threads of Melayu Heritage — Weaving Past, Present & Future</p>
          
          <div style={styles.infoBadgeContainer}>
            <div style={styles.infoBadgeItem}>📅 August 15–17, 2026</div>
            <div style={styles.infoBadgeItem}>📍 Grand Hall Convention Center, Pekanbaru, Riau</div>
          </div>

          <div style={styles.heroBtnGroup}>
            <a href="#tiket" style={styles.heroBtnUnifiedPrimary}>Register as Visitor</a>
            <a href="#produk" style={styles.heroBtnUnifiedPrimary}>Register as Tenant</a>
            <a href="#agenda" style={styles.heroBtnUnifiedPrimary}>View Activities</a>
          </div>
        </div>
      </section>

      {/* 2. DISCOVER STORIES - GRID MULTI MOTIF IKONIK BARU */}
      <section id="discover" style={styles.sectionPaddingWhite}>
        <div style={styles.centeredBlock}>
          <span style={styles.discoverLabel}>BATIK PHILOSOPHY</span>
          <h2 style={styles.discoverMainTitle}>Iconic Riau Batik Motifs</h2>
          <p style={styles.discoverParagraphText}>
            Every motif in Riau batik carries deep cultural meaning — a visual language passed down through generations of Melayu artisans.
          </p>
        </div>

        <div style={styles.motifShowcaseGrid}>
          {DATAPOLABATIK.map((pola) => (
            <div 
              key={pola.id} 
              onClick={() => {
                setPolaTerpilih(pola);
                window.location.href = "#filosofi";
              }}
              style={{
                ...styles.motifShowcaseCard,
                border: polaTerpilih.id === pola.id ? '2px solid #800020' : '1px solid #ebdcc5'
              }}
            >
              <div style={styles.motifCardImgWrapper}>
                <img src={pola.gambar} alt={pola.nama} style={styles.motifCardImg} />
                <div style={styles.motifCardBadge}>Klik Detail Filosofi</div>
              </div>
              <div style={styles.motifCardBody}>
                <div style={styles.cardDiamondIcon}>◈</div>
                <h4 style={styles.discoverCardTitleText}>{pola.nama}</h4>
                <p style={styles.discoverCardDescText}>{pola.deskripsiSingkat}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PHILOSOPHY GALLERY DETAIL */}
      <section id="filosofi" style={styles.sectionPadding}>
        <div style={styles.centeredBlock}>
          <span style={styles.goldSubheading}>DETIL MAKNA PUSAKA</span>
          <h2 style={styles.sectionTitleCentered}>Bedah Filosofi: {polaTerpilih.nama}</h2>
          <p style={styles.bodyTextCentered}>
            Visualisasi rupa garis dan makna pusaka bawa untaian doa serta tatanan nilai kehidupan tradisi yang sangat luhur.
          </p>
        </div>

        <div style={styles.philosophyContentWrapper}>
          <div style={styles.philosophyImageContainer}>
            <div style={styles.philosophyImageCard}>
              <img src={polaTerpilih.gambar} alt={polaTerpilih.nama} style={styles.philosophyImg} />
              <div style={styles.philosophyImgFooter}>
                <h5 style={{margin: '0 0 4px 0', color: '#ffb822', fontSize: '16px'}}>{polaTerpilih.nama}</h5>
                <span style={{fontSize: '11px', color: '#ddd', textTransform: 'uppercase', letterSpacing: '1px'}}>{polaTerpilih.sub}</span>
              </div>
            </div>
          </div>

          <div style={styles.philosophyListContainer}>
            {polaTerpilih.poin.map((poin, index) => (
              <div key={index} style={styles.philosophyItemCard}>
                <h4 style={{margin: '0 0 6px 0', color: '#4a3b32', fontSize: '18px'}}>{poin.judul}</h4>
                <p style={{margin: 0, color: '#555', fontSize: '14px', lineHeight: '1.6', fontFamily: 'sans-serif'}}>{poin.isi}</p>
              </div>
            ))}
            <div style={styles.philosophyQuoteBox}>
              <p style={styles.philosophyQuoteText}>{polaTerpilih.quote}</p>
              <span style={styles.philosophyQuoteAuthor}>{polaTerpilih.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MASTER CRAFTSMEN & DESIGNERS ARTISANS */}
      <section id="artisans" style={styles.sectionPaddingWhite}>
        <div style={styles.centeredBlock}>
          <span style={styles.discoverLabel}>FEATURED ARTISANS</span>
          <h2 style={styles.discoverMainTitle}>Master Craftsmen & Designers</h2>
        </div>
        <div style={styles.artisanGrid}>
          <div style={styles.artisanCard}>
            <div style={styles.artisanInitialCircle}>H</div>
            <h4 style={styles.artisanName}>Haji M. Yusuf</h4>
            <p style={styles.artisanRole}>Master Canting Artisan</p>
            <p style={styles.artisanExp}>40+ years of experience · Siak Sultanate tradition</p>
          </div>
          <div style={styles.artisanCard}>
            <div style={styles.artisanInitialCircle}>R</div>
            <h4 style={styles.artisanName}>Rina Melati</h4>
            <p style={styles.artisanRole}>Contemporary Batik Designer</p>
            <p style={styles.artisanExp}>15+ years of experience · Pekanbaru</p>
          </div>
          <div style={styles.artisanCard}>
            <div style={styles.artisanInitialCircle}>P</div>
            <h4 style={styles.artisanName}>Pak Tengku Ahmad</h4>
            <p style={styles.artisanRole}>Natural Dye Specialist</p>
            <p style={styles.artisanExp}>30+ years of experience · Kampar Regency</p>
          </div>
        </div>
      </section>

      {/* 5. KEUNGGULAN ACARA */}
      <section id="keunggulan" style={styles.sectionPaddingDark}>
        <div style={styles.centeredBlock}>
          <h2 style={{...styles.sectionTitleCentered, color: '#fff'}}>Kenapa Anda Wajib Hadir?</h2>
          <p style={{...styles.bodyTextCentered, color: '#cca26e'}}>Alasan mengapa perhelatan akbar kebudayaan Melayu Lancang Kuning ini tidak boleh dilewatkan.</p>
        </div>
        <div style={styles.keunggulanGrid}>
          <div style={styles.keunggulanCard}>
            <div style={styles.cardIconBox}>✨</div>
            <h3 style={{color: '#fff', fontSize: '18px', margin: '0 0 10px 0'}}>Kurasi Masterpiece</h3>
            <p style={{color: '#cca26e', fontSize: '13.5px', lineHeight: '1.6', margin: 0, fontFamily: 'sans-serif'}}>Menampilkan keunikan komparasi corak Batik Riau bernilai seni tinggi yang lolos kurasi kurator nasional.</p>
          </div>
          <div style={styles.keunggulanCard}>
            <div style={styles.cardIconBox}>🎓</div>
            <h3 style={{color: '#fff', fontSize: '18px', margin: '0 0 10px 0'}}>Masterclass Budaya</h3>
            <p style={{color: '#cca26e', fontSize: '13.5px', lineHeight: '1.6', margin: 0, fontFamily: 'sans-serif'}}>Edukasi eksklusif praktik mencanting corak Melayu asli yang dipandu langsung oleh maestro pembatik legendaris.</p>
          </div>
          <div style={styles.keunggulanCard}>
            <div style={styles.cardIconBox}>🌐</div>
            <h3 style={{color: '#fff', fontSize: '18px', margin: '0 0 10px 0'}}>Digital Hub Jaringan</h3>
            <p style={{color: '#cca26e', fontSize: '13.5px', lineHeight: '1.6', margin: 0, fontFamily: 'sans-serif'}}>Menghubungkan industri kreatif tekstil lokal tradisional dengan ekosistem bisnis global digital modern.</p>
          </div>
        </div>
      </section>

      {/* 6. AGENDA KEGIATAN */}
      <section id="agenda" style={styles.sectionPadding}>
        <div style={styles.centeredBlock}>
          <span style={styles.goldSubheading}>RANGKAIAN EVENT</span>
          <h2 style={styles.sectionTitleCentered}>Jadwal Simfoni Kegiatan Festival</h2>
          <p style={styles.bodyTextCentered}>Ikuti seluruh susunan agenda kebudayaan Melayu interaktif komplit selama 3 hari festival.</p>
        </div>
        <div style={styles.agendaGrid}>
          {DATAAGENDA.map((agenda) => (
            <div key={agenda.id} style={styles.agendaCard}>
              <div style={styles.agendaImgWrapper}>
                <img src={agenda.gambar} alt={agenda.acara} style={styles.agendaImg} />
                <span style={styles.agendaJam}>⏰ {agenda.jam}</span>
              </div>
              <div style={styles.agendaContent}>
                <h4 style={styles.agendaAcara}>{agenda.acara}</h4>
                <p style={styles.agendaDesc}>{agenda.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PASAR WASTRA DIGITAL */}
      <section id="produk" style={styles.sectionPaddingDark}>
        <div style={styles.centeredBlock}>
          <h2 style={{...styles.sectionTitleCentered, color: '#fff'}}>Pasar Wastra Digital UMKM</h2>
          <p style={{...styles.bodyTextCentered, color: '#cca26e'}}>Miliki koleksi sandang Melayu premium eksklusif hasil karya tangan langsung pengrajin Riau.</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <input
            type="text"
            placeholder="Cari kain batik corak bono, tenun siak asli..."
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            style={styles.searchBar}
          />
        </div>

        <div style={styles.mainLayout}>
          <div style={styles.produkSection}>
            <div style={styles.grid}>
              {produkDifilter.map((produk) => (
                <div key={produk.id} style={styles.card}>
                  <img src={produk.gambar} alt={produk.nama} style={styles.gambarProduk} />
                  <div style={styles.cardBody}>
                    <p style={styles.tokoText}>🏬 {produk.toko}</p>
                    <h4 style={styles.namaProduk}>{produk.nama}</h4>
                    <p style={styles.hargaProduk}>Rp {produk.harga.toLocaleString('id-ID')}</p>
                    <button onClick={() => tambahKeKeranjang(produk)} style={styles.btnBeli}>
                      + Keranjang Belanja
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.sidebar}>
            <h3 style={{marginTop: 0, borderBottom: '2px solid #b37d14', paddingBottom: '10px', color: '#4a3b32'}}>🛒 Tas Belanja</h3>
            {keranjang.length === 0 ? (
              <p style={{ color: '#777', fontSize: '14px', padding: '20px 0' }}>Belum ada produk pilihan.</p>
            ) : (
              <>
                <div style={styles.listKeranjang}>
                  {keranjang.map((item) => (
                    <div key={item.id} style={styles.itemKeranjang}>
                      <div style={{flex: 1}}>
                        <h5 style={{margin: '0 0 4px 0', fontSize: '13px', color: '#4a3b32'}}>{item.nama}</h5>
                        <span style={{fontSize: '11.5px', color: '#b37d14'}}>{item.jumlah} x Rp {item.harga.toLocaleString('id-ID')}</span>
                      </div>
                      <div style={styles.aksiKeranjang}>
                        <button onClick={() => hapusDariKeranjang(item.id)} style={styles.btnMin}>-</button>
                        <button onClick={() => tambahKeKeranjang(item)} style={styles.btnPlus}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={styles.totalSection}>
                  <span style={{fontWeight: 'bold', fontSize: '13px', color: '#4a3b32'}}>Subtotal:</span>
                  <h4 style={{ color: '#b37d14', margin: 0 }}>Rp {totalHargaBelanja.toLocaleString('id-ID')}</h4>
                </div>
                <button onClick={() => alert('Pesanan diproses!')} style={styles.btnCheckout}>
                  Konfirmasi Pembelian
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 8. PANEL PROFIL SPONSOR & MEDIA PARTNER */}
      <section id="partners" style={styles.sectionPaddingPartners}>
        <div style={styles.centeredBlock}>
          <span style={styles.goldSubheading}>ALIANSI STRATEGIS</span>
          <h2 style={styles.sectionTitleCentered}>Sponsorship & Media Partner</h2>
          <p style={styles.bodyTextCentered}>Didukung penuh oleh instansi pemerintah, lembaga perbankan, adat, serta jajaran pers terpercaya Indonesia.</p>
        </div>

        <div style={{marginBottom: '50px'}}>
          <h3 style={styles.partnerCategoryTitle}>Official Event Sponsors</h3>
          <div style={styles.partnerProfileGrid}>
            {DATASPONSOR.map((sponsor) => (
              <div key={sponsor.id} style={styles.partnerProfileCard}>
                <div style={styles.partnerProfileLogo}>{sponsor.logo}</div>
                <h4 style={styles.partnerProfileName}>{sponsor.nama}</h4>
                <p style={styles.partnerProfileDesc}>{sponsor.profil}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={styles.partnerCategoryTitle}>Official Media Partners</h3>
          <div style={styles.partnerProfileGrid}>
            {DATAMEDIAPARTNER.map((media) => (
              <div key={media.id} style={styles.partnerProfileCard}>
                <div style={styles.partnerProfileLogoMini}>{media.logo}</div>
                <h4 style={styles.partnerProfileName}>{media.nama}</h4>
                <p style={styles.partnerProfileDesc}>{media.profil}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REGISTRASI TIKET DENGAN FORM HALAMAN INPUT LENGKAP & LOKASI MAPS */}
      <section id="tiket" style={styles.sectionPadding}>
        <div style={styles.centeredBlock}>
          <span style={styles.goldSubheading}>REGISTRATION ACCESS</span>
          <h2 style={styles.sectionTitleCentered}>Halaman Registrasi Pengunjung</h2>
          <p style={styles.bodyTextCentered}>Isi formulir pendaftaran statis untuk mengamankan akses masuk resmi ke konvensi pameran batik.</p>
        </div>

        <div style={styles.tiketLokasiContainer}>
          <div style={styles.tiketBox}>
            <h3 style={{marginTop: '0', color: '#fff', marginBottom: '20px', fontSize: '18px'}}>Formulir Tiket Masuk</h3>
            
            {/* INPUT FORM TAMBAHAN UNTUK REGISTRASI */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Full Name</label>
              <input 
                type="text" 
                placeholder="Masukkan nama lengkap Anda..." 
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                style={styles.formInput} 
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Email Address</label>
              <input 
                type="email" 
                placeholder="nama@email.com" 
                value={emailPengunjung}
                onChange={(e) => setEmailPengunjung(e.target.value)}
                style={styles.formInput} 
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Phone Number</label>
              <input 
                type="tel" 
                placeholder="0812xxxxxx" 
                value={noTelepon}
                onChange={(e) => setNoTelepon(e.target.value)}
                style={styles.formInput} 
              />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', marginTop: '15px'}}>
              {DATATIKET.map((t) => (
                <div 
                  key={t.id} 
                  onClick={() => setTiketTerpilih(t)}
                  style={{
                    ...styles.tiketCategoryCard, 
                    borderColor: tiketTerpilih.id === t.id ? '#ffb822' : '#ebdcc5',
                    backgroundColor: tiketTerpilih.id === t.id ? '#4a1521' : '#fff'
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontWeight: 'bold', color: tiketTerpilih.id === t.id ? '#fff' : '#4a3b32', fontSize: '13.5px'}}>{t.nama}</span>
                    <span style={{color: '#b37d14', fontWeight: 'bold', fontSize: '13.5px'}}>Rp {t.harga.toLocaleString('id-ID')}</span>
                  </div>
                  <p style={{margin: '6px 0 0 0', fontSize: '12px', color: tiketTerpilih.id === t.id ? '#ddd' : '#666', fontFamily: 'sans-serif', textAlign: 'center'}}>{t.deskripsi}</p>
                </div>
              ))}
            </div>

            <div style={{ margin: '15px 0', textAlign: 'center' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '13.5px', color: '#fff' }}>Jumlah Tiket:</label>
              <input 
                type="number" 
                min="1" 
                value={jumlahTiket} 
                onChange={(e) => setJumlahTiket(parseInt(e.target.value) || 1)}
                style={styles.tiketInput} 
              />
            </div>
            <div style={styles.totalSection}>
              <span style={{color: '#fff', fontSize: '14px'}}>Total Biaya Tiket:</span>
              <h3 style={{ color: '#ffb822', margin: 0 }}>Rp {totalBiayaTiket.toLocaleString('id-ID')}</h3>
            </div>
            <button onClick={() => alert(`Registrasi Berhasil atas nama ${namaLengkap || 'Pengunjung'}. Anda telah memesan ${jumlahTiket} tiket!`)} style={styles.btnTiket}>
              Amankan Tiket Sekarang
            </button>
          </div>

          <div style={styles.lokasiBox}>
            <h3 style={{marginTop: '0', color: '#4a3b32', fontSize: '18px'}}>Denah Lokasi Gedung Pelaksanaan</h3>
            <p style={{color: '#4a3b32', margin: '0 0 4px 0'}}><strong>Grand Hall Convention Center</strong></p>
            <p style={{fontSize: '13px', color: '#8a6d3b', margin: '0 0 15px 0'}}>Pekanbaru, Provinsi Riau, Indonesia.</p>
            
            <div style={styles.mapIframeContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.688843232049!2d101.4442656!3d0.5205443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab601ef46a9b%3A0xc3b8aeb780efbe0f!2sPekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '4px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <h4 style={{margin: 0, color: '#ffb822', fontSize: '20px'}}>Wastra Riau Expo 2026</h4>
          <p style={{fontSize: '13px', color: '#bbb', margin: '8px 0 20px 0'}}>Melestarikan Mahakarya Nusantara, Menggerakkan Perekonomian UMKM Bumi Lancang Kuning.</p>
          
          <div style={styles.socialMediaRow}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialLinkItem}>🔵 Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialLinkItem}>📸 Instagram</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={styles.socialLinkItem}>🎵 TikTok Official</a>
          </div>

          <hr style={{borderColor: '#2b1b0c', margin: '20px 0'}} />
          <p style={{ fontSize: '13px', color: '#666', margin: 0, textAlign: 'center' }}>
            Hubungi Panitia Pelaksana: <span style={{color: '#ffb822'}}>info@wastrariau.id</span>
          </p>
          <p style={{ fontSize: '11.5px', color: '#4a3b32', marginTop: '10px', textAlign: 'center' }}>
            © 2026 Panitia Pelaksana Wastra Riau Expo. Seluruh Hak Cipta Dilindungi Perundang-Undangan.
          </p>
        </div>
      </footer>
    </div>
  );
}

// STYLES KOMPLIT DENGAN THEMA SEAMLESS BATIK PATTERN
const styles = {
  container: { 
    fontFamily: "'Playfair Display', 'Segoe UI', serif", 
    backgroundColor: '#f7f4eb', 
    backgroundImage: `
      radial-gradient(rgba(138, 109, 59, 0.05) 15%, transparent 16%),
      radial-gradient(rgba(138, 109, 59, 0.05) 15%, transparent 16%),
      linear-gradient(45deg, transparent 48%, rgba(138, 109, 59, 0.04) 50%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, rgba(138, 109, 59, 0.04) 50%, transparent 52%)
    `,
    backgroundSize: '16px 16px, 16px 16px, 60px 60px, 60px 60px',
    backgroundPosition: '0 0, 8px 8px, 0 0, 0 0',
    minHeight: '100vh', 
    margin: 0,
    color: '#4a3b32',
    scrollBehavior: 'smooth',
    overflowX: 'hidden'
  },
  navbar: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: 'rgba(22, 13, 5, 0.96)', 
    backdropFilter: 'blur(15px)',
    borderBottom: '2px solid #ffb822',
    padding: '20px 50px', 
    position: 'sticky', 
    top: 0, 
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
  },
  logo: { fontSize: '22px', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' },
  navMenu: { display: 'flex', gap: '25px', flexWrap: 'wrap' },
  navLink: { color: '#e5dfd5', textDecoration: 'none', fontWeight: '500', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px' },
  cartIcon: { fontSize: '13px', fontWeight: 'bold', color: '#160d05', backgroundColor: '#ffb822', padding: '6px 14px', borderRadius: '20px' },
  
  // HERO STYLES
  heroSectionFullScreen: { 
    height: '100vh', 
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  videoContainer: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' },
  videoIframe: { width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.4' },
  heroOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 7, 3, 0.88)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px', zIndex: 2 },
  
  heroBadge: {
    backgroundColor: 'rgba(255, 184, 34, 0.1)',
    border: '1px solid #ffb822',
    color: '#ffb822',
    padding: '8px 20px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    borderRadius: '30px',
    marginBottom: '25px',
    textTransform: 'uppercase'
  },
  heroTitleHuge: { fontSize: '76px', color: '#ffffff', margin: '0 0 15px 0', fontWeight: '900', letterSpacing: '0.5px', textShadow: '0 4px 24px rgba(0,0,0,0.85)', textAlign: 'center', lineHeight: '1.1' },
  heroSubtitleLarge: { fontSize: '28px', color: '#ebdcc5', margin: '0 0 15px 0', fontWeight: '400', textAlign: 'center', textShadow: '0 2px 10px rgba(0,0,0,0.6)' },
  heroThemeText: { fontSize: '16px', color: '#cca26e', margin: '0 0 45px 0', fontStyle: 'italic', fontFamily: 'sans-serif', textShadow: '0 2px 5px rgba(0,0,0,0.5)', letterSpacing: '0.5px' },
  infoBadgeContainer: { display: 'flex', gap: '20px', marginBottom: '50px', flexWrap: 'wrap', justifyContent: 'center' },
  infoBadgeItem: { backgroundColor: 'rgba(128, 0, 32, 0.45)', border: '1px solid rgba(255,184,34,0.4)', backdropFilter: 'blur(10px)', color: '#fff', padding: '12px 28px', borderRadius: '4px', fontSize: '14.5px', fontWeight: '600', fontFamily: 'sans-serif' },
  heroBtnGroup: { display: 'flex', gap: '20px', zIndex: 10, flexWrap: 'wrap', justifyContent: 'center' },
  heroBtnUnifiedPrimary: { backgroundColor: '#800020', border: '2px solid #800020', color: '#ffffff', padding: '16px 36px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px', letterSpacing: '0.5px', boxShadow: '0 4px 15px rgba(128,0,32,0.4)', textAlign: 'center', minWidth: '190px' },
  
  // Section Layouts
  sectionPadding: { padding: '90px 40px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' },
  sectionPaddingWhite: { padding: '90px 40px', backgroundColor: '#ffffff', width: '100%', boxSizing: 'border-box' },
  sectionPaddingDark: { padding: '90px 40px', backgroundColor: '#190f07', width: '100%', boxSizing: 'border-box' },
  sectionPaddingPartners: { padding: '90px 40px', backgroundColor: '#fffbf2', width: '100%', borderTop: '1px solid #ebdcc5', borderBottom: '1px solid #ebdcc5', boxSizing: 'border-box' },
  
  centeredBlock: { textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  sectionTitleCentered: { color: '#4a3b32', fontSize: '34px', margin: '0 0 12px 0', fontWeight: 'bold', textAlign: 'center' },
  bodyTextCentered: { fontFamily: 'sans-serif', color: '#666', fontSize: '15px', lineHeight: '1.7', marginTop: '10px', textAlign: 'center' },
  goldSubheading: { color: '#b37d14', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', textAlign: 'center' },

  // Artisans Block Styles
  artisanGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%' },
  artisanCard: { backgroundColor: '#fff', border: '1px solid #ebdcc5', borderRadius: '12px', padding: '35px 25px', textAlign: 'center', boxShadow: '0 6px 18px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  artisanInitialCircle: { width: '60px', height: '60px', backgroundColor: '#800020', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' },
  artisanName: { fontSize: '20px', margin: '0 0 6px 0', color: '#4a3b32' },
  artisanRole: { fontSize: '13.5px', color: '#b37d14', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 12px 0' },
  artisanExp: { fontSize: '13px', color: '#777', fontFamily: 'sans-serif', margin: 0, lineHeight: '1.5' },

  partnerCategoryTitle: { fontSize: '14px', textTransform: 'uppercase', letterSpacing: '3px', color: '#800020', textAlign: 'center', marginBottom: '30px', fontWeight: 'bold' },
  partnerProfileGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto', width: '100%' },
  partnerProfileCard: { backgroundColor: '#ffffff', border: '1px solid #ebdcc5', borderRadius: '8px', padding: '30px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 15px rgba(74,59,50,0.02)' },
  partnerProfileLogo: { fontSize: '40px', marginBottom: '15px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  partnerProfileLogoMini: { fontSize: '36px', marginBottom: '15px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  partnerProfileName: { fontSize: '17px', color: '#4a3b32', margin: '0 0 10px 0', fontWeight: 'bold' },
  partnerProfileDesc: { fontSize: '13px', color: '#666', lineHeight: '1.6', fontFamily: 'sans-serif', margin: 0, textAlign: 'center' },

  motifShowcaseGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto', width: '100%' },
  motifShowcaseCard: { backgroundColor: '#fff', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' },
  motifCardImgWrapper: { width: '100%', height: '220px', position: 'relative', overflow: 'hidden' },
  motifCardImg: { width: '100%', height: '100%', objectFit: 'cover' },
  motifCardBadge: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(128,0,32,0.1)', color: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  motifCardBody: { padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },

  discoverLabel: { color: '#b37d14', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', display: 'block', marginBottom: '10px', textAlign: 'center', textTransform: 'uppercase' },
  discoverMainTitle: { fontSize: '38px', color: '#4a3b32', margin: '0 0 15px 0', lineHeight: '1.2', textAlign: 'center', fontWeight: 'bold' },
  discoverParagraphText: { fontSize: '15px', color: '#555', lineHeight: '1.75', fontFamily: 'sans-serif', textAlign: 'center', maxWidth: '700px', margin: '0 auto' },
  cardDiamondIcon: { color: '#b37d14', fontSize: '14px', marginBottom: '8px', textAlign: 'center' },
  discoverCardTitleText: { margin: '0 0 8px 0', color: '#800020', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' },
  discoverCardDescText: { margin: 0, color: '#666', fontSize: '13.5px', lineHeight: '1.6', fontFamily: 'sans-serif', textAlign: 'center' },

  keunggulanGrid: { display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' },
  keunggulanCard: { flex: '1', minWidth: '270px', maxWidth: '350px', backgroundColor: '#26170c', padding: '40px 25px', borderRadius: '4px', borderTop: '3px solid #ffb822', textAlign: 'center' },
  cardIconBox: { fontSize: '30px', marginBottom: '15px', textAlign: 'center' },

  philosophyContentWrapper: { display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', marginTop: '10px' },
  philosophyImageContainer: { flex: 1, minWidth: '320px', display: 'flex', justifyContent: 'center' },
  philosophyImageCard: { backgroundColor: '#4a3b32', padding: '15px', borderRadius: '8px', maxWidth: '360px', width: '100%', border: '1px solid #ffb822' },
  philosophyImg: { width: '100%', height: 'auto', borderRadius: '4px', display: 'block', objectFit: 'cover' },
  philosophyImgFooter: { padding: '15px 5px 5px 5px', textAlign: 'center' },
  philosophyListContainer: { flex: 1.3, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '20px' },
  philosophyItemCard: { borderLeft: '4px solid #800020', paddingLeft: '20px', textAlign: 'left', fontFamily: 'sans-serif' },
  philosophyQuoteBox: { backgroundColor: '#4a121a', padding: '25px', borderRadius: '6px', color: '#fff', borderLeft: '6px solid #ffb822', marginTop: '10px', textAlign: 'center' },
  philosophyQuoteText: { fontStyle: 'italic', fontSize: '14px', margin: '0 0 10px 0', textAlign: 'center' },
  philosophyQuoteAuthor: { fontSize: '11px', color: '#ffb822', textTransform: 'uppercase', textAlign: 'center', display: 'block' },

  agendaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px', width: '100%' },
  agendaCard: { backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid #ebdcc5', textAlign: 'center', display: 'flex', flexDirection: 'column' },
  agendaImgWrapper: { position: 'relative', height: '170px', overflow: 'hidden' },
  agendaImg: { width: '100%', height: '100%', objectFit: 'cover' },
  agendaJam: { position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#800020', color: '#fff', padding: '5px 14px', fontSize: '11px', fontWeight: 'bold', borderRadius: '20px' },
  agendaContent: { padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' },
  agendaAcara: { fontSize: '17px', margin: 0, color: '#4a3b32', fontWeight: 'bold', textAlign: 'center' },
  agendaDesc: { fontSize: '13px', color: '#666', margin: 0, fontFamily: 'sans-serif', lineHeight: '1.5', textAlign: 'center' },
  
  searchBar: { width: '50%', padding: '14px 24px', borderRadius: '4px', border: '1px solid #ebdcc5', backgroundColor: '#fff', color: '#4a3b32', outline: 'none', textAlign: 'center', fontFamily: 'sans-serif' },
  mainLayout: { display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' },
  produkSection: { flex: 3, minWidth: '300px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '20px' },
  card: { backgroundColor: '#fff', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid #ebdcc5', textAlign: 'center' },
  gambarProduk: { width: '100%', height: '200px', objectFit: 'cover' },
  cardBody: { padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center', fontFamily: 'sans-serif' },
  tokoText: { fontSize: '11px', color: '#888', margin: '0 0 5px 0' },
  namaProduk: { fontSize: '14.5px', fontWeight: 'bold', margin: '0 0 10px 0', height: '40px', overflow: 'hidden', color: '#4a3b32', textAlign: 'center' },
  hargaProduk: { fontWeight: 'bold', color: '#800020', margin: '0 0 15px 0' },
  btnBeli: { backgroundColor: '#4a3b32', color: '#ffb822', border: 'none', padding: '10px 20px', borderRadius: '2px', cursor: 'pointer', fontWeight: 'bold', width: '100%' },
  sidebar: { flex: 1, minWidth: '280px', backgroundColor: '#fff', padding: '20px', borderRadius: '4px', height: 'fit-content', border: '1px solid #ebdcc5', textAlign: 'center', fontFamily: 'sans-serif' },
  listKeranjang: { maxHeight: '250px', overflowY: 'auto' },
  itemKeranjang: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'center', textAlign: 'left' },
  aksiKeranjang: { display: 'flex', gap: '5px' },
  btnMin: { backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '3px 8px' },
  btnPlus: { backgroundColor: '#2ecc71', color: '#fff', border: 'none', padding: '3px 8px' },
  totalSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0' },
  btnCheckout: { width: '100%', backgroundColor: '#800020', color: '#fff', border: 'none', padding: '12px', fontWeight: 'bold', cursor: 'pointer' },
  
  // Registration Inputs Form Layout Styles
  formGroup: { display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left', marginBottom: '14px', width: '100%' },
  formLabel: { color: '#ebdcc5', fontSize: '13px', fontWeight: '600', fontFamily: 'sans-serif' },
  formInput: { padding: '11px 14px', borderRadius: '4px', border: '1px solid rgba(255,184,34,0.3)', backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff', outline: 'none', fontFamily: 'sans-serif', fontSize: '14px' },

  tiketLokasiContainer: { display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: '20px' },
  tiketBox: { flex: 1, minWidth: '320px', maxWidth: '500px', backgroundColor: '#21140a', padding: '35px', borderRadius: '6px', border: '1px solid #ffb822', color: '#fff', textAlign: 'center' },
  tiketCategoryCard: { padding: '15px', borderRadius: '4px', border: '1px solid #ebdcc5', cursor: 'pointer', textAlign: 'center' },
  tiketInput: { width: '65px', padding: '10px', borderRadius: '4px', border: '1px solid #ffb822', backgroundColor: '#fff', color: '#000', fontSize: '16px', fontWeight: 'bold', textAlign: 'center' },
  btnTiket: { width: '100%', backgroundColor: '#ffb822', color: '#160d05', border: 'none', padding: '14px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', fontSize: '14.5px' },
  lokasiBox: { flex: 1, minWidth: '320px', maxWidth: '500px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  mapIframeContainer: { height: '330px', width: '100%', backgroundColor: '#fff', borderRadius: '6px', border: '2px solid #ebdcc5', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' },
  
  // Footer
  footer: { backgroundColor: '#0c0602', padding: '50px 40px', borderTop: '2px solid #b37d14', fontFamily: 'sans-serif' },
  footerContainer: { maxWidth: '800px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  socialMediaRow: { display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0', flexWrap: 'wrap' },
  socialLinkItem: { color: '#ffb822', textDecoration: 'none', fontSize: '14px', fontWeight: '500', padding: '6px 16px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,184,34,0.15)', textAlign: 'center' }
};

export default Dashboard;