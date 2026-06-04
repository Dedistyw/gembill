// help-messages.js - File untuk menangani pesan help admin dan pelanggan

const { getSetting, getSettingsWithCache } = require('./settingsManager');

// Footer info dari settings
const FOOTER_INFO = getSetting('footer_info', 'Juragan Pulsa Wifi Hotspot');

// Pesan help untuk admin
function getAdminHelpMessage() {
    let message = `👨‍💼 *MENU ADMIN LENGKAP*\n\n`;

    // GenieACS Commands
    message += `🔧 *GENIEACS*\n`;
    message += `• *cek [nomor]* — Cek status ONU pelanggan\n`;
    message += `• *cekstatus [nomor]* — Alias cek status pelanggan\n`;
    message += `• *cekall* — Cek semua perangkat\n`;
    message += `• *refresh* — Refresh data perangkat\n`;
    message += `• *gantissid [nomor] [ssid]* — Ubah SSID WiFi\n`;
    message += `• *gantipass [nomor] [password]* — Ubah password WiFi\n`;
    message += `• *reboot [nomor]* — Restart ONU pelanggan\n`;
    message += `• *tag [nomor] [tag]* — Tambah tag\n`;
    message += `• *untag [nomor] [tag]* — Hapus tag\n`;
    message += `• *tags [nomor]* — Lihat tags\n`;
    message += `• *addtag [device_id] [nomor]* — Tambah tag device\n`;
    message += `• *addpppoe_tag [user] [nomor]* — Tambah tag PPPoE\n\n`;

    // Mikrotik Commands
    message += `🌐 *MIKROTIK*\n`;
    message += `• *interfaces* — Daftar interface\n`;
    message += `• *interface [nama]* — Detail interface\n`;
    message += `• *enableif [nama]* — Aktifkan interface\n`;
    message += `• *disableif [nama]* — Nonaktifkan interface\n`;
    message += `• *ipaddress* — Alamat IP\n`;
    message += `• *routes* — Tabel routing\n`;
    message += `• *dhcp* — DHCP leases\n`;
    message += `• *ping [ip] [count]* — Test ping\n`;
    message += `• *logs [topics] [count]* — Log Mikrotik\n`;
    message += `• *firewall [chain]* — Status firewall\n`;
    message += `• *users* — Daftar user\n`;
    message += `• *profiles [type]* — Daftar profile\n`;
    message += `• *identity [nama]* — Info router\n`;
    message += `• *clock* — Waktu router\n`;
    message += `• *resource* — Info resource\n`;
    message += `• *reboot* — Restart router\n\n`;

    // Hotspot & PPPoE Commands
    message += `📶 *HOTSPOT & PPPoE*\n`;
    message += `• *vcr [username] [profile] [nomor]* — Buat voucher\n`;
    message += `• *hotspot* — User hotspot aktif\n`;
    message += `• *cekhs [kode/id]* — rincian id voucher\n`;
    message += `• *users* — Daftar semua user\n`;
    message += `• *addhotspot [user] [pass] [profile]* — Tambah user\n`;
    message += `• *offline* — User PPPoE offline\n`;
    message += `• *setprofile [user] [profile]* — Ubah profile\n`;
    message += `• *remove [username]* — Hapus user\n\n`;
    message += `• *pppoe* — User PPPoE aktif\n`;
    message += `• *pppoe [filter]* — Lihat daftar user PPPoE\n`;
    message += `• *addpppoe [user] [pass] [profile] [ip]* — Tambah PPPoE\n`;
    message += `• *editpppoe [user] [field] [value]* — Edit user PPPoE\n`;
    message += `• *delpppoe [user] [alasan]* — Hapus user PPPoE\n`;
    message += `• *checkpppoe [user]* — Cek status user PPPoE\n`;
    message += `• *restartpppoe [user]* — Restart koneksi PPPoE\n`;
    message += `• *help pppoe* — Bantuan PPPoE\n\n`;
    message += `• *isolir [user] [alasan]* — on isolir\n`;
    message += `• *buka [user] [alasan]* — off isolir\n\n`;

    // Search Commands
    message += `🔍 *PENCARIAN*\n`;
    message += `• *cari [nama/pppoe_username]* — Cari data pelanggan\n`;
    message += `• *cari andi* — Cari pelanggan dengan nama "andi"\n`;
    message += `• *cari leha* — Cari pelanggan dengan PPPoE username "leha"\n\n`;

    // Debug Commands
    message += `🔧 *DEBUG*\n`;
    message += `• *debuggenieacs [nomor]* — Debug data GenieACS pelanggan\n`;
    message += `• *debug [nomor]* — Debug data GenieACS (singkat)\n`;
    message += `• *debuggenieacs 087786722675* — Debug data GenieACS\n`;
    message += `• *listdevices* — List semua perangkat di GenieACS\n\n`;

    // OTP & Sistem Commands
    message += `🛡️ *OTP & SISTEM*\n`;
    message += `• *otp [nomor]* — Kirim OTP\n`;
    message += `• *status* — Status sistem\n`;
    message += `• *logs* — Log aplikasi\n`;
    message += `• *restart* — Restart aplikasi\n`;
    message += `• *confirm restart* — Konfirmasi restart\n`;
    message += `• *debug resource* — Debug resource\n`;
    message += `• *checkgroup* — Cek status group & nomor\n`;
    message += `• *ya/iya/yes* — Konfirmasi ya\n`;
    message += `• *tidak/no/batal* — Konfirmasi tidak\n\n`;

    message += `🔧 *TROUBLE REPORT MANAGEMENT:*\n`;
    message += `• *trouble* — Lihat daftar laporan gangguan aktif\n`;
    message += `• *status [id]* — Lihat detail laporan gangguan\n`;
    message += `• *update [id] [status] [catatan]* — Update status laporan\n`;
    message += `• *selesai [id] [catatan]* — Selesaikan laporan\n`;
    message += `• *catatan [id] [catatan]* — Tambah catatan\n`;
    message += `• *help trouble* — Bantuan trouble report\n\n`;

    message += `👥 *MANAJEMEN AGENT:*\n`;
    message += `• *daftaragent* — Daftar semua agent\n`;
    message += `• *tambahagent [username] [nama] [phone] [password]* — Tambah agent baru\n`;
    message += `• *saldoagent [nama_agen/agent_id]* — Cek saldo agent\n`;
    message += `• *tambahsaldoagent [nama_agen/agent_id] [jumlah] [catatan]* — Tambah saldo agent\n`;
    message += `• *statistikagent* — Statistik agent\n`;
    message += `• *requestagent* — Daftar request saldo pending\n`;
    message += `• *setujuirequest [id] [catatan]* — Setujui request saldo\n`;
    message += `• *tolakrequest [id] [alasan]* — Tolak request saldo\n`;
    message += `• *bantuanagent* — Bantuan perintah agent\n\n`;

    message += `ℹ️ *SYSTEM INFO:*\n`;
    message += `• *version* — Info versi aplikasi\n`;
    message += `• *info* — Info sistem lengkap\n\n`;

    message += `💡 *TIPS:*\n`;
    message += `• Semua perintah case-insensitive\n`;
    message += `• Bisa menggunakan prefix ! atau /\n`;
    message += `• Contoh: !status atau /status\n\n`;

    message += `${FOOTER_INFO}`;

    return message;
}

