// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Error {}
  // interface Locals {}
  // interface PageData {}
  // interface Platform {}
}

declare namespace PalyzambranoDotCom {
  interface BlogPost {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    date: Date;
    lang: string;
    preview_image_url: string;
  }

  interface ProjectItem {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    date: Date;
    lang: string;
    preview_image_url: string;
    favorite: boolean;
  }
}
