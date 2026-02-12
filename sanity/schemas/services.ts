export default {
  name: 'service',
  title: 'Hizmetler',
  type: 'document',
  fields: [
    { name: 'title', title: 'Hizmet Adı', type: 'string' },
    { name: 'slug', title: 'Sayfa Linki', type: 'slug', options: { source: 'title' } },
    { name: 'description', title: 'Kısa Açıklama', type: 'text' },
    { name: 'image', title: 'Hizmet Görseli', type: 'image' },
    { name: 'content', title: 'Detaylı İçerik', type: 'array', of: [{ type: 'block' }] }
  ]
}