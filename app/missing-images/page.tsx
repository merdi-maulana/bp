"use client";

import Link from "next/link";

interface MissingAsset {
  id: number;
  filePath: string;
  lineNumbers: number[];
  referencedPath: string;
  category: "Logo" | "Panorama" | "Texture" | "3D Tour";
  severity: "low" | "medium" | "high";
  notes: string;
}

export default function MissingImagesPage() {
  const missingAssets: MissingAsset[] = [
    {
      id: 1,
      filePath: "components/layout/Navbar.tsx",
      lineNumbers: [26],
      referencedPath: "/images/logo.png",
      category: "Logo",
      severity: "low",
      notes: "Format WebP belum tersedia di folder public/images/. Saat ini masih menggunakan format PNG bawaan yang sudah ada.",
    },
    {
      id: 2,
      filePath: "components/VirtualCanvas.tsx",
      lineNumbers: [21],
      referencedPath: "/halaman-depan.jpg",
      category: "Texture",
      severity: "high",
      notes: "Tekstur 3D panorama luar ruangan utama belum tersedia di folder public/. Harap unggah file tekstur 360° ini.",
    },
    {
      id: 3,
      filePath: "components/VirtualCanvas.tsx",
      lineNumbers: [22],
      referencedPath: "/ruang-tamu.jpg",
      category: "Texture",
      severity: "high",
      notes: "Tekstur 3D panorama dalam ruangan utama belum tersedia di folder public/. Harap unggah file tekstur 360° ini.",
    },
    {
      id: 4,
      filePath: "components/GallerySection.tsx",
      lineNumbers: [38],
      referencedPath: "/panorama/ruang_tamu.png",
      category: "Panorama",
      severity: "medium",
      notes: "Gambar interior ruang tamu untuk galeri statis belum tersedia di public/panorama/. Gunakan rendering 360° ruang tamu sebagai gantinya atau unggah gambar.",
    },
    {
      id: 5,
      filePath: "components/GallerySection.tsx",
      lineNumbers: [43],
      referencedPath: "/panorama/kamar_utama.png",
      category: "Panorama",
      severity: "medium",
      notes: "Gambar interior kamar utama untuk galeri statis belum tersedia di public/panorama/.",
    },
    {
      id: 6,
      filePath: "components/GallerySection.tsx",
      lineNumbers: [48],
      referencedPath: "/panorama/dapur.png",
      category: "Panorama",
      severity: "medium",
      notes: "Gambar area dapur untuk galeri statis belum tersedia di public/panorama/.",
    },
    {
      id: 7,
      filePath: "components/GallerySection.tsx",
      lineNumbers: [53],
      referencedPath: "/panorama/kamar_anak.png",
      category: "Panorama",
      severity: "medium",
      notes: "Gambar interior kamar anak untuk galeri statis belum tersedia di public/panorama/.",
    },
    {
      id: 8,
      filePath: "app/3d-360/page.tsx",
      lineNumbers: [393, 403],
      referencedPath: "panorama/subsidi/scene_74.jpg",
      category: "3D Tour",
      severity: "high",
      notes: "Panorama 360° halaman Masjid Al-Muhajirin belum tersedia di public/panorama/subsidi/.",
    },
    {
      id: 9,
      filePath: "app/3d-360/page.tsx",
      lineNumbers: [414, 424],
      referencedPath: "panorama/subsidi/scene_75.jpg",
      category: "3D Tour",
      severity: "high",
      notes: "Panorama 360° ruang dalam masjid belum tersedia di public/panorama/subsidi/.",
    },
    {
      id: 10,
      filePath: "app/3d-360/page.tsx",
      lineNumbers: [459, 469],
      referencedPath: "panorama/subsidi/scene_44.jpg",
      category: "3D Tour",
      severity: "high",
      notes: "Panorama 360° area taman bermain & gazebo belum tersedia di public/panorama/subsidi/.",
    },
    {
      id: 11,
      filePath: "app/3d-360/page.tsx",
      lineNumbers: [480, 495],
      referencedPath: "panorama/subsidi/scene_70.jpg",
      category: "3D Tour",
      severity: "high",
      notes: "Panorama 360° row jalan utama perumahan belum tersedia di public/panorama/subsidi/.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-all font-semibold text-sm group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Kembali ke Beranda
          </Link>
          <span className="text-xs text-zinc-500 font-mono">STATUS: AUDIT AKTIF</span>
        </div>

        {/* Header Section */}
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-4 animate-pulse">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
            Laporan Audit Aset Gambar
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-none mb-4">
            Aset Gambar Belum Tersedia
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            Daftar lengkap berkas gambar, tekstur 3D, and panorama 360° yang dirujuk dalam kode sumber tetapi belum diunggah ke folder <code className="text-emerald-400 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-sm">/public</code>.
          </p>
        </header>

        {/* Dashboard Cards Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <span className="text-zinc-400 text-sm font-medium">Total Aset Belum Siap</span>
            <span className="text-5xl font-extrabold text-white mt-2">{missingAssets.length}</span>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <span className="text-zinc-400 text-sm font-medium">Prioritas Utama (Kritis)</span>
            <span className="text-5xl font-extrabold text-red-500 mt-2">
              {missingAssets.filter((a) => a.severity === "high").length}
            </span>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
            <span className="text-zinc-400 text-sm font-medium">Aset Sudah Sesuai (WebP)</span>
            <span className="text-5xl font-extrabold text-emerald-500 mt-2">15</span>
          </div>
        </div>

        {/* Main Table/Grid */}
        <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4.5 px-6">Kategori</th>
                  <th className="py-4.5 px-6">Berkas Sumber (File)</th>
                  <th className="py-4.5 px-6">Baris</th>
                  <th className="py-4.5 px-6">Jalur Rujukan (Path)</th>
                  <th className="py-4.5 px-6">Prioritas</th>
                  <th className="py-4.5 px-6">Catatan Keterangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-sm">
                {missingAssets.map((asset) => (
                  <tr key={asset.id} className="hover:bg-zinc-900/40 transition-colors">
                    <td className="py-4 px-6 font-semibold">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-lg text-xs font-medium ${
                          asset.category === "Logo"
                            ? "bg-zinc-800 text-zinc-300"
                            : asset.category === "Panorama"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : asset.category === "Texture"
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-zinc-300">
                      {asset.filePath}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-zinc-400">
                      {asset.lineNumbers.map((num) => `L${num}`).join(", ")}
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-amber-300">
                      {asset.referencedPath}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold ${
                          asset.severity === "high"
                            ? "text-red-500"
                            : asset.severity === "medium"
                            ? "text-amber-500"
                            : "text-zinc-500"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            asset.severity === "high"
                              ? "bg-red-500 animate-ping"
                              : asset.severity === "medium"
                              ? "bg-amber-500"
                              : "bg-zinc-500"
                          }`}
                        ></span>
                        {asset.severity.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-zinc-400 text-xs leading-relaxed max-w-sm">
                      {asset.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations / Next Steps */}
        <section className="mt-12 bg-emerald-950/20 border border-emerald-900/30 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-display font-bold text-emerald-400 mb-3">
            Rekomendasi Tindak Lanjut
          </h2>
          <ul className="space-y-3.5 text-zinc-300 text-sm list-disc pl-5">
            <li>
              <strong>Konversi Gambar</strong>: Untuk mengoptimalkan kecepatan akses situs, harap konversi semua gambar format PNG/JPG baru ke format <code className="text-emerald-400 bg-zinc-900/50 px-1 py-0.5 rounded font-mono text-xs">.webp</code> sebelum diunggah.
            </li>
            <li>
              <strong>Folder Panorama 360°</strong>: Letakkan file panorama tipe subsidi langsung di folder <code className="text-emerald-400 bg-zinc-900/50 px-1 py-0.5 rounded font-mono text-xs">public/panorama/subsidi/</code> sesuai nama berkas rujukan (misal: <code className="text-amber-400 font-mono text-xs">scene_74.jpg</code>).
            </li>
            <li>
              <strong>Texture File</strong>: Untuk komponen interaktif 3D canvas, unggah file <code className="text-amber-400 font-mono text-xs">halaman-depan.jpg</code> and <code className="text-amber-400 font-mono text-xs">ruang-tamu.jpg</code> langsung ke akar folder <code className="text-emerald-400 bg-zinc-900/50 px-1 py-0.5 rounded font-mono text-xs">public/</code>.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
