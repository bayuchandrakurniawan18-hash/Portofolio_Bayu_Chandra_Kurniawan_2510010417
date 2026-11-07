/* =========================================================
   Interaksi katalog unit usaha HMP-TI ITS
   Kontak resmi HMP-TI ITS berdasarkan informasi dari kakak tingkat.
   Format WhatsApp: 628xxxxxxxxxx (tanpa +, spasi, atau strip).
   ========================================================= */

// DATA KATALOG berdasarkan informasi kakak tingkat dan foto daftar harga.
const unitData = {
  fnb: {
    kicker: "UNIT 01 · FOOD & BEVERAGE",
    title: "F&B (Food & Beverage)",
    description: "Pilihan makanan dan minuman untuk kebutuhan mahasiswa di lingkungan ITS.",
    sections: [
      { title: "Daftar harga minuman", type: "table", rows: [
        ["Produk", "Harga"],
        ["Ichitan", "Rp9.000"],
        ["Good Day", "Rp7.000"],
        ["Prof", "Rp4.000"],
        ["Kopi ABC", "Rp4.000"],
        ["Milky", "Rp4.000"],
        ["Floridina", "Rp5.000"],
        ["Teh Pucuk", "Rp5.000"],
        ["Golda", "Rp4.000"],
        ["Ultramilk", "Rp9.000"],
        ["Pocari", "Rp7.000"]
      ]},
      { title: "Daftar harga makanan & kebutuhan lainnya", type: "table", rows: [
        ["Produk", "Harga"],
        ["Nextar", "Rp3.000"],
        ["Choco Pie", "Rp3.000"],
        ["Kalpa", "Rp3.000"],
        ["Beng-Beng", "Rp3.000"],
        ["Siip", "Rp1.000"],
        ["Triks", "Rp1.000"],
        ["Tisu besar", "Rp4.000"],
        ["Tisu kecil", "Rp2.000"],
        ["Tip-Ex merah", "Rp5.000"],
        ["Tip-Ex biru", "Rp7.000"],
        ["Peniti", "Rp2.000"],
        ["Pulpen", "Rp3.000"]
      ]},
      { title: "Cara pembelian", text: "Pembelian dilakukan dengan datang langsung ke ITS, memilih makanan atau minuman yang diinginkan, lalu melakukan pembayaran. Jika berhalangan datang, pelanggan dapat menitip pembelian kepada teman." },
      { title: "Catatan", text: "Harga mengikuti daftar pada foto papan informasi IT Solution. Ketersediaan produk dapat ditanyakan langsung kepada pengelola." }
    ],
    whatsapp: "62895352585866"
  },
  print: {
    kicker: "UNIT 02 · PRINT & DOCUMENT",
    title: "Percetakan & Dokumen",
    description: "Layanan print, fotokopi, dan jilid untuk membantu kebutuhan dokumen mahasiswa.",
    sections: [
      { title: "Daftar layanan & harga", type: "table", rows: [
        ["Layanan", "Harga"],
        ["Print / FC hitam putih", "Rp500"],
        ["Print / FC warna", "Rp1.000"],
        ["Print / FC amplop", "Rp1.000"],
        ["Jilid", "Rp2.000"],
        ["Print stiker", "Rp3.000"],
        ["Print / FC sertifikat", "Rp3.000"]
      ]},
      { title: "Cara pemesanan", text: "Scan nomor WhatsApp ITS yang tersedia, lalu kirimkan file dokumen yang ingin dicetak melalui WhatsApp. Pengelola akan menerima file tersebut dan memprosesnya untuk dicetak." },
      { title: "Kontak percetakan", text: "WhatsApp resmi ITS, dan Pastikan file yang dikirim sudah benar dan dapat dibuka." }
    ],
    whatsapp: "62895352585866"
  },
  consign: {
    kicker: "UNIT 03 · CONSIGNMENT",
    title: "Konsinyasi & Kerja Sama",
    description: "HMP-TI ITS membuka kesempatan kerja sama bagi mahasiswa yang memiliki produk atau jasa.",
    sections: [
      { title: "1. Kerja sama titip jual", text: "Kerja sama titip merupakan bentuk kerja sama umum yang tidak menggunakan surat resmi. Mitra dapat menitipkan barang atau jasa di HMP-TI ITS untuk dijual. Harga produk dapat dinaikkan sekitar Rp500–Rp3.000 dari harga awal; selisih kenaikan tersebut menjadi bagian untuk ITS ketika produk terjual." },
      { title: "2. Kerja sama dengan surat resmi", text: "Selain sistem titip, tersedia kerja sama menggunakan surat resmi. Detail persyaratan dan prosesnya dapat dikonfirmasi langsung kepada pengelola HMP-TI ITS." },
      { title: "Cara memulai kerja sama", text: "Hubungi pengelola untuk menyampaikan jenis barang atau jasa yang ingin ditawarkan dan menentukan bentuk kerja sama yang sesuai." }
    ],
    whatsapp: "62895352585866"
  },

creative: {
    kicker: "UNIT 04 · CREATIVE SERVICES",
    title: "Jasa Kreatif",
    description: "Layanan kreatif yang dapat mendukung kebutuhan konten dan media HMP-TI ITS.",

    sections: [
        {
            title: "Informasi layanan",
            text: "Unit kreatif menyediakan jasa yang digunakan untuk mengisi konten Instagram HMP-TI ITS. Jenis kebutuhan dan ruang lingkup pekerjaan dapat dibicarakan dengan pengelola."
        },
        {
            title: "Portofolio",
            type: "link",
            text: "Portofolio hasil jasa kreatif dapat dilihat melalui Instagram resmi ",
            linkText: "@its_hmpti",
            url: "https://www.instagram.com/its_hmpti/"
        },
        {
            title: "Daftar harga",
            text: "Belum tersedia daftar harga tetap. Biaya jasa menyesuaikan kebutuhan atau pekerjaan yang diminta, sehingga sebaiknya dikonfirmasi terlebih dahulu kepada pengelola."
        },
        {
            title: "Kontak",
            type: "contact",
            instagram: "https://www.instagram.com/its_hmpti/",
            instagramText: "@its_hmpti",
            whatsapp: "https://wa.me/62895352585866",
            whatsappText: "0895352585866"
        }
    ],

    whatsapp: "62895352585866"
},

};

