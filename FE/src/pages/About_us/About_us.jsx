import React from 'react';
import images from '/assets/images/about.png';

const About_us = () => {
  return (
    <div className=' flex justify-center items-center'>
      <section className="pt-10 pb-10">
        <div className="container mx-auto px-4 sm:px-8 xl:px-0">
          <div >
            <div className="container  mx-auto">
              <img src={images} alt="about" className="w-full" />
            </div>
            <div className="container mx-auto">
               <h1 className="font-bold lg:text-[40px] xl:text-[40px] md:text-[40px] sm:text-[30px] text-dark mb-5">Kesehatan Mental adalah Kekayaan</h1>
              <p className="text-lg text-gray-700 mb-4">
                Di InnerGlow, kami percaya bahwa kesehatan mental sama pentingnya dengan kesehatan fisik. Dalam dunia yang serba cepat ini, mudah untuk mengabaikan aspek emosional dan psikologis dari kesejahteraan kita. Misi kami adalah untuk mempromosikan kesejahteraan mental dan menciptakan komunitas yang mendukung di mana individu dapat memprioritaskan kesehatan mental mereka.
              </p>
              <h2 className="font-semibold text-xl mb-2">Visi Kami</h2>
              <p className="text-lg text-gray-700 mb-4">
                Kami membayangkan dunia di mana setiap orang menyadari nilai kesehatan mental dan merasa diberdayakan untuk mencari bantuan. Tujuan kami adalah memecahkan stigma yang mengelilingi masalah kesehatan mental dan mendorong percakapan terbuka yang membangun pemahaman dan kasih sayang.
              </p>
              <h2 className="font-semibold text-xl mb-2">Layanan Kami</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                  <strong>Konseling Pribadi:</strong> Para profesional berlisensi kami menyediakan sesi konseling satu-satu yang disesuaikan dengan kebutuhan unik Anda, membantu Anda mengatasi tantangan hidup.
                </li>
                <li>
                  <strong>Workshop & Seminar:</strong> Kami mengadakan workshop dan seminar secara rutin yang berfokus pada kesadaran kesehatan mental, strategi coping, dan teknik perawatan diri.
                </li>
                <li>
                  <strong>Dukungan Komunitas:</strong> Bergabunglah dengan acara komunitas dan kelompok dukungan kami untuk terhubung dengan orang-orang yang memiliki pengalaman serupa dan membangun rasa kebersamaan.
                </li>
              </ul>
              <h2 className="font-semibold text-xl mb-2">Mengapa Memilih Kami?</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>
                  <strong>Profesional Berpengalaman:</strong> Tim kami terdiri dari terapis dan konselor yang berkualitas dengan pengalaman bertahun-tahun dalam perawatan kesehatan mental.
                </li>
                <li>
                  <strong>Pendekatan Holistik:</strong> Kami percaya dalam menangani keseluruhan individu, tidak hanya mengatasi gejala tetapi juga masalah mendasar yang mempengaruhi kesehatan mental.
                </li>
                <li>
                  <strong>Lingkungan yang Aman:</strong> Di InnerGlow, kami menyediakan ruang yang aman dan ramah di mana Anda dapat merasa nyaman berbagi pikiran dan perasaan Anda.
                </li>
              </ul>
              <h2 className="font-semibold text-xl mb-2">Bergabunglah Bersama Kami</h2>
              <p className="text-lg text-gray-700">
                Ambil langkah pertama menuju pikiran yang lebih sehat dan kehidupan yang lebih bahagia. Bersama-sama, kita dapat menjadikan kesehatan mental sebagai prioritas karena kesehatan mental adalah kekayaan. Hubungi kami hari ini untuk mempelajari lebih lanjut tentang layanan kami dan bagaimana kami dapat mendukung Anda dalam perjalanan menuju kesejahteraan!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;