// Pesan help untuk teknisi (fokus pada tugas sehari-hari)
function getTechnicianHelpMessage() {
    let message = `🔧 *MENU KHUSUS TEKNISI*\n\n`;

    // Command yang paling sering digunakan teknisi
    message += `📱 *CEK STATUS PELANGGAN*\n`;
    message += `• *cek [nomor]* — Cek status ONU pelanggan\n`;
    message += `• *cekstatus [nomor]* — Alias cek status pelanggan\n`;
    message += `• *status* — Status sistem WhatsApp\n\n`;

    message += `🔧 *TROUBLE REPORT (PRIORITAS TINGGI)*\n`;
    message += `• *trouble* — Lihat daftar laporan gangguan aktif\n`;
    message += `• *status [id]* — Lihat detail laporan gangguan\n`;
    message += `• *update [id] [status] [catatan]* — Update status laporan\n`;
    message += `• *selesai [id] [catatan]* — Selesaikan laporan\n`;
    message += `• *catatan [id] [catatan]* — Tambah catatan\n`;
    message += `• *help trouble* — Bantuan trouble report\n\n`;

    message += `🌐 *PPPoE MANAGEMENT (PEMASANGAN BARU)*\n`;
    message += `• *addpppoe [user] [pass] [profile] [ip] [info]* — Tambah user PPPoE\n`;
    message += `• *editpppoe [user] [field] [value]* — Edit user PPPoE\n`;
    message += `• *checkpppoe [user]* — Cek status user PPPoE\n`;
    message += `• *restartpppoe [user]* — Restart koneksi PPPoE\n`;
    message += `• *help pppoe* — Bantuan PPPoE\n\n`;

    message += `🔧 *PERANGKAT PELANGGAN*\n`;
    message += `• *gantissid [nomor] [ssid]* — Ubah SSID WiFi\n`;
    message += `• *gantipass [nomor] [password]* — Ubah password WiFi\n`;
    message += `• *reboot [nomor]* — Restart ONU pelanggan\n`;
    message += `• *refresh [device_id]* — Refresh data perangkat\n\n`;

    message += `🔍 *PENCARIAN PELANGGAN*\n`;
    message += `• *cari [nama/pppoe_username]* — Cari data pelanggan\n`;
    message += `• *cari andi* — Cari pelanggan dengan nama "andi"\n`;
    message += `• *cari leha* — Cari pelanggan dengan PPPoE username "leha"\n\n`;

    message += `🔧 *DEBUG*\n`;
    message += `• *debug [nomor]* — Debug data GenieACS pelanggan\n`;
    message += `• *debuggenieacs [nomor]* — Debug lengkap data GenieACS\n`;
    message += `• *listdevices* — List semua perangkat di GenieACS\n\n`;

    message += `🌐 *MIKROTIK (JIKA DIPERLUKAN)*\n`;
    message += `• *ping [ip] [count]* — Test ping\n`;
    message += `• *interfaces* — Daftar interface\n`;
    message += `• *resource* — Info resource router\n\n`;

    message += `💡 *TIPS KHUSUS TEKNISI:*\n`;
    message += `• Selalu update trouble report setelah selesai\n`;
    message += `• Test koneksi sebelum selesai\n`;
    message += `• Catat semua perubahan untuk audit\n`;
    message += `• Gunakan *help trouble* atau *help pppoe* untuk bantuan detail\n\n`;

    message += `📞 *HELP KHUSUS:*\n`;
    message += `• *help trouble* — Bantuan trouble report\n`;
    message += `• *help pppoe* — Bantuan PPPoE\n`;
    message += `• *admin* — Menu admin lengkap\n\n`;

    message += `ℹ️ *SYSTEM INFO:*\n`;
    message += `• *version* — Info versi aplikasi\n`;
    message += `• *info* — Info sistem lengkap\n\n`;

    message += `${FOOTER_INFO}`;

    return message;
}

