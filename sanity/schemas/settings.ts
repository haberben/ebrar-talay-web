export default {
  name: 'settings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Numarası',
      type: 'string',
      description: 'Başına 90 ekleyerek yazın (Örn: 90532...)'
    },
    {
      name: 'whatsappMessage',
      title: 'Hazır WhatsApp Mesajı',
      type: 'text',
      description: 'Kullanıcı butona bastığında size gelecek hazır mesaj.'
    },
    {
      name: 'seoTitle',
      title: 'Ana SEO Başlığı',
      type: 'string'
    },
    {
      name: 'seoDescription',
      title: 'Meta Açıklaması',
      type: 'text'
    }
  ]
}