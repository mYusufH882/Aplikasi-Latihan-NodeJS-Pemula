exports.Waktu = function() {
    const dt = new Date();

    let tahun = dt.getFullYear();
    let tgl = dt.getDate();

    return "Tanggal : " + tgl + " Tahun : " + tahun;
};