/**
 * Pesan help untuk pelanggan
 */
function getCustomerHelpMessage() {
    let message = `📱 *MENU PELANGGAN*\n\n`;

    message += `🔐 *REGISTRASI*\n`;
    message += `• *reg [nomor/nama]* — Registrasi WhatsApp ini ke akun pelanggan\n\n`;

    // Perintah untuk pelanggan
    message += `🔧 *PERANGKAT ANDA*\n`;
    message += `• *status* — Cek status perangkat Anda\n`;
    message += `• *gantiwifi [nama]* — Ganti nama WiFi\n`;
    message += `• *gantipass [password]* — Ganti password WiFi\n`;
    message += `• *devices* — Lihat perangkat terhubung WiFi\n`;
    message += `• *speedtest* — Info bandwidth perangkat\n`;
    message += `• *diagnostic* — Diagnostik jaringan\n`;
    message += `• *history* — Riwayat koneksi\n`;
    message += `• *refresh* — Refresh data perangkat\n\n`;

    message += `🔍 *PENCARIAN*\n`;
    message += `• *cari [nama]* — Cari data pelanggan lain\n`;
    message += `• *cari andi* — Cari pelanggan dengan nama "andi"\n\n`;

    message += `📞 *BANTUAN*\n`;
    message += `• *menu* — Tampilkan menu ini\n`;
    message += `• *help* — Tampilkan bantuan\n`;
    message += `• *info* — Informasi layanan\n\n`;

    message += `💡 *TIPS:*\n`;
    message += `• Pastikan perangkat Anda terdaftar di sistem\n`;
    message += `• Gunakan format: gantiwifi NamaWiFiBaru\n`;
    message += `• Password minimal 8 karakter\n\n`;

    message += `${FOOTER_INFO}`;

    return message;
}

/**
 * Pesan help umum (untuk non-admin)
 */
function getGeneralHelpMessage() {
    let message = `🤖 *MENU BOT*\n\n`;

    message += `📱 *UNTUK PELANGGAN*\n`;
    message += `• *reg [nomor]* — Registrasi WhatsApp\n`;
    message += `• *status* — Cek status perangkat\n`;
    message += `• *gantiwifi [nama]* — Ganti nama WiFi\n`;
    message += `• *gantipass [password]* — Ganti password WiFi\n`;
    message += `• *menu* — Tampilkan menu ini\n\n`;

    message += `👨‍💼 *UNTUK ADMIN*\n`;
    message += `• *admin* — Menu admin lengkap\n`;
    message += `• *help* — Bantuan umum\n\n`;

    message += `🔧 *UNTUK TEKNISI*\n`;
    message += `• *teknisi* — Menu khusus teknisi\n`;
    message += `• *help* — Bantuan umum\n\n`;

    message += `💡 *INFO:*\n`;
    message += `• Ketik *admin* untuk menu khusus admin\n`;
    message += `• Ketik *teknisi* untuk menu khusus teknisi\n`;
    message += `• Semua perintah case-insensitive\n\n`;

    message += `ℹ️ *SYSTEM INFO:*\n`;
    message += `• *version* — Info versi aplikasi\n`;
    message += `• *info* — Info sistem lengkap\n\n`;

    message += `${FOOTER_INFO}`;

    return message;
}

