/* ============================================
   RASA NUSANTARA - FOOD DATA
   Data Makanan Khas Cirebon
   ============================================ */

const foodsData = [
    // Makanan Berat
    {
        id: 1,
        nama: 'Nasi Jamblang',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Mertapada, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1596040033229-a0b40e4a8d5c?w=500',
        deskripsi: 'Nasi yang dibungkus daun jati dengan berbagai lauk khas Cirebon. Cita rasa gurih dan pedas yang menggugah selera.',
        sejarah: 'Berasal dari desa Jamblang, Cirebon sejak tahun 1940-an',
        harga: 'Rp 15.000 - Rp 30.000',
        asal_usul: 'Nama Jamblang berasal dari desa tempat makanan ini pertama kali dibuat. Awalnya dijual oleh para pedagang keliling yang membungkus nasi dengan daun jati untuk menjaga kehangatan dan aroma. Tradisi ini terus berlanjut hingga kini dan menjadi ikon kuliner Cirebon.',
        bahan_utama: ['Nasi putih', 'Daun jati', 'Sambal terasi', 'Berbagai lauk pauk']
    },
    {
        id: 2,
        nama: 'Empal Gentong',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Battembat, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500',
        deskripsi: 'Gulai daging sapi dengan kuah santan gurih yang dimasak dalam gentong tanah liat. Kelezatan tradisional yang tak terlupakan.',
        sejarah: 'Sudah ada sejak era Kesultanan Cirebon, abad ke-15',
        harga: 'Rp 25.000 - Rp 40.000',
        asal_usul: 'Empal Gentong dipercaya muncul pada masa Kesultanan Cirebon sebagai hidangan istimewa. Proses memasak menggunakan gentong (anglo tanah liat) memberikan cita rasa khas yang tidak bisa ditiru dengan peralatan modern. Nama "empal" merujuk pada daging sapi yang direbus hingga empuk.',
        bahan_utama: ['Daging sapi', 'Santan kelapa', 'Jeroan sapi', 'Bumbu rempah']
    },
    {
        id: 3,
        nama: 'Sega Lengko',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Lengkong, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500',
        deskripsi: 'Nasi dengan tahu, tempe, timun, tauge, dan disiram kuah kacang pedas yang khas.',
        sejarah: 'Berasal dari Kelurahan Lengkong sejak tahun 1950-an',
        harga: 'Rp 10.000 - Rp 20.000',
        asal_usul: 'Sega Lengko lahir di kelurahan Lengkong sebagai makanan rakyat yang terjangkau. Kombinasi bahan sederhana seperti tahu, tempe, dan sayuran segar dengan bumbu kacang menciptakan harmoni rasa yang unik. Hingga kini tetap menjadi favorit warga Cirebon.',
        bahan_utama: ['Nasi putih', 'Tahu', 'Tempe', 'Timun', 'Tauge', 'Bumbu kacang']
    },
    {
        id: 4,
        nama: 'Tahu Gejrot',
        kategori: 'cemilan',
        daerah: 'Cirebon',
        lokasi: 'Jatiseeng, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
        deskripsi: 'Tahu goreng dengan kuah asam, manis, dan pedas. Sensasi rasa yang menggigit di setiap suapan.',
        sejarah: 'Muncul tahun 1960-an di daerah Jatiseeng',
        harga: 'Rp 5.000 - Rp 10.000',
        asal_usul: 'Tahu Gejrot lahir dari kreativitas pedagang tahu di Jatiseeng. Kata "gejrot" berasal dari cara penyajiannya yang digejrot (diuleg) dalam cobek bersama bumbu. Kuah khasnya yang asam manis pedas membuat camilan ini sangat digemari hingga menyebar ke berbagai daerah.',
        bahan_utama: ['Tahu putih goreng', 'Gula merah', 'Cabai rawit', 'Bawang putih', 'Cuka']
    },
    {
        id: 5,
        nama: 'Sate Kalong',
        kategori: 'cemilan',
        daerah: 'Cirebon',
        lokasi: 'Plered, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500',
        deskripsi: 'Sate kelelawar berbumbu khas yang gurih dan eksotis. Pengalaman kuliner yang unik dan berani.',
        sejarah: 'Tradisi kuliner sejak abad ke-18',
        harga: 'Rp 30.000 - Rp 50.000',
        asal_usul: 'Sate Kalong adalah kuliner eksotis Cirebon yang sudah ada sejak zaman dahulu. Kelelawar dianggap memiliki khasiat kesehatan menurut kepercayaan tradisional. Meskipun kontroversial, hidangan ini tetap menjadi bagian dari warisan kuliner dan identitas gastronomi Cirebon.',
        bahan_utama: ['Daging kelelawar', 'Bumbu kacang', 'Kecap manis', 'Rempah tradisional']
    },
    {
        id: 6,
        nama: 'Docang',
        kategori: 'cemilan',
        daerah: 'Cirebon',
        lokasi: 'Pegambiran, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500',
        deskripsi: 'Lontong dengan sayur oncom pedas dan parutan kelapa. Cita rasa gurih pedas yang nikmat.',
        sejarah: 'Kuliner rakyat sejak masa kolonial Belanda',
        harga: 'Rp 8.000 - Rp 15.000',
        asal_usul: 'Docang adalah singkatan dari "oncom dicampur" yang mencerminkan bahan utamanya. Hidangan ini populer di kalangan rakyat jelata pada masa kolonial karena bahan-bahannya yang murah dan mudah didapat. Oncom yang difermentasi memberikan rasa umami yang khas.',
        bahan_utama: ['Lontong', 'Oncom', 'Kelapa parut', 'Cabai', 'Kencur']
    },
    {
        id: 7,
        nama: 'Mie Koclok',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Babakan, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500',
        deskripsi: 'Mie kuah kental dengan topping udang dan taburan kerupuk. Kuahnya yang gurih bikin ketagihan.',
        sejarah: 'Warisan kuliner Tionghoa-Cirebon sejak awal abad ke-20',
        harga: 'Rp 15.000 - Rp 25.000',
        asal_usul: 'Mie Koclok merupakan hasil akulturasi budaya Tionghoa dan Cirebon. Kata "koclok" menggambarkan tekstur kuah yang kental dan lengket. Hidangan ini berkembang di kawasan pelabuhan Cirebon tempat bertemunya berbagai pedagang dari berbagai negara.',
        bahan_utama: ['Mie kuning', 'Udang', 'Kuah kental', 'Taoge', 'Kol', 'Kerupuk']
    },
    {
        id: 8,
        nama: 'Nasi Lengko',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Lengkong, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500',
        deskripsi: 'Kombinasi nasi, tahu, tempe, dan sayuran segar dengan bumbu kacang kental yang lezat.',
        sejarah: 'Makanan khas Lengkong sejak tahun 1950',
        harga: 'Rp 12.000 - Rp 20.000',
        asal_usul: 'Mirip dengan Sega Lengko namun dengan penyajian dan komposisi bumbu yang sedikit berbeda. Nasi Lengko adalah versi yang lebih modern dengan bumbu kacang yang lebih kental dan gurih. Tetap mempertahankan kesederhanaan bahan namun kaya rasa.',
        bahan_utama: ['Nasi', 'Tahu goreng', 'Tempe goreng', 'Timun', 'Kacang tanah']
    },
    {
        id: 9,
        nama: 'Bubur Sop Ayam',
        kategori: 'makanan-berat',
        daerah: 'Cirebon',
        lokasi: 'Kesenden, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500',
        deskripsi: 'Bubur ayam dengan kuah sop kental yang gurih. Perpaduan unik bubur dan sop dalam satu mangkuk.',
        sejarah: 'Kuliner khas sejak era 1970-an',
        harga: 'Rp 15.000 - Rp 25.000',
        asal_usul: 'Bubur Sop Ayam adalah inovasi kuliner Cirebon yang menggabungkan dua makanan favorit: bubur ayam dan sop ayam. Kombinasi ini menciptakan tekstur dan rasa yang unik, hangat, dan mengenyangkan. Cocok dinikmati saat cuaca dingin atau sebagai comfort food.',
        bahan_utama: ['Beras', 'Ayam kampung', 'Kuah sop', 'Telur', 'Kerupuk']
    },
    {
        id: 10,
        nama: 'Kue Apem',
        kategori: 'kue',
        daerah: 'Cirebon',
        lokasi: 'Kesambi, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
        deskripsi: 'Kue tradisional berbahan dasar beras yang lembut dan manis. Sering disajikan saat acara adat.',
        sejarah: 'Kue tradisional warisan Kesultanan sejak abad ke-16',
        harga: 'Rp 3.000 - Rp 5.000/buah',
        asal_usul: 'Apem adalah kue tradisional yang memiliki nilai filosofis dalam budaya Jawa dan Cirebon. Sering digunakan dalam upacara adat dan ritual keagamaan. Bentuknya yang bundar melambangkan kesempurnaan dan keharmonisan.',
        bahan_utama: ['Tepung beras', 'Gula merah', 'Kelapa parut', 'Ragi']
    },
    {
        id: 11,
        nama: 'Es Kacang',
        kategori: 'minuman',
        daerah: 'Cirebon',
        lokasi: 'Kejaksan, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
        deskripsi: 'Es serut dengan campuran kacang merah, cincau, dan sirup manis. Kesegaran yang sempurna.',
        sejarah: 'Minuman tradisional sejak era 1950-an',
        harga: 'Rp 8.000 - Rp 15.000',
        asal_usul: 'Es Kacang Cirebon memiliki ciri khas dengan penggunaan kacang merah yang dimasak dengan gula aren dan santan. Minuman ini populer sebagai pelepas dahaga di iklim tropis Cirebon. Setiap pedagang memiliki resep rahasia sendiri untuk kuah manisnya.',
        bahan_utama: ['Es serut', 'Kacang merah', 'Cincau hitam', 'Sirup', 'Santan']
    },
    {
        id: 12,
        nama: 'Kue Gapit',
        kategori: 'kue',
        daerah: 'Cirebon',
        lokasi: 'Kasepuhan, Cirebon',
        gambar: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=500',
        deskripsi: 'Kue tradisional tipis dan renyah yang dibuat dengan cetakan khusus. Camilan legendaris keraton.',
        sejarah: 'Warisan kuliner Keraton Kasepuhan sejak abad ke-15',
        harga: 'Rp 25.000 - Rp 50.000/pak',
        asal_usul: 'Kue Gapit adalah kue khas keraton yang dibuat dengan teknik tradisional menggunakan cetakan besi khusus. Proses pembuatannya memerlukan keahlian tinggi dan kesabaran. Kue ini sering disajikan saat acara-acara resmi keraton dan menjadi oleh-oleh khas Cirebon.',
        bahan_utama: ['Tepung beras', 'Kelapa', 'Gula', 'Telur']
    }
];

// Export data untuk digunakan di module lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { foodsData };
}