// Kontak resmi ITS yang diberikan: WhatsApp 0895352585866 dan Instagram its_hmpti.
const siteContacts = {
  generalUrl: "https://wa.me/62895352585866",
  instagramUrl: "https://www.instagram.com/its_hmpti/"
};

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const modal = document.querySelector("#unit-modal");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const modalDescription = document.querySelector("#modal-description");
const modalContent = document.querySelector("#modal-content");
const modalContact = document.querySelector("#modal-contact");
let lastFocusedElement = null;

document.querySelector("#year").textContent = new Date().getFullYear();

// Menu hamburger
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
  menuToggle.classList.toggle("is-open", isOpen);
});

function closeMenu() {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Buka menu navigasi");
  menuToggle.classList.remove("is-open");
}

document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Smooth scroll untuk semua tautan internal
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Render konten detail dengan aman menggunakan textContent.
function renderSection(section) {
  const block = document.createElement("section");
  block.className = "detail-block";
  const heading = document.createElement("h3");
  heading.textContent = section.title;
  block.appendChild(heading);

  if (section.type === "table") {
    const table = document.createElement("table");
    table.className = "detail-table";
    const tbody = document.createElement("tbody");
    section.rows.forEach((row, rowIndex) => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const cellElement = document.createElement(rowIndex === 0 ? "th" : "td");
        cellElement.textContent = cell;
        tr.appendChild(cellElement);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    block.appendChild(table);
  } else if (section.type === "list") {
    const list = document.createElement("ul");
    section.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    block.appendChild(list);
  } else if (section.type === "link") {

    const paragraph = document.createElement("p");

    paragraph.textContent = section.text;

    const instagramLink = document.createElement("a");
    instagramLink.href = section.url;
    instagramLink.textContent = section.linkText;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener noreferrer";

    instagramLink.style.color = "#174ea6";
    instagramLink.style.fontWeight = "700";
    instagramLink.style.textDecoration = "underline";
    instagramLink.style.cursor = "pointer";

    paragraph.appendChild(instagramLink);
    block.appendChild(paragraph);
    } else if (section.type === "contact") {
    const paragraph = document.createElement("p");

    paragraph.appendChild(
        document.createTextNode("Instagram: ")
    );

    const instagramLink = document.createElement("a");
    instagramLink.href = section.instagram;
    instagramLink.textContent = section.instagramText;
    instagramLink.target = "_blank";
    instagramLink.rel = "noopener noreferrer";

    paragraph.appendChild(instagramLink);

    paragraph.appendChild(
        document.createTextNode(". WhatsApp resmi ITS: ")
    );

    const whatsappLink = document.createElement("a");
    whatsappLink.href = section.whatsapp;
    whatsappLink.textContent = section.whatsappText;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";

    paragraph.appendChild(whatsappLink);

    paragraph.appendChild(
        document.createTextNode(".")
    );

    block.appendChild(paragraph);

} else {
    const paragraph = document.createElement("p");
    paragraph.textContent = section.text;
    block.appendChild(paragraph);
}
  return block;
}

function openUnitModal(unitKey) {
  const unit = unitData[unitKey];
  if (!unit) return;

  lastFocusedElement = document.activeElement;
  modalKicker.textContent = unit.kicker;
  modalTitle.textContent = unit.title;
  modalDescription.textContent = unit.description;
  modalContent.replaceChildren(...unit.sections.map(renderSection));

  if (unit.whatsapp) {
    modalContact.href = `https://wa.me/${unit.whatsapp}`;
    modalContact.hidden = false;
    modalContact.textContent = "Pesan via WhatsApp ↗";
  } else {
    modalContact.removeAttribute("href");
    modalContact.hidden = true;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeUnitModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll(".detail-button").forEach(button => {
  button.addEventListener("click", () => openUnitModal(button.dataset.unit));
});

document.querySelectorAll("[data-open-unit]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    openUnitModal(link.dataset.openUnit);
  });
});

document.querySelectorAll("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeUnitModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeUnitModal();
});

// Tautan kontak/sosial: nonaktif sampai URL resmi diisi.
document.querySelectorAll("[data-contact-link]").forEach(link => {
  if (siteContacts.generalUrl) {
    link.href = siteContacts.generalUrl;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Kontak WhatsApp ITS: 0895352585866.");
    });
  }
});
document.querySelectorAll("[data-social-link]").forEach(link => {
  if (siteContacts.instagramUrl) {
    link.href = siteContacts.instagramUrl;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("Instagram resmi HMP-TI ITS: @its_hmpti.");
    });
  }
});

// Efek header, tombol kembali ke atas, dan animasi saat scroll.
function handleScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
  backToTop.classList.toggle("visible", window.scrollY > 450);
}
window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
}