// Billing help messages
function getBillingHelpMessage() {
    return `📊 *BANTUAN MENU BILLING*\n\n` +
        `*Customer Management:*\n` +
        `• addcustomer [nama] [phone] [paket] - Tambah pelanggan baru\n` +
        `• editcustomer [phone] [field] [value] - Edit data pelanggan\n` +
        `• delcustomer [phone] - Hapus pelanggan\n` +
        `• listcustomers - Daftar semua pelanggan\n` +
        `• findcustomer [phone/username] - Cari pelanggan\n\n` +

        `*Payment Management:*\n` +
        `• payinvoice [invoice_id] [amount] [method] - Bayar invoice\n` +
        `• tagihan [nomor_pelanggan] - Cek status pembayaran\n` +
        `• paidcustomers - Daftar pelanggan yang sudah bayar\n` +
        `• overduecustomers - Daftar pelanggan terlambat\n` +
        `• billingstats - Statistik billing\n\n` +

        `*Package Management:*\n` +
        `• addpackage [nama] [speed] [harga] - Tambah paket\n` +
        `• listpackages - Daftar semua paket\n\n` +

        `*Invoice Management:*\n` +
        `• createinvoice [phone] [amount] [due_date] - Buat invoice\n` +
        `• listinvoices [phone] - Daftar invoice pelanggan\n\n` +

        `*Contoh Penggunaan:*\n` +
        `addcustomer "John Doe" 081234567890 "Paket Premium"\n` +
        `payinvoice 123 500000 cash\n` +
        `tagihan 081234567890\n` +
        `paidcustomers`;
}

/**
 * Dapatkan info versi aplikasi
 */
function getVersionInfo() {
    const settings = getSettingsWithCache();

    return {
        version: settings.app_version || '1.0.0',
        versionName: settings.version_name || 'Unknown Version',
        versionDate: settings.version_date || 'Unknown Date',
        versionNotes: settings.version_notes || 'No release notes',
        buildNumber: settings.build_number || 'Unknown Build',
        companyHeader: settings.company_header || 'ALIJAYA DIGITAL NETWORK',
        footerInfo: settings.footer_info || 'Info Hubungi : 081947215703'
    };
}

/**
 * Format pesan versi untuk WhatsApp
 */
function getVersionMessage() {
    const versionInfo = getVersionInfo();

    let message = `ℹ️ *INFO VERSI APLIKASI*\n\n`;
    message += `🏢 *${versionInfo.companyHeader}*\n\n`;
    message += `📱 *Versi:* ${versionInfo.version}\n`;
    message += `📝 *Nama:* ${versionInfo.versionName}\n`;
    message += `📅 *Tanggal:* ${versionInfo.versionDate}\n`;
    message += `🔧 *Build:* ${versionInfo.buildNumber}\n`;
    message += `📋 *Catatan:* ${versionInfo.versionNotes}\n\n`;
    message += `${versionInfo.footerInfo}`;

    return message;
}

/**
 * Format pesan info sistem untuk WhatsApp
 */
function getSystemInfoMessage() {
    const versionInfo = getVersionInfo();

    let message = `🖥️ *INFO SISTEM LENGKAP*\n\n`;
    message += `🏢 *${versionInfo.companyHeader}*\n\n`;
    message += `📱 *Versi Aplikasi:* ${versionInfo.version}\n`;
    message += `📝 *Nama Versi:* ${versionInfo.versionName}\n`;
    message += `📅 *Tanggal Release:* ${versionInfo.versionDate}\n`;
    message += `🔧 *Build Number:* ${versionInfo.buildNumber}\n\n`;

    message += `⚙️ *FITUR UTAMA:*\n`;
    message += `• WhatsApp Bot dengan Role System\n`;
    message += `• Admin, Teknisi, dan Customer Portal\n`;
    message += `• Trouble Report Management\n`;
    message += `• PPPoE User Management\n`;
    message += `• GenieACS Integration\n`;
    message += `• MikroTik Integration\n`;
    message += `• Billing & Invoice System\n`;
    message += `• Payment Gateway Integration\n\n`;

    message += `📋 *Catatan Release:*\n`;
    message += `${versionInfo.versionNotes}\n\n`;

    message += `${versionInfo.footerInfo}`;

    return message;
}

module.exports = {
    getAdminHelpMessage,
    getTechnicianHelpMessage,
    getCustomerHelpMessage,
    getGeneralHelpMessage,
    getBillingHelpMessage,
    getVersionInfo,
    getVersionMessage,
    getSystemInfoMessage
}; 