import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFotografiaDePortafolio extends Struct.ComponentSchema {
  collectionName: 'components_shared_fotografia_de_portafolios';
  info: {
    displayName: 'Fotograf\u00EDa de Portafolio';
    icon: 'landscape';
  };
  attributes: {
    item: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Multimedia';
    icon: 'landscape';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Cita';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    message: Schema.Attribute.Text;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Texto';
    icon: 'write';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSubtitulo extends Struct.ComponentSchema {
  collectionName: 'components_shared_subtitulos';
  info: {
    displayName: 'Subt\u00EDtulo';
    icon: 'italic';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedVideoDePortafolio extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_de_portafolios';
  info: {
    displayName: 'Video de Portafolio';
    icon: 'play';
  };
  attributes: {
    item: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    linkToPost: Schema.Attribute.String;
    postPlatform: Schema.Attribute.Enumeration<
      ['Instagram', 'TikTok', 'YouTube', 'Facebook', 'Otro']
    >;
    thumbnail: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.fotografia-de-portafolio': SharedFotografiaDePortafolio;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.subtitulo': SharedSubtitulo;
      'shared.video-de-portafolio': SharedVideoDePortafolio;
    }
  }
}
