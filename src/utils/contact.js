import { contactInfo, strings } from '../i18n/pt-BR';

// Monta a URL do WhatsApp com mensagem opcional pré-preenchida.
export function whatsappUrl(message = strings.contact.whatsappMessage) {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

// URL do Google Maps para a localização do empreendimento.
export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactInfo.mapsQuery
  )}`;
}

// URL para embutir o mapa (iframe) — não requer chave de API.
export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    contactInfo.mapsQuery
  )}&z=14&output=embed`;
}

// Telefone como link tel:
export function telUrl() {
  return `tel:+${contactInfo.whatsappNumber}`;
}
