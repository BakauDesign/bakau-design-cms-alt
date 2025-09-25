import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAlurKerja extends Struct.ComponentSchema {
  collectionName: 'components_blocks_alur_kerjas';
  info: {
    displayName: 'Alur Kerja';
    icon: 'dashboard';
  };
  attributes: {
    deskripsi: Schema.Attribute.Text;
    nama: Schema.Attribute.String;
    nomor: Schema.Attribute.Integer;
    penanda: Schema.Attribute.Component<'blocks.penanda', true>;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    judul: Schema.Attribute.String;
    link: Schema.Attribute.Text;
  };
}

export interface BlocksInformasiAset extends Struct.ComponentSchema {
  collectionName: 'components_blocks_informasi_asets';
  info: {
    displayName: 'Informasi Aset';
    icon: 'file';
  };
  attributes: {
    kompatibel: Schema.Attribute.String;
    lisensi: Schema.Attribute.String;
    pembuat: Schema.Attribute.String;
    rilis: Schema.Attribute.Date;
  };
}

export interface BlocksKonten extends Struct.ComponentSchema {
  collectionName: 'components_blocks_kontens';
  info: {
    displayName: 'Konten';
    icon: 'file';
  };
  attributes: {
    judul: Schema.Attribute.String;
    judul_pendukung: Schema.Attribute.String;
  };
}

export interface BlocksLayanan extends Struct.ComponentSchema {
  collectionName: 'components_blocks_layanans';
  info: {
    displayName: 'Layanan';
    icon: 'dashboard';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    deskripsi: Schema.Attribute.Text & Schema.Attribute.Required;
    nama: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlocksPenanda extends Struct.ComponentSchema {
  collectionName: 'components_blocks_penandas';
  info: {
    displayName: 'Penanda';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BlocksVisiDanMisi extends Struct.ComponentSchema {
  collectionName: 'components_blocks_visi_dan_misis';
  info: {
    displayName: 'Visi dan Misi';
    icon: 'quote';
  };
  attributes: {
    konten_misi: Schema.Attribute.Text;
    konten_visi: Schema.Attribute.Text;
    label_misi: Schema.Attribute.String;
    label_visi: Schema.Attribute.String;
  };
}

export interface NavigationsLink extends Struct.ComponentSchema {
  collectionName: 'components_navigations_links';
  info: {
    displayName: 'Link';
    icon: 'hashtag';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationsMenuFooter extends Struct.ComponentSchema {
  collectionName: 'components_navigations_menu_footers';
  info: {
    displayName: 'Menu Footer';
    icon: 'bulletList';
  };
  attributes: {
    nama: Schema.Attribute.String & Schema.Attribute.Required;
    sub_menu: Schema.Attribute.Component<'navigations.link', true>;
  };
}

export interface SectionsAlurKerjaKami extends Struct.ComponentSchema {
  collectionName: 'components_sections_alur_kerja_kamis';
  info: {
    displayName: 'Alur Kerja Kami';
    icon: 'apps';
  };
  attributes: {
    daftar_alur_kerja: Schema.Attribute.Component<'blocks.alur-kerja', true>;
    konten: Schema.Attribute.Component<'blocks.konten', false>;
  };
}

export interface SectionsLayananKami extends Struct.ComponentSchema {
  collectionName: 'components_sections_layanan_kamis';
  info: {
    displayName: 'Layanan Kami';
    icon: 'dashboard';
  };
  attributes: {
    daftar_layanan: Schema.Attribute.Component<'blocks.layanan', true>;
    konten: Schema.Attribute.Component<'blocks.konten', false>;
  };
}

export interface SectionsTentangKami extends Struct.ComponentSchema {
  collectionName: 'components_sections_tentang_kamis';
  info: {
    displayName: 'Tentang Kami';
    icon: 'file';
  };
  attributes: {
    konten: Schema.Attribute.Component<'blocks.konten', false>;
    visi_dan_misi: Schema.Attribute.Component<'blocks.visi-dan-misi', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.alur-kerja': BlocksAlurKerja;
      'blocks.cta': BlocksCta;
      'blocks.informasi-aset': BlocksInformasiAset;
      'blocks.konten': BlocksKonten;
      'blocks.layanan': BlocksLayanan;
      'blocks.penanda': BlocksPenanda;
      'blocks.visi-dan-misi': BlocksVisiDanMisi;
      'navigations.link': NavigationsLink;
      'navigations.menu-footer': NavigationsMenuFooter;
      'sections.alur-kerja-kami': SectionsAlurKerjaKami;
      'sections.layanan-kami': SectionsLayananKami;
      'sections.tentang-kami': SectionsTentangKami;
    }
  }
}
